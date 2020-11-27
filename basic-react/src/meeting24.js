import React, { Component, useEffect, useState } from 'react';
import Card from './components/Card';
import "./App.css"
import axios from 'axios';

// class App extends Component{

//   state = {
//     users: [],  
//   }

//   componentDidMount(){
//     // fetch('https://jsonplaceholder.typicode.com/users')
//     //   .then(response => response.json())
//     //   .then(json => this.setState({users: json}));
//     axios
//     .get('https://jsonplaceholder.typicode.com/users')
//     .then((response) => this.setState({users: response.data}));
//   }


//   render (){
    
//     return (
//       <div>

//         {this.state.users.map((item)=> {
//           return(
//             <Card name={item.name}
//             username={item.username}
//             email={item.email}
//             phone={item.phone}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

//menggunakan functional

const App = () => {

  const [users, setUsers]= useState([]);


useEffect(() => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => setUsers(response.data));
}, []);
console.log(users);


  return(
    <div>
     {
       users.map((item) => {
         return (
           <Card
           name={item.name}
           username={item.username}
           email={item.email}
           phone={item.phone}
           />
         )
       })
     }
    </div>
  )
}

export default App;