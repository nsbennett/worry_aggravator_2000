// Prime UI for interactivity
const chooseWorryForm = document.getElementById("choose-worry-form"),
      chooseWorryBtn = document.getElementById("choose-worry-btn"),
      worrySubsetForm = document.getElementById("worry-subset-form"),
      worrySubsetBtn = document.getElementById("worry-subset-btn"),
      worryEnhancerForm = document.getElementById("worry-enhancer-form"),
      worryEnhancerBtn = document.getElementById("worry-enhancer-btn"),
      panicAcceleratorForm = document.getElementById("panic-accelerator-form"),
      panicAcceleratorBtn = document.getElementById("panic-accelerator-btn")

// Global variables for selecting text choices
let worryFormValue,
    worrySubsetValue,
    worryEnhancerValue,
    panicAcceleratorValue

// Reveal next div with next dropdown or other thing
function revealNext(e) {
  e.target.parentElement.nextSibling.className = "revealed";
}



// Choose Worry button, first dropdown
chooseWorryBtn.addEventListener('click', () => {
  worryFormValue = chooseWorryForm.value;
  // identify fields to be populated with Worry Subset text
  let text1 = worrySubsetForm.options[1];
  let text2 = worrySubsetForm.options[2];
  let text3 = worrySubsetForm.options[3];
  // Populate with text
  text1.innerText = `${step2[worryFormValue].option1}`;
  text2.innerText = `${step2[worryFormValue].option2}`;
  text3.innerText = `${step2[worryFormValue].option3}`;
// Reveal next form
  document.getElementById('worry-subset').className = "revealed";
});

// Return different selection if "loss of motor control" chosen in old age worries
worrySubsetForm.options[1].addEventListener('click', () => {

if (worrySubsetForm.options[1].text === "Loss of motor control") {
  worrySubsetValue = 0;
}
});
// Worry Subset button, populate next dropdown
worrySubsetBtn.addEventListener('click', () => {
  // Select correct object for Worry Enhancer
  worrySubsetValue = worrySubsetForm.value;
  // identify fields to be populated with Worry Subset text
  let text1 = worryEnhancerForm.options[1];
  let text2 = worryEnhancerForm.options[2];
  let text3 = worryEnhancerForm.options[3];
  // Choose correct array and populate nexrt dropdown with text
  switch (parseInt(worryFormValue)) {
    case 0:
      text1.innerText = `${step3_old_age[worrySubsetValue].option1}`;
      text2.innerText = `${step3_old_age[worrySubsetValue].option2}`;
      text3.innerText = `${step3_old_age[worrySubsetValue].option3}`;
      break;
    case 1:
      text1.innerText = `${step3_finances[worrySubsetValue].option1}`;
      text2.innerText = `${step3_finances[worrySubsetValue].option2}`;
      text3.innerText = `${step3_finances[worrySubsetValue].option3}`;
      break;
    case 2:
      text1.innerText = `${step3_fears[worrySubsetValue].option1}`;
      text2.innerText = `${step3_fears[worrySubsetValue].option2}`;
      text3.innerText = `${step3_fears[worrySubsetValue].option3}`;
      break;
  }
  // Reveal next form
  document.getElementById('worry-enhancer').className = "revealed";
});

// // Worry Enhancer button, forward to generic panic accelerator
worryEnhancerBtn.addEventListener('click', () => {
  text1 = document.getElementById("accelerated-panic");
  switch (parseInt(worryFormValue)) {
    case 0:
      text1.innerText = "This certainly isn't the only thing that's coming to you, as you get older. Time is always passing. It is passing now as you read this. The things you think you have to worry about? That's just the beginning. Your body is breaking down at this very moment.";
      break;
    case 1:
      text1.innerText = "You know how, deep down, you knew that \"money isn\'t everything\" was kind of BS? Well, you were right. It is everything, and you'll never have as much as you could possibly use. You\'ll have to leave SOMETHING out. But what will it be this time? Dessert? Dinner? Life-saving medical treatment? The future happiness of your children???";
      break;
    case 2:
      text1.innerText = "Of course you're exactly right to worry about that. That's only what you're aware of. There are all the things you can guess, all the dark hints. But do you know what they aren't telling you, what you don't even get a hint of? Yes, all of those things are happening, too.";
      break;
    }
      // Reveal next form
    document.getElementById('panic-accelerator').className = "revealed";
    console.log(worryFormValue);
});

// // Forward to general Worry Meditation to induce all consuming panic
panicAcceleratorBtn.addEventListener('click', () => {
  // Text kept in JavaScript file to keep it away from prying eyes
    document.getElementById("worry-meditation-text").innerText = "For the compulsive worrier such as yourself, in everything and behind everything is a cause for worry. Even if you have nothing to worry about, there will always be the things you didn't think of. Let your inability to think of them be the pilot light for your unease. Let your comfort stoke your fears of complacency. Let your peace break into full-fledged panic. Oh yes, oh yes! You feel it rising! NOW YOU HAVE YOUR HEALTH TO WORRY ABOUT! YOUR BLOOD PRESSURE IS SHOOTING THROUGH THE ROOF! YOUR HEART CAN'T TAKE IT ANYMORE! YES! YES!"
      // Reveal final section
    document.getElementById('worry-meditation').className = "revealed";
});
