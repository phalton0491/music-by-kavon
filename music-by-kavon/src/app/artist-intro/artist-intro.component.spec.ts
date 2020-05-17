import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistIntroComponent } from './artist-intro.component';

describe('ArtistIntroComponent', () => {
  let component: ArtistIntroComponent;
  let fixture: ComponentFixture<ArtistIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
