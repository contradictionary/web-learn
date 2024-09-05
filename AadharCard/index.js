function getAadharCard(userName, userDob, aadharNumber) {
  const rootDiv = document.createElement("div");
  rootDiv.className = "rounded-lg border-red-400 bg-gray-50 shadow-sm";
  rootDiv.style.width = "360px";

  const div1 = document.createElement("div");
  div1.className = "border-b-2 py-8 border-b-red-700";
  rootDiv.appendChild(div1);

  const divHeading = document.createElement("div");
  divHeading.className = "text-center text-xl";
  divHeading.innerHTML = "Aadhar Card";
  div1.appendChild(divHeading);

  const divWrapper = document.createElement("div");
  divWrapper.className = "flex px-8 gap-4 py-2";
  div1.appendChild(divWrapper);

  const img = document.createElement("img");
  img.src = "./profile-pic.png";
  img.alt = "profile Pic";
  img.width = "80";
  divWrapper.appendChild(img);

  const textDiv = document.createElement("div");
  divWrapper.appendChild(textDiv);

  const nameH = document.createElement("h2");
  nameH.className = "text-lg";
  nameH.innerHTML = userName;
  textDiv.appendChild(nameH);

  const dobH = document.createElement("h3");
  dobH.innerHTML = userDob;
  textDiv.appendChild(dobH);

  const bottomDiv = document.createElement("div");
  bottomDiv.className = "px-4 py-2 text-center";
  rootDiv.appendChild(bottomDiv);

  const numberH = document.createElement("h3");
  numberH.className = "text-2xl";
  numberH.innerHTML = aadharNumber;
  bottomDiv.appendChild(numberH);

  return rootDiv;
}
const detailRavi = {
  Name: "Ravi Gyan Singh",
  DOB: "01-01-2001",
  Number: "1234 1234 1234",
};
const detailAanad = {
  Name: "Anand Singh",
  DOB: "01-01-2002",
  Number: "1234 1234 1234",
};
const shailendraAanad = {
  Name: "Shailendra Singh",
  DOB: "01-01-2003",
  Number: "1234 1234 1234",
};

const list = document.querySelector("#list");

const card = getAadharCard(detailRavi.Name, detailRavi.DOB, detailRavi.Number);
list.appendChild(card);

const card2 = getAadharCard(
  detailAanad.Name,
  detailAanad.DOB,
  detailAanad.Number
);
list.appendChild(card2);

const card3 = getAadharCard(
  shailendraAanad.Name,
  shailendraAanad.DOB,
  shailendraAanad.Number
);
list.appendChild(card3);

/** Using Array Of Objects */
const details = [
  {
    Name: "XXXX Singh",
    DOB: "01-01-2011",
    Number: "1234 1234 1234",
  },
  {
    Name: "YYYY Singh",
    DOB: "01-01-2012",
    Number: "1234 1234 1234",
  },
  {
    Name: "ZZZZ Singh",
    DOB: "01-01-2013",
    Number: "1234 1234 1234",
  }
];

for (let i = 0; i < details.length; i++) {
    const element = details[i];
    console.log('Name='+element.Name);
    console.log('DOB='+element.DOB);
    console.log('Number='+element.Number);
    console.log('==========');

    const card = getAadharCard(element.Name, element.DOB, element.Number);
    list.appendChild(card);
}