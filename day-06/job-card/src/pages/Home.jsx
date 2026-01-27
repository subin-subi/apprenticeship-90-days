import JobCard from "../components/JobCard";
import jobs from "../data/Jobs";


export default function Home() {
return (
<div className="p-6">
<h1 className="text-3xl font-bold mb-6 text-center">Job Openings</h1>


<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
{jobs.map((job) => (
<JobCard key={job.id} job={job} />
))}
</div>
</div>
);
}