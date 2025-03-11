import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Calendar, Clock, Bot, ChevronDown, Facebook, Instagram, Menu, X, PhoneIncoming, PhoneOutgoing, Users, CalendarCheck, RefreshCcw, Gift, CheckCheck, MessageCircle, Send, ShoppingBag, MessagesSquare, Phone, Mail, User } from 'lucide-react';
import CalendlyEmbed from './components/CalendlyEmbed';

// Remove unused function and variables
// const useVisibilityObserver = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   return [isVisible, ref];
// };

const animatedWords = ['atiende', 'responde', 'agenda', 'vende'];

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Cómo funciona', href: '#how-it-works' },
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Preguntas frecuentes', href: '#faq' },
  { label: 'Agendar una llamada', href: '#contact' },
];

const WhatsAppIcon = () => (
  <svg fill="currentColor" viewBox="0 0 32 32" width="24" height="24">
    <path d="M19.11 17.205c-.163-.007-.325-.007-.488-.007-.163 0-.325.007-.488.007-1.523 0-4.23 1.482-4.23 4.09 0 2.607 2.707 4.09 4.23 4.09.163 0 .325.007.488.007.163 0 .325-.007.488-.007 1.523 0 4.23-1.482 4.23-4.09 0-2.607-2.707-4.09-4.23-4.09zM16 2.667C8.896 2.667 2.667 8.896 2.667 16s6.229 13.333 13.333 13.333 13.333-6.229 13.333-13.333S23.104 2.667 16 2.667zm8.192 21.489c-1.348 3.916-5.264 6.667-9.526 6.667-1.465 0-2.908-.281-4.244-.814l-1.774.933 1.037-1.719c-.607-1.308-.946-2.719-.946-4.178 0-4.262 3.465-7.726 7.726-7.726 2.062 0 3.977.814 5.412 2.25 1.435 1.435 2.249 3.35 2.249 5.412 0 1.726-.531 3.35-1.555 4.705z"></path>
  </svg>
);

const faqs = [
  {
    question: '¿Cómo funciona su copiloto de IA?',
    answer: 'Nuestro copiloto utiliza inteligencia artificial avanzada para entender las consultas de tus clientes y ofrecer respuestas precisas y personalizadas, optimizando la comunicación y mejorando la eficiencia de tu negocio.',
  },
  {
    question: '¿Qué tipo de negocios pueden beneficiarse de su copiloto?',
    answer: 'Desde restaurantes y tiendas minoristas hasta servicios profesionales y agencias, nuestro copiloto es adaptable a una amplia variedad de negocios que buscan mejorar su atención al cliente y optimizar sus operaciones.',
  },
  {
    question: '¿Cómo se integra con mis sistemas actuales?',
    answer: 'Nuestro copiloto se integra fácilmente con tus plataformas de mensajería y sistemas de gestión existentes, permitiéndote una implementación rápida y sin complicaciones para empezar a disfrutar de sus beneficios de inmediato.',
  },
  {
    question: '¿Ofrecen soporte técnico y capacitación?',
    answer: 'Sí, ofrecemos soporte técnico integral y capacitación para asegurar que aproveches al máximo todas las funcionalidades de nuestro copiloto. Estamos comprometidos con tu éxito y te brindamos el apoyo que necesitas en cada etapa.',
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isWordVisible, setIsWordVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const heroSectionRef = useRef(null);
  const howItWorksSectionRef = useRef(null);
  const featuresSectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsWordVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
        setIsWordVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const scrollToElement = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const formData = new FormData();
    formData.append('email', email);

    try {
      const response = await fetch('https://api.apispreadsheets.com/data/YOUR_API_ID/', {
        method: 'POST',
        body: formData,
      });

      if (response.status === 201) {
        console.log('Form submitted successfully');
        setEmail('');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-blue-700">
            TuCopiloto.IA
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-blue-700">
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-200"
            >
              ¡Pruébalo gratis!
            </button>
          </nav>
          <button className="md:hidden text-gray-500 hover:text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md overflow-hidden mt-1">
              <nav className="flex flex-col p-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-2 hover:bg-gray-100 transition duration-200"
                    onClick={() => {
                      const targetRef =
                        item.label === 'Inicio'
                          ? heroSectionRef
                          : item.label === 'Cómo funciona'
                          ? howItWorksSectionRef
                          : item.label === 'Funcionalidades'
                          ? featuresSectionRef
                          : item.label === 'Preguntas frecuentes'
                          ? faqSectionRef
                          : contactSectionRef;
                      if (targetRef) {
                        scrollToElement(targetRef);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-200 mt-2"
                >
                  ¡Pruébalo gratis!
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        <section id="hero" className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white" ref={heroSectionRef}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Tu copiloto de IA que{' '}
              <span className={`inline-block transition-opacity duration-500 ${isWordVisible ? 'opacity-100' : 'opacity-0'}`}>
                {animatedWords[currentWordIndex]}
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-12">
              Impulsa tu negocio con inteligencia artificial. Automatiza la atención al cliente, optimiza tus procesos y aumenta tus ventas.
            </p>
            <button
              onClick={() => scrollToElement(contactSectionRef)}
              className="bg-white text-blue-700 py-3 px-8 rounded-full font-bold hover:bg-blue-50 transition duration-200"
            >
              Agenda una llamada demo
            </button>
          </div>
        </section>

        <section id="how-it-works" className="py-24 bg-gray-50" ref={howItWorksSectionRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-12 text-center">¿Cómo funciona?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Calendar className="mx-auto h-12 w-12 text-blue-700 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Agenda Inteligente</h3>
                <p className="text-gray-600">
                  Nuestro copiloto gestiona tu agenda de manera eficiente, programando citas y recordatorios automáticamente.
                </p>
              </div>
              <div className="text-center">
                <Bot className="mx-auto h-12 w-12 text-blue-700 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Atención Automatizada</h3>
                <p className="text-gray-600">
                  Responde preguntas frecuentes y ofrece soporte 24/7, liberando a tu equipo para tareas más importantes.
                </p>
              </div>
              <div className="text-center">
                <ShoppingBag className="mx-auto h-12 w-12 text-blue-700 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Ventas Optimizadas</h3>
                <p className="text-gray-600">
                  Identifica oportunidades de venta, personaliza ofertas y cierra tratos de manera más efectiva.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 bg-white" ref={featuresSectionRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-12 text-center">Funcionalidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  <MessageSquare className="inline-block h-6 w-6 mr-2 text-blue-700 align-middle" />
                  Atención al cliente 24/7
                </h3>
                <p className="text-gray-600 mb-6">
                  Nuestro copiloto está disponible las 24 horas del día, los 7 días de la semana, para responder preguntas y resolver problemas,
                  garantizando una experiencia excepcional para tus clientes.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  <CalendarCheck className="inline-block h-6 w-6 mr-2 text-blue-700 align-middle" />
                  Gestión de citas y recordatorios
                </h3>
                <p className="text-gray-600 mb-6">
                  Automatiza la programación de citas y envía recordatorios personalizados para reducir las ausencias y optimizar tu agenda.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  <Users className="inline-block h-6 w-6 mr-2 text-blue-700 align-middle" />
                  Personalización y segmentación
                </h3>
                <p className="text-gray-600 mb-6">
                  Adapta las respuestas y ofertas a las necesidades específicas de cada cliente, creando experiencias únicas y aumentando la
                  fidelización.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  <RefreshCcw className="inline-block h-6 w-6 mr-2 text-blue-700 align-middle" />
                  Integración con tus herramientas
                </h3>
                <p className="text-gray-600 mb-6">
                  Conecta nuestro copiloto con tus plataformas de mensajería, CRM y sistemas de gestión para centralizar la información y
                  optimizar tus flujos de trabajo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24 bg-gray-50" ref={faqSectionRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-12 text-center">Preguntas frecuentes</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">Agenda una Llamada Demo</h2>
            <p className="text-lg text-center max-w-2xl mx-auto mb-12">
              Conoce cómo podemos transformar la manera en que tu negocio atiende, responde y vende con nuestro copiloto de IA.
            </p>
            
            {/* This is the key change - use a single CalendlyEmbed component with proper props */}
            <CalendlyEmbed 
              url="https://calendly.com/joshmiller-se/30min" 
              height={700}
              className="rounded-lg shadow-xl bg-white bg-opacity-10 p-2"
            />
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">TuCopiloto.IA</h4>
              <p className="text-gray-400">
                Impulsando negocios con inteligencia artificial. Automatizamos la atención al cliente, optimizamos tus procesos y aumentamos tus
                ventas.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contacto</h4>
              <p className="text-gray-400">
                <Phone className="inline-block h-5 w-5 mr-2 align-middle" />
                +1 (555) 123-4567
              </p>
              <p className="text-gray-400">
                <Mail className="inline-block h-5 w-5 mr-2 align-middle" />
                info@tucopilotodeia.com
              </p>
              <p className="text-gray-400">
                <User className="inline-block h-5 w-5 mr-2 align-middle" />
                123 Calle Principal, Ciudad, País
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} TuCopiloto.IA. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </main>

      {isDemoModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <CheckCheck className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">¡Solicita tu demo gratis!</h3>
              <div className="px-7 py-3">
                <p className="text-sm text-gray-500">
                  Déjanos tu correo electrónico y te contactaremos para programar tu demo personalizada.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Correo electrónico:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="items-center px-4 py-3">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    disabled={submitted}
                  >
                    {submitted ? 'Enviando...' : 'Solicitar demo'}
                  </button>
                </div>
              </form>
              <div className="items-center px-4 py-3">
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-800 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onClick={() => setIsDemoModalOpen(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
