import logo from './logo.svg';
import './App.css';
import Contador from './components/contador'

function App() {
  return (
    <div class="App-cont">
      <div className="App">
        <div className="img-cont">
          <img id="frame" src="https://cdn.picpng.com/window/window-frame-open-window-frames-46505.png"></img>
          <img id="sheep" src="https://media0.giphy.com/media/l3q2ICbdSmDqnlxC0/giphy.gif"></img>
        </div>
        <div class="contador-cont"><Contador/></div>
      </div>
    </div>

  );
}

export default App;
