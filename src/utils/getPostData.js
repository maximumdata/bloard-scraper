export default function getPostData(data) {
  return {
    user: data.user.name,
    upbloards: data.votes.length,
    link: data.path,
    id: data.id,
  };
}
