import { GithubGistModel } from './github-gist-model';

describe('GithubGistModel', () => {
  it('should create an instance', () => {
    expect(
      new GithubGistModel({
        url: 'test',
        files: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        description: 'test',
        htmlUrl: 'test'
      })
    ).toBeTruthy();
  });
});
