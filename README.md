# github-activity-dashboard
이 프로젝트는 GitHub API를 활용하여 사용자의 커밋, 이슈, 풀 리퀘스트, 로드맵 진행 상황을 추적해서, 내 프로젝트가 좋은 품질로 유지보수되고 있는지 스스로 확인할 수 있는 개인용 GitHub 활동 대시보드입니다.

자세한 기획 배경과 요구사항은 [PRD](docs/PRD.md), 화면 레이아웃은 [와이어프레임](docs/wireframe.svg)을 참고하세요.

## 기능
- 이슈/PR 처리 현황 — 열림/닫힘 개수와 최근 처리 추이를 표시해 방치된 이슈·PR을 파악
- 커밋 빈도 그래프 — 최근 N주간 커밋 추이를 표시해 최근 활성도를 파악
- 로드맵/마일스톤 진행률 — 계획 대비 실행 정도를 진행 바로 표시

## 시작
### 전제 조건
- Node.js 20+
- npm
- 언어: TypeScript / 런타임: Node.js / 프레임워크: Next.js
### Installation

```bash
git clone https://github.com/lee12sen/github-activity-dashboard.git
cd github-activity-dashboard
npm install
```

### Usage

```bash
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

### Testing
```bash
npm test
```

## License
MIT License