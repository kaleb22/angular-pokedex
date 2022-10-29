import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeTypeComponent } from './badge-type.component';

describe('BadgeTypeComponent', () => {
  let component: BadgeTypeComponent;
  let fixture: ComponentFixture<BadgeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeTypeComponent);
    component = fixture.componentInstance;
    component.type = 'grass';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a grass backgroundColor', () => {
    expect(component.bgColor).toMatch('#74CB48');
  });
});
