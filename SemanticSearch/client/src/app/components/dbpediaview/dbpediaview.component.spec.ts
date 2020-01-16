import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbpediaviewComponent } from './dbpediaview.component';

describe('DbpediaviewComponent', () => {
  let component: DbpediaviewComponent;
  let fixture: ComponentFixture<DbpediaviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbpediaviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbpediaviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
