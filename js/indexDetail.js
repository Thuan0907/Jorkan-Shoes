import { cardPhoto } from "./detailHTML.js";
import { photoProduct } from "./detailData.js";
import { ProductHover } from "./detailHTML.js";

import { homePhoto } from "./detailData.js";
import { HomeHover } from "./detailHTML.js";

function getId(id) {
  return document.getElementById(id);
}

getId("sneakerDetail").innerHTML = cardPhoto(photoProduct);
getId("sneakerDetail").innerHTML = ProductHover(photoProduct);

getId("homeHover").innerHTML = HomeHover(homePhoto);
