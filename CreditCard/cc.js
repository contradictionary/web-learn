const title = "Your Balance";
const balance = 12893.84;

const cardType = "Credit Card";
const cardNumber = "**** **** ***** 2004";

const card = document.createElement("div");
card.className = "card w-96 rounded-xl card-bg-color p-6";

const cc_title = document.createElement("p");
cc_title.className = "title card-type-color";
cc_title.innerHTML = title;

const cc_amount = document.createElement("p");
cc_amount.className = "amount text-white text-2xl mb-14";
cc_amount.innerHTML = balance;

const cc_cardType = document.createElement("p");
cc_cardType.className = "card-type card-type-color";
cc_cardType.innerHTML = cardType;

const cc_number = document.createElement("p");
cc_number.className = "cc-number text-white";
cc_number.innerHTML = cardNumber;

card.appendChild(cc_title);
card.appendChild(cc_amount);
card.appendChild(cc_cardType);
card.appendChild(cc_number);

document.body.appendChild(card);

function createSection(content, cls, parent) {
  const p = document.createElement("p");
  p.className = cls;
  p.innerHTML = content;
  parent.appendChild(p);
  return p;
}
function createCard(title, balance, type, number, color) {
  const rootDiv = document.createElement("div");
  rootDiv.className = "card w-96 rounded-xl p-6 " + color;

  createSection(title, "title card-type-color", rootDiv);

  createSection("₹ "+balance , "amount text-white text-2xl mb-14", rootDiv);

  createSection(type, "card-type card-type-color", rootDiv);

  createSection(number, "cc-number text-white", rootDiv);

  document.body.appendChild(rootDiv);
}

createCard(
  "Ravi Singh",
  1231.23,
  "Debit Card",
  "1234 1234 1234 1234",
  "bg-gray-800"
);
createCard(
  "Anand Singh",
  45645.23,
  "Debit Card",
  "1234 4567 8901 2345",
  "bg-red-700"
);
createCard(
  "Anand Singh",
  45645.23,
  "Debit Card",
  "1234 4567 8901 2345",
  "bg-green-800"
);
