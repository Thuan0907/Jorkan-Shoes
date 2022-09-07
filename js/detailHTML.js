export function cardPhoto(props) {
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

export function ProductHover(props) {
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

export function HomeHover(props) {
  let content = "";
  console.log(props);
  props.map((item, index) => {
    return (content += `
      <div class = "hoverHomePhoto" key=${index}>
        <img  class="home_image"src=${item.image}/>
        <h5>${item.title}</h5>
      </div>
    `);
  });
  return content;
}
