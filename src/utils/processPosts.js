import cheerio from 'cheerio';
import getPostData from './getPostData';

export default function processPosts(data) {
  const $ = cheerio.load(data);
  const posts = $('.bloard-post')
    .map(function(i, el) {
      const data = $(this).data('attributes');
      const content = $(this)
        .find('.bloard-post-content')
        .text();
      return { data: getPostData(data), content };
    })
    .get();

  return posts;
}
