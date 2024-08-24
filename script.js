const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];
const cities = [];
cities[0] = "Visakhapatnam|Vijayawada|Guntur";
cities[1] = "Itanagar|Tawang|Ziro";
cities[2] = "Guwahati|Silchar|Dibrugarh";
cities[3] = "Patna|Gaya|Bhagalpur";
cities[4] = "Raipur|Bilaspur|Durg";
cities[5] = "Panaji|Margao|Vasco da Gama";
cities[6] = "Ahmedabad|Surat|Vadodara";
cities[7] = "Chandigarh|Ambala|Faridabad";
cities[8] = "Shimla|Manali|Dharamshala";
cities[9] = "Ranchi|Jamshedpur|Dhanbad";
cities[10] = "Bengaluru|Mysuru|Mangaluru";
cities[11] = "Thiruvananthapuram|Kochi|Kozhikode";
cities[12] = "Bhopal|Indore|Gwalior";
cities[13] = "Mumbai|Pune|Nagpur";
cities[14] = "Imphal|Churachandpur|Thoubal";
cities[15] = "Shillong|Tura|Nongpoh";
cities[16] = "Aizawl|Lunglei|Saiha";
cities[17] = "Kohima|Dimapur|Mokokchung";
cities[18] = "Bhubaneswar|Cuttack|Rourkela";
cities[19] = "Amritsar|Ludhiana|Jalandhar";
cities[20] = "Jaipur|Jodhpur|Udaipur";
cities[21] = "Gangtok|Namchi|Pelling";
cities[22] = "Chennai|Coimbatore|Madurai";
cities[23] = "Hyderabad|Warangal|Nizamabad";
cities[24] = "Agartala|Udaipur|Kailashahar";
cities[25] = "Lucknow|Kanpur|Varanasi";
cities[26] = "Dehradun|Haridwar|Nainital";
cities[27] = "Kolkata|Darjeeling|Siliguri";
cities[28] = "Port Blair|Havelock Island|Rangat";
cities[29] = "Chandigarh|Panchkula|Mohali";
cities[30] = "Silvassa|Daman|Diu";
cities[31] = "Delhi|New Delhi|Dwarka";
cities[32] = "Kavaratti|Minicoy|Amini";
cities[33] = "Puducherry|Karaikal|Yanam";

const stateElement = document.getElementById("states");
const cityElement = document.getElementById("city");




const fnameErrorEle = document.getElementById("firstnameError");
const emailErrorEle = document.getElementById("emailError");
const phoneErrorEle=document.getElementById("phoneError");
const dobErrorEle=document.getElementById("dobError")

window.onload = function () {
  stateElement.length = 0;
  cityElement.length = 0;

  fillStates();
  getCities(states[0]);

  stateElement.onchange = function () {
    cityElement.length = 0;
    getCities(stateElement.value);
  };
};

function onFirstNameKeyup(ev) {
  const value = ev.target.value;
  validateFirstName(value);
}

function validateFirstName(value) {
  value = value ?? document.getElementById("firstname").value;

  if (!value || value.length == 0) {
    fnameErrorEle.innerText = "*Please provide your name";
  } else if (value && value.length < 3) {
    fnameErrorEle.innerText = "*First should be atleast 3 characters";
  } else if (value && value.length > 25) {
    fnameErrorEle.innerText = "*First should be 25 characters only";
  } else if (value && !value.match(/^[A-Za-z]*$/)) {
    fnameErrorEle.innerText = "*Only characters are to be allowed";
  } else {
    fnameErrorEle.innerText = "";
  }
}

function onPhoneKeyup(ev) {
    const value = ev.target.value;
    validatePhoneNUmber(value);
  }
  
  function validatePhoneNUmber(value) {
    value = value ?? document.getElementById("phone").value;
  
    if (!value || value.length == 0) {
      phoneErrorEle.innerText = "*Please provide phone number";
    } else if (value && !value.match(/^[0-9]{10}$/)) {   
        phoneErrorEle.innerText = "*Please provide a 10 digit phone number.";
        return false;
    } else {    
        phoneErrorElem.innerText = "";
        return true;
    }
  }

function onEmailKeyup(ev){
    const value = ev.target.value;
    validateEmail(value);
}
function validateEmail(value){
    value = value ?? document.getElementById("email");
    if(!value || value.length == 0){
        emailErrorEle.innerText="*Please provide Email ID";
    }else if(value && !value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        emailErrorEle.innerText="*Invalid Email ID";

    }else{
        emailErrorEle.innerText="";
    }
}

function onDobKeyup(ev) {
    const value = ev.target.value;

    validateDOB(value);
}

function validateDOB(value) {
    value = value ?? document.getElementById('dob').value;
    const inputSplitted = value.split('-');

    const currentDateTime = new Date();

    if (!value || value.length == 0) {
        dobErrorEle.innerText = "*Please provide date of birth";
        return false;
    } else if (Date.parse(currentDateTime.toDateString()) < Date.parse(value)) {
        dobErrorEle.innerText = "*Future dates not allowed.";
        return false;
    } else if (currentDateTime.getFullYear() - inputSplitted[0] > 25) {    // age restriction 
        dobErrorEle.innerText = "*You are above 25."
        return false;
    } else {
        dobErrorEle.innerText = "";
        return true;
    }
}



function fillStates() {
  for (let i = 0; i < states.length; i++) {
    const element = states[i];
    stateElement.options[i] = new Option(element, element);
  }
}

function getCities(state) {
  const cityIndex = states.indexOf(state);
  const citylist = cities[cityIndex].split("|");
  for (let i = 0; i < citylist.length; i++) {
    const element = citylist[i].trim();
    cityElement.options[i] = new Option(element, element);
  }
}
