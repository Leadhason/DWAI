import { AudioSample, ServiceFeature, ProcessStep } from './types';

export const AUDIO_SAMPLES: AudioSample[] = [
  {
    id: 'inbound',
    label: 'RECEPTION_AGENT_V1',
    title: 'The Gatekeeper',
    description: 'Handles scheduling, FAQs, and call routing without hold times.',
    src: 'https://actions.google.com/sounds/v1/science_fiction/scifi_computer_beep.ogg',
    details: [
      "Zero hold times: Answers instantly, 24/7.",
      "Intelligent Routing: Transfers complex queries to human staff.",
      "CRM Integration: Logs every interaction into HubSpot/Salesforce.",
      "Spam Filtering: Blocks robo-calls before they reach your team."
    ],
    useCases: ["Medical Clinics", "Law Firms", "Real Estate Agencies"]
  },
  {
    id: 'outbound',
    label: 'COLD_OUTREACH_V1',
    title: 'The Hunter',
    description: 'Cold calling and lead qualification with human-level intonation.',
    src: 'https://actions.google.com/sounds/v1/science_fiction/robot_radio_chatter.ogg',
    details: [
      "Speed to Lead: Calls leads within 30 seconds of submission.",
      "Objection Handling: Trained on top sales scripts to overcome 'No'.",
      "Qualification: Filters out unqualified leads before booking.",
      "Scalability: Make 10 or 10,000 calls simultaneously."
    ],
    useCases: ["SaaS Sales", "Solar & Home Improvement", "Insurance"]
  },
  {
    id: 'reactivation',
    label: 'DB_REVIVAL_AGENT',
    title: 'The Lazarus',
    description: 'Waking up dead leads from your CRM and booking them into your calendar.',
    src: 'https://actions.google.com/sounds/v1/science_fiction/scifi_drone_flight_pass_by.ogg',
    details: [
      "Database Mining: Scans old lists to find ready-to-buy prospects.",
      "Promotion Delivery: Articulates new offers to past customers.",
      "List Cleaning: Identifies disconnected numbers and updates CRM.",
      "High ROI: Turns 'dead' data into active revenue."
    ],
    useCases: ["E-commerce", "Automotive Dealerships", "Gyms & Spas"]
  }
];

export const SERVICES: ServiceFeature[] = [
  {
    title: "Inbound Reception",
    subtitle: "Never Miss a Call.",
    description: "Eliminate missed opportunities. Our agents answer instantly, filter spam, and sync valid leads directly to your CRM.",
    iconName: "PhoneIncoming",
    details: [
      "24/7 Availability",
      "Multi-language Support",
      "Instant SMS Follow-up",
      "Live Call Transfer"
    ]
  },
  {
    title: "Database Reactivation",
    subtitle: "Revenue on Demand.",
    description: "You have thousands of leads sitting in your CRM. Our agents call them all in a single afternoon to identify who is ready to buy now.",
    iconName: "DatabaseZap",
    details: [
      "Bulk Campaign Management",
      "A/B Script Testing",
      "Sentiment Analysis",
      "Automatic Appointment Booking"
    ]
  },
  {
    title: "Appointment Setting",
    subtitle: "Calendar Autopilot.",
    description: "The AI negotiates times, books the slot, and sends calendar invites without you lifting a finger.",
    iconName: "CalendarCheck",
    details: [
      "Timezone Handling",
      "Rescheduling Management",
      "No-show Reduction Sequences",
      "Calendar Conflict Resolution"
    ]
  }
];

export const PROCESS_SUMMARY: ProcessStep[] = [
  {
    number: "01",
    title: "Audit & Architect",
    description: "We map your current workflows and identify high-value automation targets."
  },
  {
    number: "02",
    title: "Build & Prototype",
    description: "We construct the custom voice agent and integrate it with your CRM stack."
  },
  {
    number: "03",
    title: "Test & Refine",
    description: "Rigorous stress testing and edge-case handling to ensure reliability."
  },
  {
    number: "04",
    title: "Deploy & Scale",
    description: "Live launch with monitoring, followed by volume scaling."
  }
];

export const FULL_METHODOLOGY: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description: "Diagnosing the current state and defining the opportunity.",
    details: [
      "Consultation call to identify business goals.",
      "Revenue potential projection.",
      "Cost reduction analysis.",
      "Time-saving estimation."
    ]
  },
  {
    number: "02",
    title: "Deep Dive / Audit",
    description: "Mapping workflows and identifying automation touchpoints.",
    details: [
      "Detailed workflow mapping.",
      "Dataset quality evaluation.",
      "Tool and platform integration assessment.",
      "Identification of manual bottlenecks."
    ]
  },
  {
    number: "03",
    title: "Solution Architecture",
    description: "Translating findings into a concrete build plan.",
    details: [
      "System architecture design.",
      "Tech stack selection (LLMs, Low-code vs Custom).",
      "API flow and data integration planning.",
      "Prompt logic and model behavior definition."
    ]
  },
  {
    number: "04",
    title: "Kick-off & Requirements",
    description: "Locking scope and beginning structured development.",
    details: [
      "Confirming Success KPIs.",
      "Finalizing user roles and permissions.",
      "Setting delivery timelines.",
      "Establishing communication channels."
    ]
  },
  {
    number: "05",
    title: "Development & Prototyping",
    description: "Iterative building of the core automation.",
    details: [
      "Core automation flow construction.",
      "Dashboard and admin panel build.",
      "Backend integration development.",
      "Weekly demos and feedback loops."
    ]
  },
  {
    number: "06",
    title: "Quality Assurance",
    description: "Ensuring reliability before client use.",
    details: [
      "Functional and integration testing.",
      "Stress testing for edge cases.",
      "Accuracy verification.",
      "User acceptance testing (UAT)."
    ]
  },
  {
    number: "07",
    title: "Deployment & Implementation",
    description: "Releasing the system to production.",
    details: [
      "Production environment deployment.",
      "Hosting and API key setup.",
      "Real-system connection.",
      "Handover and training."
    ]
  }
];