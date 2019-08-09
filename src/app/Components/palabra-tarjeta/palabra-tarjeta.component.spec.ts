import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalabraTarjetaComponent } from './palabra-tarjeta.component';

describe('PalabraTarjetaComponent', () => {
  let component: PalabraTarjetaComponent;
  let fixture: ComponentFixture<PalabraTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalabraTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalabraTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
