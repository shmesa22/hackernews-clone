import getArticleLink from './getArticleLink';

it('build article link', () => {
  expect(getArticleLink({
    url: '',
    id: 1828647
  })).toEqual(
    'https://news.ycombinator.com/item?id=1828647'
  );
  expect(getArticleLink({
    url: 'https://avc.com/2018/10/who-are-my-investors/',
    id: 1828647
  })).toEqual(
    'https://avc.com/2018/10/who-are-my-investors/'
  )
});
