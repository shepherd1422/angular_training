import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reciever-component',
  standalone: true,
  imports: [],
  templateUrl: './reciever-component.component.html',
  styleUrl: './reciever-component.component.scss'
})
export class RecieverComponentComponent {
  @Input()
  message: string = '';

  recieveMessage($event: string) {
    this.message = $event
  }
}
