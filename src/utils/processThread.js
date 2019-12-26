import cheerio from 'cheerio';
import getPostData from './getPostData';

// this should become process page. process thread needs to check for pagination, and step through it calling process page with each new page.
export default function processThread(data) {
  const $ = cheerio.load(data);
  const posts = $('.bloard-post')
    .map(function() {
      return getPostData($, this);
    })
    .get();

  return posts;
}
