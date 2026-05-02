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
            <span className="nav-link" onClick={() => scrollToSection('strengths')}>핵심 역량</span>
            <span className="nav-link" onClick={() => scrollToSection('tech-stack')}>기술 스택</span>
            <span className="nav-link" onClick={() => scrollToSection('main-projects')}>대표 프로젝트</span>
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

      {/* Core Strengths Section */}
      <section id="strengths" className="section container">
        <h2 className="section-title">핵심 역량</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          <div style={{ padding: '32px', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--samsung-blue)', marginBottom: '16px', fontSize: '1.25rem', fontWeight: 700 }}>AI 기능을 실제 서비스에 통합</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>단순한 LLM API 연동을 넘어, 프롬프트 엔지니어링과 RAG를 활용해 실제 비즈니스 문제를 해결하고 유저가 체감할 수 있는 기능으로 완성합니다.</p>
          </div>
          <div style={{ padding: '32px', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--samsung-blue)', marginBottom: '16px', fontSize: '1.25rem', fontWeight: 700 }}>MSA 기반 아키텍처 설계</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>모놀리식 시스템의 병목을 분석하고, 서비스간 결합도를 낮추는 확장 가능 분산 아키텍처를 도입해 대규모 트래픽에도 유연한 시스템을 설계합니다.</p>
          </div>
          <div style={{ padding: '32px', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--samsung-blue)', marginBottom: '16px', fontSize: '1.25rem', fontWeight: 700 }}>CI/CD 및 운영 자동화</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>반복되는 수동 배포와 모니터링 공수를 줄이기 위해 파이프라인을 자동화하고, 무중단 배포 환경을 구축하여 팀의 개발 생산성을 높입니다.</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="section container">
        <h2 className="section-title">기술 스택</h2>
        <div className="tech-stack-grid">
          {[
            {
              category: 'Agentic AI',
              description: '지능형 에이전트 및 RAG 아키텍처',
              items: ['LangChain', 'LangGraph', 'FastMCP', 'vLLM', "Harness"]
            },
            {
              category: 'Scalable Backend',
              description: '고성능 분산 시스템 및 서버 설계',
              items: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'PostgreSQL', 'OpenSearch', 'Redis', 'Kafka']
            },
            {
              category: 'Platform Engineering',
              description: '플랫폼 독립적 인프라 및 운영 자동화',
              items: ['Docker', 'Kubernetes', 'Helm', 'Jenkins', 'ArgoCD']
            },
          ].map(tech => (
            <div key={tech.category} className="tech-stack-card">
              <h3 className="tech-category-title">{tech.category}</h3>
              <p className="tech-category-desc">{tech.description}</p>
              <div className="tech-tag-container">
                {tech.items.map(item => (
                  <span key={item} className="tech-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Projects Section */}
      <section id="main-projects" className="section container">
        <h2 className="section-title">대표 프로젝트</h2>
        <div className="gallery-grid">
          {MAIN_PROJECTS.map(project => (
            <div key={project.id} className="project-card" style={{ textAlign: 'center' }} onClick={() => openModal(project)}>
              <div className="card-image-wrapper">
                <img src={project.images[0]} alt={project.title} className="card-image" loading="lazy" />
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
                    <span className="info-label">📌 과제 배경</span>
                    <span className="info-value">{selectedProject.background}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">👤 담당 역할</span>
                    <span className="info-value" style={{ fontWeight: 600 }}>{selectedProject.role}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">✅ 수행 사항</span>
                    <span className="info-value" style={{ whiteSpace: 'pre-line' }}>{selectedProject.actions}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">📊 수행 결과</span>
                    <span className="info-value" style={{ fontWeight: 600, color: 'var(--samsung-blue)', whiteSpace: 'pre-line' }}>{selectedProject.results}</span>
                  </div>
                  <div className="info-item" style={{ background: 'var(--color-bg-secondary)', padding: '24px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--samsung-blue)' }}>
                    <span className="info-label" style={{ color: 'var(--samsung-black)' }}>🚀 문제 해결</span>
                    <span className="info-value" style={{ whiteSpace: 'pre-line', marginTop: '8px' }}>{selectedProject.problemSolving}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">활용 기술</span>
                    <div className="tech-tags">
                      {selectedProject.technologies.map(tech => (
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
