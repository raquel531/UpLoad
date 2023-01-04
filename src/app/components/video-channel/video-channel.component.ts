import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-video-channel',
  templateUrl: './video-channel.component.html',
  styleUrls: ['./video-channel.component.scss']
})
export class VideoChannelComponent implements OnInit {

  // @Input() thumbnail = '';
  // @Input() user_pic = '';
  // @Input() channel = '';
  @Input() title = '';
  @Input() time_ago = '';
  @Input() url = '';
  @Input() tags = '';
  @Input() id_channel!: number
  videoschannel : any = []



  constructor(private Service: ServiceService) {
  }

  ngOnInit(): void {
    this.Service.getvideoschannel(this.id_channel).subscribe((videoschannels) => {
      this.videoschannel = videoschannels;
    })
  }

}
