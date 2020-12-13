import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-owner-dashboard",
  templateUrl: "./owner-dashboard.component.html",
  styleUrls: ["./owner-dashboard.component.css"],
})
export class OwnerDashboardComponent implements OnInit {
  public firmId: String = "";

  opened = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //getting firmID from route using ActivatedRoute
    this.firmId = this.route.snapshot.params["firmId"];
    console.log(this.firmId)
    
  }

  onSideNavClick(element){
    this.opened = !this.opened;
    if(this.opened){
element.textContent = "Close Menu"
    }
    else
    {
      element.textContent = "Open Menu"
    }
  }
}
