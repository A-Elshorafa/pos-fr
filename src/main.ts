import { bootstrapApplication } from "@angular/platform-browser";
import { App as AppComponent } from "./app/app";
import { appConfig } from "./app/app.config";
import { IconRegistryService } from "./app/core/services/icon-registry.service";

bootstrapApplication(AppComponent, appConfig)
  .then((appRef) => {
    // Register custom SVG icons with Material Icons
    const iconRegistryService = appRef.injector.get(IconRegistryService);
    iconRegistryService.registerIcons();
  })
  .catch((err) => console.error(err));
