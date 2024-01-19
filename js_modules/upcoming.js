const upcoming = () => {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    
    h1.innerText = "Upcoming Tasks"

    content.appendChild(h1);
}

export { upcoming };