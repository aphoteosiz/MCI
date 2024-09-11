import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnetsComponent } from './partnets.component';

describe('PartnetsComponent', () => {
  let component: PartnetsComponent;
  let fixture: ComponentFixture<PartnetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartnetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
