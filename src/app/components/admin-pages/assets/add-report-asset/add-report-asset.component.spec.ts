import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReportAssetComponent } from './add-report-asset.component';

describe('AddReportAssetComponent', () => {
  let component: AddReportAssetComponent;
  let fixture: ComponentFixture<AddReportAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReportAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReportAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
