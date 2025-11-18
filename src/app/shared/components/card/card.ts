import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cardClass">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {
  @Input() padding: "sm" | "md" | "lg" = "md";
  @Input() shadow: boolean | string = true;
  @Input() class: string = "";

  get cardClass(): string {
    const baseClasses =
      "bg-card rounded-card border border-border-gray " + this.class;

    const paddingClasses = {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    const shadowClass = this.shadow ? "shadow-card" : "";

    return `${baseClasses} ${paddingClasses[this.padding]} ${shadowClass}`;
  }
}
