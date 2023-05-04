import {
  Component,
  NgModule,
  Output,
  Input,
  EventEmitter, HostBinding,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxButtonModule,
} from 'devextreme-angular';
import { ClickEvent as ButtonClickEvent } from 'devextreme/ui/button';
import {DataService, ScreenService} from 'src/app/services';

@Component({
  selector: 'right-side-panel',
  templateUrl: './right-side-panel.component.html',
  styleUrls: ['./right-side-panel.component.scss'],
  providers: [DataService],
})
export class RightSidePanelComponent {
  @Input() isOpened = false;

  @Input() title = '';

  @Output() openedChange = new EventEmitter<boolean>();

  @HostBinding('class.overlapping') get overlapping() { return !this.isLarge; };

  @HostBinding('class.open') get open() { return this.isOpened; };

  isLarge = this.screen.sizes['screen-large'];

  constructor(protected screen: ScreenService) {
    screen.screenChanged.subscribe(({isLarge, isXLarge}) => {
      this.isLarge = isLarge || isXLarge;
    });
  }


  toggleOpen = () => {
    this.isOpened = !this.isOpened;
    this.openedChange.emit(this.isOpened);
  };

  accordionTitleClick = (e: ButtonClickEvent) => {
    e.event.stopPropagation();
  };

}

@NgModule({
  imports: [
    DxButtonModule,
    CommonModule,
  ],
  declarations: [RightSidePanelComponent],
  exports: [RightSidePanelComponent],
})
export class RightSidePanelModule { }
