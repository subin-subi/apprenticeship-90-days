const API_URL = "https://remotive.com/api/remote-jobs";

export async function getJobs() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.jobs.slice(0, 12); // limit jobs
}
