let demo = document.getElementById("demo");


const hello = async () => {
    let URL = `http://localhost:3000/card`
    let myObj = await fetch(URL);
    let myData = await myObj.json();

    let card = `
                <div class="cards">`


    myData.map((e, i) => {
        card += `
            <a href="./html/veiw.html?id=${e.id}" key="${i}">
            <div class="card">
                <img src="${e.card_img}" alt="">
                <h1>${e.card_title}</h1>
                <p>${e.card_dis}</p>
            </div>  
            </a> 
            `
    })

    card += `</div>`


    demo.innerHTML = card
}

hello()