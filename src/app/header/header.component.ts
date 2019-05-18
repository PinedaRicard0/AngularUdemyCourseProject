import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('headerTabSelected') tabSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onTabSelect(tab:string)
  {
    this.tabSelected.emit(tab);
  }

}
