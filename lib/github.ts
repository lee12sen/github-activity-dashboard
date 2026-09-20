const repository = "lee12sen/github-activity-dashboard";

export async function fetchRecentCommits() {
    const eightWeeksAgo = new Date();   

    eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 8 * 7);

    const response = await fetch(
        `https://api.github.com/repos/${repository}/commits?since=${eightWeeksAgo.toISOString()}&per_page=100`
    );

    if (!response.ok) {
        throw new Error(`GitHub API 오류: ${response.status}`);
    }

    return response.json();
}