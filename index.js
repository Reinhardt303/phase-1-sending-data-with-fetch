function submitData(name, email) {

    let dataObj = {
        name: name,
        email: email
    }

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
        body: JSON.stringify(dataObj)
    })
        .then ( response => response.json())    
        .then (object => {
            let h1 = document.createElement('h1');
            h1.innerHTML = object.id;
            document.body.appendChild(h1);
            console.log(object);
    })
        .catch(error => {
            let h2 = document.createElement('h2');
            h2.innerHTML = error.message;
            document.body.appendChild(h2);
            console.log(error.message);
    })
}

//First Attempt
/* const dataObj = {
    name: 'Tyler',
    email: 'email@mm.com',
}

function submitData(dataObj) {

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
    body: JSON.stringify(dataObj)
    })
    .then ( response => response.json())    
    .then (data => console.log(data))
    .catch(error => console.log(error))
} */


/* fetch('http://localhost:3000/users', submitData)
.then ( response => response.json())
.then (data => console.log(data))   */


//Second Attempt
/*const data = {
    name: 'Tyler',
    email: 'email@mm.com',
    }

function submitData(data) {
    
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
    body: JSON.stringify(data)
    })
    .then ( (response) => response.json())
    .then (data => console.log(data))
}

//fetch('http://localhost:3000/users', submitData)*/