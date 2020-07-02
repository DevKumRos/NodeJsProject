
const weatherForm = document.querySelector('form');
const searchData = document.querySelector('input');
const messgaeOne = document.querySelector('#msg-1');
const messgaeTwo = document.querySelector('#msg-2');
weatherForm.addEventListener('submit',(event)=> {
    event.preventDefault();
    console.log("testing: ", searchData.value);
    messgaeOne.textContent ="Loading....."
    fetch('http://localhost:4000/weather?address='+searchData.value).then((response)=>{
    response.json().then((data) => {
        if(data.error) {
            console.log('error : ', data.error);
            messgaeOne.textContent = "";
            messgaeTwo.textContent = data.error;
        } else {
            console.log('data: ', data);
            messgaeOne.textContent = "ForeCast:  "+data.forecast;
            messgaeTwo.textContent = "Location: "+data.location;
        }
        
    })
        }).catch((error) => {
            error.json.then((errorData) => {
                console.log('errorData: ', errorData);
                messgaeOne.textContent = "";
                messgaeTwo.textContent = errorData.error;
            })
        });
})