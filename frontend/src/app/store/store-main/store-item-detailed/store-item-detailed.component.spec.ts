import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreItemDetailedComponent } from './store-item-detailed.component';

describe('StoreItemDetailedComponent', () => {
  let component: StoreItemDetailedComponent;
  let fixture: ComponentFixture<StoreItemDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreItemDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreItemDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
