'use strict';

const counter = document.querySelector(".counter");
const body = document.querySelector('body');

const addBtn = document.querySelector(".add-number");
const subBtn = document.querySelector(".subtract-nubmber");
const asyncBtn = document.querySelector(".async_add-number");

const themeBtn = document.querySelector(".change-color-theme");

let state = 1;

function render(){
    counter.textContent = state.toString();
}

render();

addBtn.addEventListener('click', ()=>{
    state++;
    render()
});

subBtn.addEventListener('click', ()=>{
    state--;
    render()
});

asyncBtn.addEventListener('click', ()=>{
    setTimeout(()=>{
        state++;
        render()
    }, 2000);
});

themeBtn.addEventListener('click', ()=>{
    body.classList.toggle('dark');
});