import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCardComponent } from './books-card.component';

describe('BooksCardComponent', () => {
  let component: BooksCardComponent;
  let fixture: ComponentFixture<BooksCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BooksCardComponent]
    });
    fixture = TestBed.createComponent(BooksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
