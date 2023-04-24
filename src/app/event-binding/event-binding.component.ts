import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  inputValue: string = "";
  saveValue: string = "";
  isMouseOver: boolean = false;

  onClick(){
    alert("click")
  }

  onKeyUp(event: string){
    this.inputValue = event
  }

  onSaveValue(value: string){
    this.saveValue = value
  }
  onMouseOver(){
    this.isMouseOver = !this.isMouseOver
  }
}
