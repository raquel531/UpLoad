import {Component, Input, OnInit} from '@angular/core';
import {faHome, faPlay, faFilm, faBarsStaggered} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ServiceService} from "../../service/service.service";
import {faBars} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faBars = faBars
  faHome = faHome as IconProp
  faChannels = faBarsStaggered as IconProp
  faThemedArticles = faFilm
  faPlaylists = faPlay

  tags: any = []
  @Input() id_tag!: number;

  isMoreTags = true

  navLang = "en";

  menuClicked = false

  showMenu() {
    this.menuClicked = !this.menuClicked
}

  moreTags() {
    this.isMoreTags = !this.isMoreTags
  }

  constructor(private Service: ServiceService) {
  }

  ngOnInit(): void {

    this.Service.subscribeLanguage(() => {
      this.Service.gettags().subscribe((tags) => {
        this.tags = tags;
      })
    });
  }

  multilingualclick() {
    this.navLang = this.Service.toggleLanguage()
  }
}
