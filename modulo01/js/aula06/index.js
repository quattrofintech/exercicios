
function carregar(){
    document.getElementsByClassName('modal-container')[0].style.display = "block";
}
function abrirModal(){
    document.getElementsByClassName('modal-container')[0].style.display = "block";
}

function fecharModal(){
    document.getElementsByClassName('modal-container')[0].style.display = "none";
}

function menu(){
    var altura = window.screen.height;
    var largura = window.screen.width;
    console.log(largura)
    var menu = document.getElementsByName('checkMenu')[0].checked;
    if(menu && largura > 800){
        document.getElementById('container-menu').style.display = "block";
    }else{        
        document.getElementById('container-menu').style.display = "none";
    }
}

function colorMode(){
    /* 
        --color0: white;
        --color1: #ccc;
        --color2: black;
        --color3: red; 
        document.body.style.setProperty('--color', 'green');
    */
    var color = document.getElementsByName('chekModo')[0].checked;
    if(color){
        document.body.style.setProperty('--color0', 'black');
        document.body.style.setProperty('--color1', '#444');
        document.body.style.setProperty('--color2', 'white');
        document.body.style.setProperty('--color3', 'red');
    }else{        
        document.body.style.setProperty('--color0', 'white');
        document.body.style.setProperty('--color1', '#ccc');
        document.body.style.setProperty('--color2', 'black');
        document.body.style.setProperty('--color3', 'red');
    }
}