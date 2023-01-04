import { Component, OnInit, Input } from '@angular/core';
import {ServiceService} from "../../service/service.service";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  videos: any = []
  url= 'https://project-upskill-grupo04.ddev.site'
  @Input() id_video!: number

  constructor(private Service: ServiceService) {}

  ngOnInit(): void {
    this.Service.getvideos().subscribe((videos) => {
      this.videos = <any[]>videos;
    })
  }

}
