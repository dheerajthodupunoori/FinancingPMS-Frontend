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

const registrationLoginModuleRoutes: Routes = [
  { path: "register-firm", component: FirmRegistrationComponent },
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
  },
  {
    path: "register-customer",
    component: CustomerRegistrationComponent,
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
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(registrationLoginModuleRoutes),
  ],
})
export class RegistrationLoginModule {}
