import React from 'react';
// import  ReactDOM from 'react-dom';


import {createRoot} from 'react-dom/client';


import App from './App';



 const container =document.getElementById('root');

 const a=createRoot(container);
 a.render(<App/>)
//ReactDOM.render(<App/>,document.getElementById('root'));