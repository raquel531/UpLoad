import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {faThumbsUp, faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faFlag} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detail-video',
  templateUrl: './detail-video.component.html',
  styleUrls: ['./detail-video.component.scss']
})
export class DetailVideoComponent implements OnInit {

  url = 'https://dev-project-upskill-grupo04.pantheonsite.io'

  videos: any = []

  faFlag = faFlag as IconProp
  faThumbsUp = faThumbsUp as IconProp
  faThumbsDown = faThumbsDown as IconProp

  pic = "../../../assets/r_r.jpg"

  constructor(private Service: ServiceService) {}

  ngOnInit(): void {
    this.Service.getvideos().subscribe((videos) => {
      this.videos = <any[]>videos;
    })

  }
}


