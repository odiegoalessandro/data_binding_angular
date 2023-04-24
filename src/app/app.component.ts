import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data_binding';
  courseName = "Angular";

  onInputChange(event: any){
    console.log(event)
  }

}
