import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class SubashTestSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:1979'); 
  }

  sendMessage(message: string) {
    this.socket$.next(message);
  }

  getMessage() {
 
    return this.socket$.asObservable();
  }  
  
}
