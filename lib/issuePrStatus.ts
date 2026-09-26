type IssueOrPullRequest = {
    number: number;
    title: string;
    state: "open" | "closed";
    updated_at: string;   
    pull_request?: unknown;
};

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

export function countIssuesAndPullRequests(items: IssueOrPullRequest[]): IssuePrCount {
    return {
        openIssues: items.filter( (item) => item.state === "open" && item.pull_request === undefined ).length,
        closedIssues: items.filter( (item) => item.state === "closed" && item.pull_request === undefined ).length,
        openPullRequests: items.filter( (item) => item.state === "open" && item.pull_request !== undefined ).length,
        closedPullRequests: items.filter( (item) => item.state === "closed" && item.pull_request !== undefined ).length,
    };
}

export function findStaleItems(
    items : IssueOrPullRequest[],
    now = new Date()
): StaleItem[] {
    const threshold = new Date(now);
    threshold.setDate(threshold.getDate() - 14);

    return items
        .filter((item) => {
            const isOpen = item.state === "open";
            const isStale = new Date(item.updated_at) < threshold;

            return isOpen && isStale;
        }).map((item) => ({
            number: item.number,
            title: item.title,
            type: item.pull_request === undefined ? "Issue" : "PR",
            updated_at: item.updated_at,
        }));
}