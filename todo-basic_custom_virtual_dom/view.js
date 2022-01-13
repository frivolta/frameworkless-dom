import todosView from "./components/todosView.js";
import counterView from "./components/counterView.js";
import filtersView from "./components/filtersView.js";

export default (targetElement, state) => {
    const element = targetElement.cloneNode(true);

    const list = element.querySelector('.todo-list')
    const counter = element.querySelector('.todo-count')
    const filters = element.querySelector('.filters')

    list.replaceWith(todosView(list, state))
    counter.replaceWith(counterView(counter, state))
    filters.replaceWith(filtersView(filters, state))
    return element
}