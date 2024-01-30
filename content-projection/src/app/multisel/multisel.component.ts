import { Component, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-multisel',
  templateUrl: './multisel.component.html',
  styleUrls: ['./multisel.component.scss'],
  providers:[HelperService]
})
export class MultiselComponent implements AfterContentInit {
  constructor(private readonly helperservice:HelperService, private cd: ChangeDetectorRef){}
  @ContentChildren('formFields') formFields!: QueryList<any>;
  public index: number = 0;
  public field_set:string[]=[];
  public curr_event:string='Name';
  ngAfterContentInit(): void {
    this.field_set=this.helperservice.field_list;
    //this.showField(this.index);
    this.cd.detectChanges();
  }

  public nextElem(): void {
    if (this.index < this.formFields.length - 1) {
      
      this.index++;
      this.showField(this.index);
      this.cd.detectChanges();
    }
  }

  public prevElem(): void {
    if (this.index > 0) {
      this.index--;
      this.showField(this.index);
      this.cd.detectChanges();
    }
  }

  private showField(index:number): void {
    if (this.formFields) {
      // this.formFields.toArray().forEach((field, i) => {
      //   field.style.display = i === this.index ? 'block' : 'none';
      // });
      this.curr_event=this.field_set[index];
      return;
    }
  }
}
