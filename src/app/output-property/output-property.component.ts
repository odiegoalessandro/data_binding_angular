import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
  @Input("value") inputValue: number = 0;
  @Output() onChangeInputValue = new EventEmitter();

  increment(){
    this.inputValue++
    this.onChangeInputValue.emit(this.inputValue)
  }
  decrement(){
    this.inputValue--
    this.onChangeInputValue.emit(this.inputValue)
  }
}
