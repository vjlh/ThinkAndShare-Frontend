import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAdministradorComponent } from './vista-administrador.component';

describe('VistaAdministradorComponent', () => {
  let component: VistaAdministradorComponent;
  let fixture: ComponentFixture<VistaAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
