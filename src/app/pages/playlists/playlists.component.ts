import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  playlists: any = []
  url = 'https://dev-project-upskill-grupo04.pantheonsite.io'
  id_playlist!:number

  constructor(private route:ActivatedRoute,  private Service: ServiceService) { }

  ngOnInit(): void {
    this.Service.getplaylists().subscribe((playlists) => {
      this.playlists = <any[]>playlists;
    })
  }

}
