function purchaseService(service, price) {
    let money, rp, unlocks;

    switch(service) {
        case 'Starter':
            money = '50 Million';
            rp = '200';
            unlocks = 'Starter';
            break;
        case 'Classic':
            money = '300 Million';
            rp = '200 - 1000';
            unlocks = 'Classic';
            break;
        case 'Master':
            money = '800 Million';
            rp = '200 - 2000';
            unlocks = 'Master';
            break;
        case 'Ultimate':
            money = '1.5 Billion';
            rp = '200 - 3000';
            unlocks = 'Ultimate';
            break;
        case 'Supreme':
            money = '3 Billion';
            rp = '200 - 5000';
            unlocks = 'Supreme';
            break;
        case 'Kingpin':
            money = '5 Billion';
            rp = '200 - 8000';
            unlocks = 'Kingpin';
            break;
        case 'Legend':
            money = '10 Billion';
            rp = '200 - 8000';
            unlocks = 'Legend';
            break;
        case 'Boss':
            money = '20 Billion';
            rp = '200 - 8000';
            unlocks = 'Boss';
            break;
    }

    const confirmationMessage = `You have selected the ${service} package.
This package includes:
Money: ${money}
RP: ${rp}
Unlocks: ${unlocks}

Before proceeding to payment, make sure to include your login and password 
for the account where you have bought the game, and your Social Club details 
in the "What is this for?" section on PayPal.`;

    alert(confirmationMessage);
    window.location.href = "https://paypal.me/JW094?country.x=CA&locale.x=en_US";
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});
