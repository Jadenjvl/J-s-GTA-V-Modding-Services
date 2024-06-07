function purchaseService(service) {
    let confirmationMessage;

    if (service === 'Basic Mod Package') {
        confirmationMessage = `You have selected the ${service}. This package includes 50 million in-game money, RP boost, and modded outfits.
Before proceeding to payment, make sure to include your login and password 
for the account where you have bought the game, and your Social Club details 
in the "What is this for?" section on PayPal.`;
    } else if (service === 'Premium Mod Package') {
        confirmationMessage = `You have selected the ${service}. This package includes 500 million in-game money, RP boost, exclusive items and cars, and modded outfits.
Before proceeding to payment, make sure to include your login and password 
for the account where you have bought the game, and your Social Club details 
in the "What is this for?" section on PayPal.`;
    }

    alert(confirmationMessage);
    window.location.href = "https://paypal.me/JW094?country.x=CA&locale.x=en_US";
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});
