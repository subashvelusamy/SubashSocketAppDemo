
import { Component } from '@angular/core';
import { SubashTestSocketService } from './Sharing/subashsocket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
message = '';
receivedMessage = '';

  constructor(private SubashTestSocketService: SubashTestSocketService) {}

  sendMessage() {
    this.SubashTestSocketService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.SubashTestSocketService.getMessage().subscribe((message:string) => {
      this.receivedMessage = message;
    });
  }

}
