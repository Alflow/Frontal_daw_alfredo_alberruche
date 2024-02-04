export default function Header() {
  const $header = document.createElement("header");
  const $nav = document.createElement("nav");
  const $navLink1 = document.createElement("a");
  $navLink1.textContent= "Home"
  $navLink1.href= "#home"

  const $navLink2 = document.createElement("a");
  $navLink2.textContent= "Anchor2"
  $navLink2.href= "#aSite2"


    $nav.appendChild($navLink1);
    $header.appendChild($navLink1);
    $header.appendChild($navLink2);

  

  return $header;
}
