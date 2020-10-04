import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { NotificationComponent } from "./notification/notification.component";
import { AuthGuard } from "../auth-guards/authguard";

const notificationRoutes: Routes = [
  {
    path: "messages",
    component: NotificationComponent,
    outlet: "notifications",
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [NotificationComponent],
  imports: [CommonModule, RouterModule.forChild(notificationRoutes)],
})
export class NotificationModule {}
