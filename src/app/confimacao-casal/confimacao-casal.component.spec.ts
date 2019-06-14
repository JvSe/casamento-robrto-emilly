import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimacaoCasalComponent } from './confimacao-casal.component';

describe('ConfimacaoCasalComponent', () => {
  let component: ConfimacaoCasalComponent;
  let fixture: ComponentFixture<ConfimacaoCasalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfimacaoCasalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfimacaoCasalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
