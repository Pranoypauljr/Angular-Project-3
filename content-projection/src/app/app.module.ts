import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MultiselComponent } from './multisel/multisel.component';
import { HelperService } from './helper.service';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    MultiselComponent,
    AppComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [MultiselComponent],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
