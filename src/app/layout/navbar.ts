import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

/**
 * Navbar Component
 *
 * Icons are registered with MatIconRegistry and can be used with <mat-icon svgIcon="icon-name">
 * Available icons: logo, notifications
 */
@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: "./navbar.html",
})
export class NavbarComponent {
  // Icon paths from assets folder
  readonly iconPaths = {
    logo: "/assets/icons/logo-icon.svg",
    notifications: "/assets/icons/notifications-icon.svg",
  };
}
