let demo = document.querySelector("#demo");

let addData = async () => {
    let URL = `http://localhost:3000/card`;
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(json => {
            let data = json;

            let formdata = `
            
            
            
            `


        })
}
