import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimacaoFamiliaComponent } from './confimacao-familia.component';

describe('ConfimacaoFamiliaComponent', () => {
  let component: ConfimacaoFamiliaComponent;
  let fixture: ComponentFixture<ConfimacaoFamiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfimacaoFamiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfimacaoFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
