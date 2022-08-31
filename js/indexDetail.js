import { cardPhoto } from "./detailHTML";
import { photoProduct } from "./detailData";

// const photoProduct = require("photoProduct");
function getId(id) {
  return document.getElementById(id);
}

getId("sneakerDetail").innerHTML = cardPhoto(photoProduct);
