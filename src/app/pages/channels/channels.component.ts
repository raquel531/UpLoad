import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  channels : any = []
  url = 'https://dev-project-upskill-grupo04.pantheonsite.io'
  @Input() id_channel!: number
  constructor(private Service: ServiceService) {}


  ngOnInit(): void {
    this.Service.subscribeLanguage(() => {
      this.Service.getchannels().subscribe((channels) => {
        this.channels = <any[]>channels;
      })
    });
  }

}
