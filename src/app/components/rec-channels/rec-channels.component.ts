import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-rec-channels',
  templateUrl: './rec-channels.component.html',
  styleUrls: ['./rec-channels.component.scss']
})
export class RecChannelsComponent implements OnInit {

  channels: any = []
  url= 'https://dev-project-upskill-grupo04.pantheonsite.io'
  @Input() id_channel!: number

  isShowMore = true

  showMore() {
    this.isShowMore = !this.isShowMore
  }

  constructor(private Service: ServiceService) {}

  ngOnInit(): void {
    this.Service.subscribeLanguage(() => {
      this.Service.getchannels().subscribe((channels) => {
        this.channels = <any[]>channels;
      })
    })
  }

}
