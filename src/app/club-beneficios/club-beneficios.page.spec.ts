import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ClubBeneficiosPage } from './club-beneficios.page';

describe('ClubBeneficiosPage', () => {
  let component: ClubBeneficiosPage;
  let fixture: ComponentFixture<ClubBeneficiosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubBeneficiosPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClubBeneficiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
