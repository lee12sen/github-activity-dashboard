export default function CommitFrequencyCard() {
    const weeklyCommits = [
        { week: "8주 전", count: 4 },
        { week: "7주 전", count: 7 },
        { week: "6주 전", count: 3 },
        { week: "5주 전", count: 9 },
        { week: "4주 전", count: 6 },
        { week: "3주 전", count: 11 },
        { week: "2주 전", count: 8},
        { week: "이번 주", count: 5 },
    ];

    return (
        <article className="card">
            <h2>커밋 빈도</h2>
            
            <ul>
                {weeklyCommits.map((item) => (
                    <li key={item.week} className="commit-bar-row">
                        <span>{item.week}</span>
                        <div className="commit-bar">
                            <div
                                className="commit-bar-fill"
                                style={{ width: `${Math.min(item.count * 8, 100)}%`}}
                            />
                        </div>
                        <span>{item.count}개</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}