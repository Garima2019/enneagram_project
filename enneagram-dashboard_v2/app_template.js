/**
 * Enneagram Dynamics Assessment Dashboard - Core Logic
 */

// Fallback Embedded Markdown Dataset (ensures offline and file:// functionality)
const EMBEDDED_MARKDOWN = /* __MARKDOWN_CONTENT__ */;

// Type Metadata & Descriptions
const TYPE_METADATA = {
  1: {
    icon: 'fa-solid fa-circle-check',
    color: '#6366f1', // Indigo
    description: 'Reformers are principled, purposeful, self-controlled, and perfectionistic. They are motivated by a desire to live life correctly, improve themselves and the world, and avoid mistakes. They have a strong inner critic and value order, accuracy, justice, and integrity.',
    wings: '1w9 (The Idealist), 1w2 (The Advocate)',
    growth: 'Type 7 (becomes more spontaneous, joyful, and optimistic)',
    stress: 'Type 4 (becomes more self-critical, moody, and emotionally reactive)'
  },
  2: {
    icon: 'fa-solid fa-hand-holding-heart',
    color: '#ec4899', // Pink
    description: 'Helpers are empathetic, sincere, warm-hearted, and self-sacrificing. They are driven by a need to feel loved and appreciated, leading them to be highly supportive, generous, and relational. They must watch out for neglecting their own needs and falling into people-pleasing.',
    wings: '2w1 (The Companion), 2w3 (The Host/Hostess)',
    growth: 'Type 4 (becomes more self-nurturing, creative, and self-aware)',
    stress: 'Type 8 (becomes aggressive, demanding, and controlling)'
  },
  3: {
    icon: 'fa-solid fa-trophy',
    color: '#f59e0b', // Amber
    description: 'Achievers are pragmatic, goal-oriented, efficient, and image-conscious. They desire to feel valuable through success, achievements, and recognition. Highly motivated and adaptable, they can sometimes struggle with workaholism and losing touch with their true self.',
    wings: '3w2 (The Star), 3w4 (The Professional)',
    growth: 'Type 6 (becomes more cooperative, loyal, and committed to others)',
    stress: 'Type 9 (becomes disengaged, listless, and running on empty)'
  },
  4: {
    icon: 'fa-solid fa-palette',
    color: '#a855f7', // Purple
    description: 'Individualists are sensitive, expressive, dramatic, and authentic. They seek to find themselves and express their unique identity, feeling that they are fundamentally different from others. They value deep feelings, aesthetics, and authenticity, but can fall into melancholy and envy.',
    wings: '4w3 (The Aristocrat), 4w5 (The Free Spirit)',
    growth: 'Type 1 (becomes more objective, self-disciplined, and grounded)',
    stress: 'Type 2 (becomes over-involved, codependent, and clingy)'
  },
  5: {
    icon: 'fa-solid fa-brain',
    color: '#10b981', // Emerald
    description: 'Investigators are visionary, intellectual, observant, and independent. They want to understand how the world works, accumulate knowledge, and remain self-sufficient. They value competence and mental clarity, but can become detached, isolated, and socially reclusive.',
    wings: '5w4 (The Iconoclast), 5w6 (The Problem Solver)',
    growth: 'Type 8 (becomes more self-confident, physically active, and assertive)',
    stress: 'Type 7 (becomes hyperactive, scattered, and mentally overwhelmed)'
  },
  6: {
    icon: 'fa-solid fa-shield-halved',
    color: '#3b82f6', // Blue
    description: 'Loyalists are reliable, hardworking, security-oriented, and vigilant. They anticipate risks and value trust, loyalty, and stable structures. They can be plagued by self-doubt and anxiety, constantly searching for safety, but are highly supportive and courageous team members.',
    wings: '6w5 (The Defender), 6w7 (The Buddy)',
    growth: 'Type 9 (becomes more relaxed, peaceful, and trusting)',
    stress: 'Type 3 (becomes workaholic, competitive, and image-focused to escape anxiety)'
  },
  7: {
    icon: 'fa-solid fa-compass',
    color: '#f43f5e', // Rose
    description: 'Enthusiasts are spontaneous, versatile, optimistic, and adventure-seeking. They crave new experiences, variety, and mental stimulation. They are constant visionaries and innovators but can struggle with impulsivity, distraction, and avoiding pain or uncomfortable emotions.',
    wings: '7w6 (The Pathfinder), 7w8 (The Opportunist)',
    growth: 'Type 5 (becomes more focused, quiet, and deep)',
    stress: 'Type 1 (becomes critical, rigid, and argumentative)'
  },
  8: {
    icon: 'fa-solid fa-gavel',
    color: '#ef4444', // Red
    description: 'Challengers are strong, assertive, decisive, and protective. They want to be self-reliant, control their destiny, and champion the weak. They speak directly and are comfortable with conflict, but can struggle with anger, domination, and vulnerability.',
    wings: '8w7 (The Independent), 8w9 (The Bear)',
    growth: 'Type 2 (becomes more empathetic, open-hearted, and helpful)',
    stress: 'Type 5 (becomes withdrawn, secretive, and hoards energy)'
  },
  9: {
    icon: 'fa-solid fa-handshake',
    color: '#06b6d4', // Cyan
    description: 'Peacemakers are receptive, good-natured, agreeable, and reassuring. They seek inner peace and external harmony, avoiding conflict and tension. They are excellent mediators and can see all perspectives, but may struggle with passive-aggression, inertia, and complacency.',
    wings: '9w8 (The Referee), 9w1 (The Dreamer)',
    growth: 'Type 3 (becomes more active, goal-oriented, and productive)',
    stress: 'Type 6 (becomes anxious, hyper-vigilance, and paranoid)'
  }
};

// 18 Enneagram Wing Subtypes Descriptions
const WING_SUBTYPES = {
  '1w9': { name: 'The Idealist', description: 'Calm, academic, objective, structured, and introverted. They seek order and tend to be quieter and more objective in their reforms.' },
  '1w2': { name: 'The Advocate', description: 'Active, helpful, passionate, and vocal. They combine high moral standards with a sincere, action-oriented desire to help individuals.' },
  '2w1': { name: 'The Companion', description: 'Dutiful, quiet, self-critical, and altruistic. They serve others through quiet devotion, seeking to do good in a highly correct and proper manner.' },
  '2w3': { name: 'The Host/Hostess', description: 'Outgoing, ambitious, social, and charming. They are image-conscious and highly relational, using their warmth to build connections and achieve success.' },
  '3w2': { name: 'The Star', description: 'Charismatic, popular, and encouraging. They are highly relational, expressive, and know how to win people over, combining achievement with charm.' },
  '3w4': { name: 'The Professional', description: 'Focused, serious, and detail-oriented. They seek success but also desire depth, authenticity, and personal style, placing high value on competence.' },
  '4w3': { name: 'The Aristocrat', description: 'Expressive, stylish, and creative. They combine artistic sensitivity with a desire for recognition, presentation, and social influence.' },
  '4w5': { name: 'The Free Spirit', description: 'Bohemian, introspective, quiet, and private. They seek depth, meaning, and highly unique, unconventional ideas, often retreating into their imagination.' },
  '5w4': { name: 'The Iconoclast', description: 'Creative, eccentric, independent, and intellectual. They combine intellectual depth and observation with emotional, artistic sensitivity and a desire for originality.' },
  '5w6': { name: 'The Problem Solver', description: 'Practical, analytical, and cooperative. They are focused on science, technology, and structured systems, seeking security through knowledge.' },
  '6w5': { name: 'The Defender', description: 'Cautious, private, intellectual, and highly loyal. They seek security through systems, rules, and analysis, and are more independent and quiet.' },
  '6w7': { name: 'The Buddy', description: 'Playful, social, engaging, and cooperative. They seek safety through alliances, warm relationships, humor, and active planning for future scenarios.' },
  '7w6': { name: 'The Pathfinder', description: 'Enthusiastic, responsible, and relationship-oriented. They seek variety and adventure, but remain loyal, grounded, and sensitive to safety and stability.' },
  '7w8': { name: 'The Opportunist', description: 'Assertive, bold, practical, and high-energy. They are realistic, competitive, and driven to enjoy life to the fullest without limitations.' },
  '8w7': { name: 'The Independent', description: 'Outgoing, energetic, action-oriented, and powerful. They seek freedom, control, and power, and are highly entrepreneurial and comfortable with conflict.' },
  '8w9': { name: 'The Bear', description: 'Calm, protective, receptive, and grounded. They are strong but quiet, gentle until crossed, seeking to protect their peace and their loved ones.' },
  '9w8': { name: 'The Referee', description: 'Grounded, strong, receptive, and calm. They are more comfortable with boundaries and anger, combining inner peace with a quiet, protective power.' },
  '9w1': { name: 'The Dreamer', description: 'Peaceful, structured, spiritual, and idealistic. They seek harmony, order, and are more self-controlled, polite, and focused on creative or spiritual ideals.' }
};

// Application State
let appState = {
  types: [],               // Parsed Enneagram types
  activePhase: 1,          // 1 = Baseline, 2 = Deep Dive, 3 = Results
  phase1Questions: [],     // 36 questions selected initially (4 per type)
  phase2Questions: [],     // 5 questions selected for dominant type(s)
  currentQuestions: [],    // Questions being displayed right now
  currentIndex: 0,         // Current question index in currentQuestions
  answers: {},             // Map of questionId -> score (1-5)
  preliminaryScores: {},   // Phase 1 calculated scores
  finalScores: {},         // Phase 2 final calculated scores
  dominantTypes: [],       // Array of top scoring typeIds from Phase 1
  finalDominantId: null,   // Final single dominant type ID
  calculatedWing: null,    // Calculated wing e.g. '5w4'
  calculatedTriads: null,  // Triad scores
  chartInstance: null,     // Chart.js instance reference
  chartType: 'symbol',     // Chart visual mode: 'symbol' | 'radar' | 'bar'
  theme: 'dark'            // UI Visual Theme
};

// --- Initializer ---
document.addEventListener('DOMContentLoaded', async () => {
  setupEventListeners();
  loadThemePreference();
  await loadAndParseDataset();
});

// --- Setup Interactions ---
function setupEventListeners() {
  // GDPR Consent Checkbox and Start Button
  const consentCheckbox = document.getElementById('privacy-consent-checkbox');
  const startBtn = document.getElementById('start-btn');
  if (consentCheckbox && startBtn) {
    consentCheckbox.addEventListener('change', (e) => {
      startBtn.disabled = !e.target.checked;
    });
  }

  // Start Assessment
  document.getElementById('start-btn').addEventListener('click', () => {
    transitionToScreen('screen-quiz');
    startBaselineQuiz();
  });

  // Rating buttons click
  const ratingContainer = document.getElementById('rating-buttons-container');
  ratingContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.rating-btn');
    if (!btn) return;
    
    // Highlight selected rating
    document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const value = parseInt(btn.getAttribute('data-value'), 10);
    handleAnswerSelect(value);
  });

  // Navigation Buttons
  document.getElementById('prev-btn').addEventListener('click', () => {
    goToPreviousQuestion();
  });

  document.getElementById('next-btn').addEventListener('click', () => {
    goToNextQuestion();
  });

  // Start Phase 2 Button
  document.getElementById('start-phase2-btn').addEventListener('click', () => {
    transitionToScreen('screen-quiz');
    startDeepDiveQuiz();
  });

  // Theme Toggle Button
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

  // Chart Toggle Buttons
  document.getElementById('btn-chart-symbol').addEventListener('click', () => {
    setChartType('symbol');
  });
  document.getElementById('btn-chart-radar').addEventListener('click', () => {
    setChartType('radar');
  });
  document.getElementById('btn-chart-bar').addEventListener('click', () => {
    setChartType('bar');
  });

  // Report download buttons
  document.getElementById('download-pdf-btn').addEventListener('click', generatePDFReport);
  document.getElementById('download-txt-btn').addEventListener('click', generateTextReport);

  // Restart Assessment
  document.getElementById('restart-btn').addEventListener('click', restartAssessment);

  // Results Details Accordion
  const accordionHeader = document.getElementById('breakdown-toggle-header');
  const accordionContent = document.getElementById('breakdown-content');
  accordionHeader.addEventListener('click', () => {
    accordionHeader.classList.toggle('active');
    accordionContent.classList.toggle('collapsed');
  });
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem('enneagram-theme') || 'dark';
  appState.theme = savedTheme;
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  const icon = document.querySelector('#theme-toggle-btn i');
  if (savedTheme === 'light') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const target = current === 'light' ? 'dark' : 'light';
  
  appState.theme = target;
  document.documentElement.setAttribute('data-theme', target);
  localStorage.setItem('enneagram-theme', target);
  
  const icon = document.querySelector('#theme-toggle-btn i');
  icon.className = target === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  
  // Re-draw chart to adapt to theme changes
  if (appState.activePhase === 3) {
    renderCharts();
  }
}

// --- Data Fetching & Parsing ---
async function loadAndParseDataset() {
  let rawText = '';
  try {
    // Dynamically pull from workspace file
    const response = await fetch('Enneagram_Questionnaire_By_Type.md');
    if (!response.ok) throw new Error('Network error loading Markdown');
    rawText = await response.text();
    console.log('Successfully pulled questionnaire from Enneagram_Questionnaire_By_Type.md');
  } catch (err) {
    console.warn('Could not fetch local markdown file directly (CORS/filesystem check). Falling back to embedded dataset.', err);
    rawText = EMBEDDED_MARKDOWN;
  }
  
  appState.types = parseMarkdownDataset(rawText);
}

function parseMarkdownDataset(text) {
  const lines = text.split(/\r?\n/);
  const parsedTypes = [];
  let currentType = null;

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    // Check for Type Headers: "## TYPE X — NAME"
    const typeHeaderMatch = line.match(/^##\s+TYPE\s+(\d+)\s*—\s*(.*)$/i);
    if (typeHeaderMatch) {
      const id = parseInt(typeHeaderMatch[1], 10);
      const name = typeHeaderMatch[2].trim();
      currentType = {
        id: id,
        name: name,
        coreOrientation: '',
        questions: []
      };
      parsedTypes.push(currentType);
      continue;
    }

    // Check for Orientation: "*Core orientation: ...*"
    const orientationMatch = line.match(/^\*Core orientation:\s*(.*)\*$/i);
    if (orientationMatch && currentType) {
      currentType.coreOrientation = orientationMatch[1].trim();
      continue;
    }

    // Check for Questions: "NUM. TEXT"
    const questionMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (questionMatch && currentType) {
      const qId = parseInt(questionMatch[1], 10);
      const qText = questionMatch[2].trim();
      currentType.questions.push({
        id: qId,
        text: qText
      });
    }
  }

  console.log('Parsed Enneagram Types:', parsedTypes);
  return parsedTypes;
}

// --- Helper Functions ---
function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function transitionToScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  const target = document.getElementById(screenId);
  target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Assessment Engine Phase 1 (Baseline) ---
function cleanQuestionText(text) {
  // Strips any prefix like "Statement 1: ", "Statement 1 - ", or "Statement 1"
  return text.replace(/^(Statement\s*\d+\s*[:\-]?|Statement\s*[:\-]?)\s*/i, '').trim();
}

function startBaselineQuiz() {
  appState.activePhase = 1;
  appState.answers = {};
  appState.phase1Questions = [];
  appState.phase2Questions = [];
  appState.currentIndex = 0;

  // Select exactly 4 random questions from each Enneagram Type
  appState.types.forEach(type => {
    const shuffled = shuffleArray(type.questions);
    const selected = shuffled.slice(0, 4);
    selected.forEach(q => {
      appState.phase1Questions.push({
        id: q.id,
        text: cleanQuestionText(q.text),
        typeId: type.id
      });
    });
  });

  // Shuffle all 36 baseline questions to keep the assessment blind
  appState.phase1Questions = shuffleArray(appState.phase1Questions);

  // Re-index baseline questions sequentially 1-36 for blind scoring and standard display
  appState.phase1Questions.forEach((q, idx) => {
    q.sequentialId = idx + 1;
  });

  appState.currentQuestions = appState.phase1Questions;

  // Generate Navigation Dots
  generateNavDots();

  renderQuestion();
}

function generateNavDots() {
  const dotsContainer = document.getElementById('quiz-nav-dots');
  dotsContainer.innerHTML = '';
  appState.currentQuestions.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = 'nav-dot';
    if (idx === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });
}

function renderQuestion() {
  const question = appState.currentQuestions[appState.currentIndex];
  if (!question) return;
  
  // Phase Title
  const phaseLabel = document.getElementById('quiz-phase-label');
  if (appState.activePhase === 1) {
    phaseLabel.textContent = 'Phase 1: Baseline';
  } else {
    phaseLabel.textContent = 'Phase 2: Deep Dive';
  }

  // Progress Meta
  const progressText = document.getElementById('quiz-progress-text');
  progressText.textContent = `Question ${appState.currentIndex + 1} of ${appState.currentQuestions.length}`;
  
  // Progress Bar
  const pct = ((appState.currentIndex) / appState.currentQuestions.length) * 100;
  document.getElementById('quiz-progress-bar').style.width = `${pct}%`;

  // Question Content (uses sequentialId for sequentially indexed display 1-36)
  document.getElementById('question-category').textContent = `Statement ${question.sequentialId || question.id}`;
  document.getElementById('question-text').textContent = question.text;

  // Reset & Populate Ratings
  document.querySelectorAll('.rating-btn').forEach(btn => {
    btn.classList.remove('active');
    const btnValue = parseInt(btn.getAttribute('data-value'), 10);
    if (appState.answers[question.id] === btnValue) {
      btn.classList.add('active');
    }
  });

  // Enable/Disable Back button
  const prevBtn = document.getElementById('prev-btn');
  prevBtn.disabled = appState.currentIndex === 0;

  // Next button is enabled ONLY if the current question is answered
  const nextBtn = document.getElementById('next-btn');
  const isAnswered = appState.answers[question.id] !== undefined;
  if (nextBtn) {
    nextBtn.disabled = !isAnswered;
  }

  // Setup dot highlights
  const dots = document.querySelectorAll('.nav-dot');
  dots.forEach((dot, idx) => {
    dot.className = 'nav-dot';
    if (idx === appState.currentIndex) {
      dot.classList.add('active');
    } else if (appState.answers[appState.currentQuestions[idx].id] !== undefined) {
      dot.classList.add('answered');
    }
  });
}

function advanceQuestion() {
  // Find all unanswered questions in the current phase
  const unanswered = [];
  appState.currentQuestions.forEach((q, idx) => {
    if (appState.answers[q.id] === undefined) {
      unanswered.push(idx);
    }
  });

  if (unanswered.length === 0) {
    // All questions answered, proceed to complete
    if (appState.activePhase === 1) {
      processBaselineQuizCompleted();
    } else {
      processDeepDiveQuizCompleted();
    }
  } else {
    // Find the next unanswered question after the current index
    let nextIndex = -1;
    for (let i = appState.currentIndex + 1; i < appState.currentQuestions.length; i++) {
      if (appState.answers[appState.currentQuestions[i].id] === undefined) {
        nextIndex = i;
        break;
      }
    }
    // If none after, wrap around to the first unanswered question
    if (nextIndex === -1) {
      nextIndex = unanswered[0];
    }
    appState.currentIndex = nextIndex;
    renderQuestion();
  }
}

function handleAnswerSelect(value) {
  const currentQuestion = appState.currentQuestions[appState.currentIndex];
  appState.answers[currentQuestion.id] = value;
  
  // Update current dot state instantly
  const activeDot = document.querySelector('.nav-dot.active');
  if (activeDot) activeDot.classList.add('answered');

  // Trigger brief delay, then advance for responsiveness
  setTimeout(() => {
    advanceQuestion();
  }, 280);
}

function goToPreviousQuestion() {
  if (appState.currentIndex > 0) {
    appState.currentIndex--;
    renderQuestion();
  }
}

function goToNextQuestion() {
  const currentQuestion = appState.currentQuestions[appState.currentIndex];
  const isAnswered = appState.answers[currentQuestion.id] !== undefined;
  
  if (!isAnswered) return; // Cannot proceed without answering

  advanceQuestion();
}

// --- Intermediate Phase Calculation & Dynamic Injection ---
function processBaselineQuizCompleted() {
  // Validation check: if any baseline questions were missed or skipped, redirect back
  const unanswered = [];
  appState.phase1Questions.forEach((q, idx) => {
    if (appState.answers[q.id] === undefined) {
      unanswered.push(idx);
    }
  });

  if (unanswered.length > 0) {
    alert(`Validation Check: Some baseline statements are unanswered. Please complete all 36 statements before proceeding. Redirecting you to the first unanswered statement.`);
    appState.currentIndex = unanswered[0];
    renderQuestion();
    return;
  }

  calculatePreliminaryScores();
  
  // Determine highest-scoring type(s)
  let maxScore = -1;
  let topTypes = [];
  
  for (let typeId = 1; typeId <= 9; typeId++) {
    const score = appState.preliminaryScores[typeId];
    if (score > maxScore) {
      maxScore = score;
      topTypes = [typeId];
    } else if (score === maxScore) {
      topTypes.push(typeId);
    }
  }

  appState.dominantTypes = topTypes;
  
  // Generate 5 sequential questions *exclusive* to the dominant type(s)
  appState.phase2Questions = [];
  
  // Dynamically split 5 questions as evenly as possible across the tied types
  const numTied = topTypes.length;
  const questionsPerType = {};
  topTypes.forEach(typeId => {
    questionsPerType[typeId] = 0;
  });
  
  let remaining = 5;
  let idx = 0;
  while (remaining > 0) {
    const typeId = topTypes[idx % numTied];
    questionsPerType[typeId]++;
    remaining--;
    idx++;
  }
  
  topTypes.forEach(typeId => {
    const countToPull = questionsPerType[typeId];
    if (countToPull === 0) return;

    const typeObj = appState.types.find(t => t.id === typeId);
    
    // Filter out questions of this type that were already asked in Phase 1
    const phase1Ids = appState.phase1Questions.map(q => q.id);
    const availableQuestions = typeObj.questions.filter(q => !phase1Ids.includes(q.id));
    
    // Sort available questions sequentially by their original file ID
    const sortedAvailable = [...availableQuestions].sort((a, b) => a.id - b.id);
    
    // Select the countToPull sequential questions
    const selected = sortedAvailable.slice(0, countToPull);
    
    selected.forEach(q => {
      appState.phase2Questions.push({
        id: q.id,
        text: cleanQuestionText(q.text),
        typeId: typeId
      });
    });
  });

  // Re-index Phase 2 questions sequentially 1-5
  appState.phase2Questions.forEach((q, idx) => {
    q.sequentialId = idx + 1;
  });

  // Render Transition screen
  populateTransitionDetails();
  transitionToScreen('screen-transition');
}

function calculatePreliminaryScores() {
  appState.preliminaryScores = {};
  
  // Phase 1 has 36 questions, 4 per type
  for (let typeId = 1; typeId <= 9; typeId++) {
    const answeredQs = appState.phase1Questions.filter(q => q.typeId === typeId);
    const sum = answeredQs.reduce((acc, q) => acc + (appState.answers[q.id] || 0), 0);
    appState.preliminaryScores[typeId] = sum / answeredQs.length;
  }
  
  console.log('Preliminary Scores (Average out of 5):', appState.preliminaryScores);
}

function populateTransitionDetails() {
  const alertContainer = document.getElementById('preliminary-alert-box');
  alertContainer.innerHTML = '';

  const topTypesNames = appState.dominantTypes.map(id => {
    const t = appState.types.find(type => type.id === id);
    return `<strong>${t.name} (Type ${id})</strong>`;
  }).join(' and ');

  const title = document.createElement('div');
  title.className = 'alert-heading';
  title.innerHTML = `<i class="fa-solid fa-magnifying-glass-chart"></i> Preliminary Target Pinpointed`;
  alertContainer.appendChild(title);

  const desc = document.createElement('p');
  if (appState.dominantTypes.length === 1) {
    desc.innerHTML = `Your baseline indicators highlight a strong alignment with the motivations of ${topTypesNames}. Your initial average response score for this profile is <strong>${appState.preliminaryScores[appState.dominantTypes[0]].toFixed(1)} / 5.0</strong>.`;
  } else {
    desc.innerHTML = `Your baseline indicators highlight a tie between: ${topTypesNames}, both averaging <strong>${appState.preliminaryScores[appState.dominantTypes[0]].toFixed(1)} / 5.0</strong>.`;
  }
  alertContainer.appendChild(desc);

  // Show preliminary scores list
  const pillsRow = document.createElement('div');
  pillsRow.className = 'preliminary-scores-pills';
  
  for (let i = 1; i <= 9; i++) {
    const isTop = appState.dominantTypes.includes(i);
    const scoreVal = appState.preliminaryScores[i];
    
    const pill = document.createElement('span');
    pill.className = `score-pill ${isTop ? 'highlight' : ''}`;
    pill.innerHTML = `T${i}: ${scoreVal.toFixed(1)} ${isTop ? '<i class="fa-solid fa-check"></i>' : ''}`;
    pillsRow.appendChild(pill);
  }
  alertContainer.appendChild(pillsRow);

  // Customize dynamic injection explainer text
  const explainerText = document.getElementById('injection-description');
  if (appState.dominantTypes.length === 1) {
    const primaryType = appState.types.find(t => t.id === appState.dominantTypes[0]);
    explainerText.innerHTML = `To verify and calibrate your profile, we are dynamically injecting <strong>5 target statements exclusive to ${primaryType.name} (Type ${primaryType.id})</strong>. These statements will measure deep nuances and confirm if this is your true integration core.`;
  } else {
    explainerText.innerHTML = `Due to a tie, we are dynamically splitting and injecting <strong>5 deep-dive statements strictly among those tied types only</strong> (${topTypesNames}). This acts as a tie-breaker to determine which core drive truly governs your psyche.`;
  }
}

// --- Assessment Engine Phase 2 (Deep Dive) ---
function startDeepDiveQuiz() {
  appState.activePhase = 2;
  appState.currentIndex = 0;
  appState.currentQuestions = appState.phase2Questions;

  // Generate Navigation Dots
  generateNavDots();

  renderQuestion();
}

function processDeepDiveQuizCompleted() {
  // Validation check: if any deep-dive questions were missed or skipped, redirect back
  const unanswered = [];
  appState.phase2Questions.forEach((q, idx) => {
    if (appState.answers[q.id] === undefined) {
      unanswered.push(idx);
    }
  });

  if (unanswered.length > 0) {
    alert(`Validation Check: Some deep-dive statements are unanswered. Please complete all 5 statements. Redirecting you to the first unanswered statement.`);
    appState.currentIndex = unanswered[0];
    renderQuestion();
    return;
  }

  calculateFinalScores();
  appState.activePhase = 3;
  
  // Transition to results screen
  populateResultsDashboard();
  transitionToScreen('screen-results');
}

function calculateFinalScores() {
  appState.finalScores = {};
  
  // Final calculations are based on ALL answered questions (Phase 1 + Phase 2)
  for (let typeId = 1; typeId <= 9; typeId++) {
    // Find all questions of this type in either phase
    const phase1Qs = appState.phase1Questions.filter(q => q.typeId === typeId);
    const phase2Qs = appState.phase2Questions.filter(q => q.typeId === typeId);
    const allQs = [...phase1Qs, ...phase2Qs];
    
    const sum = allQs.reduce((acc, q) => acc + (appState.answers[q.id] || 0), 0);
    appState.finalScores[typeId] = sum / allQs.length;
  }
  
  console.log('Final Calculated Scores (Average out of 5):', appState.finalScores);
}

// --- Results Dashboard Population ---
function populateResultsDashboard() {
  // Determine final dominant type
  let maxScore = -1;
  let finalDominantId = 1;
  let ties = [];

  for (let typeId = 1; typeId <= 9; typeId++) {
    const score = appState.finalScores[typeId];
    if (score > maxScore) {
      maxScore = score;
      finalDominantId = typeId;
      ties = [typeId];
    } else if (score === maxScore) {
      ties.push(typeId);
    }
  }

  // Handle ties in final profile
  let displayTypeId = finalDominantId;
  
  // If there is a tie, let's favor the one that was dominant in Phase 1. If still tied, default.
  if (ties.length > 1) {
    const firstPhaseDominantTied = ties.find(id => appState.dominantTypes.includes(id));
    if (firstPhaseDominantTied) displayTypeId = firstPhaseDominantTied;
  }

  appState.finalDominantId = displayTypeId;

  // Dynamic Wing Calculation
  const wingCode = calculateWing(appState.finalScores, displayTypeId);
  appState.calculatedWing = wingCode;

  const typeData = appState.types.find(t => t.id === displayTypeId);
  const metadata = TYPE_METADATA[displayTypeId];

  // Update DOM - Primary Card
  const badgeRibbon = document.getElementById('result-type-badge');
  badgeRibbon.textContent = `TYPE ${displayTypeId}`;
  badgeRibbon.style.backgroundColor = metadata.color;
  
  const heroCard = document.querySelector('.result-hero-card');
  heroCard.style.borderLeftColor = metadata.color;

  const resultTypeName = document.getElementById('result-type-name');
  resultTypeName.textContent = typeData.name;
  
  const resultTypeOrientation = document.getElementById('result-type-orientation');
  resultTypeOrientation.textContent = `Core Orientation: ${typeData.coreOrientation}`;
  
  const resultTypeDescription = document.getElementById('result-type-description');
  resultTypeDescription.textContent = metadata.description;

  const iconContainer = document.getElementById('hero-icon-container');
  iconContainer.style.color = metadata.color;
  iconContainer.innerHTML = `<i class="${metadata.icon}"></i>`;

  // Dynamic chips (update with calculated wing)
  document.getElementById('result-wings').textContent = `${wingCode} (Calculated), Potential: ${metadata.wings}`;
  document.getElementById('result-growth').innerHTML = `<i class="fa-solid fa-arrow-up"></i> ${metadata.growth}`;
  document.getElementById('result-stress').innerHTML = `<i class="fa-solid fa-arrow-down-long"></i> ${metadata.stress}`;

  // Populate Specific Subtype details
  populateWingSubtypeBox(displayTypeId, wingCode);

  // Compute and Populate Triads
  const triads = calculateTriads(appState.finalScores);
  appState.calculatedTriads = triads;
  populateTriadsSection(triads);

  // Draw Distribution Chart
  renderCharts();

  // Populate Score Table & Breakdown List
  populateBreakdownSection();
}

function renderCharts() {
  const canvas = document.getElementById('enneagram-chart');
  const svgContainer = document.getElementById('enneagram-svg-container');
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  
  if (appState.chartType === 'symbol') {
    canvas.style.display = 'none';
    svgContainer.style.display = 'block';
    renderEnneagramSVG(svgContainer, appState.finalScores, appState.finalDominantId || 1);
    return;
  }
  
  canvas.style.display = 'block';
  svgContainer.style.display = 'none';

  const ctx = canvas.getContext('2d');
  if (appState.chartInstance) {
    appState.chartInstance.destroy();
  }

  // Color configuration
  const gridColor = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)';
  const labelColor = isLight ? '#0f172a' : '#f3f4f6';
  
  const chartLabels = appState.types.map(t => `T${t.id}: ${t.name.split(' ').slice(-1)[0]}`); // take last word e.g. REFORMER
  const chartDataValues = appState.types.map(t => appState.finalScores[t.id]);
  const typeColors = appState.types.map(t => TYPE_METADATA[t.id].color);

  if (appState.chartType === 'radar') {
    appState.chartInstance = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: chartLabels,
        datasets: [{
          label: 'Dominance Score',
          data: chartDataValues,
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          borderColor: 'rgba(99, 102, 241, 0.8)',
          borderWidth: 2,
          pointBackgroundColor: typeColors,
          pointBorderColor: '#fff',
          pointBorderWidth: 1.5,
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: gridColor },
            grid: { color: gridColor },
            pointLabels: {
              color: labelColor,
              font: {
                family: 'Outfit',
                size: 11,
                weight: '600'
              }
            },
            ticks: {
              backdropColor: 'transparent',
              color: isLight ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
              stepSize: 1,
              min: 1,
              max: 5
            },
            min: 1,
            max: 5
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  } else {
    // Bar Chart
    appState.chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartLabels,
        datasets: [{
          data: chartDataValues,
          backgroundColor: typeColors.map(c => c + 'cc'), // add opacity
          borderColor: typeColors,
          borderWidth: 1.5,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            grid: { color: gridColor },
            ticks: { color: labelColor },
            min: 1,
            max: 5
          },
          x: {
            grid: { display: false },
            ticks: {
              color: labelColor,
              font: {
                family: 'Outfit',
                weight: '600'
              }
            }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
}

function setChartType(type) {
  appState.chartType = type;
  document.getElementById('btn-chart-symbol').classList.toggle('active', type === 'symbol');
  document.getElementById('btn-chart-radar').classList.toggle('active', type === 'radar');
  document.getElementById('btn-chart-bar').classList.toggle('active', type === 'bar');
  renderCharts();
}

// --- Visual & Algorithmic Helper Functions ---

// Calculate exact wing based on adjacent type score comparison
function calculateWing(scores, dominantId) {
  const left = dominantId === 1 ? 9 : dominantId - 1;
  const right = dominantId === 9 ? 1 : dominantId + 1;
  
  const leftScore = scores[left] || 0;
  const rightScore = scores[right] || 0;
  
  const wingType = leftScore > rightScore ? left : right;
  return `${dominantId}w${wingType}`;
}

// Display calculated wing details in DOM
function populateWingSubtypeBox(dominantId, wingCode) {
  const wingBox = document.getElementById('wing-details-box');
  const subtype = WING_SUBTYPES[wingCode];
  
  if (!subtype) {
    wingBox.style.display = 'none';
    return;
  }
  
  const dominantColor = TYPE_METADATA[dominantId].color;
  wingBox.style.setProperty('--accent-color', dominantColor);
  wingBox.style.display = 'block';
  
  wingBox.innerHTML = `
    <h4>Your Specific Subtype: ${wingCode} — ${subtype.name}</h4>
    <p>${subtype.description}</p>
  `;
}

// Calculate score for the three Centers of Intelligence (Gut, Heart, Head)
function calculateTriads(scores) {
  const gutScore = ((scores[8] || 0) + (scores[9] || 0) + (scores[1] || 0)) / 3;
  const heartScore = ((scores[2] || 0) + (scores[3] || 0) + (scores[4] || 0)) / 3;
  const headScore = ((scores[5] || 0) + (scores[6] || 0) + (scores[7] || 0)) / 3;
  
  return {
    gut: gutScore,
    heart: heartScore,
    head: headScore
  };
}

// Render the Centers of Intelligence card with animated progress bars
function populateTriadsSection(triads) {
  const triadsContainer = document.getElementById('triads-section');
  
  const triadData = [
    {
      key: 'gut',
      name: 'Gut Triad: Instinctual (Types 8, 9, 1)',
      color: '#ef4444',
      score: triads.gut,
      description: 'Driven by instinct and autonomy. Manage tension through <strong>Anger</strong> control/expression.'
    },
    {
      key: 'heart',
      name: 'Heart Triad: Feeling (Types 2, 3, 4)',
      color: '#ec4899',
      score: triads.heart,
      description: 'Driven by emotion and self-image. Manage tension through relationship and <strong>Shame</strong> dynamics.'
    },
    {
      key: 'head',
      name: 'Head Triad: Thinking (Types 5, 6, 7)',
      color: '#10b981',
      score: triads.head,
      description: 'Driven by security and mental models. Manage tension through future anticipation and <strong>Fear</strong> dynamics.'
    }
  ];
  
  triadsContainer.innerHTML = '';
  
  triadData.forEach(triad => {
    const pct = ((triad.score - 1) / 4 * 100).toFixed(0);
    
    const item = document.createElement('div');
    item.className = 'triad-item';
    item.innerHTML = `
      <div class="triad-header">
        <span class="triad-name" style="color: ${triad.color};">${triad.name}</span>
        <span class="triad-score">${triad.score.toFixed(2)} / 5 (${pct}%)</span>
      </div>
      <div class="triad-bar-bg">
        <div class="triad-bar-fill" style="width: ${pct}%; --triad-color: ${triad.color};"></div>
      </div>
      <p class="triad-desc">${triad.description}</p>
    `;
    triadsContainer.appendChild(item);
  });
}

// Generate the SVG Enneagram geometry overlaying affinity scores and highlight pathways
function renderEnneagramSVG(container, scores, dominantId) {
  const cx = 160;
  const cy = 160;
  const r = 110;
  const rMin = 30;
  const rMax = 110;
  
  function getCoords(typeId, radiusValue) {
    const angle = -Math.PI / 2 + (typeId - 9) * (2 * Math.PI / 9);
    return {
      x: cx + radiusValue * Math.cos(angle),
      y: cy + radiusValue * Math.sin(angle)
    };
  }
  
  const standardLines = [
    { from: 9, to: 3, type: 'triangle' },
    { from: 3, to: 6, type: 'triangle' },
    { from: 6, to: 9, type: 'triangle' },
    { from: 1, to: 4, type: 'hexad' },
    { from: 4, to: 2, type: 'hexad' },
    { from: 2, to: 8, type: 'hexad' },
    { from: 8, to: 5, type: 'hexad' },
    { from: 5, to: 7, type: 'hexad' },
    { from: 7, to: 1, type: 'hexad' }
  ];
  
  const dynamics = {
    1: { growth: 7, stress: 4 },
    2: { growth: 4, stress: 8 },
    3: { growth: 6, stress: 9 },
    4: { growth: 1, stress: 2 },
    5: { growth: 8, stress: 7 },
    6: { growth: 9, stress: 3 },
    7: { growth: 5, stress: 1 },
    8: { growth: 2, stress: 5 },
    9: { growth: 3, stress: 6 }
  };
  
  const dominantDynamics = dynamics[dominantId] || { growth: null, stress: null };
  const growthType = dominantDynamics.growth;
  const stressType = dominantDynamics.stress;
  
  let svgContent = `<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">`;
  
  // 1. Draw outer circle
  svgContent += `<circle cx="${cx}" cy="${cy}" r="${r}" class="enneagram-circle" />`;
  
  // 2. Draw connections with directional flow animation
  standardLines.forEach(line => {
    const isGrowthLine = (line.from === dominantId && line.to === growthType) || (line.from === growthType && line.to === dominantId);
    const isStressLine = (line.from === dominantId && line.to === stressType) || (line.from === stressType && line.to === dominantId);
    
    let lineClass = "enneagram-line";
    let pFrom = getCoords(line.from, r);
    let pTo = getCoords(line.to, r);
    
    if (isGrowthLine) {
      lineClass += " line-growth animate-flow";
      pFrom = getCoords(dominantId, r);
      pTo = getCoords(growthType, r);
    } else if (isStressLine) {
      lineClass += " line-stress animate-flow";
      pFrom = getCoords(dominantId, r);
      pTo = getCoords(stressType, r);
    }
    
    svgContent += `<line x1="${pFrom.x}" y1="${pFrom.y}" x2="${pTo.x}" y2="${pTo.y}" class="${lineClass}" />`;
  });
  
  // 3. Draw scores polygon
  let polygonPoints = [];
  for (let i = 1; i <= 9; i++) {
    const score = scores[i] || 1;
    const rScore = rMin + (rMax - rMin) * (score - 1) / 4;
    const pt = getCoords(i, rScore);
    polygonPoints.push(`${pt.x.toFixed(1)},${pt.y.toFixed(1)}`);
  }
  
  const accentColor = TYPE_METADATA[dominantId].color;
  svgContent += `<polygon points="${polygonPoints.join(' ')}" class="enneagram-score-polygon" style="--polygon-fill: ${accentColor}18; --polygon-stroke: ${accentColor}; --polygon-glow: ${accentColor}40;" />`;
  
  // 4. Draw type nodes
  for (let i = 1; i <= 9; i++) {
    const pt = getCoords(i, r);
    const color = TYPE_METADATA[i].color;
    
    svgContent += `
      <g>
        <circle cx="${pt.x}" cy="${pt.y}" r="${i === dominantId ? 14 : 11}" class="enneagram-node" data-type="${i}" style="--node-color: ${color}; fill: ${color};" />
        <text x="${pt.x}" y="${pt.y}" dy="0.32em" text-anchor="middle" class="enneagram-node-text" data-type="${i}" style="font-size: ${i === dominantId ? '11px' : '9.5px'};">${i}</text>
      </g>
    `;
  }
  
  svgContent += `</svg>`;
  container.innerHTML = svgContent;
  
  // 5. Attach interaction events
  const nodes = container.querySelectorAll('.enneagram-node');
  nodes.forEach(node => {
    const typeId = parseInt(node.getAttribute('data-type'), 10);
    node.addEventListener('mouseenter', () => highlightTypeInfo(typeId));
    node.addEventListener('mouseleave', () => resetTypeInfo());
  });
}

// Display hovered node archetype details
function highlightTypeInfo(typeId) {
  const hoverPanel = document.getElementById('enneagram-hover-info');
  const typeData = appState.types.find(t => t.id === typeId);
  const metadata = TYPE_METADATA[typeId];
  
  if (!typeData || !metadata) return;
  
  const growthNum = metadata.growth.match(/Type \d/)[0];
  const stressNum = metadata.stress.match(/Type \d/)[0];
  const userScore = appState.finalScores[typeId] ? appState.finalScores[typeId].toFixed(2) : '1.00';
  
  hoverPanel.innerHTML = `
    <div class="hover-info-content" style="border-left-color: ${metadata.color}">
      <div class="hover-info-header">
        <span class="hover-type-num" style="background-color: ${metadata.color}">Type ${typeId}</span>
        <span class="hover-type-name">${typeData.name}</span>
        <span class="hover-type-score" style="margin-left: auto; font-size: 0.8rem; font-weight: 700; color: ${metadata.color};">Score: ${userScore}</span>
      </div>
      <p class="hover-type-desc">${metadata.description}</p>
      <div class="hover-type-details">
        <span><strong>Growth (Integration):</strong> ${growthNum}</span>
        <span><strong>Stress (Disintegration):</strong> ${stressNum}</span>
      </div>
    </div>
  `;
}

// Revert hover panel to instructions
function resetTypeInfo() {
  const hoverPanel = document.getElementById('enneagram-hover-info');
  hoverPanel.innerHTML = `
    <div class="hover-info-placeholder">
      <i class="fa-solid fa-circle-info"></i>
      <span>Hover over any type node to explore its psychological profile</span>
    </div>
  `;
}

function populateBreakdownSection() {
  const summaryGrid = document.getElementById('score-summary-grid');
  summaryGrid.innerHTML = '';

  const listContainer = document.getElementById('responses-list');
  listContainer.innerHTML = '';

  // Sort types by score for the summary grid
  const sortedTypes = [...appState.types].sort((a, b) => appState.finalScores[b.id] - appState.finalScores[a.id]);

  sortedTypes.forEach(type => {
    const finalScore = appState.finalScores[type.id];
    const metadata = TYPE_METADATA[type.id];

    // Count questions answered
    const p1Count = appState.phase1Questions.filter(q => q.typeId === type.id).length;
    const p2Count = appState.phase2Questions.filter(q => q.typeId === type.id).length;
    const totalCount = p1Count + p2Count;

    // Create Score Card
    const card = document.createElement('div');
    card.className = 'summary-score-item';
    card.style.setProperty('--type-color', metadata.color);
    card.innerHTML = `
      <span class="type-lbl">T${type.id} — ${type.name.split(' — ').slice(-1)[0]}</span>
      <div class="type-score-val">${finalScore.toFixed(2)} <span>/ 5</span></div>
      <div class="type-questions-meta">Calculated from ${totalCount} statements (P1: ${p1Count}, P2: ${p2Count})</div>
    `;
    summaryGrid.appendChild(card);

    // Create Response Log Group
    const group = document.createElement('div');
    group.className = 'response-type-group';
    group.style.setProperty('--type-color', metadata.color);
    
    const groupHeader = document.createElement('div');
    groupHeader.className = 'response-group-header';
    groupHeader.innerHTML = `<i class="${metadata.icon}"></i> <span>TYPE ${type.id}: ${type.name} (Score: ${finalScore.toFixed(2)})</span>`;
    group.appendChild(groupHeader);

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'response-group-items';

    // List all answered questions of this type
    const phase1Qs = appState.phase1Questions.filter(q => q.typeId === type.id);
    const phase2Qs = appState.phase2Questions.filter(q => q.typeId === type.id);
    const allQs = [...phase1Qs, ...phase2Qs];

    allQs.forEach(q => {
      const ansVal = appState.answers[q.id];
      let ratingText = '';
      switch (ansVal) {
        case 1: ratingText = '1 - Strongly Disagree'; break;
        case 2: ratingText = '2 - Disagree'; break;
        case 3: ratingText = '3 - Neutral'; break;
        case 4: ratingText = '4 - Agree'; break;
        case 5: ratingText = '5 - Strongly Agree'; break;
        default: ratingText = 'Not answered';
      }

      const item = document.createElement('div');
      item.className = 'response-item';
      item.innerHTML = `
        <div class="response-item-text">
          <span class="q-num">Q${q.id}</span> ${q.text}
        </div>
        <div class="response-item-value val-${ansVal}">${ratingText}</div>
      `;
      itemsContainer.appendChild(item);
    });

    group.appendChild(itemsContainer);
    listContainer.appendChild(group);
  });
}

// --- Text & PDF Dossier Generation ---
function generateTextReport() {
  const title = appState.dominantTypes.length > 1 ? 'Enneagram Assessment Report (Tied Profile)' : 'Enneagram Assessment Profile Dossier';
  const divider = '='.repeat(60);
  const dateStr = new Date().toLocaleString();

  const finalDominantId = appState.finalDominantId || 1;
  const typeData = appState.types.find(t => t.id === finalDominantId);
  const metadata = TYPE_METADATA[finalDominantId];
  const wingCode = appState.calculatedWing || calculateWing(appState.finalScores, finalDominantId);
  const wingSubtype = WING_SUBTYPES[wingCode];
  const triads = appState.calculatedTriads || calculateTriads(appState.finalScores);

  let text = `${title}\n${divider}\n`;
  text += `Generated on: ${dateStr}\n\n`;
  text += `PRIMARY PERSONALITY ARCHETYPE: TYPE ${finalDominantId} — ${typeData.name}\n`;
  text += `Core Orientation: ${typeData.coreOrientation}\n\n`;
  text += `Description:\n${metadata.description}\n\n`;
  
  if (wingSubtype) {
    text += `SPECIFIC WING SUBTYPE: TYPE ${wingCode} — ${wingSubtype.name}\n`;
    text += `Subtype Profile: ${wingSubtype.description}\n\n`;
  }
  
  text += `PERSONALITY DYNAMICS:\n`;
  text += `- Growth Path (Integration): ${metadata.growth}\n`;
  text += `- Stress Path (Disintegration): ${metadata.stress}\n\n`;
  
  text += `CENTERS OF INTELLIGENCE (TRIADS) AFFINITY:\n`;
  text += `- Gut Triad (Instinctual)  : ${triads.gut.toFixed(2)} / 5.0 (${((triads.gut - 1)/4*100).toFixed(0)}% affinity)\n`;
  text += `- Heart Triad (Feeling)     : ${triads.heart.toFixed(2)} / 5.0 (${((triads.heart - 1)/4*100).toFixed(0)}% affinity)\n`;
  text += `- Head Triad (Thinking)     : ${triads.head.toFixed(2)} / 5.0 (${((triads.head - 1)/4*100).toFixed(0)}% affinity)\n\n`;

  text += `FINAL SCORES BREAKDOWN (Average Score out of 5.0):\n`;
  
  const sortedScores = [...appState.types].sort((a,b) => appState.finalScores[b.id] - appState.finalScores[a.id]);
  sortedScores.forEach(t => {
    const finalVal = appState.finalScores[t.id].toFixed(2);
    const pct = ((appState.finalScores[t.id] - 1) / 4 * 100).toFixed(0);
    text += `- Type ${t.id} — ${t.name.padEnd(25)}: ${finalVal} / 5.0 (${pct}% affinity)\n`;
  });

  text += `\n${divider}\nRESPONSE LOG & STATEMENTS EVALUATION\n${divider}\n\n`;

  appState.types.forEach(type => {
    const finalVal = appState.finalScores[type.id].toFixed(2);
    text += `[TYPE ${type.id} — ${type.name}] (Average Score: ${finalVal})\n`;
    
    const p1Qs = appState.phase1Questions.filter(q => q.typeId === type.id);
    const p2Qs = appState.phase2Questions.filter(q => q.typeId === type.id);
    const allQs = [...p1Qs, ...p2Qs];

    allQs.forEach(q => {
      const val = appState.answers[q.id];
      text += `  Q${q.id.toString().padEnd(3)}: Score ${val} | ${q.text}\n`;
    });
    text += '\n';
  });

  text += `\nEnd of Assessment Dossier.\n`;

  // Create Blob & download link
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `enneagram_dynamics_profile_type${finalDominantId}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function generatePDFReport() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4'
  });

  const finalDominantId = appState.finalDominantId || 1;
  const typeData = appState.types.find(t => t.id === finalDominantId);
  const metadata = TYPE_METADATA[finalDominantId];
  const dateStr = new Date().toLocaleDateString();
  const wingCode = appState.calculatedWing || calculateWing(appState.finalScores, finalDominantId);
  const wingSubtype = WING_SUBTYPES[wingCode];
  const triads = appState.calculatedTriads || calculateTriads(appState.finalScores);

  // Helper: Hex color to RGB conversion
  function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  }

  // --- PAGE 1: DOMINANT PROFILE ---
  // Header bar
  doc.setFillColor(30, 41, 59); // deep slate slate-800
  doc.rect(0, 0, 210, 38, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('ENNEAGRAM PERSONALITY DOSSIER', 15, 18);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(203, 213, 225); // slate-300
  doc.text(`Adaptive Calibration Assessment | Generated: ${dateStr}`, 15, 28);

  // Profile Title
  doc.setTextColor(15, 23, 42); // slate-900
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(15);
  doc.text('DOMINANT ARCHETYPE PROFILE', 15, 52);

  // Type Indicator box
  doc.setFillColor(248, 250, 252); // slate-50
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.roundedRect(15, 58, 180, 22, 3, 3, 'FD');

  const dominantColorRgb = hexToRgb(metadata.color);
  doc.setFontSize(14);
  doc.setTextColor(dominantColorRgb[0], dominantColorRgb[1], dominantColorRgb[2]);
  doc.text(`TYPE ${finalDominantId}: ${typeData.name.toUpperCase()}`, 20, 66);
  
  doc.setFont('Helvetica', 'italic');
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105); // slate-600
  doc.text(`Core Orientation: ${typeData.coreOrientation}`, 20, 73);

  // Type Description
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(51, 65, 85); // slate-700
  const descLines = doc.splitTextToSize(metadata.description, 176);
  doc.text(descLines, 15, 92);
  let y = 92 + descLines.length * 5.5;

  // Wing Subtype box
  if (wingSubtype) {
    y += 4;
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(`WING SUBTYPE DETAILS`, 15, y);
    
    y += 4;
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(15, y, 180, 24, 2, 2, 'FD');
    
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(dominantColorRgb[0], dominantColorRgb[1], dominantColorRgb[2]);
    doc.text(`${wingCode} — ${wingSubtype.name}`, 20, y + 6);
    
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const wingDescLines = doc.splitTextToSize(wingSubtype.description, 170);
    doc.text(wingDescLines, 20, y + 12);
    
    y += 28;
  }

  // Alignments Header
  y += 4;
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('ALIGNMENTS & DYNAMIC PATHWAYS', 15, y);

  // Alignments content
  y += 5;
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text(`• Wing Alignment (Potential Neighbors): ${metadata.wings}`, 18, y);
  y += 5;
  doc.text(`• Growth Pathway (Integration): ${metadata.growth}`, 18, y);
  y += 5;
  doc.text(`• Stress Pathway (Disintegration): ${metadata.stress}`, 18, y);
  y += 8;

  // Stress / Growth Health Diagnostic
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('STRESS & GROWTH HEALTH DIAGNOSTIC', 15, y);
  y += 5;
  
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  
  // Extract stress and growth number values
  const stressNum = parseInt(metadata.stress.match(/Type (\d)/)[1], 10);
  const growthNum = parseInt(metadata.growth.match(/Type (\d)/)[1], 10);
  const stressScore = appState.finalScores[stressNum] || 1;
  const growthScore = appState.finalScores[growthNum] || 1;
  
  let diagnosticText = '';
  if (growthScore > stressScore + 0.3) {
    diagnosticText = `Your score indicates a higher integration affinity (${growthScore.toFixed(2)}) compared to stress disintegration (${stressScore.toFixed(2)}). This suggests you are currently drawing healthy energies from Type ${growthNum}, indicating self-actualization, developmental balance, and constructive coping mechanisms.`;
  } else if (stressScore > growthScore + 0.3) {
    diagnosticText = `Your score shows a higher disintegration affinity (${stressScore.toFixed(2)}) compared to integration growth (${growthScore.toFixed(2)}). This suggests you might be experiencing some adaptive tension, causing you to exhibit defense mechanisms associated with Type ${stressNum}. It may be a sign to prioritize rest and self-care.`;
  } else {
    diagnosticText = `Your profile shows a balanced integration (${growthScore.toFixed(2)}) and disintegration (${stressScore.toFixed(2)}) index. This represents a flexible, adaptive state. You are capable of navigating tension constructively while keeping pathways of personal development active in your daily operations.`;
  }
  
  const diagnosticLines = doc.splitTextToSize(diagnosticText, 176);
  doc.text(diagnosticLines, 15, y);

  // Footer on Page 1
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text('Certified Enneagram Dynamics Analysis | Page 1 of 3', 15, 287);


  // --- PAGE 2: CENTERS & SUMMARY INDEX ---
  doc.addPage();

  // Page 2 header bar
  doc.setFillColor(30, 41, 59);
  doc.rect(0, 0, 210, 20, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('CENTERS OF INTELLIGENCE & INDEX', 15, 13.5);

  doc.setTextColor(15, 23, 42);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('CENTERS OF INTELLIGENCE (TRIADS)', 15, 32);

  // Triads display
  const triadsData = [
    { name: 'Gut Triad: Instinctual (Types 8, 9, 1)', score: triads.gut, color: [239, 68, 68], desc: 'Driven by gut instinct. Core emotional baseline: anger and boundaries.' },
    { name: 'Heart Triad: Feeling (Types 2, 3, 4)', score: triads.heart, color: [236, 72, 153], desc: 'Driven by emotional identity. Core emotional baseline: self-worth and shame.' },
    { name: 'Head Triad: Thinking (Types 5, 6, 7)', score: triads.head, color: [16, 185, 129], desc: 'Driven by logic and security. Core emotional baseline: anxiety and fear.' }
  ];

  y = 40;
  triadsData.forEach(triad => {
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(triad.color[0], triad.color[1], triad.color[2]);
    doc.text(triad.name, 15, y);
    
    // Score
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.setFontSize(9);
    doc.text(`${triad.score.toFixed(2)} / 5.0`, 165, y);
    
    // Draw Progress Bar
    y += 3;
    doc.setFillColor(241, 245, 249);
    doc.rect(15, y, 170, 4, 'F');
    
    const fillRatio = (triad.score - 1) / 4;
    doc.setFillColor(triad.color[0], triad.color[1], triad.color[2]);
    doc.rect(15, y, Math.max(2, 170 * fillRatio), 4, 'F');
    
    // Description
    y += 7;
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.setFontSize(8.5);
    doc.text(triad.desc, 15, y);
    
    y += 11;
  });

  // Archetype scores table
  y += 4;
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('ARCHETYPE DOMINANCE INDEX', 15, y);
  y += 6;

  // Table header
  doc.setFillColor(248, 250, 252);
  doc.rect(15, y, 180, 8, 'F');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text('Archetype', 20, y + 5.5);
  doc.text('Dominance Index', 85, y + 5.5);
  doc.text('Relative Affinity', 140, y + 5.5);
  y += 8;

  // Draw rows
  const sortedScores = [...appState.types].sort((a,b) => appState.finalScores[b.id] - appState.finalScores[a.id]);
  sortedScores.forEach(t => {
    const finalVal = appState.finalScores[t.id].toFixed(2);
    const pct = ((appState.finalScores[t.id] - 1) / 4 * 100).toFixed(0);
    
    doc.setDrawColor(241, 245, 249);
    doc.line(15, y + 8, 195, y + 8);
    
    doc.setFont('Helvetica', t.id === finalDominantId ? 'bold' : 'normal');
    const colorRgb = hexToRgb(TYPE_METADATA[t.id].color);
    const txtColor = t.id === finalDominantId ? colorRgb : [71, 85, 105];
    doc.setTextColor(txtColor[0], txtColor[1], txtColor[2]);
    
    doc.text(`Type ${t.id} - ${t.name.split(' — ').slice(-1)[0]}`, 20, y + 5.5);
    doc.text(`${finalVal} / 5.00`, 85, y + 5.5);
    doc.text(`${pct}%`, 140, y + 5.5);
    y += 8;
  });

  // Footer on Page 2
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text('Certified Enneagram Dynamics Analysis | Page 2 of 3', 15, 287);


  // --- PAGE 3+: RESPONSE LOG ---
  doc.addPage();
  
  // Header Page 3
  doc.setFillColor(30, 41, 59);
  doc.rect(0, 0, 210, 20, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('DETAILED ASSESSMENT LOG', 15, 13.5);

  y = 32;
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('CALIBRATION STATEMENTS LOG', 15, y);
  y += 6;

  // Draw response logger items
  appState.types.forEach(type => {
    if (y > 260) {
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(`Certified Enneagram Dynamics Analysis | Page ${doc.internal.getNumberOfPages()} of 4`, 15, 287);
      doc.addPage();
      
      doc.setFillColor(30, 41, 59);
      doc.rect(0, 0, 210, 20, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('DETAILED ASSESSMENT LOG (CONTINUED)', 15, 13.5);
      y = 32;
    }

    const typeColor = hexToRgb(TYPE_METADATA[type.id].color);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(typeColor[0], typeColor[1], typeColor[2]);
    doc.text(`TYPE ${type.id}: ${type.name.toUpperCase()} (Final Score: ${appState.finalScores[type.id].toFixed(2)})`, 15, y);
    y += 5;

    const p1Qs = appState.phase1Questions.filter(q => q.typeId === type.id);
    const p2Qs = appState.phase2Questions.filter(q => q.typeId === type.id);
    const allQs = [...p1Qs, ...p2Qs];

    allQs.forEach(q => {
      const val = appState.answers[q.id];
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      
      const qTextLine = `Q${q.id}: ${q.text}`;
      const splitText = doc.splitTextToSize(qTextLine, 155);
      
      doc.text(splitText, 18, y + 3.5);
      
      // Right-aligned score label
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(30, 41, 59);
      doc.text(`Score: ${val}`, 178, y + 3.5);
      
      y += (splitText.length * 4.5) + 2;

      // Draw light separator
      doc.setDrawColor(248, 250, 252);
      doc.line(18, y, 195, y);
      y += 2;
    });
    
    y += 4;
  });

  // Footer Page 3
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  const totalPages = doc.internal.getNumberOfPages();
  doc.text(`Certified Enneagram Dynamics Analysis | Page ${totalPages} of ${totalPages}`, 15, 287);

  doc.save(`enneagram_dynamics_profile_type${finalDominantId}.pdf`);
}

// --- Assessment Reset ---
function restartAssessment() {
  if (confirm('Are you sure you want to discard your results and retake the Enneagram assessment?')) {
    appState.activePhase = 1;
    appState.answers = {};
    appState.phase1Questions = [];
    appState.phase2Questions = [];
    appState.currentIndex = 0;
    appState.dominantTypes = [];
    appState.finalDominantId = null;
    appState.calculatedWing = null;
    appState.calculatedTriads = null;
    appState.preliminaryScores = {};
    appState.finalScores = {};
    
    const accordionHeader = document.getElementById('breakdown-toggle-header');
    const accordionContent = document.getElementById('breakdown-content');
    if (accordionHeader) accordionHeader.classList.remove('active');
    if (accordionContent) accordionContent.classList.add('collapsed');

    // Hide Wing box
    const wingBox = document.getElementById('wing-details-box');
    if (wingBox) wingBox.style.display = 'none';

    // Reset GDPR Consent checkbox and disable start button
    const consentCheckbox = document.getElementById('privacy-consent-checkbox');
    if (consentCheckbox) consentCheckbox.checked = false;
    const startBtn = document.getElementById('start-btn');
    if (startBtn) startBtn.disabled = true;

    transitionToScreen('screen-welcome');
  }
}

