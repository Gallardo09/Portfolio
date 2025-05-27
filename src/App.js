import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [videoLoaded, setVideoLoaded] = useState(false);

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
      <Helmet>
        <title>Darbin Gallardo | Desarrollador Web</title>
        <meta name="description" content="Portafolio profesional de Darbin José Gallardo Quintero, Desarrollador Web Full Stack" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-green-900 bg-opacity-90 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">Darbin Gallardo</div>
          <div className="hidden md:flex space-x-8">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`capitalize ${activeSection === section ? 'text-green-300 border-b-2 border-green-300' : 'hover:text-green-200'}`}
              >
                {section === 'hero' ? 'Portada' : 
                 section === 'about' ? 'Sobre Mí' : 
                 section === 'skills' ? 'Habilidades' : 
                 section === 'projects' ? 'Proyectos' : 'Contacto'}
              </button>
            ))}
          </div>
          <button className="md:hidden">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {videoLoaded && (
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover opacity-20"
              onLoadedData={() => setVideoLoaded(true)}
            >
              <source src="/videos/Portada.mp4" type="video/mp4" />
            </video>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-b from-green-900 via-transparent to-green-900 z-1"></div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-green-300 shadow-lg">
            {/* Tu foto aquí */}
            <img src="/pictures/perfil.jpg" alt="Darbin Gallardo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Darbin José Gallardo Quintero</h1>
          <h2 className="text-2xl md:text-3xl text-green-300 mb-8">Desarrollador Web Full Stack</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Con más de 12 años de experiencia desarrollando soluciones tecnológicas innovadoras.
          </p>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#contact" className="px-8 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Contáctame
            </a>
            <a href="#projects" className="px-8 py-3 border-2 border-green-300 hover:bg-green-900 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Mis Proyectos
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-3xl">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 flex items-center relative overflow-hidden">
        {activeSection === 'about' && (
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover opacity-20"
            >
              <source src="/videos/Portada.mp4" type="video/mp4" />
            </video>
          </div>
        )}
        
        <div className="container mx-auto px-6 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="border-b-4 border-green-300 pb-2">Sobre Mí</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-lg mb-6">
                Soy Licenciado en Informática Administrativa de la UNAH, con una sólida trayectoria de 12 años en el desarrollo de software, abarcando tanto FrontEnd como BackEnd.
              </p>
              <p className="text-lg mb-6">
                Mi experiencia me ha permitido dominar múltiples tecnologías y frameworks, lo que me convierte en un desarrollador versátil capaz de abordar proyectos complejos desde su concepción hasta su implementación final.
              </p>
              <p className="text-lg">
                Me apasiona crear soluciones tecnológicas que no solo cumplan con los requisitos funcionales, sino que también ofrezcan una experiencia de usuario excepcional y un rendimiento óptimo.
              </p>
            </div>
            <div className="md:w-1/2 bg-green-800 bg-opacity-50 p-8 rounded-lg border border-green-600">
              <h3 className="text-2xl font-semibold mb-6 text-green-300">Educación</h3>
              <div className="flex items-start mb-6">
                <div className="bg-green-600 p-3 rounded-full mr-4">
                  <i className="fas fa-graduation-cap text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-medium">Licenciatura en Informática Administrativa</h4>
                  <p className="text-green-200">Universidad Nacional Autónoma de Honduras (UNAH)</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-6 text-green-300">Experiencia</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <i className="fas fa-laptop-code text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">12+ años</h4>
                    <p className="text-green-200">Desarrollo de software profesional</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <i className="fas fa-code text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Full Stack</h4>
                    <p className="text-green-200">Experiencia tanto en FrontEnd como BackEnd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
        {activeSection === 'skills' && (
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover opacity-20"
            >
              <source src="/videos/Principal.mp4" type="video/mp4" />
            </video>
          </div>
        )}
        
        <div className="container mx-auto px-6 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="border-b-4 border-green-300 pb-2">Habilidades Técnicas</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Frontend Skills */}
            <SkillCard icon="fab fa-react" name="React" />
            <SkillCard icon="fab fa-angular" name="Angular" />
            <SkillCard icon="fab fa-html5" name="HTML5" />
            <SkillCard icon="fab fa-css3-alt" name="CSS3" />
            <SkillCard icon="fab fa-js" name="JavaScript" />
            <SkillCard icon="fab fa-bootstrap" name="Bootstrap" />
            <SkillCard icon="devicon-tailwindcss-original" name="Tailwind" />
            
            {/* Backend Skills */}
            <SkillCard icon="devicon-dotnetcore-plain" name=".NET Core" />
            <SkillCard icon="devicon-csharp-plain" name="C#" />
            <SkillCard icon="devicon-microsoftsqlserver-plain-wordmark" name="SQL Server" />
            <SkillCard icon="devicon-mysql-original" name="MySQL" />
            <SkillCard icon="devicon-postgresql-plain" name="PostgreSQL" />
            
            {/* Tools */}
            <SkillCard icon="fab fa-git-alt" name="Git" />
            <SkillCard icon="fab fa-github" name="GitHub" />
            <SkillCard icon="devicon-azuredevops-plain" name="Azure DevOps" />
            <SkillCard icon="fas fa-terminal" name="IIS" />
            <SkillCard icon="devicon-vscode-plain" name="VS Code" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
        {activeSection === 'projects' && (
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover opacity-20"
            >
              <source src="/videos/SobreMi.mp4" type="video/mp4" />
            </video>
          </div>
        )}
        
        <div className="container mx-auto px-6 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="border-b-4 border-green-300 pb-2">Proyectos Destacados</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProjectCard 
              title="Proyecto IMAVA" 
              description="Sistema de Matrícula Automatizado con entrega de notas, generación de reportes, desarrollado en entorno de escritorio con Windows Forms, C#, Reports y base de datos SQL."
              technologies={['Windows Forms', 'C#', 'SQL Server', 'Reporting Services']}
            />
            
            <ProjectCard 
              title="Sistema SYSNARA" 
              description="Sistema Administrativo y de Matrícula Escolar desarrollado en .NET CORE 8 MVC con SQL SERVER, utilizando FastReport, Bootstrap, JavaScript y múltiples librerías modernas."
              technologies={['.NET Core 8', 'MVC', 'SQL Server', 'FastReport', 'Bootstrap', 'JavaScript']}
            />
            
            <ProjectCard 
              title="Xime Estética & Spa" 
              description="Página web para promocionar servicios de belleza, cosmética y cuidado personal, desarrollada con React, Tailwind CSS y PostgreSQL."
              technologies={['React', 'Tailwind CSS', 'PostgreSQL', 'Git']}
            />
            
            <ProjectCard 
              title="Servicios Express HN" 
              description="Plataforma web para promocionar y contratar cualquier tipo de servicio, desarrollada con tecnologías modernas."
              technologies={['React', 'Bootstrap', 'PostgreSQL']}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 flex items-center relative overflow-hidden">
        {activeSection === 'contact' && (
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover opacity-20"
            >
              <source src="/videos/Contacto.mp4" type="video/mp4" />
            </video>
          </div>
        )}
        
        <div className="container mx-auto px-6 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="border-b-4 border-green-300 pb-2">Contacto</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-6">¡Trabajemos juntos!</h3>
              <p className="text-lg mb-8">
                Si estás buscando un desarrollador experimentado para tu próximo proyecto o simplemente quieres conectarte, no dudes en contactarme.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Email</h4>
                    <a href="mailto:darbingallardo9@gmail.com" className="text-green-200 hover:text-green-300">darbingallardo9@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <i className="fab fa-linkedin text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/darbin-jos%C3%A9-gallardo-quintero-2506989a/" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-green-300">
                      Darbin José Gallardo Quintero
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Ubicación</h4>
                    <p className="text-green-200">Honduras, C.A.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-green-900 bg-opacity-90 py-8 text-center">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Darbin José Gallardo Quintero. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.linkedin.com/in/darbin-jos%C3%A9-gallardo-quintero-2506989a/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-300">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:darbingallardo9@gmail.com" className="text-2xl hover:text-green-300">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-300">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Componente para las tarjetas de habilidades
const SkillCard = ({ icon, name }) => {
  return (
    <div className="bg-green-800 bg-opacity-50 p-6 rounded-lg border border-green-600 flex flex-col items-center transition-all duration-300 hover:bg-green-700 hover:border-green-400 hover:transform hover:scale-105">
      <i className={`${icon} text-4xl mb-4 text-green-300`}></i>
      <h3 className="text-xl font-medium">{name}</h3>
    </div>
  );
};

// Componente para las tarjetas de proyectos
const ProjectCard = ({ title, description, technologies }) => {
  return (
    <div className="relative bg-green-800 bg-opacity-50 rounded-lg overflow-hidden border border-green-600 p-6 group">
      {/* Efecto neon */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
        <div className="absolute -top-0.5 -left-0.5 h-0.5 bg-green-400 animate-neon-top w-0 group-hover:w-full transition-all duration-1000"></div>
        <div className="absolute -top-0.5 -right-0.5 w-0.5 bg-green-400 animate-neon-right h-0 group-hover:h-full transition-all duration-1000 delay-300"></div>
        <div className="absolute -bottom-0.5 -right-0.5 h-0.5 bg-green-400 animate-neon-bottom w-0 group-hover:w-full transition-all duration-1000 delay-600"></div>
        <div className="absolute -bottom-0.5 -left-0.5 w-0.5 bg-green-400 animate-neon-left h-0 group-hover:h-full transition-all duration-1000 delay-900"></div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-green-300">{title}</h3>
      <p className="mb-6">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-green-700 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;