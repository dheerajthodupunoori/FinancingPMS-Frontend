import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OldPasswordService } from 'src/app/Services/oldpassword.service';
import { oldPasswordValidator } from 'src/app/validators/old-password-validator';
import * as firmDetails from "../../../mock-data/firm-details.json";

@Component({
  selector: 'app-owner-settings',
  templateUrl: './owner-settings.component.html',
  styleUrls: ['./owner-settings.component.css']
})
export class OwnerSettingsComponent implements OnInit{

  public editFirmForm: FormGroup;

  showUpdateButton : boolean = false;
  showEditButton : boolean = true;
  firmDetails : any;
  oldpassword : FormControl;
  newpassword:FormControl;
  confirmpassword:FormControl;

  constructor(private fb: FormBuilder,private _oldPasswordService:OldPasswordService) { }

  ngOnInit() {

    this.firmDetails = firmDetails;
    console.log(this.firmDetails.default);

    this.editFirmForm = this.fb.group({
      firmName: [this.firmDetails.default.firmName, Validators.required],
      firmID: [this.firmDetails.default.firmID, Validators.required],
      email: [this.firmDetails.default.email, Validators.required],
      phone: [this.firmDetails.default.phone, Validators.required],
      address1: [this.firmDetails.default.address1, Validators.required],
      address2: [this.firmDetails.default.address2, Validators.required],
      city: [this.firmDetails.default.city, Validators.required],
      state: [this.firmDetails.default.state, Validators.required],
      zip: [this.firmDetails.default.zip, Validators.required],
    });

    this.editFirmForm.disable();

    this.oldpassword = new FormControl('',{
      validators :[Validators.required],
      asyncValidators:[oldPasswordValidator(this._oldPasswordService,this.firmDetails.default.firmID)],
      updateOn:'blur'
   }
    );
    this.newpassword = new FormControl('', [
      Validators.required
    ]);
    this.confirmpassword = new FormControl('', [
      Validators.required
    ]);

  }
  
  onEditClick()
  {
    this.showUpdateButton = true;
    this.showEditButton = false;
    console.log(this.editFirmForm);
    this.editFirmForm.controls["email"].enable();
    this.editFirmForm.controls["phone"].enable();
    this.editFirmForm.controls["address1"].enable();
    this.editFirmForm.controls["address2"].enable();
    this.editFirmForm.controls["city"].enable();
    this.editFirmForm.controls["state"].enable();
    this.editFirmForm.controls["zip"].enable();
  }

  updateFirmDetails()
  {
    console.log("Firm details updated");
    this.showUpdateButton = false;
    this.showEditButton = true;
    this.editFirmForm.controls["email"].disable();
    this.editFirmForm.controls["phone"].disable();
    this.editFirmForm.controls["address1"].disable();
    this.editFirmForm.controls["address2"].disable();
    this.editFirmForm.controls["city"].disable();
    this.editFirmForm.controls["state"].disable();
    this.editFirmForm.controls["zip"].disable();
  }

  updatePassword()
  {
    console.log("Password updated");
    console.log(this.oldpassword);
    console.log(this.confirmpassword);
    console.log(this.newpassword);
  }

}
