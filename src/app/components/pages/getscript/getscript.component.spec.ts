import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetscriptComponent } from './getscript.component';

describe('GetscriptComponent', () => {
  let component: GetscriptComponent;
  let fixture: ComponentFixture<GetscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
