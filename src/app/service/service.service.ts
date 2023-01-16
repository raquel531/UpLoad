// @ts-ignore
// @ts-ignore

import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {DomSanitizer} from "@angular/platform-browser";
import {environment} from "../../environments/environment";

@Pipe({

  name: 'safe'

})

export class SafePipe implements PipeTransform {



  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

let BASE_URL = environment.BASE_URL + "/en/api";


@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  constructor(private http: HttpClient) {
  }

  getchannelPage(id_channel: number) {
    return this.http.get(BASE_URL + "/channels/" + id_channel);
  }
  getvideoDetail(id_video: number) {
    return this.http.get(BASE_URL + "/videos/" + id_video);
  }

  getvideos() {
    return this.http.get(BASE_URL + "/videos");
  }

  gettags() {
    return this.http.get(BASE_URL + "/tags");
  }

  getvideostag(id_tag: number) {
    return this.http.get(BASE_URL + "/tag/videos/" + id_tag)
  }

  getchannels() {
    return this.http.get(BASE_URL + "/channels");
  }

  getvideoschannel(id_channel: number) {
    return this.http.get(BASE_URL + "/channel/videos/" + id_channel)
  }

  getplaylists() {
    return this.http.get(BASE_URL + "/playlists")
  }

  getvideosplaylist(id_playlist: number) {
    return this.http.get(BASE_URL + "/playlist/videos/" + id_playlist)
  }

  getthematics() {
    return this.http.get(BASE_URL + "/thematics")
  }

  getChannelComments (id_channel : number) {
    return this.http.get(BASE_URL + "/comments/channels/" + id_channel);
  }


  multilingual(en: boolean) {
    console.log(BASE_URL, 'function')
    if (en) {
      return BASE_URL = environment.BASE_URL + "/en/api";
    }
     return BASE_URL = environment.BASE_URL + "/pt-pt/api";
  }

}
