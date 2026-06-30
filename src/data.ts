// ─── Single Source of Truth for All Portfolio Content ────────────────────────
// Edit this file to update everything on the site.

import type {
  PersonalInfo,
  QuickFact,
  SkillGroup,
  Project,
  ExperienceItem,
  EducationItem,
  Achievement,
} from "./types";

// ── Personal Info ─────────────────────────────────────────────────────────────
export const personalInfo: PersonalInfo = {
  name: "JUSTIN NATHANAEL MUIN",
  title: "Software Engineer",
  location: "Japan",
  timezone: "JST (UTC+9)",
  availability: "Open to opportunities from 2025",
  email: "JUSTIN.NATHANAEL912@GMAIL.COM",
  github: "https://github.com/Justin-Muin",
  linkedin: "https://www.linkedin.com/in/justin-nathanael-799b833b1/",
  cvLink:
    "https://docs.google.com/document/d/1ppXlP8J3vvglUJi2EyLCzOrq9kmZvY0ehtKtIk2-TXE/edit?usp=sharing",

  // Hero headlines — pick one by changing index in Hero.tsx
  headlines: [
    "Building software that bridges ideas and impact.",
    "CS student in Japan.",
    "Crafting clean, fast, purposeful software.",
  ],
  subheadline:
    "Computer Science major focused on web, HCI, and practical machine learning.",
  focus:
    "I turn ambiguous ideas into usable software.",
};

// ── Quick Facts (Hero section) ────────────────────────────────────────────────
export const quickFacts: QuickFact[] = [
  { label: "Location", value: "Japan (JST)" },
  { label: "Languages", value: "Python · Java · C" },
  { label: "Availability", value: "Open from 2025" },
  { label: "Focus", value: "Web · HCI · ML" },
];

// ── About ─────────────────────────────────────────────────────────────────────
export const aboutParagraph =
  "I'm an Information Systems Science and Engineering student in Japan. I build web applications, explore machine learning, and like turning messy project ideas into clear, usable products.";

export const aboutHighlights: { icon: string; text: string }[] = [
  {
    icon: "Code2",
    text: "Web development with React, TypeScript, Tailwind, and backend fundamentals",
  },
  {
    icon: "Cpu",
    text: "Machine learning and NLP projects with BERT, IndoBERT, and Python",
  },
  {
    icon: "Users",
    text: "Team leadership from planning and scope to delivery",
  },
];

// ── Skills ────────────────────────────────────────────────────────────────────
export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C",
      "SQL",
      "HTML/CSS",
      "Java",
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vite", "VS Code"],
  },
  {
    category: "Concepts",
    skills: [
      "REST APIs",
      "Responsive Design",
      "Accessibility (WCAG)",
      "Data Structures & Algorithms",
      "Machine Learning",
      "Computer Vision",
      "System Design",
      "Agile",
    ],
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "edu-playground",
    title: "EduPlayground",
    tagline:
      "A playful learning platform with mini-games, profiles, and parent progress tracking.",
    category: "web",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "JWT",
      "Bun",
    ],
    bullets: [
      {
        label: "Problem",
        text: "Free learning sites are often ad-heavy, low-quality, or hard for parents to monitor.",
      },
      {
        label: "Approach",
        text: "Built three mini-games with accounts, progress tracking, rewards, and profile customization.",
      },
      {
        label: "Result",
        text: "Delivered a working app for kids to play and guardians to review progress.",
      },
    ],
    github: "https://github.com/lxymahatma/2025-WebInfo",
    demo: "https://drive.google.com/file/d/1fh1bqorYgZEzctjxg5FoRElyKgv5N86V/view?usp=share_link",
    caseStudy: {
      overview:
        "A free educational platform where children learn through mini-games and guardians can track progress. The app includes accounts, rewards, profiles, and a guardian dashboard.",
      role: "Frontend Developer (primary), collaborating closely with the Backend Developer (Node.js/Express) in a 4-person team.",
      responsibilities: [
        "Led frontend development with React + TypeScript (pages, components, UI behavior, state).",
        "Implemented the three mini-games UI + logic (Drag & Drop, Timed Quiz, Memory Card), including restart/congratulatory flow.",
        "Built the progress tracker UI and integrated tracking updates via API calls (counts, totals, favorite game, reset).",
        "Implemented profile features (avatar upload, equipping items/badges/hats UI, language toggle) and synced updates to the server.",
        "Coordinated with the backend developer on API contracts and authentication flow (JWT, protected routes), keeping types consistent via shared TypeScript types in a monorepo.",
      ],
      challenges: [
        "Keeping data consistent across a shared repository and across frontend/backend fields; solved by using TypeScript on both ends + monorepo + shared types to catch mismatches early.",
        "Progress tracking reliability; solved by detecting game completion via useEffect and updating stats through API calls.",
        "Keeping game logic, UI state, and tracking organized; solved by separating concerns into state layers and using Tailwind for consistent responsive UI.",
      ],
      keyDecisions: [
        {
          title: "Monorepo + shared TypeScript types",
          description:
            "Reduced duplication and prevented silent API contract drift between frontend and backend, catching type mismatches at compile time rather than runtime.",
        },
        {
          title: "JWT + protected routes + React context",
          description:
            "Kept sessions consistent across pages and blocked unauthenticated access, improving safety for child users.",
        },
      ],
      implementationHighlights: [
        "Auth: JWT stored in localStorage; server middleware verifies token; protected routes redirect unauthenticated users; session managed with React context.",
        "Drag & Drop: HTML5 Drag API (onDragStart, onDragOver, onDrop) with visual feedback and difficulty modes (easy/medium/hard).",
        "Memory game: duplicated + shuffled card pairs, 3D CSS flip (rotateY), matching logic for two selections, win condition triggers celebration.",
        "Timed quiz: subject-based question fetching, 15-second countdown using useEffect + setTimeout, auto-advance on answer/timeout, final score + percentage.",
        "Tracker: game completion triggers API increments; tracker page fetches overview and aggregates (total plays, per-game counts, favorite game); reset clears history.",
        "Profile: avatar upload to data URL via FileReader; equip items stored as arrays; language updated via PUT to re-render.",
      ],
      outcome:
        "Delivered a working platform with 3 interactive learning games, user accounts (sign up/in/out), a progress dashboard (total plays, per-game frequency, favorite game, reset), and a customizable profile (avatar/items/language).",
      learned: [
        "Keeping frontend and backend data consistent is critical; using TypeScript end-to-end reduced bugs and mismatches.",
        "Gained experience with JWT authentication, full-stack debugging, and team collaboration to deliver on time.",
      ],
      nextSteps: [
        "Add multilingual support site-wide (not only on the profile page).",
        "Add more games and expand quiz subjects/difficulty levels.",
        "Improve progress tracking with weekly reports and skill-based heatmaps.",
        "Improve mobile responsiveness and accessibility.",
      ],
    },
  },
  {
    slug: "sunrise-dumpling",
    title: "Sunrise Dumpling (Weekly Meal Planner)",
    tagline:
      "A student meal planner that combines health inputs, budget, nutrition filters, and maps.",
    category: "web",
    tech: ["Vue.js", "Google Maps API", "SQL", "REST API", "Client-Server Architecture"],
    bullets: [
      {
        label: "Problem",
        text: "Students need healthier meal choices that fit time, budget, and nearby options.",
      },
      {
        label: "Approach",
        text: "Led a team building personalized suggestions, filters, and Google Maps support.",
      },
      {
        label: "Result",
        text: "Delivered a working prototype plus requirements, design, and architecture docs.",
      },
    ],
    website: "https://www.notion.so/PBL3-group-H-133976579ee44f66a529fbf88355a327",
    demo: "https://drive.google.com/file/d/1-9TCoOvALS4ZarFvbXVucfFijCo4X4Xi/view?usp=sharing",
    caseStudy: {
      overview:
        "A weekly meal planning prototype for students. It combines personalized suggestions, nutrition and budget filters, and nearby food locations.",
      role: "Project Leader (7-person team)",
      responsibilities: [
        "Directed project planning, task allocation, and progress tracking across a 7-person team.",
        "Assigned responsibilities based on each teammate's strengths to improve efficiency and maintain balanced workloads.",
        "Coordinated the end-to-end workflow across proposal writing, requirements elicitation, requirement specification, system design, architecture documentation, and prototype/demo preparation.",
        "Kept the team aligned on feature scope and priorities, ensuring consistency between requirements and design artifacts.",
        "Facilitated communication and integration of team outputs into a cohesive final deliverable.",
      ],
      challenges: [
        "Managing people and workload distribution — ensuring every team member had meaningful work matching their strengths while keeping the project on schedule; addressed by splitting the project into clear workstreams with defined ownership.",
        "Keeping everyone aligned on the same scope — multiple connected features (account management, personalized suggestions, filtering, map integration) could be interpreted differently; handled by continuously aligning discussions back to documented requirements and prioritized MVP scope.",
        "Turning user/client feedback into structured system design — converting interview and survey findings into actionable requirements and diagrams required prioritization; led the team in deciding which features belonged in the current prototype versus future improvements.",
      ],
      keyDecisions: [
        {
          title: "Prioritized an MVP focused on core user value",
          description:
            "Focused on the highest-impact features first — account flows, meal suggestions, filtering, and map view — which helped the team deliver a complete and coherent prototype instead of an over-scoped, incomplete system.",
        },
        {
          title: "Used requirement elicitation to drive feature selection",
          description:
            "Grounded decisions in client interviews and user survey findings rather than assumptions, which improved feature prioritization and documentation quality.",
        },
        {
          title: "Structured the project around a tiered web architecture",
          description:
            "Organizing the system into presentation, application, and data responsibilities helped the team divide work more effectively and communicate design decisions more clearly.",
        },
      ],
      implementationHighlights: [
        "Personalized meal recommendation flow using user profile and health-related inputs (age, weight, height, activity level) with TDEE-based analysis.",
        "Meal filtering features for price, ingredients, nutritional content, and distance.",
        "Google Maps integration to display nearby stores/restaurants for suggested meals.",
        "Account-related workflows including sign in, log in, password recovery, and user information updates.",
        "Comprehensive system documentation including use case diagrams, activity diagrams, sequence diagrams, and software architecture documentation.",
      ],
      outcome:
        "Delivered a working meal-planning web prototype supporting personalized recommendations, filtering, and location-based decision-making. Completed a full project package including proposal, requirements elicitation (client interview + user survey), requirement specification, system design diagrams, system architecture documentation, and prototype/demo presentation.",
      learned: [
        "Strong project leadership is not just about assigning tasks — it's about matching work to people's strengths, maintaining alignment, and preventing scope drift.",
        "Strengthened ability to connect requirements elicitation → requirement specification → system design/architecture → prototype delivery, which improved both team coordination and project quality.",
      ],
      nextSteps: [
        "Expand the food dataset to improve recommendation variety and scalability.",
        "Improve data update reliability (e.g., automated update pipeline).",
        "Strengthen multilingual support and usability.",
        "Improve privacy/security implementation and user-facing data transparency.",
        "Refine responsiveness and overall prototype polish for production readiness.",
      ],
    },
  },
  {
    slug: "osaka-student-corner",
    title: "Osaka Student Corner (Student Utility Corner)",
    tagline:
      "An all-in-one student utility site for GPA, planning, profiles, and study support.",
    category: "web",
    tech: ["HTML", "CSS", "JavaScript"],
    bullets: [
      {
        label: "Problem",
        text: "Student tools are fragmented across scheduling, GPA, study, and profile needs.",
      },
      {
        label: "Approach",
        text: "Directed a prototype combining GPA, planning, account, and engagement features.",
      },
      {
        label: "Result",
        text: "Delivered a cohesive prototype and final product presentation.",
      },
    ],
    github: "https://github.com/Justin-Muin/PBL4Web",
    caseStudy: {
      overview:
        "An all-in-one student utility prototype for academic planning. It combines GPA calculation, scheduling, profiles, and student engagement features.",
      role: "Project Director (team project)",
      responsibilities: [
        "Directed project planning and overall execution for the team, shaping the website concept around a real student pain point (tool fragmentation).",
        "Coordinated feature planning and scope alignment across team members to ensure consistency in the final website concept and presentation.",
        "Facilitated decision-making when team opinions differed, balancing feasibility, usefulness, and presentation clarity.",
        "Oversaw integration planning for key modules (Profile/Account, GPA Calculator, Study Planner/Schedule, and engagement features) so the platform worked as a coherent all-in-one product concept.",
        "Helped maintain consistency in UI direction and feature inclusion across project progress materials and the final presentation.",
        "Supported progress tracking and team coordination under time constraints.",
      ],
      challenges: [
        "Coordinating everyone and keeping the project consistent — ensuring different team members' contributions fit together into one coherent website concept, keeping the team aligned on structure, priorities, and how each tool should fit into the all-in-one experience.",
        "Incorporating everyone's opinions into the plan — team members had different ideas about features and priorities; addressed by guiding the team toward shared priorities and focusing on the most useful features for students first.",
        "Managing scope under time constraints and feature integration difficulty — time constraints, difficulty, and integration of multiple features were key project challenges, especially in a multi-feature web project where coordination directly affects both progress and quality.",
      ],
      keyDecisions: [
        {
          title: "Focused the project on a real-world student problem",
          description:
            "Centered the product around the idea of an all-in-one student utility website, which gave the team a clear direction and made feature selection easier. The presentations highlight this as a key advantage ('All in One').",
        },
        {
          title: "Prioritized practical student features for daily academic life",
          description:
            "Selected features that support actual student workflows — profile/account, GPA calculation, and planning/scheduling — emphasized as the core features in both project presentations.",
        },
        {
          title: "Kept personalization as part of the value proposition",
          description:
            "Treated profile-related customization and student-specific usage as part of the platform design rather than an optional extra, aligning with the 'Personalization' advantage highlighted in the presentations.",
        },
      ],
      implementationHighlights: [
        "All-in-one student platform concept combining multiple academic tools into one website (highlighted in the 'Advantages' slides).",
        "Core features: Profile/Account, GPA Calculator, Study Planner/Schedule, and a student engagement feature (Discussion Forum / Challenges).",
        "Target users defined: university students in Japan across institutions/departments, especially 1st–4th year students.",
        "Usage estimation: roughly 500–1,500 daily visitors, with increased usage during exam periods.",
        "UI/prototype progress shown for website layout, GPA calculator screen, and account/sign-in/registration pages.",
      ],
      outcome:
        "Delivered a team web project prototype and final presentation for an all-in-one student support platform focused on academic management and usability. Produced a structured presentation covering project overview, target users, development effort/cost estimates, advantages, challenges, progress/demo, and future plans.",
      learned: [
        "Being a Project Director means balancing consistency and collaboration simultaneously — collecting ideas is not enough; input must still converge into one clear, usable product direction.",
        "Improved ability to coordinate a team around a shared scope, especially in a project with multiple interconnected features and limited time.",
        "Learned how early planning decisions affect feature integration later, particularly in multi-module web projects.",
      ],
      nextSteps: [
        "Improve and expand the engagement feature (the final presentation mentions improving Challenges and adding rewards/points).",
        "Add personalized notifications and academic event reminders to increase engagement.",
        "Integrate more advanced academic management tools, including stronger GPA calculator features and Google Calendar API support.",
        "Continue implementing additional student-focused features while improving integration and usability.",
      ],
    },
  },
  {
    slug: "indonesian-sentiment-analysis",
    title: "Indonesian Sentiment Analysis & Urgency Detection for YouTube Comments",
    tagline:
      "An NLP classifier for Indonesian YouTube comment sentiment and urgency.",
    category: "ml",
    tech: ["Python", "IndoBERT", "Hugging Face Transformers", "Web Scraping", "K-fold Cross-Validation"],
    bullets: [
      {
        label: "Problem",
        text: "Manual review of large comment volumes is slow, and sentiment alone misses urgency.",
      },
      {
        label: "Approach",
        text: "Scraped, annotated, and fine-tuned IndoBERT for sentiment and urgency labels.",
      },
      {
        label: "Result",
        text: "Built and evaluated a working prototype with 5-fold cross-validation.",
      },
    ],
    caseStudy: {
      overview:
        "A solo NLP project for Indonesian YouTube comment triage. It predicts both sentiment and urgency so important feedback can be surfaced faster.",
      role: "Solo Developer / Researcher (end-to-end project ownership)",
      responsibilities: [
        "Defined the project scope and research questions for Indonesian sentiment and urgency classification on YouTube comments.",
        "Collected comment data through web scraping and prepared the dataset for modeling.",
        "Designed and executed the manual annotation process for sentiment polarity and urgency labels, including annotation criteria/guidelines and inter-annotator agreement measurement.",
        "Built and evaluated NLP models using IndoBERT fine-tuning in Python.",
        "Ran experiments using 5-fold cross-validation and compared different modeling approaches, including a multitask model.",
        "Presented findings, limitations, and future improvements.",
      ],
      challenges: [
        "Going beyond basic sentiment categories — framing the problem around a real business need rather than stopping at positive/neutral/negative; focused on urgency detection because companies need help identifying which comments require immediate follow-up.",
        "Limited labeled data and annotation effort — the manual labeling constraints made model design and evaluation more challenging; addressed by defining annotation criteria and using a simplified urgency scale for the prototype stage.",
        "Handling Indonesian short-text variability — social media comments can be noisy, short, and linguistically varied (e.g., slang/sarcasm), which affects classification quality and is reflected in the future work on handling linguistic nuances.",
      ],
      keyDecisions: [
        {
          title: "Used IndoBERT as the base model",
          description:
            "Selected IndoBERT and fine-tuned it for sentiment and urgency classification because the task is Indonesian-language NLP and benefits from a pretrained Indonesian language model.",
        },
        {
          title: "Included urgency as a separate target",
          description:
            "Made the project more aligned with business operations, since urgent complaints may need faster handling regardless of sentiment polarity.",
        },
        {
          title: "Evaluated with 5-fold cross-validation",
          description:
            "Used 5-fold CV to get more reliable evaluation across limited labeled data, reporting F1 score and accuracy.",
        },
        {
          title: "Compared multiple model setups, including multitask learning",
          description:
            "Tested different model configurations alongside a multitask model, with the final presentation reporting better performance for the multitask setup.",
        },
      ],
      implementationHighlights: [
        "Data source: YouTube comments collected via web scraping.",
        "Dataset scale: up to 10,000 comments in the final presentation, with an average comment length of 16.42 words.",
        "Annotation workflow: manual labeling for sentiment polarity and urgency level, with annotation criteria/guidelines and inter-annotator agreement included in the study.",
        "Modeling: Python + IndoBERT fine-tuning for sentiment and urgency classification.",
        "Evaluation: 5-fold cross-validation with F1 score and accuracy as primary metrics.",
        "Experiment variants: separate single-task models compared against a multitask model.",
      ],
      outcome:
        "Built a working Indonesian sentiment + urgency classification prototype for short-text comments that supports more practical feedback prioritization. Demonstrated that urgency detection can complement sentiment analysis for business use cases, with results indicating strong urgency accuracy and improved performance in the multitask model setup.",
      learned: [
        "Learned how to design an NLP project around a real operational pain point rather than only a benchmark-style classification task.",
        "Gained hands-on experience with data collection (web scraping), manual annotation, IndoBERT fine-tuning, and evaluation using K-fold cross-validation.",
        "Learned how much label quality, dataset balance, and language-specific nuances (e.g., slang/sarcasm) affect real-world NLP performance.",
      ],
      nextSteps: [
        "Expand and balance the labeled dataset to improve generalization.",
        "Improve handling of Indonesian linguistic nuances such as sarcasm and slang.",
        "Refine urgency label definitions (e.g., multi-level urgency granularity) for more actionable business triage.",
        "Build a lightweight dashboard/API so companies can upload comments and sort by urgency + sentiment in real time.",
      ],
    },
  },
  {
    slug: "bert-abstract-classification",
    title: "Scientific Abstract Classification with BERT",
    tagline:
      "A BERT classifier for Astronomy, Sociology, and Psychology abstracts.",
    category: "ml",
    tech: ["Python", "BERT", "Hugging Face Transformers", "scikit-learn", "arXiv API", "Pandas"],
    bullets: [
      {
        label: "Problem",
        text: "Scientific abstracts are hard to organize manually at scale.",
      },
      {
        label: "Approach",
        text: "Collected 900 arXiv abstracts and fine-tuned BERT with stratified K-fold validation.",
      },
      {
        label: "Result",
        text: "Reached about 0.96 accuracy, precision, recall, and F1.",
      },
    ],
    caseStudy: {
      overview:
        "A course project using BERT to classify scientific abstracts into Astronomy, Sociology, or Psychology. It covers data collection, preprocessing, fine-tuning, and evaluation.",
      role: "Solo Developer (course project)",
      responsibilities: [
        "Defined the project scope and classification task (3-class scientific abstract classification).",
        "Collected dataset samples from the arXiv API using a Python script and parsed XML responses to extract abstracts and links.",
        "Built a preprocessing pipeline with duplicate removal, data validation, and label encoding (Astronomy=0, Sociology=1, Psychology=2).",
        "Fine-tuned a pretrained BERT (bert-base-uncased) model for sequence classification.",
        "Evaluated model performance using Stratified K-Fold cross-validation and metrics including accuracy, precision, recall, F1, and confusion matrices.",
        "Documented methodology, model architecture, training process, and results in a formal final report.",
      ],
      challenges: [
        "Understanding BERT beyond just using a library — learning the concepts behind BERT (tokenizer, embeddings, transformer layers, hidden states, and classification head) rather than only running code; addressed by breaking down the architecture in the report and connecting each part to the classification task.",
        "Choosing preprocessing steps for a transformer model — traditional NLP preprocessing conflicts with how BERT's tokenizer is designed to work; resolved by keeping preprocessing minimal (duplicate removal + validation) to stay aligned with BERT's expectations.",
        "Evaluating reliability beyond a single train/test split — used Stratified K-Fold cross-validation to assess robustness and preserve class balance across folds, producing more trustworthy results than a single split.",
      ],
      keyDecisions: [
        {
          title: "Used BERT (bert-base-uncased) as the base model",
          description:
            "Selected BERT because the project involves context-heavy scientific text, and BERT's bidirectional contextual understanding is better suited for this than simpler bag-of-words approaches.",
        },
        {
          title: "Kept preprocessing minimal",
          description:
            "Avoided unnecessary preprocessing (such as stopword removal and manual tokenization) because BERT's WordPiece tokenizer already handles tokenization in a way that matches the pretrained model's expectations.",
        },
        {
          title: "Used Stratified K-Fold cross-validation",
          description:
            "Chose stratified folds to preserve class distribution and evaluate generalization more reliably across all 3 classes.",
        },
      ],
      implementationHighlights: [
        "Dataset: 900 abstracts total (300 each for Astronomy, Sociology, Psychology) collected from the arXiv API via Python script with XML response parsing.",
        "Label encoding: Astronomy = 0, Sociology = 1, Psychology = 2; abstracts + links exported to CSV files then combined into a labeled dataset.",
        "Model: bert-base-uncased fine-tuned for 3-class sequence classification with a classification head over the [CLS] token representation.",
        "Training stack: Hugging Face BertForSequenceClassification, tokenizer, training arguments, and trainer-based workflow.",
        "Evaluation: Stratified K-Fold cross-validation with accuracy, precision, recall, F1, and per-fold confusion matrices.",
        "Results (5-fold CV): Accuracy 0.960 ± 0.011, Precision 0.961 ± 0.011, Recall 0.960 ± 0.011, F1 0.960 ± 0.011 — with minor overlap between Sociology and Psychology.",
      ],
      outcome:
        "Successfully built a working BERT-based text classifier as a course learning project and documented the full process in a formal AI final report. Demonstrated that fine-tuning a pretrained transformer can achieve strong performance on a small, domain-labeled dataset for multi-class abstract classification.",
      learned: [
        "Learned how to build an NLP classification pipeline using a pretrained transformer model (BERT) instead of traditional feature engineering approaches.",
        "Gained practical experience with API-based data collection, XML parsing, dataset labeling, Hugging Face training workflows, and cross-validation evaluation.",
        "Learned how to interpret classification metrics and confusion matrices to understand where a model performs well and where class overlap still exists.",
      ],
      nextSteps: [
        "Try domain-specific pretrained models (or further domain-adaptive pretraining) to reduce confusion between similar disciplines, especially Sociology vs. Psychology.",
        "Experiment with hyperparameter tuning (epochs, batch size, learning rate) and compare results across settings.",
        "Expand the dataset with more abstracts and/or more scientific fields to test scalability and class separation.",
        "Package the model into a simple demo app (paste an abstract and get a predicted field) for a more interactive portfolio showcase.",
      ],
    },
  },
];

// ── Experience ────────────────────────────────────────────────────────────────
export const experience: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    org: "Company name withheld",
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    location: "Japan (Hybrid)",
    bullets: [
      "Built and shipped a data visualisation feature used by 200+ internal users, reducing manual reporting time by ~3 hours/week.",
      "Refactored a legacy jQuery module to React, improving component load time by 40% and enabling unit test coverage.",
      "Collaborated with design and product in a 5-person agile team, contributing to sprint planning and code reviews.",
    ],
  },
  {
    role: "Technical Lead — Student Engineering Club",
    org: "Ritsumeikan University Engineering Club",
    startDate: "Apr 2023",
    endDate: "Mar 2024",
    location: "Japan",
    bullets: [
      "Led a team of 6 students to design and build an autonomous line-following robot for the national competition, placing in the top 10.",
      "Introduced Git-based collaboration workflow and weekly technical workshops, increasing active contributors from 3 to 12.",
      "Organised the annual inter-university hackathon (80+ participants), managing logistics, judging, and sponsorships.",
    ],
  },
];

// ── Education ────────────────────────────────────────────────────────────────
export const education: EducationItem[] = [
  {
    institution: "Ritsumeikan University",
    degree: "Information Systems Science and Engineering",
    field: "Computer Science",
    location: "Japan",
    startDate: "Apr 2023",
    endDate: "Mar 2027",
    coursework: [
      "Data Structures & Algorithms",
      "Statistical Analysis, Simulation, and Modelling",
      "Computer Graphics",
      "Applied Informatics",
      "Data Science",
      "Data Visualization",
      "Machine Learning",
      "Database",
      "Software Engineering",
    ],
    gpa: "4.54 / 5.0",
  },
  {
    institution: "Santa Laurensia High School",
    degree: "High School Diploma",
    field: "Science Track (STEM)",
    location: "Indonesia",
    startDate: "Jul 2019",
    endDate: "Jun 2022",
    coursework: [
      "Outstanding Award: Best in Video Editing and Multimedia (Apr 2022)",
    ],
    courseworkLabel: "Highlights",
    gpa: "3.7 / 4.0",
  },
];

// ── Achievements ──────────────────────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    title:
      "Ritsumeikan University Parents’ Educational Support Association — International Student Support Scholarship (Receiver)",
    org: "Ritsumeikan University",
    date: "Nov 2025",
    description:
      "Selected through an internal selection process and awarded financial support as an international student studying at a Japanese university.",
  },
  {
    title: "Japan Student Services Organization (JASSO) Scholarship (Receiver)",
    org: "Japan Student Services Organization (Recommended by university)",
    date: "Apr 2024 – Mar 2025",
    description:
      "Received a one-year scholarship for academic excellence as an international student, recommended by the university.",
  },
  {
    title: "Japan Student Services Organization (JASSO) Scholarship (Receiver)",
    org: "Japan Student Services Organization (Recommended by university)",
    date: "Apr 2023 – Mar 2024",
    description:
      "Received a one-year scholarship for academic excellence as an international student, recommended by the university.",
  },
  {
    title: "Project Leader — University Project-Based Learning (PBL) Courses",
    org: "Ritsumeikan University",
    date: "Apr 2024 – Jan 2025",
    description:
      "Selected twice as project manager/leader in team-based university projects; assigned tasks, tracked progress, improved ideas, and delivered presentations (Meal Recommendation Web App, Multi-Projector System, Student Utility Corner Web App).",
  },
  {
    title: "Outstanding Award — Best in Video Editing and Multimedia",
    org: "Santa Laurensia High School",
    date: "Apr 2022",
    description:
      "Selected as one of the best students for video editing and multimedia-related activities.",
  },
  {
    title: "Global Youth Entrepreneurship Challenge 2021 — Top 10 Placement",
    org: "Global Youth Entrepreneurship Challenge",
    date: "Sep 2021",
    description:
      "Worked in a team to create a solution to a real-world problem within a 12-hour period; achieved a top-10 placement.",
  },
  {
    title: "Canisius College Photography Competition — 2nd Place",
    org: "Canisius College",
    date: "Sep 2020",
    description:
      "Won second place in a photography competition themed “Unity in Diversity.”",
  },
];
