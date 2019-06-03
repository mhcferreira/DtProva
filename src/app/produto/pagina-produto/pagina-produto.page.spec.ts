import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProdutoPage } from './pagina-produto.page';

describe('PaginaProdutoPage', () => {
  let component: PaginaProdutoPage;
  let fixture: ComponentFixture<PaginaProdutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaProdutoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
