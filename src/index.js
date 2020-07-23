import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App'
// npm run build

// Stateless functional Component
//always return JSX
// function Greeting(){
//   return <div className="app">
//   <h1>Hello World</h1>
//   <Person />
//   </div>
// }
// //ES6
// const Person = ()=>{
//   const mylist=['hello','world','Chai']
//   return(
//     <ul>{mylist.map((val)=>{return <li>{val}</li>})}</ul>)
// }

//PROPS (PROPERTIES) = ARGUMENTS TO COMPONENTS
//function sayName(){console.log(name);} sayName("john")

//three arguments element, propsObject, children


//children props
// const People=()=>{
  // console.log();
// var mylist=[{name:"hamza",job:"designer"},{name:"ali",job:"developer"},{name:"ahmed",job:"UX/UI designer",age:22}]

  // return(
    // <section>
 
 {/* <Person {mylist.map((el)=>{<h1>{el}</h1>})} /> */}
{/* <Person person={mylist[0]}><p>Hello</p></Person> */}
{/* <Person person={mylist[1]}/> */}
{/* <Person person={mylist[2]}/> */}
      {/* <p>content has been goes to...</p> */}
      {/* <Person name="ali" job="designer"/>
      <Person name="hamza" job="developer"/>
      <Person age="22" name="hamza" job="developer"/> */}
    {/* </section> 
  )
} */}
//e.g
// const person={
//   name:"john",
//   age:26
// }
// const showPerson=({name,age})=>{console.log(name,age);}
// showPerson(person)

// const Person=({children,person:{name,job,age}})=>{
  // console.log(props);
// const Person=(props)=>{
//   console.log(props);
  // const {name,age,job}=props.person;
 //props.children
  // return(
  //   <article>
      {/* <h1>{props.name}</h1>
    <h2>{props.job}</h2>
    <h3>{props.age}</h3> */}
    {/* <h1>{props.person.name}</h1>
    <h2>{props.person.job}</h2>
    <h3>{props.person.age}</h3> */}

    {/* <h1>{name}</h1>
    {children}
    <h2>{job}</h2>
    <h3>{age}</h3>
    <hr/>
    </article>
  )
} */}

//props ,destructuring advance and children props practice

// const User=()=>{
// const list=[{name:'bike',model:2012},{name:'car',model:125}]
// return(
// <section>
// <Company person={list[0]}/>
// <Company person={list[1]}/>
// </section>
// )
// }


// const Company=({person:{name,model}})=>{
//   // console.log(props.name,props.model);
//   return(
//     <div>
//       <h1>{name}</h1>
//       <h2>{model}</h2>
//       <hr/>
//     </div>
//   )
// }






























// ReactDom.render(<Greeting />,document.getElementById('root'));
ReactDom.render(<App />,document.getElementById('root'));



