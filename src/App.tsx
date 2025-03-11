import React from 'react';
import { MessageSquare, Calendar, Clock, Bot, Shield, Cloud, ChevronDown, Facebook, Instagram, Menu, X, PhoneIncoming, PhoneOutgoing, Users, CalendarCheck, RefreshCcw, Gift, Check, CheckCheck, MessageCircle, Send, ShoppingBag, MessagesSquare, Phone, Mail, User } from 'lucide-react';

function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
}

const animatedWords = ['atiende', 'responde', 'agenda', 'vende'];

const COPILOT_BADGE = '+ NUESTRO COPILOTO IA';

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Beneficios', href: '#features' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-full transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-semibold text-gray-900">
              Agensis
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 flex items-center space-x-4">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-900 transition-colors hover:text-[#25d366] px-4 py-2 rounded-full hover:bg-black/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)} 
              className="inline-flex items-center justify-center rounded-full p-2 text-gray-900 hover:bg-black/5"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-black/5"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function AnimatedText() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  React.useEffect(() => {
    const word = animatedWords[currentIndex];
    const shouldType = !isDeleting && text !== word;

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setCurrentIndex((current) => (current + 1) % animatedWords.length);
      setTypingSpeed(150);
      return;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && shouldType) {
        setText(word.slice(0, text.length + 1));
        setTypingSpeed(150);
      } else if (isDeleting) {
        setText(text.slice(0, -1));
        setTypingSpeed(75);
      } else if (text === word) {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, typingSpeed]);

  return (
    <span className="relative inline-flex min-w-[140px] font-bold">
      <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        &nbsp;{text}
      </span>
      <span className="ml-[1px] inline-block h-full w-[2px] animate-blink bg-current" />
    </span>
  );
}

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#25d366"
    stroke="none"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const features = [
  {
    title: 'Respuestas Instantáneas 24/7',
    description: 'Automatiza todo, desde la calificación de leads hasta la programación de reuniones con nuestro producto.',
    icon: Clock,
  },
  {
    title: 'Fácil de Personalizar',
    description: 'Nos adaptamos a tus necesidades únicas, integrándose perfectamente con tu flujo de trabajo.',
    icon: MessageSquare,
  },
  {
    title: 'Escala con Datos',
    description: 'Obtén información valiosa sobre tus tasas de conversión a través de más de 30 métricas.',
    icon: Bot,
  },
  {
    title: 'Implementación Rápida',
    description: 'Nuestras implementaciones no requieren experiencia técnica ni procesos de configuración extensos.',
    icon: Calendar,
  },
  {
    title: 'Acceso basado en la Nube',
    description: 'La nube ofrece configuración sencilla, alta disponibilidad y costos de mantenimiento reducidos.',
    icon: Cloud,
  },
  {
    title: 'Seguridad Empresarial',
    description: 'Los datos sensibles de los clientes se manejan con medidas de protección de nivel empresarial.',
    icon: Shield,
  },
];

const faqs = [
  {
    question: '¿Qué hace Agensis?',
    answer: 'Ofrecemos soluciones de chatbots con tecnología de inteligencia artificial para automatizar y optimizar procesos comerciales como la programación de citas, la calificación de clientes potenciales y la comunicación con los clientes. Ayudamos a las empresas, en particular en los sectores de coaching y consultoría, a aumentar la eficiencia y las conversiones y, al mismo tiempo, reducir los costos generales.',
  },
  {
    question: '¿Cómo pueden los chatbots con IA ayudar a mi empresa?',
    answer: 'Los chatbots de IA pueden automatizar tareas repetitivas, como la programación de citas, lo que le permite disponer de más tiempo para centrarse en el crecimiento y el servicio al cliente. Funcionan las 24 horas del día, los 7 días de la semana, lo que garantiza que no se pierdan oportunidades, y pueden adaptarse y aprender de cada interacción.',
  },
  {
    question: '¿Necesito saber de Inteligencia Artificial?',
    answer: 'No, no necesita experiencia previa en IA. Nuestras soluciones están diseñadas para integrarse sin problemas en sus sistemas existentes. Brindamos soporte y capacitación integrales para garantizar que pueda maximizar los beneficios de nuestras soluciones de IA, incluso sin un equipo de TI dedicado.',
  },
  {
    question: '¿Qué industrias atiende Agensis?',
    answer: 'Si bien nos adaptamos a distintos sectores, nos especializamos en brindar servicios a empresas de consultoría y coaching de alto nivel. Nuestros copilotos de inteligencia artificial son particularmente efectivos para empresas que dependen en gran medida de las citas e interacciones con los clientes.',
  },
  {
    question: '¿Cómo puedo empezar?',
    answer: 'Puede comunicarse con nosotros a través del botón "Agendar una llamada". Programe una consulta con nosotros para analizar cómo nuestras soluciones de IA se pueden adaptar a sus necesidades y objetivos comerciales específicos.',
  },
];

function FAQ({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

function WhatsAppButton({ className = '' }: { className?: string }) {
  return (
    <a
      href="https://calendly.com/michaelsegovia/1-a-1-con-michael"
      className={`inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 relative overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      <Calendar className="h-5 w-5" />
      <span className="relative">Agendar una llamada</span>
    </a>
  );
}

function App() {
  const [isMainCTAVisible, setIsMainCTAVisible] = React.useState(true);
  const mainCTARef = React.useRef<HTMLDivElement>(null);
  const formRef = React.useRef<HTMLDivElement>(null);
  const [isFormVisible, setIsFormVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMainCTAVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (mainCTARef.current) {
      observer.observe(mainCTARef.current);
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFormVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-white md:hidden z-10" />
          <spline-viewer url="https://prod.spline.design/pRbtCcx56nvu1AS0/scene.splinecode" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/20 to-white/20 backdrop-blur-[5px] z-10" />
        <div className="relative z-20 mx-auto max-w-7xl text-center min-h-screen flex flex-col items-center justify-center -mt-16 md:mt-12 px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <h1 className="hero-title bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              Conversaciones
              <br />
              que convierten
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-gray-800 backdrop-blur-sm bg-white/30 px-6 py-3 rounded-2xl inline-block border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              ✨ Automatiza Teléfono y WhatsApp sin perder el toque humano
            </p>
            <div ref={mainCTARef} className="mt-8 sm:mt-10">
              <WhatsAppButton className="shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Animated Text Section */}
      <section className="relative z-20 bg-white py-16 mt-[-1px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-satoshi text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent sm:text-5xl md:text-6xl tracking-tight leading-tight">
              Tu propio empleado Chat-GPT que
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 mt-6 sm:mt-8">
                <AnimatedText />
                <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">por ti las 24/7</span>
              </div>
            </h2>
            <div className="mt-8 mx-auto max-w-2xl">
              <p className="text-lg text-gray-600 leading-relaxed">
                Automatiza tu atención al cliente con inteligencia artificial avanzada que aprende y mejora con cada interacción
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-12">
            <div className="relative w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] order-2 lg:order-1 transform transition-all duration-300 hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.4)] hover:scale-[1.01] z-10">
                <h3 className="text-2xl font-medium text-gray-900 mb-6 animate-slide-in">
                  Recibe una llamada de nuestros Agentes IA
                </h3>
                <form ref={formRef} className={`space-y-4 animate-slide-in animation-delay-300 ${isFormVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">
                      Nombre <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 pl-10 transition-all duration-300"
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="Ingresa tu teléfono"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 pl-10 transition-all duration-300"
                      />
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Ingresa tu email"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 pl-10 transition-all duration-300"
                      />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-6 bg-black rounded-xl px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-gray-900 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-500 relative overflow-hidden group shadow-lg shadow-black/20"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    <span className="relative">Solicitar Llamada Gratuita</span>
                  </button>
                </form>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-white order-1 lg:order-2 hidden md:block">
                <spline-viewer url="https://prod.spline.design/ovnUixerjWIisqU7/scene.splinecode" loading="lazy" />
              </div>
              <div className="w-full h-[400px] md:hidden order-1 relative overflow-hidden rounded-2xl">
                <spline-viewer url="https://prod.spline.design/ovnUixerjWIisqU7/scene.splinecode" loading="lazy" />
              </div>
            </div>
            <div className="w-full max-w-4xl mx-auto">
              <h3 className="text-2xl font-medium text-gray-900 text-center mb-8">
                Todo lo que necesitas para automatizar tu negocio
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative overflow-hidden bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.18)] group">
                  <div className="absolute inset-0 noise opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                  <PhoneIncoming className="h-6 w-6 text-gray-600 mb-3 transition-transform duration-500 group-hover:scale-110" />
                  <h4 className="text-gray-800 font-medium mb-2">Llamadas Entrantes</h4>
                  <p className="text-gray-500">Atiende y filtra llamadas 24/7</p>
                </div>
                <div className="relative overflow-hidden bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.18)] group">
                  <div className="absolute inset-0 noise opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                  <PhoneOutgoing className="h-6 w-6 text-gray-600 mb-3 transition-transform duration-500 group-hover:scale-110" />
                  <h4 className="text-gray-800 font-medium mb-2">Llamadas Salientes</h4>
                  <p className="text-gray-500">Realiza seguimiento proactivo</p>
                </div>
                <div className="relative overflow-hidden bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.18)] group">
                  <div className="absolute inset-0 noise opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                  <Users className="h-6 w-6 text-gray-600 mb-3 transition-transform duration-500 group-hover:scale-110" />
                  <h4 className="text-gray-800 font-medium mb-2">Califica Leads</h4>
                  <p className="text-gray-500">Evalúa y prioriza prospectos</p>
                </div>
                <div className="relative overflow-hidden bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.18)] group">
                  <div className="absolute inset-0 noise opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                  <CalendarCheck className="h-6 w-6 text-gray-600 mb-3 transition-transform duration-500 group-hover:scale-110" />
                  <h4 className="text-gray-800 font-medium mb-2">Agenda Citas</h4>
                  <p className="text-gray-500">Coordina reuniones automáticamente</p>
                </div>
                <div className="relative overflow-hidden bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.18)] group">
                  <div className="absolute inset-0 noise opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                  <RefreshCcw className="h-6 w-6 text-gray-600 mb-3 transition-transform duration-500 group-hover:scale-110" />
                  <h4 className="text-gray-800 font-medium mb-2">Reactiva Leads</h4>
                  <p className="text-gray-500">Recupera clientes inactivos</p>
                </div>
                <div className="relative overflow-hidden bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.18)] group">
                  <div className="absolute inset-0 noise opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                  <Gift className="h-6 w-6 text-gray-600 mb-3 transition-transform duration-500 group-hover:scale-110" />
                  <h4 className="text-gray-800 font-medium mb-2">Promociones</h4>
                  <p className="text-gray-500">Envía ofertas personalizadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pastel Gradient Section */}
      <section className="relative z-20 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#434343,#000000)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="mb-4 inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white shadow-lg">
              ✨ Integración Multi-Canal
            </span>
            <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              Inteligencia Artificial
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-400 bg-clip-text text-transparent">
                Por Voz y Por Chat
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Nuestro asistente virtual comprende el contexto y mantiene conversaciones naturales
              en WhatsApp y todos tus canales de comunicación
            </p>
            <div className="mt-8 flex justify-center gap-8">
              <WhatsAppIcon className="text-[#25d366]" />
              <MessageCircle className="h-6 w-6 text-gray-400" />
              <Facebook className="h-6 w-6 text-gray-400" />
              <Instagram className="h-6 w-6 text-gray-400" />
              <ShoppingBag className="h-6 w-6 text-gray-400" />
              <MessagesSquare className="h-6 w-6 text-gray-400" />
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="w-full max-w-md rounded-3xl bg-[#111]/80 backdrop-blur-xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-[#25d366] flex items-center justify-center">
                  <WhatsAppIcon />
                </div>
                <div>
                  <h3 className="text-white font-medium">Asistente Virtual</h3>
                  <p className="text-sm text-gray-400">En línea</p>
                </div>
              </div>
              <ChatConversation />
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="relative z-20 py-16 mt-[-1px]">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-1.5 text-sm font-medium text-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.25)] border border-white">
              ✨ Servicio Completo y Personalizado
            </span>
            <h2 className="relative font-satoshi text-4xl font-bold text-gray-900 sm:text-5xl tracking-tight leading-tight max-w-4xl mx-auto">
              Olvídate de la complejidad,
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">nosotros nos encargamos de todo</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Sin códigos complicados, sin horas aprendiendo IA, sin frustraciones técnicas.
              Implementamos todo por ti para que te enfoques en lo que realmente importa: tu negocio.
            </p>
          </div>
          
          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            <div className="relative rounded-2xl backdrop-blur-sm bg-white/30 p-8 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-800 text-center whitespace-nowrap">
                Haciéndolo Por Tu Cuenta
              </div>
              <div className="mt-4 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-red-100 p-2">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Semanas de Configuración</h3>
                    <p className="mt-1 text-gray-600">Meses aprendiendo programación, prompt engineering y configuración de IA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-red-100 p-2">
                    <Bot className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Curva de Aprendizaje Empinada</h3>
                    <p className="mt-1 text-gray-600">Frustrarte con términos técnicos y conceptos complejos de IA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-red-100 p-2">
                    <MessageSquare className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Sin Soporte Dedicado</h3>
                    <p className="mt-1 text-gray-600">Resolver problemas por tu cuenta cuando algo no funciona</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl backdrop-blur-sm bg-white/30 p-8 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#25d366] px-4 py-1 text-sm font-medium text-white text-center whitespace-nowrap">
                Con Agensis
              </div>
              <div className="mt-4 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#25d366]/20 p-2">
                    <Clock className="h-6 w-6 text-[#25d366]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Implementación Express</h3>
                    <p className="mt-1 text-gray-600">En menos de una semana tendrás tu sistema funcionando perfectamente*</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#25d366]/20 p-2">
                    <Bot className="h-6 w-6 text-[#25d366]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Todo Hecho Por Nosotros</h3>
                    <p className="mt-1 text-gray-600">Nos encargamos de toda la configuración técnica mientras tú te enfocas en tu negocio</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#25d366]/20 p-2">
                    <MessageSquare className="h-6 w-6 text-[#25d366]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Soporte Continuo</h3>
                    <p className="mt-1 text-gray-600">Equipo dedicado siempre disponible para optimizar tu sistema</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-8">
              <span className="text-xs mt-2 block">*Sujeto al alcance y complejidad de las automatizaciones a implementar</span>
            </p>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* Features Section */}

      {/* FAQ Section */}
      <section id="faq" className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold text-gray-900 sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <div className="mt-12">
            {faqs.map((faq) => (
              <FAQ key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl mb-8">
            ¿Estás listo para potenciar tu empresa con IA?
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Únete a las empresas que ya están transformando su atención al cliente
          </p>
          <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/michaelsegovia/1-a-1-con-michael" 
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-12 text-gray-300 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">Agnesis</h3>
              <p className="mt-4 text-sm">
                Transformando la atención al cliente con IA
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contacto</h3>
              <div className="mt-4 space-y-2 text-sm">
                <p>agensisai@gmail.com</p>
                <p>+57 (311) 360-9430</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Legal</h3>
              <div className="mt-4 space-y-2 text-sm">
                <p>Política de privacidad</p>
                <p>Términos de uso</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Redes Sociales</h3>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://facebook.com/agensisai"
                  className="text-gray-300 hover:text-white"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com/agnesis.ai"
                  className="text-gray-300 hover:text-white"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 Agnesis - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 transform transition-all duration-300 ${
        isMainCTAVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } z-50 bg-white/5 backdrop-blur-sm rounded-full p-1`}>
        <WhatsAppButton className="shadow-lg" />
      </div>
    </div>
  );
}

function ChatConversation() {
  const [messages, setMessages] = React.useState<Array<{
    text: string;
    isBot: boolean;
    showCheck?: boolean;
  }>>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = React.useState(0);
  const [isTyping, setIsTyping] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const scrollToBottom = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const conversation = [
    { text: "¡Hola! 👋 Soy el asistente virtual de Agensis. ¿En qué puedo ayudarte?", isBot: true },
    { text: "Hola, quisiera agendar una cita", isBot: false },
    { text: "¡Con gusto! 😊 ¿Para qué servicio te gustaría agendar?", isBot: true },
    { text: "Una consultoría de marketing", isBot: false },
    { text: "Perfecto. Tenemos disponibilidad para esta semana. ¿Qué día te vendría mejor?", isBot: true },
    { text: "¿Tienen algo para el jueves?", isBot: false },
    { text: "Sí, tenemos estos horarios disponibles para el jueves:\n\n• 10:00 AM\n• 2:00 PM\n• 4:00 PM", isBot: true },
    { text: "Me gustaría a las 2:00 PM", isBot: false },
    { text: "¡Excelente elección! ✨ He agendado tu cita para el jueves a las 2:00 PM. Te enviaré un recordatorio 24 horas antes.", isBot: true, showCheck: true },
  ];

  React.useEffect(() => {
    if (isVisible && currentMessageIndex < conversation.length) {
      setIsTyping(true);
      const delay = conversation[currentMessageIndex]?.isBot ? 3500 : 2000;
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, conversation[currentMessageIndex]]);
        setIsTyping(false);
        setCurrentMessageIndex(prev => prev + 1);
      }, delay + (currentMessageIndex * 500)); // Add progressive delay

      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex, isVisible]);

  return (
    <div ref={sectionRef} className="space-y-4">
      <div ref={chatContainerRef} className="h-[300px] overflow-y-auto space-y-4 pr-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} opacity-0 animate-fade-in`}
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
          >
            <div
              className={`rounded-2xl px-4 py-2 max-w-[80%] ${
                message.isBot
                  ? 'bg-gray-700/50 text-white'
                  : 'bg-[#25d366] text-white'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              {message.showCheck && (
                <div className="flex justify-end mt-1">
                  <CheckCheck className="h-4 w-4 text-white/80" />
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-700/50 rounded-2xl px-4 py-2">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 mt-4 border-t border-white/10 pt-4">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          className="flex-1 bg-white/5 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#25d366]/50"
          disabled
        />
        <button
          className="h-9 w-9 flex items-center justify-center rounded-full bg-[#25d366] text-white disabled:opacity-50"
          disabled
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-20 text-center">
        <a
          href="https://wa.link/7hsrzf"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-900 transition-transform hover:scale-105 font-medium"
        >
          <WhatsAppIcon />
          <span>Escríbenos y prueba gratis</span>
        </a>
      </div>
    </div>
  );
}

export default App
