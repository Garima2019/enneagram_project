/**
 * Enneagram Dynamics Assessment Dashboard - Core Logic
 */

// Fallback Embedded Markdown Dataset (ensures offline and file:// functionality)
const EMBEDDED_MARKDOWN = "# ENNEAGRAM QUESTIONNAIRE — GROUPED BY TYPE\n### Scale: 1 = Strongly Disagree · 2 = Disagree · 3 = Neutral · 4 = Agree · 5 = Strongly Agree\n\n---\n\n## TYPE 1 — THE REFORMER\n*Core orientation: Integrity, correctness, improvement, fairness*\n\n1. I strive for absolute accuracy in everything I do.\n2. I notice even the smallest mistakes and inconsistencies in my own and others' work.\n3. I can maintain high quality standards even under tight deadlines.\n4. I frequently double-check my work to ensure it is flawless.\n5. It is important to me to constantly improve and optimize familiar processes.\n6. I can be critical of myself or others when mistakes are made.\n7. I cannot consider a task complete until I have checked every detail.\n8. I often see ways to improve methods that others already consider efficient.\n9. I feel a sense of responsibility to correct inaccuracies for the common good.\n10. People often turn to me to find and fix mistakes in their work.\n11. I must correct others when they state facts incorrectly.\n12. Broken rules cause me physical tension.\n13. Corruption or unfairness deeply upsets me.\n14. I often notice what's unfair in situations.\n15. I feel compelled to point out when I see something unfair or incorrect.\n16. If something isn't done right, I feel personally responsible to fix it.\n17. I often notice what's broken or unfair in situations others accept.\n18. I desire to always be right, balanced, have integrity, to reach ideals, and to improve myself, others, and the world.\n19. I have a strong inner voice that tells me how things should be done.\n20. I am more troubled by a messy, inefficient system than by the people who created it.\n21. An opportunity conflicts with your principles — how do you handle this?\n22. When unfair treatment happens in front of you, you do your best to help.\n23. I feel guilty if my carbon footprint isn't minimized.\n24. I would rather be correct than be liked for what I say.\n25. I believe mistakes should have consequences.\n26. A rule seems inefficient but fair — what do you do?\n27. You spot a mistake in an official document that impacts many people — what do you do?\n28. I prefer to work according to clear, pre-written instructions and rules.\n29. I feel uncomfortable when established procedures or generally accepted traditions are broken.\n30. I feel calm when everything is organized, scheduled, and in its proper place.\n31. My workspace is well-organized, and everything has its specific place.\n32. When receiving feedback, I focus on the details to understand exactly what needs to be fixed.\n\n---\n\n## TYPE 2 — THE HELPER\n*Core orientation: Care, relationships, giving, emotional attunement*\n\n33. I intuitively sense when someone needs emotional support.\n34. I actively help others without expecting anything in return.\n35. Making sure my loved ones feel cared for is a priority for me.\n36. I find it easy to build and maintain close, trusting relationships.\n37. I often put the needs of other people before my own.\n38. I am comfortable openly expressing my feelings and affection for people.\n39. My happiness is directly tied to the well-being of those I care about.\n40. People frequently approach me when they need comfort or advice.\n41. I find it hard to say \"no\" when someone sincerely asks for help.\n42. I feel responsible for others' emotional well-being.\n43. I notice when someone's upset, even if they hide it.\n44. My superpower is knowing exactly what others are feeling without them even telling me.\n45. I anticipate others' needs before they ask.\n46. I struggle to ask for help to avoid being a burden.\n47. I often sacrifice my career goals for my family's needs.\n48. I feel guilty for not doing enough for others.\n49. I fear being judged as selfish or uncaring.\n50. I do my best to keep relationships smooth.\n51. I compromise too much to keep relations going well.\n52. I feel so exhausted when I have to accept the wrong situation.\n53. I sometimes overextend myself to keep relationships strong.\n54. I feel energized by helping people solve their problems.\n55. I would describe myself as helpful, caring, altruistic, sympathetic, and supportive.\n56. I often sacrifice my own preferences to support others' dreams and passions.\n57. It is essential for me to avoid conflict to maintain a peaceful environment.\n58. I find it difficult to remain emotionally detached when others are experiencing distress.\n59. I find value in listening to and validating the feelings of others.\n60. I easily empathize with the emotions of others.\n61. I enjoy providing emotional support to friends when they need it.\n62. I feel personally obligated to use my resources to help those less fortunate.\n\n---\n\n## TYPE 3 — THE ACHIEVER\n*Core orientation: Success, image, performance, productivity*\n\n63. I'd rather succeed at something than enjoy it casually.\n64. I'm bothered when I'm not making visible progress.\n65. I'm strongly bothered when I'm not recognized in a group.\n66. I feel uncomfortable when I am not making visible progress.\n67. My self-worth is heavily tied to my professional achievements.\n68. I adapt my presentation to match what my audience values.\n69. I am highly motivated by competition and the opportunity to be the best.\n70. I prefer clear metrics for growth over vague purpose.\n71. Achieving my goals is more important to me than maintaining a pleasant atmosphere.\n72. I measure my worth by what I have accomplished and how others see those accomplishments.\n73. I naturally take charge when leadership is needed.\n74. I'm energized by accomplishing things with a team.\n75. I feel anxious when I'm not busy or productive.\n76. I find it easy to adapt my behavior to what different social situations require.\n77. Feelings are messy, so I suppress them or cover them up so others only see my \"I have it all together\" image.\n78. I am highly motivated by competition and the desire to be the best.\n79. I worry I'm not good enough at what I do.\n80. Success to you means — (scenario question).\n81. I believe that true success requires a clear vision and the courage to be different.\n82. My personal comfort is less important to me than achieving a significant goal.\n83. I prefer quick decisions, even when I don't have all the information.\n84. I speak directly and to the point, even if it might displease someone.\n85. I am not intimidated by complex and ambitious tasks; I see them as a challenge.\n86. I easily delegate minor tasks to focus on the big picture.\n87. I am not afraid to express an unpopular opinion if I firmly believe I am right.\n\n---\n\n## TYPE 4 — THE INDIVIDUALIST\n*Core orientation: Authenticity, uniqueness, depth, emotional meaning*\n\n88. I'm drawn to things that feel unique or uncommon.\n89. Feeling ordinary makes me uneasy.\n90. I often feel I'm missing a piece of life that others seem to have.\n91. I prefer deep, emotional talks over light, practical ones.\n92. I feel fundamentally misunderstood by mainstream culture.\n93. I often feel that I am somehow misunderstood or that my depth is underestimated.\n94. The meaning I find in life must be unique to me; it cannot be mainstream.\n95. I would describe myself as deep, intellectual, emotional, authentic, accomplished, unique, and longing for beauty.\n96. I often notice what is missing rather than what is working.\n97. I sometimes keep sadness because it feels realer than cheer.\n98. I'm unsettled by being ordinary or similar to everyone else.\n99. I worry people will leave if they really know me.\n100. I am deeply drawn to art, music, or literature with complex meanings.\n101. I choose travel spots no one Instagrams — ordinary feels flat.\n102. When AI art is everywhere, I lose interest.\n103. I am fascinated by complex, detailed, and innovative ideas.\n104. I frequently and gladly immerse myself in my fantasies and thought experiments.\n105. I find myself feeling envious when I see someone else's remarkable talent or success.\n106. A friend receives an award I hoped to receive — I compare myself to successful people more than I admit.\n107. I consider myself a creative and unconventional thinker.\n108. I value originality and innovation much more than following old traditions.\n\n---\n\n## TYPE 5 — THE INVESTIGATOR\n*Core orientation: Knowledge, privacy, observation, independence*\n\n109. I need to understand how things work before I trust them.\n110. I prefer depth with a few people over shallow connections with many.\n111. I prefer observation to participation in new social situations.\n112. Large groups feel draining; I need recovery time.\n113. I prefer to absorb information privately rather than discussing it immediately.\n114. I often express my thoughts better in writing than verbally.\n115. I highly value my personal space and dislike it when it is suddenly invaded.\n116. I tend to deeply analyze the hidden reasons behind my own and others' actions.\n117. I am often fascinated by complex conceptual, philosophical, or scientific ideas.\n118. I feel more comfortable staying in the background rather than being on stage.\n119. A noisy and bustling environment quickly tires me and breaks my focus.\n120. I constantly evaluate my inner resources and energy reserves so I know when to refuel by retreating and being alone.\n121. I fear I don't understand what's really going on.\n122. I find it draining to have to constantly explain or justify my thoughts.\n123. I limit social media to save mental energy for learning.\n124. I prefer mastering a subject's theory over applying it in the real world.\n125. I would describe myself as intelligent, private, introspective, curious, wise, and a learner.\n126. I am comfortable working on tasks that require prolonged concentration in silence.\n127. I like to talk to smart people and enjoy smart discussions.\n128. I prefer to stay in quiet and silent places.\n129. After socializing for a long time, I need time alone to recharge.\n130. I carefully think through my words before saying or suggesting something.\n131. I prefer deep one-on-one conversations to superficial chats in a large group.\n\n---\n\n## TYPE 6 — THE LOYALIST\n*Core orientation: Security, loyalty, vigilance, doubt*\n\n132. Before making decisions, I consider potential problems and risks.\n133. I value loyalty above most other qualities in friendship.\n134. I always maintain a \"Plan B\" for emergencies.\n135. I value loyalty in relationships above almost everything else.\n136. Public health crises make me highly vigilant about safety protocols.\n137. I worry about things that might happen in the future, and I prepare extensively.\n138. I fear uncertainty, chaos, and danger, being targeted, blamed, helpless, or unsafe.\n139. With new work tech, I first imagine what could go wrong.\n140. When facing uncertainty, I seek trusted guidance before acting.\n141. I worry more about potential threats than immediate, manageable problems.\n142. I'm anxious about making the wrong choice.\n143. In a health scare, I trust experts who admit uncertainty.\n144. Stability, security, and predictability in life are very important to me.\n145. I always keep my promises, even if circumstances change and it requires great effort.\n146. Sudden and unpredictable changes cause me strong internal discomfort.\n147. I strive to create a safe, calm, and predictable environment around myself.\n148. I carefully weigh absolutely all the risks before making an important decision.\n149. I firmly believe that gradual evolutionary changes are better than radical revolutions.\n150. I feel uncomfortable when established procedures or generally accepted traditions are broken.\n151. I value long-term loyalty and dedication in both friendship and business.\n152. I prefer to work according to clear, pre-written instructions and rules.\n153. I prefer a structured approach when learning something new.\n154. I worry about fitting in or being accepted.\n155. Trusting others is difficult for me.\n156. I am scared to take major life decisions.\n\n---\n\n## TYPE 7 — THE ENTHUSIAST\n*Core orientation: Fun, adventure, variety, optimism, freedom*\n\n157. Life's best moments involve new experiences and possibilities.\n158. I have many interests and get excited about new opportunities quickly.\n159. I get bored easily and crave novelty.\n160. I hate feeling tied down to a single routine or location.\n161. I love to try unfamiliar food, visit new countries, and get unusual experiences.\n162. Routine and monotony quickly make me bored and lose motivation.\n163. I often find unconventional, creative solutions to ordinary problems.\n164. I naturally reframe negative situations to see positive possibilities.\n165. I would describe myself as spontaneous, interesting, creative, fun, visionary, imaginative, trendy, positive, happy.\n166. I enjoy quick conversations and frequent check-ins with colleagues throughout the workday.\n167. I feel most energized in dynamic, ever-changing environments.\n168. I think unexpected changes make life more interesting.\n169. I easily adapt and without stress to unexpected changes in my plans.\n170. I am always open to new ideas, even if they completely contradict my current beliefs.\n171. I often think about new ideas and future projects, even while working on something else.\n172. When something feels uncomfortable, I quickly pivot to a more interesting plan or idea.\n173. I enjoy starting projects and letting my creativity guide me rather than planning everything in advance.\n174. I find that too much planning takes the fun out of life.\n175. I prefer to work in a creative environment rather than one with clear guidelines.\n176. I love experiencing new things and hate being bored.\n\n---\n\n## TYPE 8 — THE CHALLENGER\n*Core orientation: Power, control, directness, protection, confrontation*\n\n177. I'm comfortable being direct about what I want and need.\n178. Weakness (in others or myself) is frustrating.\n179. I dread feeling helpless or out of control.\n180. I am comfortable with conflict if it forces a necessary resolution.\n181. I get intensely angry when I see the strong bullying the weak.\n182. I prefer controlling my own destiny over relying on others.\n183. I'm energized to solve my problems.\n184. I like to take risks for fun, even dangerous ones.\n185. I do not let strong emotions influence my professional or financial decisions.\n186. Anger comes quickly from my gut and expresses itself quickly and without much thought.\n187. If your boss insults you, do you argue with him?\n188. If you come across a fight in the street, do you go and separate the people and solve the discussion?\n189. Are you always courageous enough to argue and fight?\n190. Do you like to challenge people?\n191. I get irritated when people work too slowly or show indecisiveness.\n192. I often take the initiative if I see that no one else is doing it.\n193. I would rather go without something than depend on someone else to provide it.\n194. I am internally confident in myself and my abilities to handle any difficulties.\n195. I am not prone to dramatizing problems; I immediately start looking for solutions.\n196. Under intense pressure, I work just as efficiently as in a calm environment.\n\n---\n\n## TYPE 9 — THE PEACEMAKER\n*Core orientation: Harmony, merging, avoiding conflict, inner peace*\n\n197. I prefer harmony and try to adapt to others' moods.\n198. I often go along with others' plans to avoid tension.\n199. Peaceful environments are essential to my well-being.\n200. I see all sides of an argument, which makes deciding difficult.\n201. I prefer a quiet, predictable life over a chaotic, exciting one.\n202. I sometimes prioritize my peace over arguing a point I believe in.\n203. When conflict occurs, preserving relationships matters more than winning.\n204. I tend to merge with the people and environment around me.\n205. I often suppress my own desires if they might disrupt the group's harmony.\n206. During conflict, I tend to — (seek compromise / avoid escalation).\n207. I often compromise my own preferences to keep the peace in a group.\n208. I avoid conflicts to maintain harmony in my team or family.\n209. At tense family politics dinners, I nod to keep peace.\n210. During digital overload, I stick to comforting routines.\n211. I feel anxious when I disagree with others.\n212. I tend to avoid arguments, even when I have a different opinion.\n213. I prefer a structured, calm environment to resolve issues peacefully.\n214. It is essential for me to avoid conflict to maintain a peaceful environment.\n215. I enjoy whatever I have and I don't want more.\n216. I feel most relaxed when I can enjoy my own company in a calm setting.\n";

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
  phase1Questions: [],     // 18 questions selected initially (2 per type)
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
  return text.replace(/^Statement\s*\d+\s*[:\-]?\s*/i, '').trim();
}

function startBaselineQuiz() {
  appState.activePhase = 1;
  appState.answers = {};
  appState.phase1Questions = [];
  appState.phase2Questions = [];
  appState.currentIndex = 0;

  // Select exactly 2 random questions from each Enneagram Type
  appState.types.forEach(type => {
    const shuffled = shuffleArray(type.questions);
    const selected = shuffled.slice(0, 2);
    selected.forEach(q => {
      appState.phase1Questions.push({
        id: q.id,
        text: cleanQuestionText(q.text),
        typeId: type.id
      });
    });
  });

  // Shuffle all 18 baseline questions to keep the assessment blind
  appState.phase1Questions = shuffleArray(appState.phase1Questions);

  // Re-index baseline questions sequentially 1-18 for blind scoring and standard display
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

  // Question Content (uses sequentialId for sequentially indexed display 1-18)
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

function handleAnswerSelect(value) {
  const currentQuestion = appState.currentQuestions[appState.currentIndex];
  appState.answers[currentQuestion.id] = value;
  
  // Update current dot state instantly
  const activeDot = document.querySelector('.nav-dot.active');
  if (activeDot) activeDot.classList.add('answered');

  // Trigger brief delay, then advance for responsiveness
  setTimeout(() => {
    if (appState.currentIndex < appState.currentQuestions.length - 1) {
      appState.currentIndex++;
      renderQuestion();
    } else {
      // Completed current set of questions
      if (appState.activePhase === 1) {
        processBaselineQuizCompleted();
      } else {
        processDeepDiveQuizCompleted();
      }
    }
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

  if (appState.currentIndex < appState.currentQuestions.length - 1) {
    appState.currentIndex++;
    renderQuestion();
  } else {
    // Completed current set of questions
    if (appState.activePhase === 1) {
      processBaselineQuizCompleted();
    } else {
      processDeepDiveQuizCompleted();
    }
  }
}

// --- Intermediate Phase Calculation & Dynamic Injection ---
function processBaselineQuizCompleted() {
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
  
  topTypes.forEach(typeId => {
    const typeObj = appState.types.find(t => t.id === typeId);
    
    // Filter out questions of this type that were already asked in Phase 1
    const phase1Ids = appState.phase1Questions.map(q => q.id);
    const availableQuestions = typeObj.questions.filter(q => !phase1Ids.includes(q.id));
    
    // Sort available questions sequentially by their original file ID
    const sortedAvailable = [...availableQuestions].sort((a, b) => a.id - b.id);
    
    // Select the first 5 in sequential order
    const selected = sortedAvailable.slice(0, 5);
    
    selected.forEach(q => {
      appState.phase2Questions.push({
        id: q.id,
        text: cleanQuestionText(q.text),
        typeId: typeId
      });
    });
  });

  // Re-index Phase 2 questions sequentially
  appState.phase2Questions.forEach((q, idx) => {
    q.sequentialId = idx + 1;
  });

  // Render Transition screen
  populateTransitionDetails();
  transitionToScreen('screen-transition');
}

function calculatePreliminaryScores() {
  appState.preliminaryScores = {};
  
  // Phase 1 has 18 questions, 2 per type
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
    explainerText.innerHTML = `Due to a tie, we are injecting <strong>5 target statements for each</strong> of your top scoring profiles (total of ${appState.phase2Questions.length} questions). This helps differentiate the motivations and determine which core drive truly governs your psyche.`;
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
        <div class="response-item-value">${ratingText}</div>
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

