import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioComponent } from './desafio.component';

describe('DesafioComponent', () => {
  let component: DesafioComponent;
  let fixture: ComponentFixture<DesafioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
