import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubGistModel } from 'src/app/models/github/github-gist-model';

@Injectable({
  providedIn: 'root'
})
export class GistsService {
  constructor(private http: HttpClient) {}

  getGists(): Observable<GithubGistModel[]> {
    return this.http.get<GithubGistModel[]>(
      'https://api.github.com/users/hphothong/gists',
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    );
  }

  getRawTextFromFile(rawUrl: string) {
    return this.http.get(rawUrl, { responseType: 'text' });
  }
}
