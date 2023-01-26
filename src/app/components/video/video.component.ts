import {Component, Input} from '@angular/core';
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faShareNodes} from "@fortawesome/free-solid-svg-icons";
import {faBookmark as faBookmarkSolid} from "@fortawesome/free-solid-svg-icons";
import {ServiceService} from "../../service/service.service";
import {faWhatsapp, faInstagram, faTwitter, faTwitch} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  faShare = faShareNodes
  faBookmark = faBookmark
  faBookmarkSolid = faBookmarkSolid

  faWhatsapp = faWhatsapp
  faInstagram = faInstagram
  faTwitter = faTwitter
  faTwitch = faTwitch

  @Input() thumbnail = '';
  @Input() user_pic = '';
  @Input() channel = '';
  @Input() title = '';
  @Input() time_ago = '';
  @Input() id_video! : number
  @Input() id_channel! : number
  url= 'https://dev-project-upskill-grupo04.pantheonsite.io'

  isShowOptions = true

  showOptions() {
    this.isShowOptions = !this.isShowOptions
  }

  constructor(private Service: ServiceService) {
  }

  get isFavorito() {
    return this.Service.isFavorito(this.id_video)

  }

  get toggleFavorito() {
    return this.Service.toggleFavorito(this.id_video)

  }
}
