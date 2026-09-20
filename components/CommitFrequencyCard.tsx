type WeeklyCommit = {
    week: string;
    count: number;
}

export default function CommitFrequencyCard({ 
    weeklyCommits,
}: {
    weeklyCommits: WeeklyCommit[];
}) {
    const maxCount = Math.max(...weeklyCommits.map((item) => item.count), 1);

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
                                style={{ width: `${(item.count / maxCount) * 100}%`}}
                            />
                        </div>
                        <span>{item.count}개</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}