import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ActiveEncounterComponent } from "./active-encounter.component";

describe("ActiveEncounterComponent", () => {
  let component: ActiveEncounterComponent;
  let fixture: ComponentFixture<ActiveEncounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveEncounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
