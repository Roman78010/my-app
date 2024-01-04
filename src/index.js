import React from 'react';
// Библиотека React.
import ReactDOM from 'react-dom/client';
// Это тот сервис, который необходим для работы с объектной моделью документа (с DOM).
import './index.css';
// CSS файл.
// import App from './App';
import reportWebVitals from './reportWebVitals';


// const elem = <h2>Hello World!</h2>
// Прописывая команду выше, мы на самом деле под капотом запускаем команду ниже. Преобразованием занимается Babel:
// const elem = React.createElement('h2', null, "Hello World!");

// const elem = (
//   <div>
//     {/* <h2>Hello World!</h2> */}
//     {/* <input type="text" placeholder="Type here"></input> */}
//     {/* <button></button> */}
//   </div>
// )

const Header = () => {
  // const scr = "<script>alert('Error!')</script>";
  // return <h2>{scr}</h2>
  return <h2>Hello World!</h2>
};

const Field = () => {
  const holder = "Enter here"
  const styleField = {
    width: "300px"
  }
  
  return <input 
      style = {styleField}
      // Пример использования Inline стилей, редко используемый прием.
      type="text" 
      placeholder={holder}
      autoComplete=""
      className="first"
      htmlFor=""    
    ></input>
}

const Btn = () => {
  const text = "Log in";
  // const res = () => {
  //   return "Log in, please"
  // }
  // const p = <p>Log in</p>
  // const obj = {}
  // Мы не можем помещать объекты внутри наших React компонентов. В строку ниже, в фигурные скобки.
  // Можем помещать выражения: 3 + 4 // 7

  const logged = true;
  
  return <button>{logged ? "Enter" : text}</button>
}

// Компонент-функция App, которая будет объеденять все наши предыдущие компоненты.
// Важно, если эта функция возвращает несолько компонентов предварительно они должны быть обернуты в круглые скобки и записывать по определенному синтаксису (<Header/>). Имя компонента в закрыващемся теге. И также обернуты в один элемент (<div></div>).
const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
