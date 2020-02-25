import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarjogadoresPage } from './buscarjogadores.page';

describe('BuscarjogadoresPage', () => {
  let component: BuscarjogadoresPage;
  let fixture: ComponentFixture<BuscarjogadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarjogadoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarjogadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
