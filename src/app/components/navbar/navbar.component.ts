import { Component, OnInit } from '@angular/core';
import {faHome, faPlay, faFilm, faBarsStaggered} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ServiceService} from "../../service/service.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faHome = faHome as IconProp
  faChannels = faBarsStaggered as IconProp
  faThemedArticles = faFilm
  faPlaylists = faPlay

  tags : any = []

  constructor(private Service: ServiceService) { }

  ngOnInit(): void {
    this.Service.gettags().subscribe((tags) => {
      this.tags = <any[]>tags;
    })
  }

}
