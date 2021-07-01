

export const getIdCurrentCard = (targetElement, classNameParentElement) =>
  Number(targetElement.closest(classNameParentElement).id);
