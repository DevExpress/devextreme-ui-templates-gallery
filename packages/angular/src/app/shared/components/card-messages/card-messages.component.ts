import { CommonModule } from '@angular/common';
import {
 Component, Input, NgModule, OnInit,
} from '@angular/core';
import {
  DxTextAreaModule,
  DxTextBoxModule,
  DxToolbarModule,
} from 'devextreme-angular';
import { Message, Messages } from 'src/app/shared/types/messages';

@Component({
  selector: 'card-messages',
  templateUrl: './card-messages.component.html',
  styleUrls: ['./card-messages.component.scss'],
})
export class CardMessagesComponent implements OnInit {
  @Input() user: string;

  @Input() items: Messages;

  messageTitle: string;

  messageText: string;

  defaultText = () => {
    this.messageTitle = '';
    this.messageText = '';
  };

  constructor() {
    this.defaultText();
  }

  getAvatarText(name: string) {
    return name.split(' ').map((name) => name[0]).join('');
  }

  setUserName(text: string) {
    return text.replace('{username}', this.user);
  }

  send = () => {
    if (this.messageText === '' || this.messageTitle === '') {
      return;
    }

    const newMessage: Message = {
      subject: this.messageTitle,
      text: this.messageText,
      manager: this.user,
      date: new Date(),
    };

    this.items.push(newMessage);

    this.defaultText();
  };

  ngOnInit(): void {
  }
}

@NgModule({
  imports: [
    DxTextAreaModule,
    DxTextBoxModule,
    DxToolbarModule,

    CommonModule,
  ],
  declarations: [CardMessagesComponent],
  exports: [CardMessagesComponent],
})
export class CardMessagesModule { }
