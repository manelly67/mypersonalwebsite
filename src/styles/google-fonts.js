function googleFonts() {
  // Savate font
  const link1 = document.createElement("link");
  link1.setAttribute("rel", "preconnect");
  link1.setAttribute("href", "https://fonts.googleapis.com");
  const link2 = document.createElement("link");
  link2.setAttribute("rel", "preconnect");
  link2.setAttribute("href", 'href="https://fonts.gstatic.com');
  link2.setAttribute("crossorigin", "");
  const link3 = document.createElement("link");
  link3.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Savate:ital,wght@0,200..900;1,200..900&display=swap"
  );
  link3.setAttribute("rel", "stylesheet");

  document.head.appendChild(link1);
  document.head.appendChild(link2);
  document.head.appendChild(link3);
}

export { googleFonts };
