//const { json } = require("body-parser");

/* Global Variables */
baseURL='http://api.openweathermap.org/data/2.5/forecast?zip=';
APIkey='&appid=78d6618a9417f7ac04843c6105a78fa0&units=metric';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)  +'-'+  (d.getDate())  +'-'+   (d.getFullYear());


//the following code to get data from api

const getapiData= async(url,Zip,key)=>{
  const req=await fetch(baseURL+Zip+APIkey);
  try{
    
    return (await req.json());
  }
  catch(error){
    console.log('error',error);
  }
}

//the following code to send the data to server through a POST req 

const post= async(url='',dataObj={})=>{
  const res=await fetch(url,{
    method:'POST',
    credentials:'same-origin',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(dataObj)
  })
    
  try{ return (await res.json());}

  catch(error) {console.log('error',error);}
}
 

//the last code to update UI
// i used the followig code from the rubric & made some modifications 
const retrieveData = async () =>{
  const request = await fetch('/get');
  try {
  // Transform into JSON
  const allData = await request.json()
  console.log(allData)
  // Write updated data to DOM elements
  document.getElementById('date').innerHTML = `Date: ${allData.date}`;
  document.getElementById('temp').innerHTML = `Temp: ${Math.round(allData.temp) + 'degrees'}`;
  document.getElementById('content').innerHTML =`Feel:${allData.content}`;
  }
  catch(error) {
    console.log('error', error);
    // appropriately handle the error
  }
 }


 
 function doAction (){
  const Zip=document.querySelector('#zip').value;
  const Feelings=document.querySelector('#feelings').value;
  getapiData(baseURL,Zip,APIkey).then(function (dataObj) {
    post('/save', { date:newDate, temp:dataObj.list[0].main.temp, content: Feelings });
    retrieveData();
  });

 }

 document.getElementById('generate').addEventListener('click',doAction);
