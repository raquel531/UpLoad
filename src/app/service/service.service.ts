import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const BASE_URL = 'https://project-grupo04.ddev.site'

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) { }

  getvideos() {
    return this.http.get(BASE_URL + "/videos");
  }

}
