import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicComponent } from './arabic.component';

describe('ArabicComponent', () => {
  let component: ArabicComponent;
  let fixture: ComponentFixture<ArabicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArabicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
