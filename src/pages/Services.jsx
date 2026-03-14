function Services() {

  const services = [
    {
      title: "Serviette",
      description: "Demander une nouvelle serviette fraîche.",
      icon: "🧖"
    },
    {
      title: "Eau fraîche",
      description: "Recevoir une bouteille d'eau.",
      icon: "💧"
    },
    {
      title: "Massage",
      description: "Réserver un soin ou massage relaxant.",
      icon: "💆"
    },
    {
      title: "Appeler l'accueil",
      description: "Contacter le personnel du spa.",
      icon: "📞"
    }
  ]

  const requestService = (service) => {
    alert("Demande envoyée : " + service.title)
  }

  return (

    <section className="services-section">

      <div className="section-heading">
        <p className="section-kicker">Services</p>
        <h2>Comment pouvons-nous vous aider ?</h2>
        <p>
          Sélectionnez un service et notre équipe s'occupera de votre demande.
        </p>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div
            key={index}
            className="service-card"
            onClick={() => requestService(service)}
          >

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Services