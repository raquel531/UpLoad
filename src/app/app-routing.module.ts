import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChannelpageComponent} from "./pages/channelpage/channelpage.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {ThematicpageComponent} from "./pages/thematicpage/thematicpage.component";
import {PlaylistpageComponent} from "./pages/playlistpage/playlistpage.component";
import {ChannelsComponent} from "./pages/channels/channels.component";
import {ThematicsComponent} from "./pages/thematics/thematics.component";
import {PlaylistsComponent} from "./pages/playlists/playlists.component";
import {VideopageComponent} from "./pages/videopage/videopage.component";
import {DetailVideoComponent} from "./components/detail-video/detail-video.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'channels', component: ChannelsComponent},
  {path: 'thematics', component: ThematicsComponent},
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'video-channel/:id_video', component: VideopageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
