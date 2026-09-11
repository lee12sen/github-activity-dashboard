# github-activity-dashboard
이 프로젝트는 GitHub API를 활용하여 사용자의 커밋, 이슈, 풀 리퀘스트 등을 추적해서 주간 학습량, 언어 분포, 스트릭을 시각화하는 GitHub 활동 대시보드입니다.

## 기능
- 주간 학습량 시각화 — GitHub API로 커밋·PR·이슈를 수집해 주 단위 활동량을 그래프로 표시
- 언어 분포 분석 — 사용한 프로그래밍 언어 비중을 시각화
- 학습 스트릭(연속 활동일) 추적 — 꾸준히 활동했는지 스트릭으로 표시

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