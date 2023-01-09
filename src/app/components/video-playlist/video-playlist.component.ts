import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-video-playlist',
  templateUrl: './video-playlist.component.html',
  styleUrls: ['./video-playlist.component.scss']
})
export class VideoPlaylistComponent implements OnInit {

  @Input() id_playlist!: number
  videosplaylist : any = []
  url = 'https://dev-project-upskill-grupo04.pantheonsite.io'

  constructor(private Service: ServiceService) { }

  ngOnInit(): void {
    this.Service.getvideosplaylist(this.id_playlist).subscribe((vp) => {
      this.videosplaylist = vp;
    })
  }

}
