//Part 1: JavaScript Event Handling and Interactive Elements
const button= document.getElementById("btn");
const text = document.getElementById("power");

button.addEventListener("click", () => {
    if (text.textContent ===`This is Powerlearn Project Africa`){
        text.textContent = `Welcome to powerlearn Africa`;
        text.style.fontweight = "bold";
        button.textContent =`Return Me!`;
    } else {
        text.textContent = `This is Powerlearn Project Africa`;
        button.textContent =`Click me`;
        text.style.Color="red";

    };  
    window.alert("You just changed the text context!");
});

// event handling for links 
const weblink = document.getElementById("weblink");
weblink.addEventListener("mouseover", () => {
  if(   weblink.style.color = "red"){
    weblink.style.color =  "blue";
  } else{
    weblink.style.color = "red";
  }
});

//event listener for input

const rangebtn = document.getElementById("dt");
const slidertext = document.getElementById("slidertext");


rangebtn.oninput = function(){
    slidertext.style.fontSize=`${rangebtn.value}px`;
    
};

//building a lightr or dark mode toggle

const togglebutton = document.getElementById("togglebtn");
const body = document.getElementById("body");
togglebutton.addEventListener("click", () =>{
    if (body.style.background === "white"){
        body.style.background = "black";
        togglebutton.textContent= `Light mode`;
    }else{
        body.style.background = "white";
        togglebutton.textContent= `Dark mode`;
    };
});

//building a hide and show image 
const imgbtn= document.getElementById("openbtn");
const myimg = document.getElementById("myimg");

imgbtn.addEventListener("click", () =>{
    if (myimg.style.display === "none"){
        myimg.style.display = "block";
        imgbtn.textContent =`Close Image`;
    }else{
        myimg.style.display = "none";
        imgbtn.textcontent = "Open Image";

    };
});


//part3 login validation
//in this section I created a simple simple for validate login

//for login validation
document.getElementById("myform").addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errormessage = document.getElementById("errormsg");
    const loginbtn = document.getElementById("btn2");

    if (email === "" || password === ""){
        errormessage.textContent= `Please fill both form`;
        errormessage.style.color = "red";
        return;

    }if(email=== "" || password === "1234"){
        errormessage.textContent= `email required`;
        errormessage.style.color = "red"
    }

    else {
       errormessage.textContent= `login successful`; 
       errormessage.style.color = "green";
       alert("success")
    }
    this.reset();
}

)

