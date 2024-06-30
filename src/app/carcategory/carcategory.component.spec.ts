import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcategoryComponent } from './carcategory.component';

describe('CarcategoryComponent', () => {
  let component: CarcategoryComponent;
  let fixture: ComponentFixture<CarcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarcategoryComponent]
    });
    fixture = TestBed.createComponent(CarcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
