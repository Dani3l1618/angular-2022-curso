import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinerallistComponent } from './minerallist.component';

describe('MinerallistComponent', () => {
  let component: MinerallistComponent;
  let fixture: ComponentFixture<MinerallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinerallistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinerallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
