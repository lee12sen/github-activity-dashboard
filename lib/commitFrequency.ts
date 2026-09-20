type CommitItem = {
    commit: {
        author: {
            date: string;
        };
    };
};

type WeeklyCommit = {
    week: string;
    count: number;
};

export function groupByWeek(commits: CommitItem[]): WeeklyCommit[] {
    const now = new Date();
    const result: WeeklyCommit[] = [];

    for (let i = 7; i >= 0; i--) {
        const start = new Date(now);
        start.setDate(start.getDate() - (i * 7 + 6));
        start.setHours(0, 0, 0, 0);

        const end = new Date(now);
        end.setDate(end.getDate() - (i * 7));
        end.setHours(23, 59, 59, 999);

        const label = i === 0 ? "이번 주" : `${i}주 전`;

        const count = commits.filter((commit) => {
            const date = new Date(commit.commit.author.date);
            return date >= start && date <= end;
        }).length;

        result.push({ week: label, count });
    }

    return result;
}