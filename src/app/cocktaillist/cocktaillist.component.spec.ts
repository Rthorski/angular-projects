import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktaillistComponent } from './cocktaillist.component';

describe('CocktaillistComponent', () => {
  let component: CocktaillistComponent;
  let fixture: ComponentFixture<CocktaillistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktaillistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
