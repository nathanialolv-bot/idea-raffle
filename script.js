const API_URL = "https://script.google.com/macros/s/AKfycbxPEZjgONgtpvnqDEyVB9tt0MyTUvB5kSefpquM-Aff39czveGEnTDjRx-TG6YYA9zNRg/exec";

let ticketNumber = "";

async function loadTicket() {
    const response = await fetch(API_URL);
    const data = await response.json();

    ticketNumber = data.ticket;

    document.getElementById("ticket").innerText = ticketNumber;
}

function showForm() {
    document.getElementById("form").style.display = "block";
    document.getElementById("ticketBox").value = ticketNumber;
}

async function submitEntry() {

    const name = document.getElementById("name").value;

    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            name: name,
            ticket: ticketNumber
        })
    });

    document.body.innerHTML = `
        <div class="card">
            <h1>🎉 Success!</h1>
            <p>Your raffle entry has been recorded.</p>
            <h2>${ticketNumber}</h2>
        </div>
    `;
}

loadTicket();
