export function createSkillsCard(skills) {
  const technicalSkills = skills.technical_skills
    .map(
      (skill) =>
        `<span class="tag">
        ${skill}
      </span>`,
    )
    .join("");

  const softSkills = skills.soft_skills
    .map(
      (skill) =>
        `<span class="tag soft-tag">
        ${skill}
      </span>`,
    )
    .join("");

  return `
<div class="result-card">

  <h2>
    Technical Skills
  </h2>

  <div class="tag-container">

    ${technicalSkills}

  </div>



  <h2 class="soft-skills-title">
    Soft Skills
  </h2>

  <div class="tag-container">

    ${softSkills}

  </div>

</div>

`;
}
