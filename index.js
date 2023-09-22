const circle = document.getElementById("circle");
const upBtn = document.getElementById("UpArrowBtn");
const downBtn = document.getElementById("DownArrowBtn");

let rotationValue = circle.style.transform;
let calculatedRotationValue;

upBtn.onclick = () => {
  calculatedRotationValue = rotationValue + "rotate(-90deg)";
  circle.style.transform = calculatedRotationValue;
  rotationValue = calculatedRotationValue;
};

downBtn.onclick = () => {
  calculatedRotationValue = rotationValue + "rotate(90deg)";
  circle.style.transform = calculatedRotationValue;
  rotationValue = calculatedRotationValue;
};
