import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it(`verificar secuencia`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.secuenciaFibo(233)).toEqual();
  });

 /*  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }); */
/*
  it(`verificar fizz buzz`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizz(15)).toEqual('fizzbuzz');
  });

  it(`verificar fizz`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizz(3)).toEqual('fizz');
  });

  it(`verificar buzz`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizz(20)).toEqual('buzz');
  }); */
/*
  it('Probar resultados verdaderos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.anagrama('Ceclo','Cocle')).toEqual(true);
  });

  it('Probar resultado falso', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.anagrama('ARCA','CARA')).toEqual(false);
  });

  it('Probar resultado minusculas', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.anagrama('cero','roce')).toEqual(false);
  });

  it('Probar resultado minusculas falso', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.anagrama('toro','oroto')).toEqual(false);
  });

  it('Probar resultado', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.anagrama('Desamparador ','desparramado')).toEqual(false);
  });

  it('Probar resultado espacios', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.anagrama('N a c i o n a l i s t a  ','a l t i s o n a n c i a')).toEqual(false);
  });
  /* it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Angular app is running!');
  }); */

}
);

