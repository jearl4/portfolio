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

  describe('When form is created, it ', () => {
    it('should have the default beta value ', () => {
      expect(component.model.beta).toBe(.5);
    });

    it('should have the default risk free rate ', () => {
      expect(component.model.riskFreeRate).toBe(2.064);
    });

    it('should have the default market return', () => {
      expect(component.model.marketRate).toBe(6);
    });
  });

  describe('When a new capm model is created, it ', () => {
    beforeEach(() => {
      spyOn(component, 'newCapm').and.returnValues({
        beta: 0, riskFreeRate: 0,
        marketRate: 0
      });
      component.newCapm();
    });

    it('should have a zero beta value ', () => {
      expect(fixture.componentInstance.model.beta).toBe(0);
    });

    it('should have a zero risk free rate ', () => {
      expect(fixture.componentInstance.model.riskFreeRate).toBe(0);
    });

    it('should have a zero market return', () => {
      expect(fixture.componentInstance.model.marketRate).toBe(0);
    });
  });
});
