import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import Loader from "../components/Loader";
import { getJobs } from "../services/jobApi";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobs().then((data) => {
      setJobs(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Job Listings</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default Jobs;
