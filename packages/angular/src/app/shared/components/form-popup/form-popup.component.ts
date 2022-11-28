import {
    Component,
    NgModule,
    OnDestroy,
    OnInit,
    Input,
    ViewChild,
  } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import {
    DxButtonModule,
    DxToolbarModule,
    DxPopupModule,
    DxValidationGroupModule,
    DxValidationGroupComponent,
  } from 'devextreme-angular';
  import { ScreenService } from '../../../shared/services';
  import { Subscription } from 'rxjs';
  
import validationEngine from 'devextreme/ui/validation_engine';

  @Component({
    selector: 'form-popup',
    templateUrl: './form-popup.component.html',
    providers: [],
  })
  
  export class FormPopupComponent implements OnInit, OnDestroy {
    @ViewChild('validationGroup', { static: true }) validationGroup: DxValidationGroupComponent;

    @Input() titleText = '';

    popupVisible = false;
  
    popupFullScreen = false;
  
    screenSubscription: Subscription;
  
    constructor(private screen: ScreenService) { }
  
    ngOnInit(): void {
      this.popupFullScreen = this.screen.isSmallScreen();
      this.screenSubscription = this.screen.changed.subscribe(() => this.updatePopupByScreenSize());
    }

    ngOnDestroy(): void {
      this.screenSubscription.unsubscribe();
    }
  
    updatePopupByScreenSize() {
      this.popupFullScreen = this.screen.isSmallScreen();
    }
  
    closePopup = () => {
      this.popupVisible = false;
    }

    onSaveClick = () => {
      if(!validationEngine.validateGroup(this.validationGroup.instance).isValid) return;
  
      this.popupVisible = false;
    }
  }
  
  @NgModule({
    imports: [
      DxButtonModule,
      DxToolbarModule,
      DxPopupModule,
      DxValidationGroupModule,
  
      CommonModule,
    ],
    declarations: [FormPopupComponent],
    exports: [FormPopupComponent],
  })
  export class FormPopupModule { }
  