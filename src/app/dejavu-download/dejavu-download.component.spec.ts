import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DejavuDownloadComponent } from './dejavu-download.component';

describe('DejavuDownloadComponent', () => {
  let component: DejavuDownloadComponent;
  let fixture: ComponentFixture<DejavuDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DejavuDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DejavuDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
