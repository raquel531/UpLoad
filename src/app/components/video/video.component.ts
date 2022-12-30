import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

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
