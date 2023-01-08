import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {


  @Input() thumbnail = '';
  @Input() user_pic = '';
  @Input() channel = '';
  @Input() title = '';
  @Input() time_ago = '';
  @Input() id_video! : number
  @Input() id_channel! : number
  url= 'https://dev-project-upskill-grupo04.pantheonsite.io'

}
