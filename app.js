// Prime UI for interactivity
const chooseWorryForm = document.getElementById("choose-worry-form"),
      chooseWorryBtn = document.getElementById("choose-worry-btn"),
      worrySubsetForm = document.getElementById("worry-subset-form"),
      worrySubsetBtn = document.getElementById("worry-subset-btn"),
      worryEnhancerForm = document.getElementById("worry-enhancer-form"),
      worryEnhancerBtn = document.getElementById("worry-enhancer-btn"),
      panicAcceleratorForm = document.getElementById("panic-accelerator-form"),
      panicAcceleratorBtn = document.getElementById("panic-accelerator-btn")

// Backup element identifiers (DELETE WHEN CODE FINALIZED)
      // chooseWorryForm = document.getElementById("choose-worry-form"),
      // chooseWorryBtn = document.getElementById("choose-worry-form"),
      // chooseWorryForm = document.getElementById("choose-worry-form"),
      // chooseWorryBtn = document.getElementById("choose-worry-form"),

// // Load event listeners
// loadEventListeners();
//
// // Actually define load event listeners function
// function loadEventListeners() {
// // Click on dropdown, get value
//   select.addEventListener('click');
// // Click button, pass value to populate and unhide next dropdown
//   button.addEventListener('click');
// // Cause trouble for motor control Click
//
// // Refresh page if motor control person uses keyboard

// }
// loadEventListeners();
const chosenWorry1 = chooseWorryForm.value;
const chosenWorry2 = worrySubsetForm.value;
const chosenWorry3 = worryEnhancerForm.value;
const chosenWorry4 = panicAcceleratorForm.value;

console.log(chosenWorry1);

chooseWorryBtn.addEventListener('click', e => {
  // let chosenWorry = chooseWorryForm.value;
  let text1 = worrySubsetForm.options[1];
  let text2 = worrySubsetForm.options[2];
  let text3 = worrySubsetForm.options[3];
  text1.innerText = `${step2[parseInt(chosenWorry1)].option1}`;
  text2.innerText = `${step2[parseInt(chosenWorry1)].option2}`;
  text3.innerText = `${step2[parseInt(chosenWorry1)].option3}`;
  document.getElementById('worry-subset').className = "revealed";
});

worrySubsetBtn.addEventListener('click', e => {
  let worrySubset = worrySubsetForm.value;
  let text1 = worryEnhancerForm.options[1];
  let text2 = worryEnhancerForm.options[2];
  let text3 = worryEnhancerForm.options[3];

  switch (chosenWorry1) {
    case "0":
      text1.innerText = `${step3_old_age[chosenWorry2].option1}`;
      text2.innerText = `${step3_old_age[chosenWorry2].option2}`;
      text3.innerText = `${step3_old_age[chosenWorry2].option3}`;
      break;
    case "1":
      text1.innerText = `${step3_finances[chosenWorry2].option1}`;
      text2.innerText = `${step3_finances[chosenWorry2].option2}`;
      text3.innerText = `${step3_finances[chosenWorry2].option3}`;
      break;
    case "2":
      text1.innerText = `${step3_fears[chosenWorry2].option1}`;
      text2.innerText = `${step3_fears[chosenWorry2].option2}`;
      text3.innerText = `${step3_fears[chosenWorry2].option3}`;
      break;
    }

// switch (worrySubset) {
//   case "0":
//     text1.innerText = `${step3_old_age[worrySubset].option1}`;
//     text2.innerText = `${step3_old_age[worrySubset].option2}`;
//     text3.innerText = `${step3_old_age[worrySubset].option3}`;
//     break;
//   case "1":
//     text1.innerText = `${step3_finances[worrySubset].option1}`;
//     text2.innerText = `${step3_finances[worrySubset].option2}`;
//     text3.innerText = `${step3_finances[worrySubset].option3}`;
//     break;
//   case "2":
//     text1.innerText = `${step3_fears[worrySubset].option1}`;
//     text2.innerText = `${step3_fears[worrySubset].option2}`;
//     text3.innerText = `${step3_fears[worrySubset].option3}`;
//     break;
//   }
  // console.log(chosenWorry);
  document.getElementById('worry-enhancer').className = "revealed";
});
