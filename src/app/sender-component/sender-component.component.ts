import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sender-component',
  standalone: true,
  imports: [],
  templateUrl: './sender-component.component.html',
  styleUrl: './sender-component.component.scss',
})
export class SenderComponentComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Helli from SenderComponent!')
  }
}
