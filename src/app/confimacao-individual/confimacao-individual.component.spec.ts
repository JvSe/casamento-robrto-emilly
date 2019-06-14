import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimacaoIndividualComponent } from './confimacao-individual.component';

describe('ConfimacaoIndividualComponent', () => {
  let component: ConfimacaoIndividualComponent;
  let fixture: ComponentFixture<ConfimacaoIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfimacaoIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfimacaoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
