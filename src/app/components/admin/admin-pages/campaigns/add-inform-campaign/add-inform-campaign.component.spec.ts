import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInformCampaignComponent } from './add-inform-campaign.component';

describe('AddInformCampaignComponent', () => {
  let component: AddInformCampaignComponent;
  let fixture: ComponentFixture<AddInformCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInformCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInformCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
