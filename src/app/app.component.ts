import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServiceService} from "./service/service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'upload04';

  videos: any = []

  constructor(private Service: ServiceService) {}

  ngOnInit(): void {
    this.Service.getvideos().subscribe((videos) => {
      this.videos = <any[]>videos;
    })
  }

}
