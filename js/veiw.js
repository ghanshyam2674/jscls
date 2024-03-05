let demo = document.getElementById("demo");

const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get("id");


const delData = (cardId) => {
    let URL = `http://localhost:3000/card/${cardId}`
    fetch(URL, { method: "DELETE" })
        .then(response => {
            alert("record delete");
            window.location.href = 'index.html';
        });
}


const getData = async (cardId) => {
    console.log(cardId);
    let URL = `http://localhost:3000/card/${cardId}`
    let myObj = await fetch(URL);
    let myData = await myObj.json();
    console.log(myData);

    let card = `
                <div class="cards">
                <div class="card">
                    <img src="../${myData.card_img}" alt="">
                    <h1>${myData.card_title}</h1>
                    <p>${myData.card_dis}</p>
                </div>  
                <button type="button" onclick="delData(${cardId})">Delete</button>
                </div>  
            `

    demo.innerHTML = card
}

getData(cardId)