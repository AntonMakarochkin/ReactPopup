import Popup from './components/Popup'
import {useState} from 'react'

function App() {
  const[buttonPopup, setButtonPopup] = useState(false)
 
  return (
    <div className="App">
       <main>
         <h1>React Popup</h1>
         <br></br>
         <button onClick={() => setButtonPopup(true)}>Open popup</button>
       </main>


         <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
           <h1>
             My popup
           </h1>
         </Popup>
    </div>
  );
}

export default App;
