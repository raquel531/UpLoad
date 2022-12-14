import { Component, OnInit } from '@angular/core';
import {faHome, faPlay, faFilm, faBarsStaggered} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";


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

  constructor() { }

  ngOnInit(): void {
  }

}
