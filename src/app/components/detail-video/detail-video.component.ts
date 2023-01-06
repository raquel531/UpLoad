import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {faThumbsUp, faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faFlag} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-video',
  templateUrl: './detail-video.component.html',
  styleUrls: ['./detail-video.component.scss']
})
export class DetailVideoComponent implements OnInit {

  videos: any = []
  url= 'https://dev-project-upskill-grupo04.pantheonsite.io'

  faFlag = faFlag as IconProp
  faThumbsUp = faThumbsUp as IconProp
  faThumbsDown = faThumbsDown as IconProp


  constructor(private route: ActivatedRoute, private Service: ServiceService) {}

  ngOnInit(): void {
    let id_video = this.route.snapshot.params['id_video']
    this.Service.getvideoDetail(id_video).subscribe((videos) => {
      this.videos = videos;
      this.videos = this.videos[0]
      console.log(videos)
       return this.videos.url = this.videos.url.replace("watch?v=", "embed/")

    })

  }

}


