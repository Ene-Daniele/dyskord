import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() name = "Default User"
  @Input() pic = "assets/icons/amongus.png"
  @Input() status = "Empty status"
}
