function main(){
    let redBox = document.getElementById('div');
    
    const text = document.createElement('p')
    text.textContent = 'Leo';
    redBox.appendChild(text);
    let counter = 0;
    let counter2 = 0;
    const ss = document.styleSheets
    document.addEventListener('keydown', (event)=>{
        console.log(event)
        if(event.key == 'ArrowRight'){
            counter += 10
        }else if(event.key == 'ArrowLeft'){
            counter -= 10
        } else if(event.key == 'ArrowUp'){
            counter2 -= 10
        }else if(event.key == 'ArrowDown'){
            counter2 += 10
        }
        else{return}
        let x = `${counter}px`;
        console.log(x)
        let y = `${counter2}px`
        console.log(y)
        
        redBox.style['marginTop'] = y;
        redBox.style['margin-left'] = x; 
    })
    console.log(text)

    const {style} = redBox;
    console.log(style)
    redBox.addEventListener('keydown', ()=>{
        window.screenY = screenY-100
    })
}

main()