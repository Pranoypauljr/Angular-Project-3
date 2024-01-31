import { Component, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-multisel',
  templateUrl: './multisel.component.html',
  styleUrls: ['./multisel.component.scss'],
  providers:[HelperService]
})
export class MultiselComponent  {
  @ContentChildren('formFields') formFields: QueryList<any>=new QueryList<any>();
}
