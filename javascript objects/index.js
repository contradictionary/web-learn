function ShowValueOnDOM(name, value) {
  const div = document.querySelector(".output");
  const p = document.createElement("p");
  p.innerHTML = name + ": " + value;
  div.appendChild(p);
}
//javascript data types
//string,number,boolean,array,object,undefined,function

const s = {
  Name: "Ravi",
  Age: 30,
  City: "Mumbai",
  Bool: true,
  Bool2: false,
  OtherInfo: {
    Salutation: "Mr",
    LastName: "Singh",
    STATE: "MH",
    Misc: {
      test: "value",
      Misc2: {
        newTest: "new Test",
        hi: {
          bool: true,
        },
      },
    },
  },
  test: undefined,
};

const fullName =
  s.OtherInfo.Salutation + " " + s.Name + " " + s.OtherInfo.LastName;
ShowValueOnDOM("Name", s.Name);
ShowValueOnDOM("Full Name", fullName);
ShowValueOnDOM("Age", s.Age);
ShowValueOnDOM("City", s.City);
ShowValueOnDOM("State", s.OtherInfo.STATE);
ShowValueOnDOM("Test", s.OtherInfo.Misc.Misc2.newTest);
//AccountInfo.profile.phones[0].number
var AccountInfo = {
  profile: {
    firstName: "Ravi",
    lastName: "Singh",
    city: "Toronto",
    country: "CA",
    phones: [
      {
        number: "123-456-7890",
        type: "work",
      },
    ],
    email: "rvsingh42@gmail.com",
  },
  data: {
    terms: true,
    organizations: [
      "Participant Company",
      "Participant Company 2",
      "Participant Company 3",
    ],
    kpmg: {
      employee: true,
    },
    feedbackOptOut: true,
  },
};
