export const scrollToElement = (id: string) => {
  const element = document.querySelector(`#${id}`);
  element && element.scrollIntoView({ behavior: "smooth" });
};
