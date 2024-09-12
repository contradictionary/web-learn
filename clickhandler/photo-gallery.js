let idCounter = 0;

function removeItem(id) {
  const itemToDelete = document.querySelector(id);
  const parent = document.querySelector("#gallery");
  parent.removeChild(itemToDelete);
}
function onButtonClick(e) {
  const button = e.target;
  const imgId = button.id;
//   const itemToDelete = button.parentElement;
//   const parent = itemToDelete.parentElement;
//   parent.removeChild(itemToDelete);
    removeItem("#" + imgId);
}
function createGalleryItem(title, image, alt) {
  const rootDiv = document.createElement("div");
  rootDiv.className = "relative border rounded-xl";
  rootDiv.id = "img-" + ++idCounter;

  const p = document.createElement("p");
  p.innerHTML = title;
  p.className = "title absolute top-0 text-white mx-4 mt-1 text-xl";

  const img = document.createElement("img");
  img.src = image;
  img.alt = alt;
  img.className = "w-80 rounded-xl";

  const btn = document.createElement("button");
  btn.id = rootDiv.id;
  btn.className =
    "flex rounded-full px-3 py-1.5 absolute bottom-0 right-0 bg-white text-red-600 ring-red-700 hover:ring mx-4 my-2 font-bold";
  btn.innerHTML = "X";
  btn.addEventListener("click", onButtonClick);

  // rootDiv.append(p,img,btn);
  rootDiv.appendChild(p);
  rootDiv.appendChild(img);
  rootDiv.appendChild(btn);

  document.querySelector("#gallery").appendChild(rootDiv);
}
const items = [
  {
    title: "Jet ABC",
    img: "./images/2wqp7hl.jpeg",
  },
  {
    title: "Jet EFG",
    img: "./images/cte6cpr.jpeg",
  },
  {
    title: "Jet IJK",
    img: "./images/FMxDed8.jpeg",
  },
  {
    title: "Jet LM",
    img: "./images/SYlTEMP.jpeg",
  },
  {
    title: "Jet OP",
    img: "./images/ln6AHYJ.jpeg",
  },
  {
    title: "Jet QR",
    img: "./images/xStUxmI.jpeg",
  },
  {
    title: "Jet ST",
    img: "./images/CwvQ8mb.jpeg",
  },
  {
    title: "Jet UV",
    img: "./images/J3sJdHi.jpeg",
  },
  {
    title: "Jet WX",
    img: "./images/w5hvD05.jpeg",
  },
  {
    title: "Jet YZ",
    img: "./images/zSWSBBR.jpeg",
  },
];

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  createGalleryItem(item.title, item.img, "image alt");
}
