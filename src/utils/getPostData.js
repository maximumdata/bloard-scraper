import constants from '../constants';

export default function getPostData($, post) {
  const { END_QUOTE_STRING } = constants;
  const data = $(post).data('attributes');
  const contentString = $(post)
    .find('.bloard-post-content')
    .text();
  const lastIndexOfQuote = contentString.lastIndexOf(
    END_QUOTE_STRING,
  );

  const content = (lastIndexOfQuote >= 0
    ? contentString.slice(lastIndexOfQuote)
    : contentString
  )
    .replace(/\[[a-z\/]+\]/gi, '')
    .trim();

  return {
    content,
    data: {
      user: data.user.name,
      upbloards: data.votes.length,
      link: data.path,
      id: data.id,
    },
  };
}
