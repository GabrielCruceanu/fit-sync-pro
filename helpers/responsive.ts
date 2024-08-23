import isBrowser from "./is-browser";

function isSmallScreen(): boolean {
  return isBrowser() && window.innerWidth < 768;
}
function isMediumScreen(): boolean {
  return isBrowser() && window.innerWidth >= 768 && window.innerWidth < 1024;
}
function isLargeScreen(): boolean {
  return isBrowser() && window.innerWidth >= 1024;
}
export { isSmallScreen, isMediumScreen, isLargeScreen };
