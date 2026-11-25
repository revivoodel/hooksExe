import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Toggle from "./components/Toggle";
import Counter from "./components/Counter";
import CounterWithStep from "./components/CounterWithStep";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import Previous from "./components/Previous";
import Interval from "./components/Interval";
import Timeout from "./components/Timeout";
import DocumentTitle from "./components/DocumentTitle";
import WindowSize from "./components/WindowSize";
import KeyPress from "./components/KeyPress";

export default function App() {
  return (
    <div>
      <h1>Hooks</h1>

      <Toggle />
      <hr />

      <Counter />
      <hr />

      <CounterWithStep />
      <hr />

      <Input />
      <hr />

      <Textarea />
      <hr />

      <Previous />
      <hr />

      <Interval />
      <hr />

      <Timeout />
      <hr />

      <DocumentTitle />
      <hr />

      <WindowSize />
      <hr />

      <KeyPress />
    </div>
  );
}