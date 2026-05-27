export function createScoreCard(score) {
  return `
    <div class="result-card score-card">

      <h3>ATS Score</h3>

      <div class="score-badge">
        ${score}
      </div>

    </div>
  `;
}
