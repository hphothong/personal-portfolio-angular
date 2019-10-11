import { GithubGistFile } from './github-gist-file';

export class GithubGistModel {
  url: string;
  files: GithubGistFile[];
  createdAt: Date;
  updatedAt: Date;
  description: string;
  htmlUrl: string;

  constructor(json: any) {
    this.url = json.url;
    this.files = this.parseFiles(json.files);
    this.createdAt = new Date(json.created_at);
    this.updatedAt = new Date(json.updated_at);
    this.description = json.description;
    this.htmlUrl = json.html_url;
  }

  parseFiles(filesJson: any): GithubGistFile[] {
    const githubGistFiles: GithubGistFile[] = [];
    for (const filename in filesJson) {
      if (filesJson.hasOwnProperty(filename)) {
        githubGistFiles.push(new GithubGistFile(filesJson[filename]));
      }
    }
    return githubGistFiles;
  }
}
