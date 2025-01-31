import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EncounterListComponent } from "./encounter-list/encounter-list.component";
import { ActiveEncounterComponent } from "./active-encounter/active-encounter.component";
import { CreatureListComponent } from "./creature-list/creature-list.component";
import { RulesReferenceComponent } from "./rules-reference/rules-reference.component";

export const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "encounterlist", component: EncounterListComponent },
  { path: "activeencounter", component: ActiveEncounterComponent },
  { path: "creaturelist", component: CreatureListComponent },
  { path: "rulesreference", component: RulesReferenceComponent },
];
