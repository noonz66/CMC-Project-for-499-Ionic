import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsHomePage } from './news-home.page';

describe('NewsHomePage', () => {
  let component: NewsHomePage;
  let fixture: ComponentFixture<NewsHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
