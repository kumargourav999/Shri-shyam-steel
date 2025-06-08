import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWeMadeComponent } from './products-we-made.component';

describe('ProductsWeMadeComponent', () => {
  let component: ProductsWeMadeComponent;
  let fixture: ComponentFixture<ProductsWeMadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsWeMadeComponent]
    });
    fixture = TestBed.createComponent(ProductsWeMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
