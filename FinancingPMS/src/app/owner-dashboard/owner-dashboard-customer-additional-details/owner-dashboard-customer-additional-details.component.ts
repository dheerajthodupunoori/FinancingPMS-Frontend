import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as customerDetails from "../../../mock-data/customer-additional-details.json"; 
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-owner-dashboard-customer-additional-details',
  templateUrl: './owner-dashboard-customer-additional-details.component.html',
  styleUrls: ['./owner-dashboard-customer-additional-details.component.css']
})
export class OwnerDashboardCustomerAdditionalDetailsComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<OwnerDashboardCustomerAdditionalDetailsComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder) { }
  customerID : string = "";
  customerDetails : any ;
  public detailsForm: FormGroup;
  operation : string = "";
  showUpdateButton : boolean = false;


  ngOnInit() {
    console.log(this.data);
    this.customerID = this.data.customerID;
    this.operation = this.data.operation;

    this.customerDetails =  customerDetails;
    console.log(this.customerDetails);


    this.detailsForm = this.fb.group({
      customerID: [this.customerID, Validators.required],
      occupation: [this.customerDetails.default[0].occupation, Validators.required],
      country: [this.customerDetails.default[0].country, Validators.required],
      state: [this.customerDetails.default[0].state, Validators.required],
      city: [this.customerDetails.default[0].city, Validators.required],
      zip: [this.customerDetails.default[0].zip, Validators.required],
      phone: [this.customerDetails.default[0].phone, Validators.required],
      flatNumber: [this.customerDetails.default[0].flatNumber, Validators.required],
      street: [this.customerDetails.default[0].street, Validators.required],
      income: [this.customerDetails.default[0].income, Validators.required],
      FirmID:[this.customerDetails.default[0].FirmID],
      fn:[this.customerDetails.default[0].fn],
      mn:[this.customerDetails.default[0].mn],
      ln:[this.customerDetails.default[0].ln],
      father_name:[this.customerDetails.default[0].FatherName],
      dob:[this.customerDetails.default[0].DOB],
      aadhaar:[this.customerDetails.default[0].AadhaarNumber],
      email:[this.customerDetails.default[0].EmailID]

    });
    
    if(this.operation === "VIEW"){
    this.detailsForm.disable();
    }
    else
    {
      this.showUpdateButton = true;
    }
  }

  closeModal(){
    this.dialogRef.close();
  }

  updateDetails(){
    console.log("Customer Details updated successfully");
  }

}
