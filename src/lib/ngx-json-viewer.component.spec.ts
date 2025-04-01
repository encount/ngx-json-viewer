import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJsonViewerComponent } from './ngx-json-viewer.component';

describe('NgxJsonViewerComponent', () => {
  let component: NgxJsonViewerComponent;
  let fixture: ComponentFixture<NgxJsonViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxJsonViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxJsonViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
