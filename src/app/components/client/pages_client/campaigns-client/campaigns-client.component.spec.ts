import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsClientComponent } from './campaigns-client.component';

describe('CampaignsClientComponent', () => {
  let component: CampaignsClientComponent;
  let fixture: ComponentFixture<CampaignsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
