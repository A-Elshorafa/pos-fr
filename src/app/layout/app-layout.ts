import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { NavbarComponent } from "./navbar";

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    NavbarComponent,
  ],
  templateUrl: "./app-layout.html",
})
export class AppLayoutComponent {
  opened = true;

  readonly navItems: NavItem[] = [
    { label: "Dashboard", route: "/dashboard", icon: "dashboard" },
    {
      label: "POS Devices",
      route: "/pos-devices",
      icon: "format_list_bulleted",
    },
    { label: "Create Payment", route: "/create-payment", icon: "add_box" },
    { label: "Transactions", route: "/transactions", icon: "history" },
    { label: "Settings", route: "/settings", icon: "settings" },
  ];

  logout(): void {
    console.log("Logout clicked");
    // Implement logout logic here
  }
}
