const posts = (mainConteiner)=>{
    let url = "http://servicodados.ibge.gov.br/api/v3/noticias/"
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            for(let i = 0;i <= 99;i++){
                mainConteiner.innerHTML+=`
                <div class='checkPosts'>
                    <div class='titlePost'>
                        <h4>${data.items[i]['titulo']}</h4>
                    </div>
                    <div class='idPost'>
                        <i>${data.items[i]['data_publicacao']}</i>
                    </div>
                    <hr>
                    <div class='introduction'>
                        <p>${data.items[i]['introducao']}</p>
                    </div>
                    <div class='link'>
                        <i>fonte: <a href='${data.items[i]['link']}'>${data.items[i]['link']}</a></i>
                    </div>
                    <div class='produto'>
                        <i>${data.items[i]['produtos']}</i>
                    </div>
                </div>
                `
                console.log(data.items[i])
            }
        })
    })
}

export { posts }