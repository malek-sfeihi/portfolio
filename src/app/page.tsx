"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-4 bg-gradient-to-b from-blue-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          Malek — Développeuse Full Stack
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 max-w-2xl mb-6"
        >
          Je conçois et développe des applications web modernes, performantes
          et esthétiques, avec un focus sur l’expérience utilisateur et la
          qualité du code.
        </motion.p>
        <div className="flex gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-blue-600 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-600 transition" />
          </a>
          <a href="mailto:ton.email@example.com">
            <Mail className="w-6 h-6 hover:text-blue-600 transition" />
          </a>
        </div>
      </section>

      {/* À propos */}
      <section className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/portrait.jpg" // Mets ta photo dans public/portrait.jpg
          alt="Photo de Malek"
          className="rounded-2xl shadow-lg object-cover w-full h-auto"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Je suis une développeuse full stack en alternance, passionnée par
            la création de solutions digitales innovantes. J’adore travailler
            sur des projets qui ont un impact concret et apporter de la valeur
            aux utilisateurs.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Mon objectif : continuer à développer mes compétences techniques et
            humaines pour exceller dans le développement web et contribuer à
            des projets ambitieux.
          </p>
          <a
            href="/CV_Malek.pdf"
            className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
            download
          >
            Télécharger mon CV
          </a>
        </motion.div>
      </section>

      {/* Projets */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Projets</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Application de gestion RH",
              desc: "Outil interne pour automatiser la gestion des congés et absences — réduction du temps de traitement de 40%.",
              tech: ["Next.js", "Node.js", "MongoDB"],
              link: "#",
            },
            {
              title: "E-commerce mode éthique",
              desc: "Plateforme de vente en ligne avec paiement sécurisé et tableau de bord admin.",
              tech: ["React", "Express", "Stripe API"],
              link: "#",
            },
          ].map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="font-bold text-xl mb-2">{proj.title}</h3>
              <p className="text-gray-600 mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={proj.link}
                className="text-blue-600 hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Travaillons ensemble</h2>
        <p className="text-gray-600 mb-6">
          Disponible pour un poste en alternance ou freelance
        </p>
        <a
          href="mailto:ton.email@example.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Me contacter
        </a>
      </section>
    </main>
  );
}
