/*function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
}

export { handleSubmit }*/

////////////////////////////////////////////////////

async function handleSubmit(event) {
    event.preventDefault();

    //Document.Select the input field to use to make requests
    const input = document.getElementById("name");
    const url = document.getElementById("name").value;
    if(!url){
        input.classList.add('bered');
        input.innerText = 'Required';
    } else {
        input.classList.remove('bered');
    }
    console.log(url);
    ///////////// Validate ?
    if (url == ""){
      document.getElementById("alert").innerHTML = "* Enter a url in the form.";
      return false;
    } else {
      document.getElementById("alert").innerHTML = "";
    }
    //Client.checkForName(url)
    //if non url string is entered
    if (Client.checkForName(url)){
      console.log('yes')

      await fetch("http://localhost:8081/url", {
          method: "POST",
          mode: "cors",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ text: url })
      })
          .then(res => res.json())

          //Updating Ui with the response
          .then(data => {
              document.getElementById("siteURL").innerHTML = '<span class="text-bold">Based off the article in:</span> ' +url;
              document.getElementById("text-tone").innerHTML = data.polarity;
              document.getElementById("text-subjectivity").innerHTML = data.subjectivity;
          });
    } else {
      console.log('oh noooooooooooo')
      document.getElementById("alert").innerHTML = "* Enter a VALID url in the form.";
    }
    //await fetch("/url", {
    /*await fetch("http://localhost:8081/url", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: url })
    })
        .then(res => res.json())

        //Updating Ui with the response
        .then(data => {
            document.getElementById("siteURL").innerHTML = url;
            document.getElementById("text-tone").innerHTML = data.polarity;
            document.getElementById("text-subjectivity").innerHTML = data.subjectivity;
        });*/
}

export { handleSubmit }
