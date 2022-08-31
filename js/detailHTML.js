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
