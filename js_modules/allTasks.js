const allTasks = () => {
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    div.setAttribute('id', 'all-tasks-content');
    h1.innerText = 'All Tasks';
    p.innerText = 'No tasks added';

    // content.appendChild(div);
    content.appendChild(h1);
    content.appendChild(p);

}


export { allTasks };