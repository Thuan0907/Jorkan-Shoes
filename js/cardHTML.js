export function Card(props) {
  let content = "";
  props.map((item, index) => {
    return (content += `
              <div key=${index}>
                  <img  class="list_image"src=${item.image}/>
                  <p>${item.title}</p>
                  <span>${item.price}</span>
              </div>
          `);
  });
  return content;
}

export function CardHover(props) {
  let content = "";
  props.map((item, index) => {
    return (content += `
              <div key=${index}>
                  <div class = "cardHoverIcon">
                    <ul>
                        <li><i class="fa-regular fa-heart"></i></li>
                        <li><i class="fa-solid fa-bag-shopping"></i></li>
                        <li><i class="fa-solid fa-magnifying-glass"></i></li>
                    </ul>
                  </div>
                  <img  class="list_image"src=${item.image}/>
                  <p>${item.title}</p>
                  <span>${item.price}</span>
              </div>
          `);
  });
  return content;
}

export function photos(props) {
  let content = "";
  props.map((item, index) => {
    return (content += `
    <div key=${index}>
      <img  class="list_photos"src=${item.images}/>
    </div>
    `);
  });
  return content;
}

export function PhotoHover(props) {
  let content = "";
  props.map((item, index) => {
    return (content += `
              <div key=${index}>
                <div class = "backdrop">
                  <div class = "backdropWrap">
                    <i class="fa-brands fa-instagram"></i>
                    <p>SHOP THE LOOK</p>
                  </div>
                </div>
                <img  class="list_photos"src=${item.images}/>
              </div>
          `);
  });

  return content;
}
export function btnHome(props) {
  if (props) {
    return props.map((item, index) => {
      return `
      <div key=${index}>
          home ${item.number}
      </div>
  `;
    });
  }
}
