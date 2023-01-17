import {Component, Input} from '@angular/core';
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faShareNodes} from "@fortawesome/free-solid-svg-icons";
import {faBookmark as faBookmarkSolid} from "@fortawesome/free-solid-svg-icons";
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  faShare = faShareNodes
  faBookmark = faBookmark
  faBookmarkSolid = faBookmarkSolid

  @Input() thumbnail = '';
  @Input() user_pic = '';
  @Input() channel = '';
  @Input() title = '';
  @Input() time_ago = '';
  @Input() id_video! : number
  @Input() id_channel! : number
  url= 'https://dev-project-upskill-grupo04.pantheonsite.io'

  constructor(private Service: ServiceService) {
  }

  get isFavorito() {
    return this.Service.isFavorito(this.id_video)

  }

  get toggleFavorito() {
    return this.Service.toggleFavorito(this.id_video)

  }
}
