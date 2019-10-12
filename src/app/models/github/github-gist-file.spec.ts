import { GithubGistFile } from './github-gist-file';

describe('GithubGistFile', () => {
  it('should create an instance', () => {
    expect(
      new GithubGistFile({
        filename: 'test',
        type: 'test',
        language: 'test',
        rawUrl: 'test',
        size: 1
      })
    ).toBeTruthy();
  });
});
