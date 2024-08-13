import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../servives/socket.service';
import { AuthService } from 'src/app/servives/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  messageText: string = '';
  public user: any;
  constructor(private socketService: SocketService, private authService: AuthService) {}

  ngOnInit(): void {
    this.user= this.authService.getUserId() // ID del usuario logueado

    this.socketService.getMessages().subscribe((message: any) => {
      this.messages.push(message);
    });
  }

  sendMessage(): void {
    if (this.messageText.trim()) {
      const message = {
        content: this.messageText,
        userId: this.authService.getUserId(),
        usernamechat: this.authService.getUsername() // Aquí pones el nombre del usuario logueado
      };
      this.socketService.sendMessage(message);
      this.messageText = ''; // Limpiar el campo de entrada
    }
  }
}
