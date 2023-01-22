import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-channelpage',
  templateUrl: './channelpage.component.html',
  styleUrls: ['./channelpage.component.scss']
})
export class ChannelpageComponent implements OnInit {
  channels: any = []
  url = 'https://dev-project-upskill-grupo04.pantheonsite.io'
  id_channel: any
  comments: any = []

  constructor(private route: ActivatedRoute, private Service: ServiceService) {
  }

  ngOnInit(): void {
    this.id_channel = this.route.snapshot.params['id_channel']
    this.Service.subscribeLanguage(() => {
      this.Service.getchannelPage(this.id_channel).subscribe((channels) => {
        this.channels = channels;
        this.channels = this.channels[0]
      })
    });

    this.Service.getChannelComments(this.id_channel).subscribe((comments) => {
      this.comments = comments;
    })
  }
}
