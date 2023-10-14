import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() title: string = "";
  @Input() data : any = [];
  @Output() selectedValue: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { 
    
   }
  ngOnInit(): void {

  }

  detectChanges(event : any){
    this.selectedValue.emit(event);
  }
  
}
