import React, { useState, useCallback, useEffect } from 'react';
import TextArea from 'devextreme-react/text-area';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import formatDate from '../../utils/format-date';
import { Notes, Note } from '../../shared/types/notes';
import './CardNotes.scss';

const Card = ({ note }: { note: Note }) => {
    return (
        <div className="note dx-card">
            <div className="note-title">
                <div>{formatDate(note.date)} - {note.manager}</div>
                <div>
                    <Button icon="overflow"></Button>
                </div>
            </div>
            <div className="note-text">{note.text}</div>
        </div>
    )
};

const CardNotes = ({ items, user }: { items: Notes | undefined, user: string | undefined }) => {
    const [noteText, setNoteText] = useState('');
    const [data, setData] = useState(items);
    const onNoteTextChanged = useCallback((e) => {
        setNoteText(e.value);
    }, []);
    useEffect(() => {
        setData(items);
    }, [items]);
    const send = () => {
        if(noteText === '' || !data || !user) {
            return;
        }
        setData(data.concat([{ manager: user, date: new Date(), text: noteText }]));
        setNoteText('');
    };
    const cancel = useCallback(() => {
        setNoteText('');
    }, []);
    return (
        <div className="notes">
            <div className="input-content">
                <TextArea
                    label="New Note"
                    stylingMode="outlined"
                    value={noteText}
                    valueChangeEvent='keyup'
                    onValueChanged={onNoteTextChanged}
                ></TextArea>
                <Toolbar>
                    <Item
                        location="after"
                        widget="dxButton"
                        options={{
                            text: 'Send',
                            stylingMode: 'outlined',
                            type: 'default',
                            onClick: send
                        }}
                    />
                    <Item
                        location="after"
                        widget="dxButton"
                        options={{ text: 'Cancel', onClick: cancel }}
                    />
                </Toolbar>
            </div>

            <div className="notes-content">
                {data?.map((note, index) =>
                    <Card key={index} note={note}></Card>
                )}
            </div>
        </div>
    )
};

export default CardNotes;