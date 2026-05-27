const formElement = document.querySelector("form");

const resultSection = document.getElementById("result");

formElement.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(formElement);
  const loading = document.getElementById("loading");

  loading.classList.remove("hidden");

  try {
    const res = await fetch("http://localhost:8000/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    loading.classList.add("hidden");

    resultSection.innerHTML = `

  <div class="score-card">
    <h2>ATS Score</h2>

    <div class="score-number">
      ${data.ats_score}
    </div>
  </div>

  <div class="result-card">
    <h2>Summary</h2>

    <p>${data.summary}</p>
  </div>

  <div class="result-card">
    <h2>Matched Skills</h2>

    <div class="skills">

      ${data.matched_skills
        .map(
          (skill) =>
            `<span class="skill matched">
              ${skill}
            </span>`,
        )
        .join("")}

    </div>
  </div>

  <div class="result-card">
    <h2>Missing Skills</h2>

    <div class="skills">

      ${data.missing_skills
        .map(
          (skill) =>
            `<span class="skill missing">
              ${skill}
            </span>`,
        )
        .join("")}

    </div>
  </div>

  <div class="result-card">
    <h2>Recommendations</h2>

    <ul class="recommendations">

      ${data.recommendations.map((item) => `<li>${item}</li>`).join("")}

    </ul>
  </div>

`;
    console.log(data);
  } catch (error) {
    loading.classList.add("hidden");

    console.error("Error:", error);

    resultSection.innerHTML = `
    <div class="result-card">
      <h2>Error</h2>
      <p>Something went wrong.</p>
    </div>
  `;
  }
});
