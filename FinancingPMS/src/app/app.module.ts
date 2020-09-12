import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from "./auth-guards/authguard";
import { NavbarComponent } from "./navbar/navbar.component";
import { ConfirmPassword } from "./validators/password-confirmpwd-validator";
import { AadhaarValidator } from "./validators/aadhar-validator";
import { EmailValidator } from "./validators/email-validator";
import { DOBValidator } from "./validators/dob-validator";
import { RegistrationLoginModule } from "../app/registration-login/registration-login.module";

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingPageComponent,
    NavbarComponent,
    ConfirmPassword,
    AadhaarValidator,
    EmailValidator,
    DOBValidator,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    RegistrationLoginModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["http://localhost:5000/"],
        blacklistedRoutes: [],
      },
    }),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
