import {
  Component, EventEmitter, Input, NgModule, Output, ViewChild,
} from '@angular/core';
import {
  DxCalendarModule,
  DxDropDownButtonModule,
  DxDropDownButtonComponent, DxDateBoxModule,
} from 'devextreme-angular';

import { ValueChangedEvent } from 'devextreme/ui/calendar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'form-item-date',
  template: `<dx-drop-down-button *ngIf="!value; else fieldTpl"
                                  icon="event"
                                  stylingMode="outlined"
                                  dropDownContentTemplate="dropDownContentTemplate"
                                  [text]="text"
                                  [dropDownOptions]="{ width: 'auto' }"
                                  [showArrowIcon]="false"
  >
    <div *dxTemplate="let data of 'dropDownContentTemplate'">
      <dx-calendar (onValueChanged)="onValueChanged($event)"></dx-calendar>
    </div>
  </dx-drop-down-button>

  <ng-template #fieldTpl>
    <dx-date-box [(value)]="value"
                 [readOnly]="!isEditing"
                 [name]="text"
                 [label]="label"
                 [elementAttr]="{class: 'form-editor'}"
                 [inputAttr]="{class: 'form-editor-input'}"
                 stylingMode="filled"
                 placeholder="MM/dd/y"
                 displayFormat="MM/dd/y"
    ></dx-date-box>
  </ng-template>`,
})
export class FormItemDateComponent {
  @ViewChild(DxDropDownButtonComponent) dropDownButtonComponent: DxDropDownButtonComponent;

  @Input() isEditing = false;

  @Input() text: string;

  @Input() label = '';

  @Input() value!: string | Date | number;

  @Output() valueChange: EventEmitter<string | Date | number> = new EventEmitter();

  onValueChanged = (e: ValueChangedEvent) => {
    const { value } = e;

    this.value = value;
    this.valueChange.emit(this.value);

    this.dropDownButtonComponent.instance.close();
  };
}

@NgModule({
  imports: [
    DxCalendarModule,
    DxDropDownButtonModule,
    DxDateBoxModule,
    CommonModule,
  ],
  providers: [],
  exports: [FormItemDateComponent],
  declarations: [FormItemDateComponent],
})
export class FormItemDateModule { }
