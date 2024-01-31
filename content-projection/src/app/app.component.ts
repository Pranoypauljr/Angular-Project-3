import { AfterContentInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MultiselComponent } from './multisel/multisel.component';
import { HelperService } from './helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterContentInit{
  constructor(private readonly helperservice:HelperService) { } 
  title = 'content-projection';
  public selectedField:string="Name";
  public field_set:string[]=[];
  public curr_event:string='Name';
  public size:number=5;
  public index: number = 0;
  @ViewChild(MultiselComponent) multiselComponent!: MultiselComponent;
  public prevElem($event: Event): void {
    $event.preventDefault();
    if (this.index > 0) {
      this.index--;
      this.showField(this.index);
    }
  }

  ngOnInit(): void {
    console.log('app component ngOnInit')
  }

  public nextElem($event: Event): void {
    
    $event.preventDefault();
    if (this.index <= this.size - 1) {
      this.index+=1;
      this.showField(this.index);
    }
  }
  private showField(index:number): void {
    if (this.multiselComponent.formFields) {
      this.curr_event=this.field_set[index];
      this.selectedField = this.curr_event;
      return;
    }
  }
  ngAfterContentInit(): void {
    this.field_set=this.helperservice.field_list;
  }

}
