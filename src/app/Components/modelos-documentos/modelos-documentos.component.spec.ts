import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosDocumentosComponent } from './modelos-documentos.component';

describe('ModelosDocumentosComponent', () => {
  let component: ModelosDocumentosComponent;
  let fixture: ComponentFixture<ModelosDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelosDocumentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelosDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
