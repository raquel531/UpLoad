import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-playlistpage',
  templateUrl: './playlistpage.component.html',
  styleUrls: ['./playlistpage.component.scss']
})
export class PlaylistpageComponent implements OnInit {

  videosplaylist: any = []
  url = 'https://dev-project-upskill-grupo04.pantheonsite.io'
  id_video!: number

  constructor(private route: ActivatedRoute, private Service: ServiceService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id_playlist = params['id_playlist'];
      this.Service.getvideosplaylist(id_playlist).subscribe((vp) => {
        this.videosplaylist = vp;
      })
    })
  }

  updateIdVideo(id_video: number) {
    this.id_video = id_video;
    console.log(id_video)
    return this.id_video = this.route.snapshot.params['id_video'];
  }

}
