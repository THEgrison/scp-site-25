<script>
  const webhookURL = "https://discord.com/api/webhooks/1362811294851272824/fn2C1Z2zuJO8pzEznVxOGz5lKWrEjWW4jXwVRGb_M3VhEDLR6_Co0ewWaUm-ivnIcJg6"; // Remplace par ton vrai lien

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi normal du formulaire

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const payload = {
      embeds: [
        {
          title: "Nouveau Message du Site ✉️",
          fields: [
            { name: "Nom", value: name, inline: true },
            { name: "Email", value: email, inline: true },
            { name: "Message", value: message }
          ],
          color: 5814783
        }
      ]
    };

    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (response.ok) {
        alert("Message envoyé avec succès !");
        document.getElementById('contact-form').reset();
      } else {
        alert("Erreur lors de l'envoi. Merci de réessayer !");
      }
    })
    .catch(error => {
      console.error('Erreur:', error);
      alert("Erreur de connexion. Merci de réessayer !");
    });
  });
</script>
