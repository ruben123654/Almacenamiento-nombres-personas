import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaRegistro } from './persona-registro';

describe('PersonaRegistro', () => {
  let component: PersonaRegistro;
  let fixture: ComponentFixture<PersonaRegistro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaRegistro],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaRegistro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
