import { DEGREE_PROGRAMS, QUESTION_POOL } from "./data.js";

// ==========================================================================
// SVG Icon Helpers
// ==========================================================================
const ICONS = {
  brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"></path>
  </svg>`,
  "chart-bar": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
    <line x1="2" y1="20" x2="22" y2="20"></line>
  </svg>`,
  cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
  </svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>`
};

// ==========================================================================
// Quiz State (Always max 3 random questions)
// ==========================================================================
const MAX_QUESTIONS = 3;
let activeQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [null, null, null];

// DOM Elements
const introView = document.getElementById("introView");
const questionView = document.getElementById("questionView");
const resultView = document.getElementById("resultView");

const startQuizBtn = document.getElementById("startQuizBtn");
const viewAllDegreesHeaderBtn = document.getElementById("viewAllDegreesHeaderBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const nextBtnText = document.getElementById("nextBtnText");
const navHint = document.getElementById("navHint");
const restartBtn = document.getElementById("restartBtn");

const questionStepLabel = document.getElementById("questionStepLabel");
const progressFill = document.getElementById("progressFill");
const scenarioTag = document.getElementById("scenarioTag");
const questionText = document.getElementById("questionText");
const optionsList = document.getElementById("optionsList");

// Result Elements
const primaryCard = document.getElementById("primaryCard");
const cardGlow = document.getElementById("cardGlow");
const primaryIcon = document.getElementById("primaryIcon");
const primaryBadgeText = document.getElementById("primaryBadgeText");
const primaryDegreeName = document.getElementById("primaryDegreeName");
const primaryTagline = document.getElementById("primaryTagline");
const primaryMatchPercent = document.getElementById("primaryMatchPercent");
const primaryDescription = document.getElementById("primaryDescription");
const primaryModulesList = document.getElementById("primaryModulesList");
const primaryCareersList = document.getElementById("primaryCareersList");

// Secondary Card
const secondaryDegreeName = document.getElementById("secondaryDegreeName");
const secondaryTagline = document.getElementById("secondaryTagline");
const secondaryScore = document.getElementById("secondaryScore");

const breakdownBarsContainer = document.getElementById("breakdownBarsContainer");

// Modal Elements
const allDegreesModal = document.getElementById("allDegreesModal");
const modalOpenBtn = document.getElementById("modalOpenBtn");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalDegreesGrid = document.getElementById("modalDegreesGrid");

// ==========================================================================
// Random 3 Question Picker
// ==========================================================================
function pickRandomQuestions(pool, count) {
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// ==========================================================================
// Switch View
// ==========================================================================
function showView(viewElement) {
  [introView, questionView, resultView].forEach((view) => {
    view.classList.remove("active");
  });
  viewElement.classList.add("active");
}

// ==========================================================================
// Start Quiz
// ==========================================================================
function startQuiz() {
  activeQuestions = pickRandomQuestions(QUESTION_POOL, MAX_QUESTIONS);
  currentQuestionIndex = 0;
  userAnswers = [null, null, null];
  renderQuestion(currentQuestionIndex);
  showView(questionView);
}

// ==========================================================================
// Render Question
// ==========================================================================
function renderQuestion(index) {
  const currentQ = activeQuestions[index];
  if (!currentQ) return;

  questionStepLabel.textContent = `Question ${index + 1} of ${MAX_QUESTIONS}`;
  const percentage = ((index + 1) / MAX_QUESTIONS) * 100;
  progressFill.style.width = `${percentage}%`;

  scenarioTag.textContent = currentQ.scenario || `Question ${index + 1}`;
  questionText.textContent = currentQ.question;

  optionsList.innerHTML = "";
  const optionLetters = ["A", "B", "C", "D", "E", "F"];

  currentQ.options.forEach((opt, optIdx) => {
    const isSelected = userAnswers[index] && userAnswers[index].id === opt.id;

    const optButton = document.createElement("div");
    optButton.className = `option-item ${isSelected ? "selected" : ""}`;
    optButton.setAttribute("role", "radio");
    optButton.setAttribute("aria-checked", isSelected ? "true" : "false");
    optButton.setAttribute("tabindex", "0");
    optButton.dataset.optionId = opt.id;

    optButton.innerHTML = `
      <div class="option-indicator">${optionLetters[optIdx] || optIdx + 1}</div>
      <div class="option-content">
        <span class="option-title">${opt.title || "Option " + (optIdx + 1)}</span>
        <span class="option-desc">${opt.text}</span>
      </div>
    `;

    optButton.addEventListener("click", () => selectOption(index, opt));
    optButton.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectOption(index, opt);
      }
    });

    optionsList.appendChild(optButton);
  });

  prevBtn.disabled = index === 0;
  nextBtn.disabled = !userAnswers[index];
  navHint.textContent = userAnswers[index] ? "Selection recorded. Click next to proceed." : "Select an option above to continue";

  if (index === MAX_QUESTIONS - 1) {
    nextBtnText.textContent = "See Recommended Degree";
  } else {
    nextBtnText.textContent = "Next Question";
  }
}

// ==========================================================================
// Select Option
// ==========================================================================
function selectOption(qIndex, option) {
  userAnswers[qIndex] = option;

  const optionItems = optionsList.querySelectorAll(".option-item");
  optionItems.forEach((item) => {
    if (item.dataset.optionId === option.id) {
      item.classList.add("selected");
      item.setAttribute("aria-checked", "true");
    } else {
      item.classList.remove("selected");
      item.setAttribute("aria-checked", "false");
    }
  });

  nextBtn.disabled = false;
  navHint.textContent = "Ready to proceed!";
}

// ==========================================================================
// Navigation
// ==========================================================================
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < MAX_QUESTIONS - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
  } else {
    calculateAndShowResult();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
  }
});

startQuizBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);

// ==========================================================================
// Calculate Results
// ==========================================================================
function calculateAndShowResult() {
  const scores = { AI: 0, DS: 0, CS: 0, SE: 0, MIS: 0, Security: 0 };

  userAnswers.forEach((ans) => {
    if (ans && ans.scores) {
      Object.entries(ans.scores).forEach(([deg, val]) => {
        if (scores[deg] !== undefined) scores[deg] += val;
      });
    }
  });

  const sortedDegrees = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const primaryId = sortedDegrees[0];
  const secondaryId = sortedDegrees[1];

  const primary = DEGREE_PROGRAMS[primaryId];
  const secondary = DEGREE_PROGRAMS[secondaryId];

  const maxPossible = 9;
  const primaryPct = Math.min(98, Math.max(76, Math.round((scores[primaryId] / maxPossible) * 100) + 12));
  const secondaryPct = Math.min(primaryPct - 6, Math.max(58, Math.round((scores[secondaryId] / maxPossible) * 100) + 8));

  // Populate Primary Recommendation
  primaryBadgeText.textContent = primary.badge;
  primaryBadgeText.style.backgroundColor = primary.colorLight;
  primaryBadgeText.style.color = primary.color;

  primaryDegreeName.textContent = primary.name;
  primaryTagline.textContent = primary.tagline;
  primaryDescription.textContent = primary.description;
  primaryMatchPercent.textContent = `${primaryPct}% Match`;

  cardGlow.style.background = `radial-gradient(circle, ${primary.color} 0%, transparent 70%)`;
  primaryIcon.style.background = primary.gradient;
  primaryIcon.innerHTML = ICONS[primary.icon] || ICONS.brain;

  // Modules pills
  primaryModulesList.innerHTML = "";
  primary.coreModules.forEach((mod) => {
    const span = document.createElement("span");
    span.className = "pill-item";
    span.textContent = mod;
    primaryModulesList.appendChild(span);
  });

  // Careers pills
  primaryCareersList.innerHTML = "";
  primary.careerPaths.forEach((role) => {
    const span = document.createElement("span");
    span.className = "pill-item";
    span.textContent = role;
    primaryCareersList.appendChild(span);
  });

  // Secondary
  secondaryDegreeName.textContent = secondary.name;
  secondaryTagline.textContent = secondary.tagline;
  secondaryScore.textContent = `${secondaryPct}% Match`;

  // 6-Program Breakdown
  renderBreakdown(scores, maxPossible);

  showView(resultView);
  triggerConfetti();
}

function renderBreakdown(scores, maxPossible) {
  breakdownBarsContainer.innerHTML = "";
  const sorted = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

  sorted.forEach((degId) => {
    const prog = DEGREE_PROGRAMS[degId];
    const points = scores[degId];
    const pct = Math.min(98, Math.max(14, Math.round((points / maxPossible) * 82) + 14));

    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <div class="bar-meta">
        <div>
          <span class="bar-code" style="color: ${prog.color};">${prog.code}</span>
          <span class="bar-name">${prog.name}</span>
        </div>
        <span class="bar-val">${pct}%</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width: 0%; background: ${prog.gradient};" data-target="${pct}%"></div>
      </div>
    `;
    breakdownBarsContainer.appendChild(row);
  });

  setTimeout(() => {
    const fills = breakdownBarsContainer.querySelectorAll(".bar-fill");
    fills.forEach((f) => {
      f.style.width = f.dataset.target;
    });
  }, 50);
}

// ==========================================================================
// Degrees Modal
// ==========================================================================
function populateModal() {
  modalDegreesGrid.innerHTML = "";
  Object.values(DEGREE_PROGRAMS).forEach((prog) => {
    const card = document.createElement("div");
    card.className = "modal-degree-card";
    card.innerHTML = `
      <div class="modal-card-top">
        <div class="modal-card-icon" style="background: ${prog.gradient};">
          ${ICONS[prog.icon] || ICONS.brain}
        </div>
        <div>
          <h3 class="modal-card-title">${prog.name}</h3>
        </div>
      </div>
      <p class="modal-card-desc">${prog.tagline}</p>
      <div class="modal-tag-cloud">
        ${prog.coreModules.map((m) => `<span class="modal-tag">${m}</span>`).join("")}
      </div>
    `;
    modalDegreesGrid.appendChild(card);
  });
}

function openModal() {
  populateModal();
  allDegreesModal.classList.add("active");
  allDegreesModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  allDegreesModal.classList.remove("active");
  allDegreesModal.setAttribute("aria-hidden", "true");
}

viewAllDegreesHeaderBtn.addEventListener("click", openModal);
modalOpenBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
allDegreesModal.addEventListener("click", (e) => {
  if (e.target === allDegreesModal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && allDegreesModal.classList.contains("active")) {
    closeModal();
  }
});

// ==========================================================================
// Celebration Confetti
// ==========================================================================
function triggerConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const colors = ["#a855f7", "#06b6d4", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#ffffff"];
  const particles = [];

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: width / 2 + (Math.random() - 0.5) * 160,
      y: height * 0.35 + (Math.random() - 0.5) * 60,
      w: Math.random() * 8 + 4,
      h: Math.random() * 5 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 10,
      vy: Math.random() * -8 - 4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      gravity: 0.35,
      opacity: 1
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    let activeCount = 0;

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.012;

      if (p.opacity > 0 && p.y < height) {
        activeCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    });

    if (activeCount > 0) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, width, height);
    }
  }

  render();
}
