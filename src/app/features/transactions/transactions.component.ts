import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TransactionModel } from "../../models/transaction.model";
import { CardComponent } from "../../shared/components/card/card";
import { StatusBadgeComponent } from "../../shared/components/status-badge/status-badge";

@Component({
  selector: "app-transactions",
  standalone: true,
  imports: [CommonModule, CardComponent, StatusBadgeComponent],
  templateUrl: "./transactions.component.html",
})
export class TransactionsComponent {
  transactions: TransactionModel[] = [
    {
      id: "TXN-95522",
      amount: 450.0,
      pos: "POS-001",
      status: "Success",
      statusVariant: "success" as const,
      type: "Payment",
      typeVariant: "info" as const,
      date: "Jan 15, 2024 2:45 PM",
    },
    {
      id: "TXN-95521",
      amount: 1200.5,
      pos: "POS-002",
      status: "Success",
      statusVariant: "success" as const,
      type: "Payment",
      typeVariant: "info" as const,
      date: "Jan 15, 2024 2:30 PM",
    },
    {
      id: "TXN-95520",
      amount: 75.25,
      pos: "POS-003",
      status: "Success",
      statusVariant: "success" as const,
      type: "Payment",
      typeVariant: "info" as const,
      date: "Jan 15, 2024 2:15 PM",
    },
    {
      id: "TXN-95519",
      amount: 320.0,
      pos: "POS-001",
      status: "Failed",
      statusVariant: "error" as const,
      type: "Payment",
      typeVariant: "info" as const,
      date: "Jan 15, 2024 1:50 PM",
    },
    {
      id: "TXN-95518",
      amount: 150.75,
      pos: "POS-004",
      status: "Success",
      statusVariant: "success" as const,
      type: "Refund",
      typeVariant: "warning" as const,
      date: "Jan 15, 2024 1:30 PM",
    },
    {
      id: "TXN-95517",
      amount: 1550.0,
      pos: "POS-002",
      status: "Success",
      statusVariant: "success" as const,
      type: "Payment",
      typeVariant: "info" as const,
      date: "Jan 15, 2024 1:15 PM",
    },
    {
      id: "TXN-95516",
      amount: 245.5,
      pos: "POS-005",
      status: "Success",
      statusVariant: "success" as const,
      type: "Payment",
      typeVariant: "info" as const,
      date: "Jan 15, 2024 12:45 PM",
    },
    {
      id: "TXN-95515",
      amount: 680.0,
      pos: "POS-001",
      status: "Success",
      statusVariant: "success" as const,
      type: "Payment",
      typeVariant: "info" as const,
      date: "Jan 15, 2024 12:30 PM",
    },
  ];
}
