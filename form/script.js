document.addEventListener("DOMContentLoaded", function (){
    const form = document.querySelector("form");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const message = document.getElementById("Message");
    const consent = document.getElementById("consentCheck");
    const submit = document.getElementById("submitbutton");

    submit.addEventListener("click", function(event){
        event.preventDefault(); //empeche l'envoie du formulaire
    })

    //Vérifie les champs requis
    if(fname.value.trim()==="" || lname.value.trim()==="" || email.value.trim() === "" || message.value.trim() ==="" || !consent.checked)
    {
        alert("Veuillez remplir tous les champs obligatoires.")
        return;
    }
    showSuccessMessage("Formulaire soumis avec succès !");
    form.reset();
})