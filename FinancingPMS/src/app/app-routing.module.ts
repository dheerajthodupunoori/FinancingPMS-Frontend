import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AuthGuard } from "./auth-guards/authguard";

const appRoutes: Routes = [
  { path: "", component: LandingPageComponent },
  // {
  //   path: "owner-dashboard/:firmId",
  //   component: OwnerDashboardComponent,
  // },
  {
    path: "owner-dashboard/:firmId",
    loadChildren: () =>
      import("./owner-dashboard/owner-dashboard.module").then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
