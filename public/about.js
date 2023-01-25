const aboutFeedback = document.getElementById('aboutFeedback')

const feedback = ()=>{
    aboutFeedback.innerHTML=`
    <div class='feedback'>
        <h3>o'que achou do nosso site?</h3>
        <button id='btn1'>GOSTEI</button>
        <button id='btn2'>ADOREI</button>
        <button id='btn3'>MAIS OU MENOS</button>
        <button id='btn4'>ODIEI</button>
    </div>
    <div id='result'>
        
    </div>
    `
    let btn1 = document.getElementById('btn1')
    let btn2 = document.getElementById('btn2')
    let btn3 = document.getElementById('btn3')
    let btn4 = document.getElementById('btn4')
    let result = document.getElementById('result')
    if(btn1 || btn2 || btn3 || btn4){
        btn1.onclick = ()=>{
            result.innerHTML=`<h5>agradecemos o seu feedback!</h5>`
        }
        btn2.onclick = ()=>{
            result.innerHTML=`<h5>agradecemos o seu feedback!</h5>`
        }
        btn3.onclick = ()=>{
            result.innerHTML=`<h5>agradecemos o seu feedback!</h5>`
        }
        btn4.onclick = ()=>{
            result.innerHTML=`<h5>agradecemos o seu feedback!</h5>`
        }
    }
}

feedback()