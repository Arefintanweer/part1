//this is a multiple component
const Hello = (props) =>{
  return(
    <div>
      <h3>This is another component; named Hello</h3>
      <p>catching props {props.name}</p>
    </div>
  )
}

const App = () => {

  console.log('Heya! Component talking from console! JS code in component stays above the return keywords')

  const a = 5
  const b = 10

  return (
   <div>
    <h1>This is part 1a- Intro to React </h1>
    <p>
      we are learning about: 
      
        1. component : arrow function, app component
        2. JSX : JavaScript in HTML
        3. multiple components : more components in app componet
        4. Props : Passing data to components

    </p>
    <p>executing js code inside component: {a} +{b} = {a+b}</p>
    <Hello name= 'john'></Hello>
    <Hello name = 'smith'/>

    <h1> This is part 1b- JavaScript</h1>
    <p>
      1. Variables
      2. Arrays
      3. Objects
      4. Functions

    </p>
    <h1>This is part 1c- State and event handlers </h1>

    <p></p>

   </div> 
  
  )
}

export default App;
