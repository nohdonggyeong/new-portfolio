export interface Project {
  id: string;
  title: string;
  summary: string;
  background: string;
  role: string;
  actions: string;
  results: string;
  problemSolving: string;
  technologies: string[];
  images: string[];
}

export const MAIN_PROJECTS: Project[] = [
  {
    id: 'fabrix',
    title: '삼성SDS FabriX(에이전트 플랫폼) 개발',
    summary: 'AI 에이전트 플랫폼 스토어 서비스 백엔드 및 인프라 구축',
    background: '삼성SDS AI 플랫폼(FabriX) 내 임직원들이 다양한 AI 에이전트를 탐색·활용할 수 있는 스토어 생태계 구축 및 안정적인 백엔드 인프라 제공.',
    role: '에이전트 스토어 도메인 백엔드 API 설계/개발 및 Kubernetes 기반 CI/CD 파이프라인 구축/운영 총괄.',
    actions: '• FastAPI와 SQLAlchemy를 활용한 고성능 RESTful API 구현\n• Helm Chart 및 ArgoCD를 연동한 GitOps 기반 무중단 배포 환경 구축\n• 키워드와 벡터 검색을 결합한 하이브리드 검색 엔진 적용 검토 및 최적화',
    results: '• 에이전트 스토어 서비스의 성공적인 런칭 및 운영 안정성 확보\n• 배포 자동화를 통한 운영 공수 절감 및 배포 이력 관리 효율화',
    problemSolving: '비동기 처리 중 발생한 자원 충돌 해결 및 K8s 배포 환경 최적화 (상세 내용 보완 예정)',
    technologies: ['FastAPI', 'Python', 'Kubernetes', 'ArgoCD', 'PostgreSQL', 'SQLAlchemy'],
    images: ['/hero-image.png']
  },
  {
    id: 'vehicle-nia',
    title: 'NIA 운전자 제스처 데이터 수집 플랫폼 개발',
    summary: '운전자 제스처 인식 AI 학습용 데이터 수집 및 검수 체계 구축',
    background: '운전자 제스처 인식 AI 모델 학습용 대용량 영상 데이터 수집 및 효율적인 라벨링/검수 도구 개발.',
    role: '영상 데이터 관리용 백엔드 API 및 실시간 영상 검수용 웹 인터페이스 개발.',
    actions: '• Django 기반 대용량 파일 업로드/조회 API 구현 및 DB 스키마 설계\n• MediaPipe Hands를 연동한 실시간 제스처 인식 기반 영상 라벨링 기능 개발\n• Docker-compose를 활용한 서비스 배포 및 Nginx/Gunicorn 환경 구성',
    results: '• 수만 건의 영상 데이터 수집 및 검수 공정의 안정적인 운영 완료\n• 웹 기반 저작 도구 도입으로 데이터 라벨링 및 검수 속도 향상',
    problemSolving: '대용량 영상 업로드 지연 이슈 해결 및 브라우저 메모리 관리 최적화 (상세 내용 보완 예정)',
    technologies: ['Python', 'Django', 'Javascript', 'MariaDB', 'MediaPipe', 'Docker'],
    images: ['/hero-image.png']
  },
  {
    id: 'digital-human',
    title: 'AICA 심층 질의응답 디지털휴먼 서비스 개발',
    summary: 'STT/NLP/TTS/비전 모델을 연계한 실시간 대화 서비스 개발',
    background: '비대면 고객 대응을 위한 실시간 대화형 디지털 휴먼 서비스 프로토타입 구현.',
    role: 'TTS 엔진 파인튜닝 및 실시간 대화 추론 파이프라인 구축/성능 튜닝.',
    actions: '• Tacotron2 모델 파인튜닝을 통한 한국어 합성음 품질 고도화\n• Python 기반 오디오 전처리 자동화 및 이종 모델(STT-NLP-TTS) 연계 서버 구축',
    results: '• 지연 시간을 최소화한 실시간 대화 파이프라인 성공적 구현\n• 자동화된 데이터 가공으로 모델 학습 준비 시간 단축',
    problemSolving: '모델 연동 시 발생하는 Latency 단축 및 서버 자원 관리 이슈 해결 (상세 내용 보완 예정)',
    technologies: ['Python', 'PyTorch', 'STT/TTS', 'Nvidia Docker', 'CentOS'],
    images: ['/hero-image.png']
  }
];

export const SIDE_PROJECTS: Project[] = [];
