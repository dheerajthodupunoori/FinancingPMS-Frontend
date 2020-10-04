import { Component } from "@angular/core";
import { LoginService } from "./Services/login.service";
import { slideInAnimation } from "./app.animation";
import {
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
  Router,
} from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = "FinancingPMS";

  public loginStatus: boolean;

  public loading: boolean = true;

  constructor(private _router: Router) {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // console.log(event);
        this.loading = true;
      }
      if (
        event instanceof NavigationCancel ||
        event instanceof NavigationEnd ||
        event instanceof NavigationError
      ) {
        // console.log(event);
        this.loading = false;
      }
    });
  }
  ngOnInit() {
    // this.loginStatus = Boolean(localStorage.getItem("loginStatus"));
    // this._loginService.loginStatusSubject.subscribe((data) => {
    //   console.log("Login status subject in app component ", data);
    //   this.loginStatus = Boolean(data);
    // });
  }

  // Logout() {
  //   // this._loginService.updateLoginStatus("false");
  //   sessionStorage.clear();
  // }
}
