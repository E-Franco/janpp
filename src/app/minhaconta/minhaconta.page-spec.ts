import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MinhaContaPage } from './minhaconta.page';

describe('MinhaContaPage', () => {
  let component: MinhaContaPage;
  let fixture: ComponentFixture<MinhaContaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinhaContaPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinhaContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
