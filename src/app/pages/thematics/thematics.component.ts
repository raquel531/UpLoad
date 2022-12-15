import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-thematics',
  templateUrl: './thematics.component.html',
  styleUrls: ['./thematics.component.scss']
})
export class ThematicsComponent implements OnInit {

  thematics : any = []
  baseURLMEDIA= "https://dev-project-upskill-grupo04.pantheonsite.io/"

  constructor(private Service: ServiceService) { }

  ngOnInit(): void {
    this.Service.getthematics().subscribe((thematics) => {
      this.thematics = <any[]>thematics;
    })
  }

}
