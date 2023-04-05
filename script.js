const container = document.createElement('div');
container.className = 'container'

for (let i = 0; i < 64; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile'
    tile.addEventListener("click",function(){
        tile.style.background = 'blue'
    })
    
    const row =  Math.floor(i/8)

    if ((i + row) % 2 === 0) {
        tile.style.backgroundColor = 'black';
    } else {
        tile.style.backgroundColor = 'red';
    }
    
    container.append(tile);
}

document.body.append(container);

/*const container2 = document.createElement('div2');
container2.style.display = 'flex';
container2.style.flexWrap = 'wrap';
container2.style.width = '800px';
container2.style.height = '800px';
for (let i = 0; i < 64; i++) {
    const tile2 = document.createElement('div2');
    tile2.style.width = '12.5%';
    tile2.style.height = '12.5%';
    tile2.style.backgroundColor ='#' + Math.floor(Math.random()*16777215).toString(16);
    container.append(tile2); 
}

document.body.append(container2);*/
