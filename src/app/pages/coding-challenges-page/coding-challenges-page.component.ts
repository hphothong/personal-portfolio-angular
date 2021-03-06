import { Component, OnInit } from '@angular/core';
import { GistsService } from 'src/app/services/github/gists.service';
import { GithubGistModel } from 'src/app/models/github/github-gist-model';

@Component({
  selector: 'app-coding-challenges-page',
  templateUrl: './coding-challenges-page.component.html',
  styleUrls: ['./coding-challenges-page.component.scss']
})
export class CodingChallengesPageComponent implements OnInit {
  public githubGistModels: GithubGistModel[] = [];
  public rawTextFromFiles: object = {};

  constructor(private gistsService: GistsService) {}

  ngOnInit() {
    this.loadGists();
  }

  private loadGists(): void {
    this.gistsService.getGists().subscribe(githubGistModelsJson => {
      githubGistModelsJson.forEach(githubGistModelJson => {
        const githubGistModel: GithubGistModel = new GithubGistModel(
          githubGistModelJson
        );
        this.githubGistModels.push(githubGistModel);
        this.loadGistFiles(githubGistModel);
      });
    });
  }

  private loadGistFiles(githubGistModel: GithubGistModel): void {
    githubGistModel.files.forEach(file => {
      this.gistsService.getRawTextFromFile(file.rawUrl).subscribe(rawText => {
        if (!this.rawTextFromFiles.hasOwnProperty(githubGistModel.url)) {
          this.rawTextFromFiles[githubGistModel.url] = {};
        }
        this.rawTextFromFiles[githubGistModel.url][
          file.rawUrl
        ] = rawText.trim();
      });
    });
  }
}
