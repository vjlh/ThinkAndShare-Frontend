import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaAdminComponent } from './idea-admin.component';

describe('IdeaAdminComponent', () => {
  let component: IdeaAdminComponent;
  let fixture: ComponentFixture<IdeaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
