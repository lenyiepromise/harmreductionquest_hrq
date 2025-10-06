// =============================
// DATA: Questions, Badges, Referrals
// =============================

// 🎯 QUIZ QUESTIONS
const questions = [
  {
    text: "What is the primary way HIV is transmitted?",
    options: [
      "Through air",
      "Through blood, semen, or vaginal fluids",
      "Through food",
      "Through casual contact (e.g., hugging)"
    ],
    answer: 1,
    points: 100
  },
  {
    text: "Can HCV be transmitted through sharing needles?",
    options: ["Yes", "No", "Only through sexual contact", "Only through blood transfusion"],
    answer: 0,
    points: 150
  },
  {
    text: "What is a safe way to inject drugs?",
    options: [
      "Reusing needles",
      "Using clean, sterile needles",
      "Sharing needles with friends",
      "Using the same needle multiple times"
    ],
    answer: 1,
    points: 200
  },
  {
    text: "How can using a new syringe prevent HIV and HCV transmission?",
    options: [
      "It eliminates the need for testing",
      "It reduces the risk of sharing contaminated blood",
      "It has no effect on transmission",
      "It helps you inject more efficiently"
    ],
    answer: 1,
    points: 150
  },
  {
    text: "What are the symptoms of HIV?",
    options: [
      "Skin rashes only",
      "Fever, fatigue, swollen lymph nodes, weight loss",
      "Sore throat and cough",
      "None of the above"
    ],
    answer: 1,
    points: 100
  },
  {
    text: "Can HIV be prevented with medication?",
    options: [
      "Yes, through Pre-exposure Prophylaxis (PrEP)",
      "No, there is no prevention for HIV",
      "Yes, by taking antibiotics",
      "Yes, but only after testing positive"
    ],
    answer: 0,
    points: 200
  },
  {
    text: "Why is regular HIV testing important for people who inject drugs?",
    options: [
      "To prevent overdoses",
      "To track drug usage",
      "To detect HIV early for treatment",
      "To reduce drug addiction"
    ],
    answer: 2,
    points: 150
  },
  {
    text: "What is the difference between HIV and HCV?",
    options: [
      "HIV affects the immune system, HCV affects the liver",
      "HIV is bacterial, HCV is viral",
      "HIV only affects adults",
      "They are the same"
    ],
    answer: 0,
    points: 100
  },
  {
    text: "Can HIV be transmitted through hugging or shaking hands?",
    options: [
      "Yes, it can spread through physical touch",
      "No, HIV is not transmitted through casual contact",
      "Yes, but only if there is skin contact",
      "No, but it can spread through sharing food"
    ],
    answer: 1,
    points: 100
  },
  {
    text: "How does harm reduction help prevent HIV and HCV?",
    options: [
      "By teaching safer injecting and providing health services",
      "By encouraging moderate use",
      "By helping people stop using drugs entirely",
      "By legalizing all drug use"
    ],
    answer: 0,
    points: 200
  }
];

// 🧠 BADGES
const badges = [
  { name: "First Step", icon: "⭐" },
  { name: "Knowledge Seeker", icon: "📘" },
  { name: "Harm Reduction Advocate", icon: "🛡️" },
  { name: "Memory Master", icon: "🧠" },
  { name: "Quest Hero", icon: "🏅" }
];

// 🏥 REFERRAL CENTERS
const referralCenters = [
  { name: "Vanguard Against Drug Abuse (VGADA)", address: "Galadimawa, Abuja", tel: "+2347063222217" },
  { name: "YouthRISE Nigeria", address: "Kaura District, Abuja", tel: "+2348083788800" },
  { name: "Synapse Japonica", address: "Rumuibekwe Rd, Port Harcourt", tel: "+2349056811133" },
  { name: "The Olive Prime", address: "Lekki Phase 1, Lagos", tel: "+2349057000852" }
];