import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OwnerDashboardComponent } from "./owner-dashboard.component";
import { RouterModule } from "@angular/router";
import { OwnerDashboardDetailsComponent } from "../owner-dashboard-details/owner-dashboard-details.component";
import { CustomersListComponent } from "../customers-list/customers-list.component";
import { CreateCustomerComponent } from "../create-customer/create-customer.component";
import { CreateAgreementComponent } from "../create-agreement/create-agreement.component";
import { ActiveAccountsComponent } from "../active-accounts/active-accounts.component";
import { LoanTypesComponent } from "../loan-types/loan-types.component";
import {  MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataTablesModule } from 'angular-datatables';
import { OwnerDashboardCustomerAdditionalDetailsComponent } from './owner-dashboard-customer-additional-details/owner-dashboard-customer-additional-details.component';
import {MatDialogModule } from "@angular/material/dialog";
import { OwnerSettingsComponent } from './owner-settings/owner-settings.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {SharedModule} from "../../app/shared/shared.module";
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    OwnerDashboardComponent,
    OwnerDashboardDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent,
    CreateAgreementComponent,
    ActiveAccountsComponent,
    LoanTypesComponent,
    OwnerDashboardCustomerAdditionalDetailsComponent,
    OwnerSettingsComponent
  ],
  entryComponents:[OwnerDashboardCustomerAdditionalDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    DataTablesModule,
    MatDialogModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    SharedModule,
    MatDividerModule,
    RouterModule.forChild([
      {
        path: "",
        component: OwnerDashboardComponent,
        children: [
          {
            path: "dashboard",
            component: OwnerDashboardDetailsComponent,
          },
          {
            path: "customers-list",
            component: CustomersListComponent,
          },
          {
            path: "create-customer",
            component: CreateCustomerComponent,
          },
          {
            path: "create-agreement",
            component: CreateAgreementComponent,
          },
          {
            path: "active-accounts",
            component: ActiveAccountsComponent,
          },
          {
            path: "loan-types",
            component: LoanTypesComponent,
          },
          {
            path:"owner-settings",
            component:OwnerSettingsComponent
          }
        ],
      },
    ]),
  ],
})
export class DashboardModule {}
