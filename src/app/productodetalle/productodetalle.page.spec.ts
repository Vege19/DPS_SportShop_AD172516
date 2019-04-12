import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductodetallePage } from './productodetalle.page';

describe('ProductodetallePage', () => {
  let component: ProductodetallePage;
  let fixture: ComponentFixture<ProductodetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductodetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductodetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
