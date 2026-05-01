export interface Project {
  id: string;
  title: string;
  summary: string;
  period: string;
  background: string;
  role: string;
  techStack: string[];
  thumbnail: string;
  images: string[];
}

export const MAIN_PROJECTS: Project[] = [
  {
    id: "m1",
    title: "글로벌 이커머스 결제 플랫폼 MSA 전환",
    summary: "Monolithic 시스템을 MSA로 성공적으로 분리 및 성능 개선",
    period: "2024. 03 - 2025. 12",
    background: "기존 단일 시스템의 한계로 인해 트래픽 스파이크 시 결제 지연 발생. 안정성과 확장성을 확보하기 위해 결제 도메인을 마이크로서비스로 분리할 필요성 대두.",
    role: "결제 도메인 백엔드 아키텍처 설계 및 API 개발, 레거시 데이터 마이그레이션 전략 수립",
    techStack: ["Java", "Spring Boot", "Kafka", "Redis", "Kubernetes", "AWS"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "m2",
    title: "대규모 사용자 알림 시스템 파이프라인 구축",
    summary: "초당 10만 건 이상의 푸시 알림 처리를 위한 실시간 데이터 파이프라인",
    period: "2023. 06 - 2024. 02",
    background: "마케팅 캠페인 시 발생하는 대량의 푸시 알림 요청을 지연 없이 처리하고, 전송 실패 시의 재시도 메커니즘을 견고하게 구축하기 위함.",
    role: "메시지 큐 기반 비동기 처리 시스템 구현, 전송 모니터링 대시보드 백엔드 개발",
    techStack: ["Kotlin", "Spring WebFlux", "RabbitMQ", "Elasticsearch", "Prometheus"],
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "m3",
    title: "사내 배포 자동화 및 CI/CD 플랫폼 개발",
    summary: "개발 생산성 향상을 위한 Zero-downtime 배포 파이프라인 표준화",
    period: "2022. 09 - 2023. 05",
    background: "팀마다 상이한 배포 프로세스로 인한 운영 리스크 증가 및 배포 소요 시간 과다. 이를 표준화하고 자동화하여 개발 주기를 단축.",
    role: "Jenkins Pipeline을 활용한 CI/CD 템플릿 개발, ArgoCD 기반 GitOps 환경 구축",
    techStack: ["Jenkins", "ArgoCD", "Docker", "Kubernetes", "Shell Script"],
    thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
    ]
  }
];

export const SIDE_PROJECTS: Project[] = [
  {
    id: "s1",
    title: "개발자를 위한 기술 블로그 플랫폼 'TechLog'",
    summary: "Markdown 기반의 빠르고 SEO 친화적인 블로그 서비스",
    period: "2023. 01 - 2023. 04",
    background: "기존 블로그 서비스들의 무거운 로딩 속도와 커스터마이징의 한계를 극복하고자 개인 맞춤형 플랫폼 개발.",
    role: "Next.js 기반 프론트엔드 및 서버리스 백엔드 1인 개발",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    thumbnail: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "s2",
    title: "오픈소스 모니터링 CLI 툴 'OpsCLI'",
    summary: "터미널에서 바로 확인하는 클러스터 상태 모니터링 도구",
    period: "2022. 03 - 2022. 07",
    background: "웹 대시보드에 접속하지 않고 터미널 환경에서 빠르게 주요 리소스 지표를 확인하기 위함.",
    role: "Golang을 활용한 CLI 코어 로직 개발 및 K8s API 연동",
    techStack: ["Golang", "Kubernetes API", "Cobra"],
    thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1200&auto=format&fit=crop"
    ]
  }
];
