import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  channels : any = []
  videos : any = []
  baseURLIMG= "https://dev-project-upskill-grupo04.pantheonsite.io/"
  baseURLVIDEO= "https://dev-project-upskill-grupo04.pantheonsite.io/api/channel/videos/"


  constructor(private Service: ServiceService) {
    // let channel_id = route.params('channel_id')
  }

  getVideosChanel(id: number): void{
    this.videos = this.Service.getvideoschannel(id)
    console.log(this.videos)
  }

  ngOnInit(): void {
    this.Service.getchannels().subscribe((channels) => {
      this.channels = <any[]>channels;
    })

     // // this.Service.getvideoschannel(this.channel_id).subscribe((videoschannels) => {
     // //  this.videoschannel = videoschannels;
     // })
  }

}
