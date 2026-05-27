export async function analyzeResume(formData) {
  const response = await fetch("http://localhost:8000/analyze", {
    method: "POST",
    body: formData,
  });

  return response.json();
}
