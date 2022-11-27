import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  text = ""
  ngOnInit(): void {
    let chatbox = document.getElementById("chatbox") as HTMLInputElement
    chatbox.addEventListener("keydown", event => {
      if (event.key == "Enter" && chatbox.value.replaceAll(" ", "") != "") {
        this.sendMessage(chatbox.value);
      }
    })
  }
  
  sendMessage(content: string): void {
    console.log('Message sent: "' + content + '"')
    let messages = document.getElementsByClassName("messager");
    for (let i = 0; i < messages.length; i++) {
      //move down messages
    }
  }
}