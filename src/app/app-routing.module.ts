import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailVideoComponent} from "./components/detail-video/detail-video.component";
import {ChannelpageComponent} from "./pages/channelpage/channelpage.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'channel', component: ChannelpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
