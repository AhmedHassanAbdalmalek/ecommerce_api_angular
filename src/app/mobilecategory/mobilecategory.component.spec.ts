import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecategoryComponent } from './mobilecategory.component';

describe('MobilecategoryComponent', () => {
  let component: MobilecategoryComponent;
  let fixture: ComponentFixture<MobilecategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilecategoryComponent]
    });
    fixture = TestBed.createComponent(MobilecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
