import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCampaignComponent } from './dashboard-campaign.component';

describe('DashboardCampaignComponent', () => {
  let component: DashboardCampaignComponent;
  let fixture: ComponentFixture<DashboardCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
