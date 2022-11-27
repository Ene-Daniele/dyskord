import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerIconComponent } from './server-icon/server-icon.component';
import { IconTrayComponent } from './icon-tray/icon-tray.component';
import { MainUiComponent } from './main-ui/main-ui.component';
import { ChannelTrayComponent } from './channel-tray/channel-tray.component';
import { ChatComponent } from './chat/chat.component';
import { UsersTrayComponent } from './users-tray/users-tray.component';
import { UserComponent } from './user/user.component';
import { MessageComponent } from './message/message.component';
import { CategoryComponent } from './category/category.component';
import { ChannelComponent } from './channel/channel.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerIconComponent,
    IconTrayComponent,
    MainUiComponent,
    ChannelTrayComponent,
    ChatComponent,
    UsersTrayComponent,
    UserComponent, 
    MessageComponent,
    CategoryComponent,
    ChannelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
