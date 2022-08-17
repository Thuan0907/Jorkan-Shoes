import { Card } from "./cardHTML.js";
import { CardHover } from "./cardHTML.js";
import { cards } from "./cardData.js";

import { photos } from "./cardHTML.js";
import { photosInstagram } from "./cardData.js";
import { PhotoHover } from "./cardHTML.js";

function getId(id) {
  return document.getElementById(id);
}
getId("sneakerDetail").innerHTML = Card(cards);
getId("sneakerDetail").innerHTML = CardHover(cards);

getId("showInstagramTop").innerHTML = photos(photosInstagram);
getId("showInstagramTop").innerHTML = PhotoHover(photosInstagram);

