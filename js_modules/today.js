const today = () => {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    
    h1.innerText = "Today's Tasks"

    content.appendChild(h1);

}


export { today };