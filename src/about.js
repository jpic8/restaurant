import cinnamonRolls from "./cinnamon-rolls.jpg";

export default function aboutInfo() {
  let content = document.querySelector(".content");
  const element = document.createElement("div");
  element.classList.add("about");

  //page photo
  const aboutPhoto = new Image();
  aboutPhoto.src = cinnamonRolls;
  aboutPhoto.classList.add("aboutPhoto");
  element.appendChild(aboutPhoto);

  //brief description
  const description = document.createElement("p");
  description.textContent =
    "Springfield's staple, known all around for their Homemade Cinnamon Rolls, Pies, and Hand Breaded Chicken Fried Steaks!!";
  element.appendChild(description);

  //hours of operation
  const days = [
    `Monday: CLOSED`,
    `Tuesday: 6:00am - 8:00pm`,
    `Wednesday: 6:00am - 8:00pm`,
    `Thursday: 6:00am - 8:00pm`,
    `Friday: 6:00am - 8:00pm`,
    `Saturday: 6:00am - 8:00pm`,
    `Sunday: 6:00am - 2:00pm`,
  ];
  let ul = document.createElement("ul");
  for (let i = 0; i < days.length; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(days[i]));
    ul.appendChild(li);
  }
  element.appendChild(ul);

  //general contact info
  const contactInfo = document.createElement("p");
  contactInfo.textContent = "555-555-5150 -- noreply@fakeemail.com";
  element.appendChild(contactInfo);

  //place items in DOM .content div
  content.appendChild(element);
}
