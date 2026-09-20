import Header from "../components/Header";
import IssuePrCard from "../components/IssuePrCard";
import CommitFrequencyCard from "../components/CommitFrequencyCard";
import RoadmapProgressCard from "../components/RoadmapProgressCard";
import {fetchRecentCommits} from "../lib/github";
import {groupByWeek} from "../lib/commitFrequency";

export default async function Home() {
    const commits = await fetchRecentCommits();
    const weeklyCommits = groupByWeek(commits);


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