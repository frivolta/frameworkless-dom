import getTodos from './getTodos.js'
import todosView from './view/todosView.js'
import counterView from './view/counterView.js'
import filtersView from './view/filtersView.js'
import appView from './view/app.js'
import registry from './registry.js'
import applyDiff from "./applyDiff.js";

registry.add('app', appView);
registry.add('todos', todosView)
registry.add('counter', counterView)
registry.add('filters', filtersView)

const state = {
    todos: getTodos(),
    currentFilter: 'All'
}

const events = {
    deleteItem: (index)=>{
        state.todos.splice(index, 1)
        render()
    },
    addItem: (text)=>{
        state.todos.push({
            text,
            completed: false
        })
        render()
    }
}

const render = () => {
    window.requestAnimationFrame(() => {
        const main = document.querySelector('#root')
        const newMain = registry.renderRoot(main, state, events)
        applyDiff(document.body, main, newMain)
    })
}
render()

