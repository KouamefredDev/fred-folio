import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Configuration EmailJS - Remplacez par vos propres IDs
      const serviceID = 'service_1fb858m';
      const templateID = 'template_f2l3w9q';
      const publicKey = 'RljfjT851xz31qo3B';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Kouamefred',
      };

      // Envoi via EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message envoyé avec succès ! Je vous répondrai bientôt.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Échec de l\'envoi');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Erreur lors de l\'envoi. Veuillez réessayer ou m\'écrire directement.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kouamefred.dev@gmail.com',
      link: 'mailto:kouamefred.dev@gmail.com',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+225 05 84 38 25 46',
      link: 'tel:+2250584382546',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Abidjan, Côte d\'Ivoire',
      link: '#!',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contact
          </h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Un projet en tête ? Discutons de la façon dont je peux vous aider
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-200 hover:scale-105 text-center"
              >
                <div className="bg-slate-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{info.title}</h3>
                <p className="text-slate-600">{info.value}</p>
              </a>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Envoyez-moi un message
            </h3>

            {status.message && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all outline-none"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all outline-none"
                    placeholder="jean@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all outline-none"
                  placeholder="Projet de développement web"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-800 text-white py-4 rounded-lg font-medium hover:bg-slate-900 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}