import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  private apiUrl = 'https://newsapi.org/v2/top-headlines';
  private apiKey = environment.NEWS_API_KEY;

  constructor(private http: HttpClient) { }

  getSmallPosts() {
    return this.http.get(`${this.apiUrl}?country=us&pageSize=5&apiKey=${this.apiKey}`);
  }

  getMainPost() {
    return this.http.get(`${this.apiUrl}?country=us&pageSize=1&apiKey=${this.apiKey}`);
  }
}
