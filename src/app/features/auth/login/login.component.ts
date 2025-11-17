import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormInputComponent } from "../../../shared/components/form-input/form-input.component";
import { ImageLoaderService } from "../../../services/image-loader.service";

/**
 * Login Component
 *
 * Icons are stored in the assets folder:
 * - Google icon: /assets/icons/google-icon.svg
 * - Facebook icon: /assets/icons/facebook-icon.svg
 * - Apple icon: /assets/icons/apple-icon.svg
 */
@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormInputComponent,
  ],
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  // Icon paths from assets folder
  readonly iconPaths = {
    google: "/assets/icons/google-icon.svg",
    facebook: "/assets/icons/facebook-icon.svg",
    apple: "/assets/icons/apple-icon.svg",
  };
  loginForm: FormGroup;
  logoUrl: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private imageLoader: ImageLoaderService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.loadLogo();
  }
  loadLogo() {
    const logoUrl = "https://avatars.githubusercontent.com/u/124091983";
    this.imageLoader.loadImage(logoUrl).subscribe((blob: Blob) => {
      this.logoUrl = URL.createObjectURL(blob);
    });
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log("Login form submitted");
    } else {
      return;
    }
  }
}
