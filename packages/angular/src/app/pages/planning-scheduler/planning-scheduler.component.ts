import {
  Component, OnInit, NgModule, ViewChild
} from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxSchedulerComponent, DxSchedulerModule } from 'devextreme-angular/ui/scheduler';
import { DxCalendarModule } from 'devextreme-angular/ui/calendar';
import { Task } from 'src/app/types/task';
import { DataService, ScreenService } from 'src/app/services';
import { CalendarListModule } from 'src/app/components/library/calendar-list/calendar-list.component';
import { LeftSidePanelModule } from 'src/app/components/library/left-side-panel/left-side-panel.component';
import { RightSidePanelModule } from 'src/app/components/library/right-side-panel/right-side-panel.component';
import { AppointmentTooltipModule } from "../../components/library/appointment-tooltip/appointment-tooltip.component";
import { AgendaModule } from "../../components/library/agenda/agenda.component";

@Component({
  templateUrl: './planning-scheduler.component.html',
  styleUrls: ['./planning-scheduler.component.scss'],
  providers: [DataService],
})
export class PlanningSchedulerComponent implements OnInit {
  @ViewChild('schedulerRef', { static: false }) schedulerRef: DxSchedulerComponent;
  tasks: DataSource<Task> = new DataSource([]);

  currentDate = new Date();

  selectedDate = new Date();

  selectedDateTasks: Task[] = [];

  currentView = 'workWeek';

  isRightPanelOpen = false;

  listDataSource = [];

  resourcesList = [];

  constructor(private service: DataService, protected screen: ScreenService) {
    this.service.getDefaultListDS().subscribe(
   (data) => {
     this.listDataSource = data;
     this.resourcesList = data.reduce((res: Record<string,any>[], calendarList) => res.concat(calendarList.items), []);
      });
  }

  ngOnInit(): void {
    this.service.getSchedulerTasks().subscribe((data) => {
      this.tasks = new DataSource(data);
      this.repaintScheduler();
    })
  }

  openRightPanelOpen() {
    this.isRightPanelOpen = true;
    this.repaintScheduler();
  }

  onSetDate = (date) => {
    this.currentDate = date;
  };

  onAppointmentClick = () => {
  };

  onCellClick = (event) => {
    const {startDate, endDate} = event.cellData;

    if (this.currentView === 'month') {
      this.selectedDate = startDate;
      this.selectedDateTasks = this.tasks.items().filter((task) => task.startDate >= startDate && task.startDate < endDate);
      if(this.selectedDateTasks.length > 1) {
        this.openRightPanelOpen();
      }
    }
  };

  calendarListChanged(selectedCalendars) {
    const filters = selectedCalendars
      .flatMap((calendar) => [['calendarId', '=', calendar.id], 'or']).slice(0, -1);

    this.tasks?.filter(filters.length > 0 ? filters : null);

    this.tasks?.load();
  }

  repaintScheduler() {
    setTimeout(() => this.schedulerRef?.instance.repaint(), 0);
  }

  toggleRightPanelOpen(event: boolean) {
    this.isRightPanelOpen = event;
    this.repaintScheduler();
  }

  showAppointmentCreationForm() {
    this.schedulerRef?.instance.showAppointmentPopup();
  }

}

@NgModule({
  imports: [
    DxCalendarModule,
    DxButtonModule,
    DxSchedulerModule,
    CommonModule,
    AppointmentTooltipModule,
    CalendarListModule,
    LeftSidePanelModule,
    RightSidePanelModule,
    AgendaModule,
  ],
  providers: [],
  exports: [],
  declarations: [PlanningSchedulerComponent],
})
export class PlanningSchedulerModule { }
