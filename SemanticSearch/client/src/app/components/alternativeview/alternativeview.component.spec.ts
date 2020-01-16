import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeviewComponent } from './alternativeview.component';

describe('AlternativeviewComponent', () => {
  let component: AlternativeviewComponent;
  let fixture: ComponentFixture<AlternativeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
