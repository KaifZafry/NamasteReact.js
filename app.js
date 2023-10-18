/*const heading = React.createElement("h1", {id:"heading", abx:"kaif"}, "Hello world from React");
// in the above line we create a heading element and add in the object some attributes that appear on the heading element and after that we add the some value inside the heading element 

console.log(heading); // it is a object 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// render method is doing the heading element is in a object form and render will be changed into the like html element and add in to the root element
*/

/* <div id="parent">
  <div id="child">
    <h1>Hello I am a nested heading</h1>
  </div>
  <div id="child">
    <h2>Hello I am a nested heading</h2>
  </div>
</div>; */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I am a nested h1"),
    React.createElement("h2", {}, "I am a nested h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello I am a nested h1"),
    React.createElement("h2", {}, "I am a nested h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
