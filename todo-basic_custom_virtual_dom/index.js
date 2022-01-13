import getTodos from "./getTodos.js";
import view from "./view.js";

const state = {
    todos: getTodos(),
    filter: 'All'
}

const main = document.querySelector('.todoapp');

window.requestAnimationFrame(()=>{
    const newMain = view(main, state);
    console.log(newMain)
    main.replaceWith(newMain)
})