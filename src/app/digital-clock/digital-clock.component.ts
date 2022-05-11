import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {
  private daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private date = new Date();

  public hour: any;
  public minute!: string;
  public second!: string;
  public ampm!: string;
  public day!: string;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);

    }, 1000); // This will call the updateDate method in each second
    this.day = this.daysArray[this.date.getDay()];
    // getDays returns the fays in integer format, from 0 to 6 then takes corresponding day from the daysArray.
  }

  private updateDate(date: Date) {
    const hours = date.getHours(); // get the hours from the date
    this.ampm = hours >= 12 ? 'PM' : 'AM';
    this.hour = hours % 12; // Makes the hour in 12 hours format
    this.hour = this.hour ? this.hour : 12; // If the hour is 0 then 12 is assigned to it
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour; // If the hour is single digit, then adds 0 infront of it 
    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
  }

}
