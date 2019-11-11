import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteOffersComponent } from './site-offers.component';

describe('SiteOffersComponent', () => {
  let component: SiteOffersComponent;
  let fixture: ComponentFixture<SiteOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
