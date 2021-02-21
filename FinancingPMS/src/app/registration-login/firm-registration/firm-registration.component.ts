import { Component, OnInit } from "@angular/core";
import { Firm } from "../../Models/firm";
import { RegisterService } from "../../Services/register.service";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-firm-registration",
  templateUrl: "./firm-registration.component.html",
  styleUrls: ["./firm-registration.component.css"],
})
export class FirmRegistrationComponent implements OnInit {
  public firm: Firm = new Firm("", "", "", "", "", "");

  public OriginalFirm: Firm;

  public registrationStatus: boolean;

  public firmRegistrationErrorMessage: string;

  public response: any;

  spinnerText : string = "Loading..."

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.Firm = this.firm;
  }

  get diagnostic() {
    return JSON.stringify(this.firm);
  }

  //   isNumber(evt) {
  //     console.log(evt);
  //     evt = (evt) ? evt : window.event;
  //     var charCode = (evt.which) ? evt.which : evt.keyCode;
  //     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //       event.preventDefault();
  //     }
  // }

  get Firm(): Firm {
    return this.firm;
  }

  set Firm(value: Firm) {
    this.OriginalFirm = { ...value };
  }

  async RegisterFirm() {
    this.spinnerText = "Registering your Firm. Please wait ."
    this.spinner.show();
    await this.registerService.registerService(this.firm).subscribe((data) => {
      console.log("Firm registration response ", data);
      this.registrationStatus = data.registrationStatus;
      console.log("Firm registration status", this.registrationStatus);
      if (this.registrationStatus == true) {
        this.router.navigate(["login"]);
      } else {
        this.firmRegistrationErrorMessage = data.errorDetails[0];
      }
    },
    (error)=>{
      console.log(error);
      this.spinner.hide();
      this.toastr.error("Firm Registration failed!",error["mesage"],{
        positionClass:'toast-bottom-right'
      });
    });
  }
}
