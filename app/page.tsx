import Header from "../components/Header";
import IssuePrCard from "../components/IssuePrCard";
import CommitFrequencyCard from "../components/CommitFrequencyCard";
import RoadmapProgressCard from "../components/RoadmapProgressCard";
import {fetchRecentCommits, fetchIssuesAndPullRequests} from "../lib/github";
import {groupByWeek} from "../lib/commitFrequency";
import { countIssuesAndPullRequests, findStaleItems } from "../lib/issuePrStatus";

export default async function Home() {
    const [commitResult, issuePrResult] = await Promise.allSettled([
        fetchRecentCommits(), 
        fetchIssuesAndPullRequests(),
    ]);

    const commits = commitResult.status === "fulfilled" ? commitResult.value : [];
    const issuesAndPullRequests = issuePrResult.status === "fulfilled" ? issuePrResult.value : [];

    if (commitResult.status === "rejected") {
        console.error("커밋 데이터를 가져오지 못했습니다.", commitResult.reason);
    }

    if (issuePrResult.status === "rejected") {
        console.error("이슈 및 PR 데이터를 가져오지 못했습니다.", issuePrResult.reason);
    }

    const weeklyCommits = groupByWeek(commits);
    const staleItems = findStaleItems(issuesAndPullRequests);
    const issuePrCounts = countIssuesAndPullRequests(issuesAndPullRequests);

    const issuePrError =
        issuePrResult.status === "rejected"
            ? "이슈와 PR 데이터를 불러오지 못했습니다."
            : undefined;




    return (
        <main>
            <Header />

            <section className="dashboard-grid">
                <IssuePrCard counts={issuePrCounts} staleItems={staleItems} error={issuePrError} />
                <CommitFrequencyCard weeklyCommits={weeklyCommits} />
                <RoadmapProgressCard />
            </section>
        </main>
    );
}