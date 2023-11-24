import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensalistaComponent } from './mensalista.component';

describe('MensalistaComponent', () => {
  let component: MensalistaComponent;
  let fixture: ComponentFixture<MensalistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensalistaComponent]
    });
    fixture = TestBed.createComponent(MensalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
