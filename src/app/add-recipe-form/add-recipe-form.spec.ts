import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeForm } from './add-recipe-form';

describe('AddRecipeForm', () => {
  let component: AddRecipeForm;
  let fixture: ComponentFixture<AddRecipeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRecipeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecipeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
