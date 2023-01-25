import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-thematicpage',
  templateUrl: './thematicpage.component.html',
  styleUrls: ['./thematicpage.component.scss']
})
export class ThematicpageComponent implements OnInit {

  videosthematics: any = []
  thematics: any = []
  id_thematic!: number
  id_tag = ''
  url = 'https://dev-project-upskill-grupo04.pantheonsite.io'

  constructor(private route: ActivatedRoute, private Service: ServiceService) {
  }

  ngOnInit(): void {
    this.Service.subscribeLanguage(() => {
      this.id_thematic = this.route.snapshot.params['id_thematic']
      this.Service.getthematicspage(this.id_thematic).subscribe((t) => {
        this.thematics = t;
        this.thematics = this.thematics[0]
        this.id_tag = this.thematics.id_tag
        this.Service.getvideosthematics(this.id_tag).subscribe((vt) => {
          this.videosthematics = vt
        })
      })
    });
  }
}
