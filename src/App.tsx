import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { MAIN_PROJECTS, SIDE_PROJECTS, type Project } from './data';
import './App.css';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll Progress logic
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
            Donggyeong Noh
          </div>
          <nav className="nav-links">
            <span className="nav-link" onClick={() => scrollToSection('main-projects')}>Main Projects</span>
            <span className="nav-link" onClick={() => scrollToSection('side-projects')}>Side Projects</span>
          </nav>
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero container">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-subtitle">Software Engineer w/ AI & MSA</span>
            <h1 className="h1 hero-title">
              AI와 MSA로<br />
              시스템을 완성합니다
            </h1>
            <div className="hero-description text-lead">
              <p>AI 기술을 실제 기능으로 연결해<br />비즈니스에 기여하는 결과를 만듭니다.</p>
              <p style={{ marginTop: '12px' }}>MSA 기반 아키텍처 설계와 배포 자동화를 통해<br />안정적으로 운영되는 시스템을 구현합니다.</p>
            </div>
          </div>
          <div className="hero-image-container">
            <img src="/hero-image.png" alt="AI and MSA Architecture Illustration" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Main Projects Section */}
      <section id="main-projects" className="section container">
        <h2 className="section-title">Main Projects</h2>
        <div className="gallery-grid">
          {MAIN_PROJECTS.map(project => (
            <div key={project.id} className="project-card" onClick={() => openModal(project)}>
              <div className="card-image-wrapper">
                <img src={project.thumbnail} alt={project.title} className="card-image" loading="lazy" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-summary">{project.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Side Projects Section */}
      <section id="side-projects" className="section container" style={{ backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
        <h2 className="section-title">Side Projects</h2>
        <div className="gallery-grid">
          {SIDE_PROJECTS.map(project => (
            <div key={project.id} className="project-card" onClick={() => openModal(project)}>
              <div className="card-image-wrapper">
                <img src={project.thumbnail} alt={project.title} className="card-image" loading="lazy" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-summary">{project.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          © 2026. Donggyeong Noh. All rights reserved.
        </div>
      </footer>

      {/* Project Detail Modal */}
      <div className={`modal-overlay ${selectedProject ? 'open' : ''}`} onClick={closeModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          {selectedProject && (
            <>
              <div className="modal-header">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <button className="close-btn" onClick={closeModal}>
                  <X size={24} />
                </button>
              </div>
              <div className="modal-body">
                {/* Carousel */}
                <ImageCarousel images={selectedProject.images} />

                {/* Details */}
                <div className="info-section">
                  <div className="info-item">
                    <span className="info-label">프로젝트 기간</span>
                    <span className="info-value">{selectedProject.period}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">개발 배경</span>
                    <span className="info-value">{selectedProject.background}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">담당 역할</span>
                    <span className="info-value">{selectedProject.role}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">활용 기술</span>
                    <div className="tech-tags">
                      {selectedProject.techStack.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Carousel Component
const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!images || images.length === 0) return null;

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((img, index) => (
          <div className="embla__slide" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="carousel-btns">
          <button className="carousel-btn" onClick={scrollPrev}>
            <ChevronLeft size={20} />
          </button>
          <button className="carousel-btn" onClick={scrollNext}>
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
