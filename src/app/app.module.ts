import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { VideopageComponent } from './pages/videopage/videopage.component';
import { ThematicsComponent } from './pages/thematics/thematics.component';
import { ThematicpageComponent } from './pages/thematicpage/thematicpage.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { ChannelpageComponent } from './pages/channelpage/channelpage.component';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { PlaylistpageComponent } from './pages/playlistpage/playlistpage.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoComponent } from './components/video/video.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecArticleComponent } from './components/rec-article/rec-article.component';
import { RecChannelsComponent } from './components/rec-channels/rec-channels.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HeaderChannelComponent } from './components/header-channel/header-channel.component';
import { DetailVideoComponent } from './components/detail-video/detail-video.component';
import * as http from "http";
import {HttpClientModule} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    VideopageComponent,
    ThematicsComponent,
    ThematicpageComponent,
    ChannelsComponent,
    ChannelpageComponent,
    PlaylistsComponent,
    PlaylistpageComponent,
    HeaderComponent,
    VideoComponent,
    NavbarComponent,
    RecArticleComponent,
    RecChannelsComponent,
    CommentsComponent,
    HeaderChannelComponent,
    DetailVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
