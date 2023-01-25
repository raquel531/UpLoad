import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-thematics',
  templateUrl: './thematics.component.html',
  styleUrls: ['./thematics.component.scss']
})
export class ThematicsComponent implements OnInit {

  thematics: any = []
  url = "https://dev-project-upskill-grupo04.pantheonsite.io/"

  constructor(private route: ActivatedRoute , private Service: ServiceService) {
  }

  ngOnInit(): void {
    this.Service.subscribeLanguage(() => {
      this.Service.getthematics().subscribe((thematics) => {
        this.thematics = thematics;
      })
    })
  }

}
