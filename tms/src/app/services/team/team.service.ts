import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private url = Environment.baseUrl;
  constructor(private http: HttpClient) { }

  
}
