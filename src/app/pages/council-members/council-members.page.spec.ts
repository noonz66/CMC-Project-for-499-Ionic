import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CouncilMembersPage } from './council-members.page';

describe('CouncilMembersPage', () => {
  let component: CouncilMembersPage;
  let fixture: ComponentFixture<CouncilMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncilMembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CouncilMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
