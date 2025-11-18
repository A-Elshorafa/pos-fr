import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CommonModule } from "@angular/common";
import { CurrencyPipe } from "@angular/common";

import { TransactionModel } from "../../models/transaction.model";
import { CardComponent } from "../../shared/components/card/card";
import { StatusBadgeComponent } from "../../shared/components/status-badge/status-badge";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
    MatDividerModule,
    MatToolbarModule,
    CommonModule,
    CurrencyPipe,
    StatusBadgeComponent,
    CardComponent,
  ],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {
  transactions: TransactionModel[] = [
    {
      id: "TXN-0001",
      amount: 120.25,
      device: "POS-001",
      status: "online",
      statusLabel: "success",
      date: new Date(),
    },
    {
      id: "TXN-0002",
      amount: 50.0,
      device: "POS-003",
      status: "maintenance",
      statusLabel: "failed",
      date: new Date(Date.now() - 3600_000),
    },
    {
      id: "TXN-0003",
      amount: 299.99,
      device: "POS-002",
      status: "offline",
      statusLabel: "success",
      date: new Date(Date.now() - 7200_000),
    },
  ];
}
