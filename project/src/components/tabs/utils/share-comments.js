

export const shareComments = (comments) => {
  const evenComments = [];
  const oddComments = [];

  comments.forEach((comment, index) => {
    (index % 2 === 0) ? evenComments.push(comment) : oddComments.push(comment);
  });

  return {
    evenComments,
    oddComments,
  };
};
