import { Bath, Droplets, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function Services() {

  const services = [
    {
      title: "Serviette",
      description: "Demander une nouvelle serviette fraîche.",
      icon: Bath
    },
    {
      title: "Eau fraîche",
      description: "Recevoir une bouteille d'eau.",
      icon: Droplets
    },
    {
      title: "Massage",
      description: "Réserver un soin ou massage relaxant.",
      icon: Sparkles
    },
    {
      title: "Appeler l'accueil",
      description: "Contacter le personnel du spa.",
      icon: Phone
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
      </div>

      <div className="services-grid">

        {services.map((service, index) => {

          const Icon = service.icon

          return (
            <motion.div
              key={index}
              className="service-card"
              onClick={() => requestService(service)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >

              <div className="service-icon">
                <Icon size={36}/>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </motion.div>
          )

        })}

      </div>

    </section>

  )
}

export default Services