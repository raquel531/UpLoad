import {Component, OnInit, Input} from '@angular/core';
import {ServiceService} from "../../service/service.service";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  videos: any = []
  @Input() id_video!: number

  page = 1;

  isShowMore = true

  showMore() {
    this.page++;
  }

  constructor(private Service: ServiceService) {
  }

  ngOnInit(): void {
    this.Service.subscribeLanguage(() => {
      this.Service.getvideos().subscribe((videos) => {
        this.videos = videos;
      })
    });
  }

}
