import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {ChannelsComponent} from "./pages/channels/channels.component";
import {ThematicsComponent} from "./pages/thematics/thematics.component";
import {PlaylistsComponent} from "./pages/playlists/playlists.component";
import {VideopageComponent} from "./pages/videopage/videopage.component";
import {ChannelpageComponent} from "./pages/channelpage/channelpage.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'channels', component: ChannelsComponent},
  {path: 'thematics', component: ThematicsComponent},
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'video/:id_video', component: VideopageComponent},
  {path: 'channel/:id_channel', component:ChannelpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
