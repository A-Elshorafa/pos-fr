import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-status-badge",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./status-badge.html",
})
export class StatusBadgeComponent {
  @Input() status?: "online" | "offline" | "maintenance" | string = "offline";
  @Input() variant?: "success" | "error" | "warning" | "info" | string = "info";

  get statusClass(): string {
    const baseClasses =
      "inline-flex items-center px-3 py-1 rounded-full text-label font-medium";

    const statusClasses: { [key: string]: string } = {
      online: "bg-green-100 text-success",
      offline: "bg-red-100 text-error",
      maintenance: "bg-yellow-100 text-warning",
    };

    return `${baseClasses} ${
      statusClasses[this.status || "online"] || statusClasses["offline"]
    }`;
  }

  get dotClass(): string {
    const dotClasses: { [key: string]: string } = {
      online: "bg-success",
      offline: "bg-error",
      maintenance: "bg-warning",
    };

    return dotClasses[this.status || "bg-success"] || dotClasses["offline"];
  }
}
