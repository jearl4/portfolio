import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

import { CapmFormComponent } from './capm-form.component';

describe('CapmFormComponent', () => {
  let component: CapmFormComponent;
  let fixture: ComponentFixture<CapmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule,
        MaterialModule,
        FormsModule],
      declarations: [CapmFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
