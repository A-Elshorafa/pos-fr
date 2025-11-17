import { bootstrapApplication } from "@angular/platform-browser";
import { App as AppComponent } from "./app/app";
import { appConfig } from "./app/app.config";

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
