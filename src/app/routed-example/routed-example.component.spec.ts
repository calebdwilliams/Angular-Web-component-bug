import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedExampleComponent } from './routed-example.component';

describe('RoutedExampleComponent', () => {
  let component: RoutedExampleComponent;
  let fixture: ComponentFixture<RoutedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutedExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
