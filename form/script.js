

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const message = document.getElementById("Message");
    const consent = document.getElementById("consentCheck");
    const submit = document.getElementById("submitbutton");
    const queryTypeRadios = document.getElementsByName("queryType");

    // Fonction de validation d'email
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            );
    };

    submit.addEventListener("click", function (event) {
        
        event.preventDefault(); // Empêche l'envoi du formulaire

        let isValid = true;

        // Réinitialise les erreurs
        document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
        document.querySelectorAll("input, textarea").forEach(el => el.classList.remove("error"));

        // Vérification des champs
        if (fname.value.trim() === "") {
            document.getElementById("error-fname").textContent = "This field is required";
            fname.classList.add("error");
            isValid = false;
        }

        if (lname.value.trim() === "") {
            document.getElementById("error-lname").textContent = "This field is required";
            lname.classList.add("error");
            isValid = false;
        }

        if (email.value.trim() === "" || !validateEmail(email.value.trim())) {
            document.getElementById("error-email").textContent = "Please enter a valid email address";
            email.classList.add("error");
            isValid = false;
        }

        // Vérification si un type de requête est sélectionné
        let isQueryTypeSelected = false;
        for (let radio of queryTypeRadios) { 
            if (radio.checked) {
                isQueryTypeSelected = true;
                break;
            }
        }
        if (!isQueryTypeSelected) {
            document.getElementById("error-queryType").textContent = "Please select a query type";
            isValid = false;
        }

        if (message.value.trim() === "") {
            document.getElementById("error-message").textContent = "This field is required";
            message.classList.add("error");
            isValid = false;
        }

        if (!consent.checked) {
            document.getElementById("error-consent").textContent = "To submit this form, please consent to being contacted";
            isValid = false;
        }

        if (isValid) {
            showSuccessMessage();
            form.reset();
        }
    });

    // Message de succès
    function showSuccessMessage() {
        const successToast = document.createElement("div");
        successToast.textContent = "Message Sent! Thanks for completing the form. We’ll be in touch soon!";
        successToast.style.position = "fixed";
        successToast.style.top = "20px";
        successToast.style.left = "50%";
        successToast.style.transform = "translateX(-50%)";
        successToast.style.backgroundColor = "#1e4d38";
        successToast.style.color = "white";
        successToast.style.padding = "16px";
        successToast.style.borderRadius = "5px";
        successToast.style.zIndex = "1000";

        document.body.appendChild(successToast);

        setTimeout(() => {
            successToast.remove();
        }, 3000);
    }
});
