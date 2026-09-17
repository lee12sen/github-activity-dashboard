export default function RoadmapProgressCard() {
    const roadmapItems = [
        { title: "화면 레이아웃 만들기", completed: true },
        { title: "커밋 빈도 연결하기", completed: false },
        { title: "이슈와 PR 연결하기", completed: false },
        { title: "로드맵 진행률 표시하기", completed: false },
    ];

    const completedCount = roadmapItems.filter(
        (item) => item.completed
    ).length;

    const progress = Math.round(
        (completedCount / roadmapItems.length) * 100
    );

    return (
        <article className="card">
            <h2>로드맵 진행률</h2>
            <p>
                {completedCount} / {roadmapItems.length} 완료 ({progress}%)
            </p>

            <ul>
                {roadmapItems.map((item) => (
                    <li key={item.title}>
                        {item.completed ? "완료" : "진행 전"}: {item.title}
                    </li>
                ))}
            </ul>
        </article>
    );
}