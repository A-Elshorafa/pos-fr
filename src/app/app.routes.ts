import { Routes } from "@angular/router";
import { AppLayoutComponent } from "./layout/app-layout";
import { LoginComponent } from "./features/auth/login/login.component";
import {
  DashboardComponent,
  PosDevicesComponent,
  CreatePaymentComponent,
  TransactionsComponent,
  SettingsComponent,
} from "./features";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    component: AppLayoutComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "pos-devices",
        component: PosDevicesComponent,
      },
      {
        path: "create-payment",
        component: CreatePaymentComponent,
      },
      {
        path: "transactions",
        component: TransactionsComponent,
      },
      {
        path: "settings",
        component: SettingsComponent,
      },
    ],
  },
];
