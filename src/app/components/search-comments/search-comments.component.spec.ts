import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCommentsComponent } from './search-comments.component';

describe('SearchCommentsComponent', () => {
  let component: SearchCommentsComponent;
  let fixture: ComponentFixture<SearchCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
