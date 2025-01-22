// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//     console.log(this.count);
//     this.render();
//   }

//   render() {
//     document.body.innerHTML = "";
//     const counterElement = document.createElement("div"); // box create

// const countDisplay = document.createElement("p"); // p tag create
// countDisplay.textContent = `Count : ${this.count}`; // data added to p tag

// const button = document.createElement("button"); // button created
// button.textContent = "Increment";
// button.onclick = () => this.increment(); // onclick => increment

// counterElement.appendChild(countDisplay);
// counterElement.appendChild(button);
// document.body.appendChild(counterElement);

//     //  innerText , textContent
//   }
// }

// let obj = new Counter();
// obj.increment();

// function App() {
//   let count = 0;

//   const render = () => {
//     document.body.innerHTML = "";

//     const counterElement = document.createElement("div");

//     const countDisplay = document.createElement("p");
//     countDisplay.textContent = `Count : ${count}`;

//     const button = document.createElement("button");
//     button.textContent = "Increment";
//     button.onclick = () => {
//       count++;
//       render();
//     };
//     const button2 = document.createElement("button");
//     button2.textContent = "Decrement";
//     button2.onclick = () => {
//       count--;
//       render();
//     };
//     counterElement.appendChild(countDisplay);
//     counterElement.appendChild(button);
//     counterElement.appendChild(button2);
//     document.body.appendChild(counterElement);
//   };

//   render();
// }

// App();

function lifeCycle() {
  console.log("Component create");

  const element = document.createElement("div");

  console.log("Add data to component");

  element.textContent = "Life Cycle";

  return element;
}

document.body.appendChild(lifeCycle());

