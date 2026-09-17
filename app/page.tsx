import Header from "../components/Header";
import IssuePrCard from "../components/IssuePrCard";
import CommitFrequencyCard from "../components/CommitFrequencyCard";
import RoadmapProgressCard from "../components/RoadmapProgressCard";

export default function Home() {
    return (
        <main>
            <Header />

            <section className="dashboard-grid">
                <IssuePrCard />
                <CommitFrequencyCard />
                <RoadmapProgressCard />
            </section>
        </main>
    );
}