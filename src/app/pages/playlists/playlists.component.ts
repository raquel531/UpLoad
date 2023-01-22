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


  constructor(private route:ActivatedRoute,  private Service: ServiceService) { }

  ngOnInit(): void {
    this.Service.subscribeLanguage(() => {
      this.Service.getplaylists().subscribe((playlists) => {
        this.playlists = playlists;
      })
    });
  }

}
