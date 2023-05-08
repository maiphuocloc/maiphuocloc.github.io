import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerDetailComponent } from './project-manager-detail.component';

describe('ProjectManagerDetailComponent', () => {
  let component: ProjectManagerDetailComponent;
  let fixture: ComponentFixture<ProjectManagerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
