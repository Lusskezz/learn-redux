'use strict';
import {createStore} from './createStore';
import { rootReducer } from ''; // Тут должен быть путь до Редьюсеров, но я не могу его найти


const counter = document.querySelector(".counter");
const body = document.querySelector('body');

const addBtn = document.querySelector(".add-number");
const subBtn = document.querySelector(".subtract-number");
const asyncBtn = document.querySelector(".async_add-number");

const themeBtn = document.querySelector(".change-color-theme");

const store = createStore(rootReducer, 0);

window.store = store;

addBtn.addEventListener('click', ()=>{
});

subBtn.addEventListener('click', ()=>{
});

asyncBtn.addEventListener('click', ()=>{
});

themeBtn.addEventListener('click', ()=>{
    // body.classList.toggle('dark');
});