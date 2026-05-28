import { API_CONFIG } from "../config/api.js";

export async function analyzeResume(formData) {
  const response = await fetch(
    `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ANALYZE}`,

    {
      method: "POST",

      body: formData,
    },
  );

  if (!response.ok) {
    throw new Error("Failed to analyze resume");
  }

  const data = await response.json();

  console.log(data.ats_score);

  console.log(data.summary);

  console.log(data.skills);

  console.log(data.recommendations);

  return data;
}
