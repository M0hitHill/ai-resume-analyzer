export function createRecommendationsCard(recommendations) {
  const recommendationList = recommendations
    .map((recommendation) => `<li>${recommendation}</li>`)
    .join("");

  return `

<div class="result-card">

    <h2>Recommendations</h2>

    <ul class="recommendation-list">

    ${recommendationList}

    </ul>

</div>

`;
}
