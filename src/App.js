import { useState } from "react";
import "./App.css";

// Новый компонент EmojiButton
function EmojiButton({ emoji, onChange }) {
  return <button onClick={onChange}>{emoji}</button>;
}

function App() {
  const arr = ["😍", "🥰", "❤️", "😶‍🌫️", "😘", "🤑"];
  const [emoji, setEmoji] = useState(arr[0]);

  function change() {
    let l = arr.length;
    let i = arr.indexOf(emoji);
    if (i === l - 1) {
      i = 0;
    } else {
      i++;
    }
    setEmoji(arr[i]);
    console.log(i);
  }

  return (
    <div className="App">
      <header className="App-header">
        <EmojiButton emoji={emoji} onChange={change}></EmojiButton>
      </header>
    </div>
  );
}

export default App;
