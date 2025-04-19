export const scrollToElement = (id: string) => {
  const element = document.querySelector(`#${id}`);
  element && element.scrollIntoView({ behavior: "smooth" });
};

export const navigate = (fragment?: string) => {
  if (fragment) {
    setTimeout(() => {
      scrollToElement(fragment);
    }, 1);
  }
  return undefined;
};
