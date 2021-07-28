
const LengthTextComment = {
  MIN: 50,
  MAX: 400,
};


export const getRating = (dataComment, value) => {
  dataComment.rating = value;
};

export const getText = (dataComment, value) => {
  dataComment.comment = value;
};


export const checkLengthText = (text) => {
  const textLength = text.length;
  return textLength < LengthTextComment.MIN || textLength > LengthTextComment.MAX;
};

