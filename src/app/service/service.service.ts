import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer } from "@angular/platform-browser";

@Pipe({

  name: 'safe'

})

export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

const BASE_URL = 'https://dev-project-upskill-grupo04.pantheonsite.io/api'

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) { }

  getvideos() {
    return this.http.get(BASE_URL + "/videos");
  }

  gettags() {
    return this.http.get(BASE_URL + "/tags");
  }

  getchannels() {
    return this.http.get(BASE_URL + "/channels");
  }

  getplaylists() {
    return this.http.get(BASE_URL + "/playlists")
  }

  getthematics() {
    return this.http.get(BASE_URL + "/thematics")
  }

  getvideostag() {
    return this.http.get(BASE_URL + "/taxonomy/videos" )
  }

  getvideoschannel(channel_id : number) {
    return this.http.get(BASE_URL + "/channel/videos" + channel_id )
  }

}
