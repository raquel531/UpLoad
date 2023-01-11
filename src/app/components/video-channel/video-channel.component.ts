import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-video-channel',
  templateUrl: './video-channel.component.html',
  styleUrls: ['./video-channel.component.scss']
})
export class VideoChannelComponent implements OnInit {

  @Input() id_channel!: number
  videoschannel : any = []
  url= 'https://dev-project-upskill-grupo04.pantheonsite.io'



  constructor(private Service: ServiceService) {
  }

  ngOnInit(): void {
    this.Service.getvideoschannel(this.id_channel).subscribe((videoschannels) => {
      this.videoschannel = videoschannels;
    })
  }

  embed(video: string) {
    return video.replace("watch?v=", "embed/")
  }

}
