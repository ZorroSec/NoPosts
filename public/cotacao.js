const cotacao = (cotacaoId, cotacao)=>{
    let url = `https://economia.awesomeapi.com.br/json/last/${cotacao}`
    fetch(url).then((res)=>{
        res.json().then((data)=>{
            cotacaoId.innerHTML=`
            <div id='cotacoes'>
                <h6>> Bitcoin em valor auto <</h6>
                <h3>${data['BTCBRL']['high']}</h3>
            </div>
            <div id='cotacoes'>
                <h6>> Bitcoin em valor baixo <</h6>
                <h3>${data['BTCBRL']['low']}</h3>
            </div>
            `
        })
    })
}

export { cotacao }