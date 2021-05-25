import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  apiKey = 'AIzaSyAlboJjjU_0Wh1f_WCoTI7DH45dEe7EHNo';
  constructor(public http: HttpClient) { }
  getVideosForChanel(channel, maxResults): any {
    const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults;
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }));
  }
}
