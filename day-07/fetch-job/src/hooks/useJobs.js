import { useEffect, useState } from "react";
import { fetchJobsApi } from "../api/jobsApi";

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchJobsApi();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();

    const interval = setInterval(fetchJobs, 30000); // auto refresh

    return () => clearInterval(interval); // cleanup
  }, []);

  return { jobs, loading, error };
};
