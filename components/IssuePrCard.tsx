type StaleItem = {
    number: number;
    title: string;
    type: "Issue" | "PR";
    updated_at: string;
};

type IssuePrCount = {
    openIssues: number;
    closedIssues: number;
    openPullRequests: number;
    closedPullRequests: number;
};


export default function IssuePrCard({
    counts,
    staleItems,
}: {
    counts: IssuePrCount;
    staleItems: StaleItem[];
}) {
    return (
        <article className="card">
            <h2>이슈 / PR 현황</h2>

            <p>열린 이슈: {counts.openIssues}개</p>
            <p>닫힌 이슈: {counts.closedIssues}개</p>
            <p>열린 PR: {counts.openPullRequests}개</p>
            <p>닫힌 PR: {counts.closedPullRequests}개</p>

            <h3>방치된 항목</h3>
            <ul>
                {staleItems.length === 0 ? (
                    <li>방치된 항목이 없습니다.</li>
                ) : (
                    staleItems.map((item) => (
                        <li key={item.title}>
                            {item.type}: {item.title} ({item.updated_at})
                        </li>
                    ))
                )}
            </ul>
        </article>
    );
}