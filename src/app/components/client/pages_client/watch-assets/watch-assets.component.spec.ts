import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchAssetsComponent } from './watch-assets.component';

describe('WatchAssetsComponent', () => {
  let component: WatchAssetsComponent;
  let fixture: ComponentFixture<WatchAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
