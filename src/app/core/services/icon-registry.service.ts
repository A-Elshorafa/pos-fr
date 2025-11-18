import { Injectable, inject } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * Service to register custom SVG icons with Angular Material's MatIconRegistry
 */
@Injectable({
  providedIn: "root",
})
export class IconRegistryService {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  /**
   * Register all custom SVG icons from assets folder
   */
  registerIcons(): void {
    // Sidebar icons
    this.iconRegistry.addSvgIcon(
      "dashboard",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "/assets/icons/dashboard-icon.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "pos-devices",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "/assets/icons/pos-devices-icon.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "create-payment",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "/assets/icons/create-payment-icon.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "transactions",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "/assets/icons/transactions-icon.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "settings",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "/assets/icons/settings-icon.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "logout",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "/assets/icons/logout-icon.svg"
      )
    );

    // Navbar icons
    this.iconRegistry.addSvgIcon(
      "logo",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "/assets/icons/logo-icon.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "notifications",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "/assets/icons/notifications-icon.svg"
      )
    );

    // Login icons
    this.iconRegistry.addSvgIcon(
      "google",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "/assets/icons/google-icon.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "facebook",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "/assets/icons/facebook-icon.svg"
      )
    );
    this.iconRegistry.addSvgIcon(
      "apple",
      this.sanitizer.bypassSecurityTrustResourceUrl(
        "/assets/icons/apple-icon.svg"
      )
    );
  }
}
