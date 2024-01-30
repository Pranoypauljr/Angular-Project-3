import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiselComponent } from './multisel/multisel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private cdr: ChangeDetectorRef) { } 
  title = 'content-projection';
  public selectedField:string="";
  @ViewChild(MultiselComponent) multiselComponent!: MultiselComponent;

  prevElem() {
    this.multiselComponent.prevElem();
  }

  nextElem() {
    this.multiselComponent.nextElem();
  }
  ngAfterViewInit() {
    this.selectedField = this.multiselComponent.curr_event;
    this.cdr.detectChanges();
  }

}
