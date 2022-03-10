import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardMTGComponent } from './list-cards.component';

describe('ListCardsComponent', () => {
  let component: ListCardMTGComponent;
  let fixture: ComponentFixture<ListCardMTGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCardMTGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardMTGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
