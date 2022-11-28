import { Component, ElementRef } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  text = ""
  messageList = new Array<Message>();
  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      this.messageList.push(new Message("romeo", "xddd", "assets/icons/amongus.png"));
    }
    
    let chatbox = document.getElementById("chatbox") as HTMLInputElement
    chatbox.addEventListener("keydown", event => {
      if (event.key == "Enter" && chatbox.value.replaceAll(" ", "") != "") {
        this.sendMessage(chatbox.value);
        chatbox.value = "";
      }
    })
  }
  
  sendMessage(content: string): void {
    console.log('Message sent: "' + content + '"')
    this.messageList.push(new Message("Ev", content, "assets/icons/prism.png"));
  }
}