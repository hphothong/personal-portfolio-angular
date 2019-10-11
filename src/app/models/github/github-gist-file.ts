export class GithubGistFile {
  filename: string;
  type: string;
  language: string;
  rawUrl: string;
  size: number;

  constructor(json: any) {
    this.filename = json.filename;
    this.type = json.type;
    this.language = json.language;
    this.rawUrl = json.raw_url;
    this.size = json.size;
  }
}
