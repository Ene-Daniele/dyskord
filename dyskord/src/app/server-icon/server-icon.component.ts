import { Component } from '@angular/core';

@Component({
  selector: 'app-server-icon',
  templateUrl: './server-icon.component.html',
  styleUrls: ['./server-icon.component.css']
})
export class ServerIconComponent {
  
  iconPath = ""
  ngOnInit(): void {
    switch (Math.floor(Math.random() * 10) + 1){
      case 1:
        this.iconPath = "assets/icons/amongus";
      break;
      case 2:
        this.iconPath = "assets/icons/arrow";
      break;
      case 3:
        this.iconPath = "assets/icons/c";
      break;
      case 4:
        this.iconPath = "assets/icons/eye";
      break;
      case 5:
        this.iconPath = "assets/icons/galaxy";
      break;
      case 6:
        this.iconPath = "assets/icons/gaming";
      break;
      case 7:
        this.iconPath = "assets/icons/prism";
      break;
      case 8:
        this.iconPath = "assets/icons/python";
      break;
      case 9:
        this.iconPath = "assets/icons/skull";
      break;
      case 10:
        this.iconPath = "assets/icons/t";
      break;
    }
    this.iconPath += ".png";
  }
}