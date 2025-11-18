import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CardComponent } from "../../shared/components/card/card";

@Component({
  selector: "app-create-payment",
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: "./create-payment.component.html",
})
export class CreatePaymentComponent {
  posDevice = "";
  amount = "";
  description = "";
  showSuccessModal = false;

  onCreatePayment(): void {
    if (this.posDevice && this.amount) {
      this.showSuccessModal = true;
    }
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
    this.posDevice = "";
    this.amount = "";
    this.description = "";
  }

  getRandomTxnId(): string {
    return String(Math.floor(Math.random() * 100000)).padStart(5, "0");
  }
}
