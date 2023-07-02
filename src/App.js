import React, {useState} from 'react';
import "./App.css";
import Box from "./components/Box";

const choice = {
  rock:{
    name:"Rock",
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg"
  },
  scissors:{
    name:'Scissors',
    img:"https://as2.ftcdn.net/v2/jpg/03/34/95/07/1000_F_334950713_mbyK8GXBihJ9MRGvRYTRW1xtDQi0SXN5.jpg"
  },
  paper:{
    name:'Paper',
    img:"https://m.economictimes.com/thumb/msid-61941670,width-1200,height-900,resizemode-4,imgsize-25928/better-valuations-of-paper-companies-just-a-matter-of-time.jpg"
  },
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult]=useState("");
  const play = (userChoice)=>{
    setUserSelect(choice[userChoice]); 
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };


  const randomChoice=()=>{
    let itemArray = Object.keys(choice);
    // console.log('item array', itemArray)
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    // console.log('final', final);
    return choice[final];
  };
  const judgement = (user, computer)=>{
    console.log('user',user,'computer',computer);

    if(user.name === computer.name){
      return 'tie';
    }else if(user.name === 'Rock')
    return computer.name === "Scissors" ? 'win' : 'lose';
    else if(user.name === 'Scissors')
    return computer.name === 'Paper' ? 'win' : 'lose';
    else if(user.name === 'Paper')
    return computer.name === 'Rock' ? 'win' : 'lose';
  };

  return (
    <>
      <div className="App main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="App main">
        <button onClick={()=>play('scissors')}>가위</button>
        <button onClick={()=>play('rock')}>바위</button>
        <button onClick={()=>play('paper')}>보</button>
      </div>
    </>
  );
}

export default App;
