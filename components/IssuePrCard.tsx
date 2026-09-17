export default function IssuePrCard() {
    const openIssues = 3;
    const openPullRequests = 1;
    const staleItems = [
        { type: "Issue", title: "로그인 오류 수정", days: 18 },
        { type: "PR", title: "대시보드 UI 개선", days: 22 },
    ];

    return (
        <article className="card">
            <h2>이슈 / PR 현황</h2>

            <p>열린 이슈: {openIssues}개</p>
            <p>열린 PR: {openPullRequests}개</p>

            <h3>방치된 항목</h3>
            <ul>
                {staleItems.map((item) => (
                    <li key={item.title}>
                        {item.type}: {item.title} ({item.days}일 방치)
                    </li>
                ))}
            </ul>
        </article>
    );
}