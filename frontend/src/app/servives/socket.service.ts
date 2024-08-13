import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: any;

  constructor() {
    this.socket = io('http://localhost:3000'); // Asegúrate de que el backend esté corriendo
  }

  sendMessage(message: any) {
    this.socket.emit('newMessage', message);
  }

  getMessages(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('message', (message: any) => {
        observer.next(message);
        console.log(message)
      });
    });
  }
}
