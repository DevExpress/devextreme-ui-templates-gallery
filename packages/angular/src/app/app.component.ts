import { Component, HostBinding, OnDestroy, } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import Popup, { Properties } from "devextreme/ui/popup";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter((cl) => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) { 
    Popup.defaultOptions<Properties>({
      device: { deviceType: "phone" },
      options: {
          fullScreen: true,
      },
    });
  }

  isAuthenticated() {
    return this.authService.loggedIn;
  }

  ngOnDestroy(): void {
    this.screen.breakpointSubscription.unsubscribe();
  }
}
