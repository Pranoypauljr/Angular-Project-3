import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public field_list:string[]=["Name","Email","Password","Confirm"];
}
