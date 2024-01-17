const allTasks = () => {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.innerText = 'All Tasks';
    p.innerText = 'No tasks added';

    content.appendChild(h1);
    content.appendChild(p);

}


export { allTasks };