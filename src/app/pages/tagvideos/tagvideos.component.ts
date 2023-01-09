import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-tagvideos',
  templateUrl: './tagvideos.component.html',
  styleUrls: ['./tagvideos.component.scss']
})
export class TagvideosComponent implements OnInit {

  videostag: any = [];

  constructor(private route: ActivatedRoute, private Service: ServiceService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id_tag = params['id_tag'];
      this.Service.getvideostag(id_tag).subscribe((v) => {
        this.videostag = v;
      })
    })
  }

}
