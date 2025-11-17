import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { App as AppComponent } from "./app";
import { MatFormFieldModule } from "@angular/material/form-field";
import { HttpClientModule } from "@angular/common/http";

import { LoginComponent } from "./features/auth/login/login.component";

@NgModule({
  declarations: [LoginComponent],
  imports: [BrowserModule, AppComponent, MatFormFieldModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
