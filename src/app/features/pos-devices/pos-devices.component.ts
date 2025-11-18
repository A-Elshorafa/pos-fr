import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../../shared/components/card/card";
import { StatusBadgeComponent } from "../../shared/components/status-badge/status-badge";

@Component({
  selector: "app-pos-devices",
  standalone: true,
  imports: [CommonModule, CardComponent, StatusBadgeComponent],
  templateUrl: "./pos-devices.component.html",
})
export class PosDevicesComponent {
  devices = [
    {
      name: "POS Terminal 1",
      serial: "SN-001-2024",
      status: "online" as const,
      statusLabel: "Online",
      lastHeartbeat: "Just now",
    },
    {
      name: "POS Terminal 2",
      serial: "SN-002-2024",
      status: "online" as const,
      statusLabel: "Online",
      lastHeartbeat: "2 minutes ago",
    },
    {
      name: "POS Terminal 3",
      serial: "SN-003-2024",
      status: "offline" as const,
      statusLabel: "Offline",
      lastHeartbeat: "45 minutes ago",
    },
    {
      name: "POS Terminal 4",
      serial: "SN-004-2024",
      status: "online" as const,
      statusLabel: "Online",
      lastHeartbeat: "Just now",
    },
    {
      name: "POS Terminal 5",
      serial: "SN-005-2024",
      status: "maintenance" as const,
      statusLabel: "Maintenance",
      lastHeartbeat: "2 hours ago",
    },
  ];
}
