import { analyzeResume } from "./api/analyzeApi.js";

import { createScoreCard } from "./components/scoreCard.js";

import { createSummaryCard } from "./components/summaryCard.js";

import { createSkillsCard } from "./components/skillsCard.js";

import { createRecommendationsCard } from "./components/recommendationsCard.js";

import { createLoading } from "./components/loading.js";

const formElement = document.querySelector("#resume-form");

const resultSection = document.querySelector("#result");

formElement.addEventListener(
  "submit",

  async function (event) {
    event.preventDefault();

    const formData = new FormData(formElement);
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    resultSection.innerHTML = createLoading();

    try {
      console.log("STEP 1");

      const data = await analyzeResume(formData);

      console.log("STEP 2");

      console.log(data);

      renderAnalysis(data);

      console.log("STEP 3");
    } catch (error) {
      console.error("FULL ERROR:");
      console.error(error);

      renderError();
    }
  },
);

function renderAnalysis(data) {
  console.log("SCORE");
  console.log(data.ats_score);

  console.log("SUMMARY");
  console.log(data.summary);

  console.log("SKILLS");
  console.log(data.skills);

  console.log("RECOMMENDATIONS");
  console.log(data.recommendations);

  resultSection.innerHTML = `
${createScoreCard(data.ats_score)}

${createSummaryCard(data.summary)}

${createSkillsCard(data.skills)}

${createRecommendationsCard(data.recommendations)}
`;
}
function renderError() {
  resultSection.innerHTML = `

<div class="result-card error-card">

  <h2>Error</h2>

  <p>
    Something went wrong while
    analyzing the resume.
  </p>

</div>

`;
}
