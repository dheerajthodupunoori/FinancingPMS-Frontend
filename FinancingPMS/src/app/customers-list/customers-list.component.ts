import { Component, OnInit, ViewChild } from '@angular/core';
import * as customers from "../../mock-data/customers-list.json";
import {MatDialog , MatDialogConfig} from "@angular/material/dialog";
import {OwnerDashboardCustomerAdditionalDetailsComponent} from "../owner-dashboard/owner-dashboard-customer-additional-details/owner-dashboard-customer-additional-details.component"
declare var $;

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: any;
  headers = ["profile", "CustomerID", "Name", "FirmID", "phone" , "EmailID" , "AadhaarNumber"];
  dtOptions: DataTables.Settings = {};
  viewDeletedCustomers : boolean = false;
  isViewDeletedCustomersEnabled : boolean = true;
  isCloseDeletedCustomersEnabled : boolean = false;
  modalData : any = {};




  constructor(public matDialog : MatDialog) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    this.customers = customers;
  }

  openModal(customerID : string , operation : string=""){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.height="70%";
    dialogConfig.width="70%";

   this.modalData ={
     "customerID":customerID,
     "operation":operation
   };

    dialogConfig.data = this.modalData;

    const modalDialog = this.matDialog.open(OwnerDashboardCustomerAdditionalDetailsComponent , dialogConfig);
  }

  viewDeletedCustomersEvent()
  {
    this.viewDeletedCustomers = !this.viewDeletedCustomers;
    this.isCloseDeletedCustomersEnabled = !this.isCloseDeletedCustomersEnabled;
    this.isViewDeletedCustomersEnabled = !this.isViewDeletedCustomersEnabled;
  }

  closeDeletedCustomersEvent(){
    this.viewDeletedCustomers = !this.viewDeletedCustomers;
    this.isViewDeletedCustomersEnabled = !this.isViewDeletedCustomersEnabled;
    this.isCloseDeletedCustomersEnabled = !this.isCloseDeletedCustomersEnabled;
  }

}
