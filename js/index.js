import { Card } from "./cardHTML.js";
import { CardHover } from "./cardHTML.js";
import { cards } from "./cardData.js";
import { photoModal } from "./cardData.js";

import { photos } from "./cardHTML.js";
import { photosInstagram } from "./cardData.js";
import { PhotoHover } from "./cardHTML.js";
import { pictureModel } from "./cardHTML.js";

document.getElementById("photoSneaker").innerHTML = pictureModel(photoModal);

document.getElementById("sneakerDetail").innerHTML = Card(cards);
document.getElementById("sneakerDetail").innerHTML = CardHover(cards);

document.getElementById("showInstagramTop").innerHTML = photos(photosInstagram);
document.getElementById("showInstagramTop").innerHTML = PhotoHover(photosInstagram);
