import React, { useState, useCallback, useEffect, useRef } from 'react';

import TextBox from 'devextreme-react/text-box';
import TextArea from 'devextreme-react/text-area';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import FileUploder from 'devextreme-react/file-uploader';
import ScrollView from 'devextreme-react/scroll-view';
import Validator, { RequiredRule } from 'devextreme-react/validator';
import ValidationGroup from 'devextreme-react/validation-group';

import { formatDate } from 'devextreme/localization';

import { Message, Messages } from '../../shared/types/card-messages';
import { createDefaultValidatorExtender } from '../../shared/utils/extendDefaultValidator';

import { Avatar } from '../avatar/Avatar';

import './CardMessages.scss';

const getText = (text: string, user: string) => {
  return text.replace('{username}', user);
};

const Card = ({ data, user }: { data: Message; user: string }) => (
  <div className='message-container'>
    <Avatar owner={data.manager} />
    <div className='message dx-card'>
      <div className='message-title'>
        <div>
          <div className='subject'>{data.subject}</div>
          <div>
            {formatDate(new Date(data.date), 'MM/dd/yyyy')} - {data.manager}
          </div>
        </div>
        <div>
          <Button icon='overflow' />
        </div>
      </div>
      <div className='message-text'>{getText(data.text, user)}</div>
    </div>
  </div>
);

export const CardMessages = ({ items, user, onMessagesCountChanged }: {
  items?: Messages; user?: string; onMessagesCountChanged: (count: number) => void
}) => {
  const [messages, setMessages] = useState(items);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const bypassRef = useRef(true);

  useEffect(() => {
    setMessages(items);
  }, [items]);

  const send = useCallback((e) => {
    bypassRef.current = false;
    if (!e.validationGroup.validate().isValid || !messages || !user) {
      return;
    }
    setMessages([...messages, { manager: user, date: new Date(), text: message, subject: title }]);
    setTitle('');
    setMessage('');
    onMessagesCountChanged(messages.length + 1);
    bypassRef.current = true;
  }, [message, title, messages, user, onMessagesCountChanged]);

  const onTitleChanged = useCallback((value) => {
    bypassRef.current = true;
    setTitle(value);
  }, []);

  const onMessageChanged = useCallback((value) => {
    bypassRef.current = true;
    setMessage(value);
  }, []);

  return (
    <ValidationGroup>
      <div className='messages'>
        <div className='input-messages'>
          <TextBox label='Subject' stylingMode='outlined' value={title} valueChangeEvent='keyup' onValueChange={onTitleChanged}>
            <Validator onInitialized={createDefaultValidatorExtender(bypassRef)}>
              <RequiredRule />
            </Validator>
          </TextBox>
          <TextArea label='Message' height={150} stylingMode='outlined' value={message} valueChangeEvent='keyup' onValueChange={onMessageChanged}>
            <Validator onInitialized={createDefaultValidatorExtender(bypassRef)}>
              <RequiredRule />
            </Validator>
          </TextArea>
          <Toolbar>
            <Item
              location='before'
            >
              <FileUploder className='file-uploader' labelText='' selectButtonText='Attach file' />
            </Item>
            <Item
              location='after'
              widget='dxButton'
              options={{
                text: 'Send',
                stylingMode: 'outlined',
                type: 'default',
                onClick: send,
              }}
            />
          </Toolbar>
        </div>
        <div className='messages-content'>
          <ScrollView>
            <div className='message-list'>
              {user && messages?.map((message, index) => (
                <Card key={index} data={message} user={user} />
              ))}
            </div>
          </ScrollView>
        </div>
      </div>
    </ValidationGroup>
  );
};
