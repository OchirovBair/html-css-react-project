import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;


//1) на странице если есть кнопка и когда по ней проходит клик и переход на другую страницу (в новом окне или в этом окне), то это будет ссылка стилищованная под кнопку? А если это кнопка открывающая какую либо форму, то это кнопка? А если использовать якорные ссылки?