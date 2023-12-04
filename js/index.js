{
  setTimeout(() => document.body.classList.add("render"), 60);
  const nav = Array.from(document.querySelectorAll("nav.navs > .nav"));
  const total = nav.length;
  const current = nav.findIndex((el) => el.classList.contains("nav--current"));
  const navigate = (linkEl) => {
    document.body.classList.remove("render");
    document.body.addEventListener(
      "transitionend",
      () => (window.location = linkEl.href),
    );
  };
  nav.forEach((link) =>
    link.addEventListener("click", (ev) => {
      ev.preventDefault();
      navigate(ev.target);
    }),
  );
  document.addEventListener("keydown", (ev) => {
    const keyCode = ev.keyCode || ev.which;
    let linkEl;
    if (keyCode === 37) {
      linkEl = current > 0 ? nav[current - 1] : nav[total - 1];
    } else if (keyCode === 39) {
      linkEl = current < total - 1 ? nav[current + 1] : nav[0];
    } else {
      return false;
    }
    navigate(linkEl);
  });
}
