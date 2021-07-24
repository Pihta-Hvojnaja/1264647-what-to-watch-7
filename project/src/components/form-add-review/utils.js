
const LengtTextComment = {
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
  return textLength < LengtTextComment.MIN || textLength > LengtTextComment.MAX;
};

