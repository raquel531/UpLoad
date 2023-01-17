import {Component, Input, OnInit,OnChanges,} from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {faThumbsUp, faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faFlag} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-detail-video',
  templateUrl: './detail-video.component.html',
  styleUrls: ['./detail-video.component.scss']
})
export class DetailVideoComponent implements OnInit, OnChanges {
  url = environment.BASE_URL;
  faFlag = faFlag as IconProp
  faThumbsUp = faThumbsUp as IconProp
  faThumbsDown = faThumbsDown as IconProp

  videos: any = null

  @Input() id_video ?: number;

  constructor(private route: ActivatedRoute, private Service: ServiceService) {
  }

  ngOnInit(): void {
    let id_video = this.id_video ?? this.route.snapshot.params['id_video']
    this.Service.getvideoDetail(id_video).subscribe((videos) => {
      this.videos = videos;
      this.videos = this.videos[0]
      return this.videos.url = this.videos.url.replace("watch?v=", "embed/")
    })

  }

  ngOnChanges(changes: any) {
    this.Service.getvideoDetail(changes.id_video.currentValue).subscribe((videos : any) => {
      this.videos = videos[0];
      return this.videos.url = this.videos.url.replace("watch?v=", "embed/")
    })
  }

}


