import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-rec-article',
  templateUrl: './rec-article.component.html',
  styleUrls: ['./rec-article.component.scss']
})
export class RecArticleComponent implements OnInit {

  channels: any = []
  thematics: any = []
  @Input() id_channel!: number
  url= 'https://dev-project-upskill-grupo04.pantheonsite.io'

  constructor(private Service: ServiceService) { }

  ngOnInit(): void {
    this.Service.getthematics().subscribe((thematics) => {
      this.thematics = <any[]>thematics;
    })

  }

}
