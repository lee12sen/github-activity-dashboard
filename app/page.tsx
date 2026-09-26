import Header from "../components/Header";
import IssuePrCard from "../components/IssuePrCard";
import CommitFrequencyCard from "../components/CommitFrequencyCard";
import RoadmapProgressCard from "../components/RoadmapProgressCard";
import {fetchRecentCommits, fetchIssuesAndPullRequests} from "../lib/github";
import {groupByWeek} from "../lib/commitFrequency";
import { countIssuesAndPullRequests, findStaleItems } from "../lib/issuePrStatus";

export default async function Home() {
    const commits = await fetchRecentCommits();
    const weeklyCommits = groupByWeek(commits);


    const issuesAndPullRequests = await fetchIssuesAndPullRequests();
    const staleItems = findStaleItems(issuesAndPullRequests);
    
    console.log(staleItems);



    return (
        <main>
            <Header />

            <section className="dashboard-grid">
                <IssuePrCard />
                <CommitFrequencyCard weeklyCommits={weeklyCommits} />
                <RoadmapProgressCard />
            </section>
        </main>
    );
}