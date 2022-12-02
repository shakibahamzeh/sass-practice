function createSection (){
    const body = document.body;
    const container = document.createElement('div');
    container.setAttribute('class','container');
    body.appendChild(container);
for(let i=1; i<=255 ; i++){
const panel = document.createElement('div');
panel.setAttribute('class',`col-${i}`);
panel.innerHTML = `.`;
container.appendChild(panel);
}
 
}
createSection();