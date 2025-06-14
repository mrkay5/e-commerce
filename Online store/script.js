function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function subscribe(event){
    event.preventDefault();
    const emailInput=document.getElementById('email');
    const message=document.getElementById('message');
    const email=emailInput.value.trim();

    if (email){
        message.textContent="Thank you for subscribing!";
        message.classList.remove('hidden');
        emaailInput.value = "";

    } else {
        message.textContent="Please,enter a valid email";
        message.classList.remove("hidden");
        message.style.color= "red";
    }
}