const items = ["Virat", "rohit", "dhoni", "sachin","laxman","gambhir","raina"];
const itemList = document.getElementById("itemList");

function redering() {
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;

    itemList.appendChild(listItem);
  });
}

redering();
