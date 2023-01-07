import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-rec-article',
  templateUrl: './rec-article.component.html',
  styleUrls: ['./rec-article.component.scss']
})
export class RecArticleComponent implements OnInit {

  thematics: any = []
  url= 'https://dev-project-upskill-grupo04.pantheonsite.io'

  constructor(private Service: ServiceService) { }

  ngOnInit(): void {
    this.Service.getthematics().subscribe((thematics) => {
      this.thematics = <any[]>thematics;
    })
  }

}
