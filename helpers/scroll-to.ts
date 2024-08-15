export const handleScrollTo = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    window.scrollTo({
      top: element.offsetTop - 50,
      behavior: "smooth",
    });
  }
};
