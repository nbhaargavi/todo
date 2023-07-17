import './index.css';
import List from './List.js';
import { useState } from "react";

function App() {
  const [current,set]=useState(null);
  const [itemList,updateitem]=useState([]);
//   const [flag,setFlag]=useState(false);
// const name="bhaar";
//   const changename=()=>{
//     return setFlag(!flag);
  
//   }
    const OnChangeHandler = (e) =>
  {
    console.log("current value",e.target.value);
    set(e.target.value);
  };

  const addItem = () => {
    updateitem([...itemList,{item:current,key:Date.now()}]);
    console.log(itemList); 
    set("");
  };

  return (
    <div className="App">
      <header className="App-header"> 
      <h1>TODO-LIST</h1>
        <div className="container"> 
        <div className="input-con">
          <input value={current} onChange={OnChangeHandler}></input>
                    <button onClick={addItem}>+</button>
        </div>
        
        </div>
        <div className='list'>
        <List li={itemList} updateli={updateitem}/> 
        </div>
      </header>
    </div>
  );
}

export default App;
