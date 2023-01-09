import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {ChannelsComponent} from "./pages/channels/channels.component";
import {ThematicsComponent} from "./pages/thematics/thematics.component";
import {PlaylistsComponent} from "./pages/playlists/playlists.component";
import {VideopageComponent} from "./pages/videopage/videopage.component";
import {ChannelpageComponent} from "./pages/channelpage/channelpage.component";
import {TagvideosComponent} from "./pages/tagvideos/tagvideos.component";
import {ThematicpageComponent} from "./pages/thematicpage/thematicpage.component";
import {PlaylistpageComponent} from "./pages/playlistpage/playlistpage.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'channels', component: ChannelsComponent},
  {path: 'thematics', component: ThematicsComponent},
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'video/:id_video', component: VideopageComponent},
  {path: 'channel/:id_channel', component:ChannelpageComponent},
  {path: 'tagvideos/:id_tag', component: TagvideosComponent},
  {path: 'thematic/:nid', component: ThematicpageComponent },
  {path: 'playlist/:id_playlist', component: PlaylistpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
