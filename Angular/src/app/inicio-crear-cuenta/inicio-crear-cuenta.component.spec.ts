import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCrearCuentaComponent } from './inicio-crear-cuenta.component';

describe('InicioCrearCuentaComponent', () => {
  let component: InicioCrearCuentaComponent;
  let fixture: ComponentFixture<InicioCrearCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioCrearCuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioCrearCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
