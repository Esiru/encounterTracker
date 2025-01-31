import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideKeycloak } from "keycloak-angular";
import { environment } from "../environments/environment.development";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideKeycloak({
      config: {
        url: "https://lemur-18.cloud-iam.com/auth",
        realm: "encountertracker",
        clientId: environment.keycloakClientId,
      },
      initOptions: {
        onLoad: "login-required",
        flow: "standard",
      },
    }),
  ],
};
