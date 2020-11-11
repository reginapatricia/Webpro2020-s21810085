import './App.css';
import Card from "./components/Card";
import {person} from './utils/person'



function App() {
  return (
  <div>
    {
      person.map((item)=> {
        return (
          <Card 
          name={item.name} 
          institution={item.institution}
          address={item.address}
          phoneNumber={item.phoneNumber}/>
        )

      })
    }


 
  </div>
  );
}

export default App;