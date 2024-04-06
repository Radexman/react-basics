import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement('a', { href: 'https://zrozumiecreact.pl' }, 'Test');

const elementInJSX = <a href='https://zrozumiecreact.pl'>Test</a>;
console.log(<h1>Hello</h1>);
console.log(element);

const currentDate = new Date();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

console.log(hours, minutes);

const timer = <div>{`${hours}:${minutes}`}</div>;

ReactDOM.createRoot(document.getElementById('root')!).render(timer);