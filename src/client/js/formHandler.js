import { checkForName } from "./nameChecker";
export async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
export function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;  
    if (checkForName(formText)==true)
    {
        const data={text:formText};
    postData('/test',data)
    .then((data)=>{
        let html="";
        html+=`<h4>Agreement: ${data.agreement}</h4><h4>Confidence: ${data.confidence}</h4><h4>Irony: ${data.irony}</h4><h4>Score_tag: ${data.score_tag}</h4><h4>Subjectivity: ${data.subjectivity}</h4>`
        document.getElementById('results').innerHTML = html;
    })
    }
    else
    document.getElementById('results').innerHTML ="";
}
    


