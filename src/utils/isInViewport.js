const isInViewport = (element) => {
  const boundingClientRect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return boundingClientRect.top <= windowHeight - windowHeight / 4;
};

export default isInViewport;
