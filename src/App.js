import React, { useState, useEffect, useRef } from 'react';

// Componente Card con efecto neón
const NeonCard = ({ children, title, isSelected = false, onClick, color = "blue", className = "" }) => {
  const colorClasses = {
    blue: {
      border: "border-blue-400 hover:border-blue-300",
      shadow: "shadow-blue-500/20",
      glow: "shadow-[0_0_15px_rgba(59,130,246,0.5)]"
    },
    purple: {
      border: "border-purple-400 hover:border-purple-300",
      shadow: "shadow-purple-500/20",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.5)]"
    },
    green: {
      border: "border-green-400 hover:border-green-300",
      shadow: "shadow-green-500/20",
      glow: "shadow-[0_0_15px_rgba(34,197,94,0.5)]"
    },
    pink: {
      border: "border-pink-400 hover:border-pink-300",
      shadow: "shadow-pink-500/20",
      glow: "shadow-[0_0_15px_rgba(236,72,153,0.5)]"
    }
  };

  const selectedClasses = isSelected 
    ? `scale-[1.02] border-white ${colorClasses[color].glow} bg-gradient-to-br from-slate-800 to-slate-900`
    : "";

  return (
    <div 
      onClick={onClick}
      className={`relative p-6 rounded-xl border-2 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 cursor-pointer 
      ${colorClasses[color].border} ${colorClasses[color].shadow} ${selectedClasses} 
      hover:scale-[1.02] ${className}`}
    >
      {isSelected && (
        <div className={`absolute inset-0 rounded-lg border-2 border-white/30 pointer-events-none animate-pulse`}></div>
      )}
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <div className="text-gray-300">{children}</div>
    </div>
  );
};

// Componente OrbitSystem optimizado
const OrbitSystem = React.memo(() => {
  const skillGroups = [
    {
      skills: [
        { icon: "fab fa-react", name: "React", color: "#61DAFB" },
        { icon: "fab fa-angular", name: "Angular", color: "#DD0031" },
        { icon: "fab fa-html5", name: "HTML5", color: "#E34F26" },
        { icon: "fab fa-css3-alt", name: "CSS3", color: "#1572B6" },
        { icon: "fab fa-js", name: "JavaScript", color: "#F7DF1E" },
        { icon: "fab fa-bootstrap", name: "Bootstrap", color: "#7952B3" }
      ],
      radius: 100,
      duration: 25,
      direction: 1
    },
    {
      skills: [
        { icon: "fas fa-code", name: ".NET Core", color: "#512BD4" },
        { icon: "fas fa-hashtag", name: "C#", color: "#239120" },
        { icon: "fas fa-database", name: "SQL Server", color: "#CC2927" },
        { icon: "fas fa-database", name: "MySQL", color: "#4479A1" },
        { icon: "fas fa-database", name: "PostgreSQL", color: "#336791" },
        { icon: "fas fa-paint-brush", name: "Tailwind", color: "#06B6D4" }
      ],
      radius: 150,
      duration: 35,
      direction: -1
    },
    {
      skills: [
        { icon: "fab fa-git-alt", name: "Git", color: "#F05032" },
        { icon: "fab fa-github", name: "GitHub", color: "#181717" },
        { icon: "fas fa-cloud", name: "Azure DevOps", color: "#0078D4" },
        { icon: "fas fa-server", name: "IIS", color: "#005A9F" },
        { icon: "fas fa-code", name: "VS Code", color: "#007ACC" }
      ],
      radius: 200,
      duration: 45,
      direction: 1
    }
  ];

  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] flex justify-center items-center orbit-system-container">
        {/* Imagen central */}
        <div className="absolute z-20 w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1 shadow-lg animate-float">
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/50"></div>
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-300/50 relative">
            <img 
              src="/pictures/perfil.webp" 
              alt="Profile" 
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">DG</div>';
              }}
            />
          </div>
          
          {/* Partículas orbitales */}
          <div className="absolute inset-0 animate-particle-orbit">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 120}deg) translateX(35px) translateY(-2px)`,
                  animationDelay: `${i * 0.5}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Órbitas */}
        {skillGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="absolute inset-0 flex justify-center items-center">
            <div 
              className="absolute border border-blue-300/10 rounded-full"
              style={{
                width: `${group.radius * 2}px`,
                height: `${group.radius * 2}px`,
              }}
            ></div>
            
            <div 
              className="absolute animate-neutron-spin"
              style={{
                width: `${group.radius * 2}px`,
                height: `${group.radius * 2}px`,
                animationDuration: `${group.duration}s`,
                animationDirection: group.direction === 1 ? 'normal' : 'reverse',
              }}
            >
              {group.skills.map((skill, index) => {
                const angle = (index * 360) / group.skills.length;
                return (
                  <div
                    key={index}
                    className="absolute w-10 h-10 lg:w-12 lg:h-12 -ml-5 -mt-5 lg:-ml-6 lg:-mt-6 top-1/2 left-1/2"
                    style={{
                      transform: `rotate(${angle}deg) translateX(${group.radius}px)`,
                    }}
                  >
                    <div 
                      className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 hover:scale-110 group cursor-pointer animate-counter-rotate"
                      style={{
                        background: `rgba(${parseInt(skill.color.slice(1,3), 16)}, ${parseInt(skill.color.slice(3,5), 16)}, ${parseInt(skill.color.slice(5,7), 16)}, 0.1)`,
                        animationDuration: `${group.duration}s`,
                        animationDirection: group.direction === 1 ? 'reverse' : 'normal'
                      }}
                    >
                      <i 
                        className={`${skill.icon} text-base lg:text-lg`}
                        style={{ color: skill.color }}
                        title={skill.name}
                      ></i>
                      
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-30">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Efectos de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        <div className="absolute w-56 h-56 lg:w-64 lg:h-64 bg-gradient-radial from-blue-400/10 to-transparent rounded-full blur-xl"></div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes particle-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes neutron-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes counter-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
          50% { transform: translateY(-15px) translateX(5px); opacity: 1; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
          will-change: transform;
        }
        
        .animate-particle-orbit {
          animation: particle-orbit 8s linear infinite;
          will-change: transform;
        }
        
        .animate-neutron-spin {
          animation: neutron-spin var(--duration, 30s) linear infinite;
          will-change: transform;
        }
        
        .animate-counter-rotate {
          animation: counter-rotate var(--duration, 30s) linear infinite;
          will-change: transform;
        }
        
        .animate-float-particle {
          animation: float-particle var(--duration, 4s) ease-in-out infinite;
          will-change: transform, opacity;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-particle-orbit,
          .animate-neutron-spin,
          .animate-counter-rotate,
          .animate-float-particle {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
});

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const heroRef = useRef(null);

  // Datos de ejemplo
  const aboutCards = [
    {
      id: 1,
      title: "Mi Educación",
      content: "Licenciado en Informática Administrativa con especialización en desarrollo web y bases de datos.",
      color: "blue"
    },
    {
      id: 2,
      title: "Mi Experiencia",
      content: "5+ años desarrollando aplicaciones web empresariales con .NET Core y React.",
      color: "purple"
    },
    {
      id: 3,
      title: "Mi Enfoque",
      content: "Desarrollo de soluciones centradas en el usuario, escalables y mantenibles.",
      color: "green"
    }
  ];

  const skills = [
    {
      id: 1,
      title: "Frontend",
      content: "React, Angular, JavaScript, TypeScript, HTML5, CSS3, Tailwind, Bootstrap",
      color: "blue",
      details: {
        experience: "4+ años",
        projects: "10+ proyectos",
        level: "Avanzado"
      }
    },
    {
      id: 2,
      title: "Backend",
      content: ".NET Core, C#, Node.js, Express, REST APIs, GraphQL",
      color: "purple",
      details: {
        experience: "5+ años",
        projects: "15+ proyectos",
        level: "Experto"
      }
    },
    {
      id: 3,
      title: "Bases de Datos",
      content: "SQL Server, MySQL, PostgreSQL, MongoDB, Entity Framework",
      color: "green",
      details: {
        experience: "5+ años",
        projects: "20+ proyectos",
        level: "Experto"
      }
    },
    {
      id: 4,
      title: "DevOps & Tools",
      content: "Git, GitHub, Azure DevOps, Docker, IIS, VS Code",
      color: "pink",
      details: {
        experience: "3+ años",
        projects: "10+ proyectos",
        level: "Intermedio-Avanzado"
      }
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión ERP",
      content: "Sistema completo para gestión empresarial con módulos de inventario, facturación y RRHH.",
      color: "blue",
      technologies: ["React", ".NET Core", "SQL Server"],
      year: "2023",
      link: "#"
    },
    {
      id: 2,
      title: "E-commerce",
      content: "Plataforma de comercio electrónico con pasarela de pagos y panel administrativo.",
      color: "purple",
      technologies: ["Angular", "Node.js", "MongoDB"],
      year: "2022",
      link: "#"
    },
    {
      id: 3,
      title: "App de Tareas",
      content: "Aplicación web para gestión de tareas con calendario integrado y recordatorios.",
      color: "green",
      technologies: ["React", "Firebase"],
      year: "2021",
      link: "#"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Puedes agregar lógica para pausar/activar animaciones aquí
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 shadow-lg border-b border-blue-500/20">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Darbin Gallardo
          </div>
          <div className="hidden md:flex space-x-8">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`capitalize transition-all duration-300 ${
                  activeSection === section 
                    ? 'text-blue-400 border-b-2 border-blue-400 pb-1' 
                    : 'hover:text-blue-300'
                }`}
              >
                {section === 'hero' ? 'Portada' : 
                 section === 'about' ? 'Sobre Mí' : 
                 section === 'skills' ? 'Habilidades' : 
                 section === 'projects' ? 'Proyectos' : 'Contacto'}
              </button>
            ))}
          </div>
          <button className="md:hidden text-blue-400">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-10 lg:pt-18"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50"></div>
        
        <div className="container mx-auto px-4 sm:px-6 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Contenido de texto */}
            <div className="mt-4 flex-1 text-center lg:text-left order-2 lg:order-1">
              <p className="text-base sm:text-lg text-blue-300 mb-2">Hola Mundo, Soy Darbin</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent leading-tight">
                Licenciado en Informática Administrativa
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-400 mb-6 lg:mb-8">
                Desarrollador Web
              </h2>
              <p className="text-base sm:text-lg lg:text-xl max-w-2xl text-gray-300 leading-relaxed mb-8 lg:mb-12">
                Apasionado por crear soluciones digitales innovadoras y funcionales 
                que impacten positivamente al usuario final.
              </p>
              
              {/* Botones */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
                <a 
                  href="#contact" 
                  className="px-6 lg:px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Descargar CV
                </a>
                <a 
                  href="#projects" 
                  className="px-6 lg:px-8 py-3 border-2 border-blue-400 hover:bg-blue-900/30 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25"
                >
                  Contáctame
                </a>
              </div>

              {/* Iconos sociales */}
              <div className="flex justify-center lg:justify-start space-x-4">
                <a href="https://www.linkedin.com/in/darbin-jos%C3%A9-gallardo-quintero-2506989a/" className="text-2xl text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Gallardo09" className="text-2xl text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://wa.me/50497824537?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios" className="text-2xl text-gray-400 hover:text-green-400 transition-colors duration-300">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
            
            {/* Sistema orbital */}
            <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
              <OrbitSystem />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-3xl text-blue-400 hover:text-blue-300 transition-colors duration-300">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-slate-800/50 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aboutCards.map((card) => (
              <NeonCard
                key={card.id}
                title={card.title}
                color={card.color}
                className="hover:shadow-lg"
              >
                <p className="text-gray-300">{card.content}</p>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Mis Habilidades
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <NeonCard
                key={skill.id}
                title={skill.title}
                color={skill.color}
                isSelected={selectedSkill === skill.id}
                onClick={() => setSelectedSkill(selectedSkill === skill.id ? null : skill.id)}
              >
                <p className="text-gray-300 mb-3">{skill.content}</p>
                {selectedSkill === skill.id && (
                  <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-300">Experiencia:</span>
                      <span>{skill.details.experience}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-300">Proyectos:</span>
                      <span>{skill.details.projects}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-300">Nivel:</span>
                      <span>{skill.details.level}</span>
                    </div>
                  </div>
                )}
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-slate-800/50 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Mis Proyectos
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <NeonCard
                key={project.id}
                title={project.title}
                color={project.color}
                isSelected={selectedProject === project.id}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <p className="text-gray-300">{project.content}</p>
                {selectedProject === project.id && (
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-300">Tecnologías:</span>
                      <span className="text-right">{project.technologies.join(", ")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-300">Año:</span>
                      <span>{project.year}</span>
                    </div>
                    <a 
                      href={project.link} 
                      className="block mt-4 px-4 py-2 bg-blue-600/50 hover:bg-blue-600 rounded-lg text-center text-sm transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Detalles
                    </a>
                  </div>
                )}
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          
          <NeonCard title="Envíame un Mensaje" color="blue">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensaje</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu mensaje..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Enviar Mensaje
              </button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-lg font-semibold mb-4 text-white">Otras formas de contacto</h4>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://wa.me/50497824537?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors duration-300">
                  <i className="fab fa-whatsapp text-green-400 text-xl"></i>
                  <span>WhatsApp</span>
                </a>
                <a href="https://www.linkedin.com/in/darbin-jos%C3%A9-gallardo-quintero-2506989a/" className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors duration-300">
                  <i className="fab fa-linkedin text-blue-400 text-xl"></i>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Gallardo09" className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors duration-300">
                  <i className="fab fa-github text-white text-xl"></i>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </NeonCard>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Portfolio);