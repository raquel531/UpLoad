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

let Comments_URL = environment.BASE_URL;


@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  private languageQueue: Function[] = [];

  constructor(private http: HttpClient) {
  }

  favoritos: number[] = JSON.parse(localStorage.getItem("favoritos") || "[]");


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

  getchannelPage(id_channel: number) {
    return this.http.get(BASE_URL + "/channels/" + id_channel);
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

  getChannelComments(id_channel: number) {
    return this.http.get(BASE_URL + "/comments/channels/" + id_channel);
  }

  postChannelComment(id_channel: number, name: string | number | null, email: string, comment: string) {
    let postBody = {
      "entity_id": [{"target_id": id_channel}], // id do conteúdo para onde vai o comentário
      "entity_type": [{"value": "node"}], // tipo de entidade (node ou media)
      "comment_type": [{"target_id": "comment"}], // nome máquina do tipo de comentário
      "field_name": [{"value": "field_comments"}], // nome máquina do campo de comentário no tipo de conteúdo
      "field_your_name": [{"value": name}],
      "field_email": [{"value": email}],
      "comment_body": [{"value": comment, "format": "plain_text"}]
    };
    this.http.post(Comments_URL + "/comment", postBody).subscribe(()=>{
      console.log("comentario postado")
    })
  }

  lang = "en";
  languages = ["en", "pt-pt"]

  toggleLanguage() {
    if (this.languages.indexOf(this.lang) == 0) {
      this.lang = this.languages[1];
    } else {
      this.lang = this.languages[0];
    }
    BASE_URL = environment.BASE_URL + "/" + this.lang + "/api";
    this.languageQueue.forEach((queue: Function) => {
      queue(this.lang);
    })

    return this.lang;
  }

  subscribeLanguage(queue: Function) {
    this.languageQueue.push(queue);
    queue(this.lang);
  }

  toggleFavorito(id_video: number) {
    if (this.favoritos.includes(id_video)) {
      let indice = this.favoritos.indexOf(id_video)
      this.favoritos.splice(indice, 1)
    } else {
      this.favoritos.push(id_video)
    }
    localStorage.setItem("favoritos", JSON.stringify(this.favoritos))
  }

  getFavoritos() {
    return this.http.get(BASE_URL + "/videos/" + this.favoritos.join(','));
  }

  isFavorito(id_video: number): boolean {
    return this.favoritos.includes(id_video)
  }
}
