

let mtn = '*555*';
let airtel = '*123*';
let glo = '*777*';
let pin;
let etisalat = '*999*';
let pinDisplay = document.getElementById('pin-display');
let network = document.getElementById('network');
let amount = document.getElementById('amount');
 
let rechargeCardArr = [];

 let pinDetails;
function generate(){
          pin = Math.round(Math.random()*1000000000000);
          pinDetails = {
            networkOperator: network.value,
            amount: amount.value,
            pin: '',
            // pin: `${mtn} ${pin} #`,
            status: 'Not Used',
            dateCreated: new Date().toLocaleDateString(),
            dateUsed: 'Not yet Used',
        }
     if(network.value === 'mtn' && amount.value !== ''){
          pinDisplay.value = pin;
          pinDetails.pin = `${mtn} ${pin} #`;
    }else if(network.value === 'airtel' && amount.value !== ''){
            pinDisplay.value = pin;
            pinDetails.pin = `${airtel} ${pin} #`;
     }else if(network.value === 'glo' && amount.value !== ''){
            pinDisplay.value = pin;
            pinDetails.pin = `${glo} ${pin} #`;
     }else if(network.value === 'etisalat' && amount.value !== ''){
                    pinDisplay.value = pin;
                    pinDetails.pin = `${etisalat} ${pin} #`;
     }else{
        alert('Enter a network')
     }

     rechargeCardArr.push(pinDetails);
     console.log(rechargeCardArr);
     
}

function recharge(){
    let rechargePin = document.querySelector('#pin').value;  
     let index = rechargeCardArr.findIndex((items) => rechargePin == items.pin );
        
    if(index !== -1){
        rechargeCardArr[index].status = 'Used';
        rechargeCardArr[index].dateUsed = new Date().toLocaleDateString();
        console.log(pinDetails);
        savePin();
        alert('Recharge Successful!') 
    }else{
         alert('Input a valid pin');       
    }
console.log(index);


}
function savePin(){
      pinDisplay.value = '';
    let tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    rechargeCardArr.forEach((item, index) => {
        tableBody.innerHTML += `
                <tr>
                  <td>${index + 1}</td>
                  <td>${item.networkOperator}</td>
                  <td>${item.amount}</td>
                  <td>${item.pin}</td>
                  <td>${item.status}</td>
                  <td>${item.dateCreated}</td>
                  <td>${item.dateUsed}</td>
                  <td>
                    <button onclick="deleteCard(${index})"
                    style="background-color: red; padding: 5px 10px; border: none; border-radius: 5px; color: white;"
                    >Delete</button>
                 </td>
                </tr>
                
        `;
    });
}
function deleteCard(index){
        rechargeCardArr.splice(index, 1)
        savePin();
}