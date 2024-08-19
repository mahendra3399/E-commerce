/*  ---- This code uses XMLHttpRequest to get response ----
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
   console.log(xhr.response); 
})

xhr.open('GET', 'https://supersimplebackend.dev/greeting');
xhr.send();
*/

/* ---- This code uses fetch() to get the response ----
fetch('https://supersimplebackend.dev/greeting')
.then((response) => {
    return response.text();
}).then((text) => {
    console.log(text);
});
*/

/* ---- This code uses aync-await function to get the response ----
async function greet() {
    const response = await fetch('https://supersimplebackend.dev/greeting');
    const text = await response.text();
    console.log(text);
}
greet();
*/  

/* ---- it was a POST request using async await ----
async function greeting() {
    const response = await fetch('https://supersimplebackend.dev/greeting',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            name: 'Mahendra'
        })
    });
  const text = await response.text();
  console.log(text);
}
greeting();
*/

/*
async function amazon() {
    try {
    const response = await fetch('https://amazon.com');
    const msg = await response.text();
    console.log(msg);
    }
    catch(error) {
        console.log('error broh!');
    }
}
amazon();
*/

/*  ---- code which sends post request without body ----
async function greet() {
    try {
    const response = await fetch('https://supersimplebackend.dev/greeting', {
        method: 'POST',
        head: {
            'Content-Type': 'application/json'
        }
    });
    if(response.status >= 400) {
        throw response;
    }

    const text = await response.text();
    console.log(text);

    }catch(error) {
       if(error.status === 400) {
         const errormsg = await error.json();
         console.log(errormsg);
       }
       else {
        console.log('Network error. Please try again later.');
      }
    }
}
greet();
*/

