import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FirmRegistrationComponent } from "./firm-registration/firm-registration.component";
import { LoginComponent } from "./login/login.component";
import { FirmAdditionalDetailsComponent } from "./firm-additional-details/firm-additional-details.component";
import { CustomerLoginComponent } from "./customer-login/customer-login.component";
import { CustomerRegistrationComponent } from "./customer-registration/customer-registration.component";
import { CustomerAdditionalDetailsComponent } from "./customer-additional-details/customer-additional-details.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FirmResolver } from "./route-resolvers/firms-list-resolver.service";
// import { ConfirmPassword } from "../validators/password-confirmpwd-validator";
import { UnsavedChangesGuard } from "../auth-guards/unsaved-changes.guard";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const registrationLoginModuleRoutes: Routes = [
  {
    path: "register-firm",
    component: FirmRegistrationComponent,
    canDeactivate: [UnsavedChangesGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "firm-additional-details/:firmId",
    component: FirmAdditionalDetailsComponent,
  },
  {
    path: "customer-login",
    component: CustomerLoginComponent,
    data: { customerLoginTitle: "Login to your Account" },
  },
  {
    path: "register-customer",
    component: CustomerRegistrationComponent,
    resolve: { resolvedFirmsList: FirmResolver },
  },
  {
    path: "customer-additional-details/:customerId",
    component: CustomerAdditionalDetailsComponent,
  },
];

@NgModule({
  declarations: [
    FirmRegistrationComponent,
    FirmAdditionalDetailsComponent,
    LoginComponent,
    CustomerLoginComponent,
    CustomerAdditionalDetailsComponent,
    CustomerRegistrationComponent,
    // ConfirmPassword,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      // positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
      maxOpened: 1,
      autoDismiss: true,
      enableHtml: true
    }), 
    BrowserAnimationsModule,
    RouterModule.forChild(registrationLoginModuleRoutes),
  ],
  providers: [UnsavedChangesGuard],
})
export class RegistrationLoginModule {}
