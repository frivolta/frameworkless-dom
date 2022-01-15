export default (targetElement, {currentFilter})=>{
    const newFilters = targetElement.cloneNode(true);
    Array.from(newFilters.querySelectorAll('li a')).forEach(filter=>{
        if(filter.textContent === currentFilter){
            filter.classList.add('selected')
        }else{
            filter.classList.remove('selected')
        }
    })
    return newFilters;
}