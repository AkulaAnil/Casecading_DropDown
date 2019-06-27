import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private datePipe: DatePipe){
    // this.newDate2 = datePipe.transform('yyyy-MM-dd hh:mm:ss');
  }
  oldDate1 = "2019-05-04 08:31:12";

  oldDate2 = "2019-05-04 08:31:12";

  newDate1 = "05-04-2019 08:31:12";
  // newDate2 = '05-2019-04 08:31:12';
  newDate3 = '12 25 2019 08:31:12';

  // date1 = "05-24-2019 18:21:32";
  // date = new Date(this.date1)
  // date2 = this.datePipe.transform(this.date1, 'yyyy-MM-dd hh:mm:ss')

  date = new Date(this.newDate3);



}