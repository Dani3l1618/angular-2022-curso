import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouselistComponent } from './mouselist.component';

describe('MouselistComponent', () => {
  let component: MouselistComponent;
  let fixture: ComponentFixture<MouselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouselistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
