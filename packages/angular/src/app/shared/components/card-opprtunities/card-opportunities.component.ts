import {
    Component, Input, NgModule, OnInit, SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    DxButtonModule,
    DxLoadPanelModule,
    DxToastModule,
} from 'devextreme-angular';
import { Activities } from 'src/app/shared/types/activities';

@Component({
    selector: 'card-opportunities',
    templateUrl: './card-opportunities.component.html',
    styleUrls: ['./card-opportunities.component.scss'],
})
export class CardOpportunitiesComponent implements OnInit {
    @Input() active: Activities;

    @Input() closed: Activities;

    messageToast: string;

    isLoading: boolean;

    isVisibleToast: boolean;

    constructor() {
        this.isLoading = true;
        this.isVisibleToast = false;
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        const isLoadActive = changes.active?.currentValue === undefined;
        const isLoadClosed = changes.closed?.currentValue === undefined;

        this.isLoading = isLoadActive || isLoadClosed;
    }

    addOpportunity = () => {
        this.messageToast = 'Add opportunity event';
        this.isVisibleToast = true;
    };
}

@NgModule({
    imports: [
        DxButtonModule,
        DxLoadPanelModule,
        DxToastModule,

        CommonModule,
    ],
    declarations: [CardOpportunitiesComponent],
    exports: [CardOpportunitiesComponent],
})
export class CardOpportunitiesModule { }
