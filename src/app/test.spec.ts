import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CocktaillistComponent } from './cocktaillist/cocktaillist.component';
import { CocktailService } from './services/cocktail.service';

describe('CocktaillistComponent', () => {
  let component: CocktaillistComponent;
  let fixture: ComponentFixture<CocktaillistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, CocktaillistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocktaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('service should be created', () => {
    const service: CocktailService = TestBed.inject(CocktailService);
    expect(service).toBeTruthy();
  });

  it('service should have a "getCocktails" method which returns at least one object', () => {
    const service: CocktailService = TestBed.inject(CocktailService);
    const cocktails = service.getCocktails();
    expect(cocktails.length).toBeGreaterThan(0);
  });

  it('should create a CocktaillistComponent instance', waitForAsync(() => {
    const fixture = TestBed.createComponent(CocktaillistComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('component should have a public property named "cocktails"', waitForAsync(() => {
    const fixture = TestBed.createComponent(CocktaillistComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.cocktails).toBeTruthy();
  }));
});
