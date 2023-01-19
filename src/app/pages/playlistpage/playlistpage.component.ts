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
      console.log(id_playlist)
      if (id_playlist == "21") {
        this.Service.getFavoritos().subscribe((vf:any) =>{
          this.id_video = vf[0].id_video;
          this.videosplaylist = vf;
          console.log(this.videosplaylist)
        })
      } else {
        this.Service.getvideosplaylist(id_playlist).subscribe((vp: any) => {
          this.id_video = vp[0].id_video;
          this.videosplaylist = vp;
        })
      }
    })
  }

  updateIdVideo(id_video: number) {
    this.id_video = id_video;
  }

}
