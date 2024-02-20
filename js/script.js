let demo = document.getElementById("demo");

let card = `
            <div class="cards">`


for (let i = 0; i < 10; i++) {
    card += `
            <div class="card">
                <img src="./images/pexels-pixabay.jpg" alt="">
                <h1>hello</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eaque.</p>
            </div>
            </div>`
}

demo.innerHTML = card


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => console.log(data))
