import { useJobs } from "../hooks/useJobs";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import JobItem from "./JobItem";

const JobList = () => {
  const { jobs, loading, error } = useJobs();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <ul>
      {jobs.slice(0, 10).map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
};

export default JobList;
