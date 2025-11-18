import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../../shared/components/card/card";

@Component({
  selector: "app-settings",
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: "./settings.component.html",
})
export class SettingsComponent {}
