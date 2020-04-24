import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComplaintSuggestPage } from './complaint-suggest.page';

describe('ComplaintSuggestPage', () => {
  let component: ComplaintSuggestPage;
  let fixture: ComponentFixture<ComplaintSuggestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintSuggestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComplaintSuggestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
