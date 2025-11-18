import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

/**
 * Sidebar Component
 *
 * Uses Material Design sidenav with mat-nav-list for navigation items
 */
@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: "./sidebar.html",
})
export class SidebarComponent {
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

  mode: "over" | "push" | "side" = "side";
  opened = true;

  logout(): void {
    console.log("Logout clicked");
    // Implement logout logic here
  }
}
