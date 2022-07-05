import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Projeto Udemy';
  @Output() featureSelected = new EventEmitter<string>();


  onSelect (feature: string){
    this.featureSelected.emit(feature);
  }
}
