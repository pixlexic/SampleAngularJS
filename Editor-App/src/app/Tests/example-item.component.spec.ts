import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleItemComponent } from '../Components/example-item.component';

describe('ExampleItemComponent', () => {
  let component: ExampleItemComponent;
  let fixture: ComponentFixture<ExampleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
