import { SuccessStoryProps } from '@/components/CustomerSuccessStory';

export const voiceAgentStories: SuccessStoryProps[] = [
  {
    company: "TechFlow Solutions",
    industry: "SaaS Platform",
    testimonial: "Our lead qualification process is now completely automated. The voice agent handles initial conversations, schedules demos, and integrates directly with our CRM. It's like having a sales rep that never sleeps.",
    author: "Marcus Rodriguez",
    role: "VP of Sales",
    metrics: [
      {
        label: "Lead Volume",
        value: "3x",
        improvement: "more qualified leads"
      },
      {
        label: "Conversion",
        value: "45%",
        improvement: "demo booking rate"
      }
    ],
    implementation: [
      "Lead qualification automation",
      "Calendar integration for demos",
      "CRM synchronization",
      "Follow-up sequence automation"
    ],
    results: [
      "3x increase in qualified leads",
      "45% demo booking conversion rate",
      "Reduced sales team workload",
      "Improved lead response time"
    ],
    status: "active",
    category: "Sales Automation"
  },
  {
    company: "HealthCare Plus",
    industry: "Medical Services",
    testimonial: "Patient appointment scheduling was our biggest bottleneck. Now our voice agent handles 80% of appointment bookings automatically, with patients reporting higher satisfaction due to the natural conversation flow.",
    author: "Dr. Emily Watson",
    role: "Medical Director",
    metrics: [
      {
        label: "Appointments",
        value: "80%",
        improvement: "automated booking"
      },
      {
        label: "No-shows",
        value: "-60%",
        improvement: "reduction"
      }
    ],
    implementation: [
      "Appointment scheduling automation",
      "Patient data integration",
      "Multi-language support",
      "Reminder system integration"
    ],
    results: [
      "80% of appointments booked automatically",
      "60% reduction in no-shows",
      "Improved patient satisfaction",
      "Reduced administrative workload"
    ],
    status: "completed",
    category: "Healthcare"
  }
];

export const workflowAutomationStories: SuccessStoryProps[] = [
  {
    company: "Desktronic Automation",
    industry: "Customer Service Workflow",
    testimonial: "The workflow automation reduced our processing time by 80% and eliminated human errors completely. ROI was achieved in just 3 months. Our team can now focus on strategic initiatives instead of repetitive tasks.",
    author: "Alex Thompson",
    role: "Operations Manager",
    metrics: [
      {
        label: "Processing Time",
        value: "80%",
        improvement: "reduction"
      },
      {
        label: "Error Rate",
        value: "0%",
        improvement: "eliminated"
      },
      {
        label: "ROI",
        value: "3 months",
        improvement: "payback period"
      }
    ],
    implementation: [
      "Customer inquiry routing automation",
      "Multi-language support integration",
      "CRM synchronization workflows",
      "Automated response generation"
    ],
    results: [
      "80% reduction in processing time",
      "Complete elimination of human errors",
      "3-month ROI achievement",
      "24/7 automated availability"
    ],
    status: "active",
    category: "Workflow Automation",
    featured: true
  },
  {
    company: "FinanceFlow",
    industry: "Financial Services",
    testimonial: "Our loan application process used to take days. Now it's completed in minutes with our automated workflow. The system handles document collection, verification, and approval routing seamlessly.",
    author: "Jennifer Liu",
    role: "Head of Operations",
    metrics: [
      {
        label: "Processing Time",
        value: "95%",
        improvement: "faster"
      },
      {
        label: "Approval Rate",
        value: "85%",
        improvement: "automated decisions"
      }
    ],
    implementation: [
      "Document collection automation",
      "Credit verification workflows",
      "Approval routing system",
      "Customer communication automation"
    ],
    results: [
      "95% faster loan processing",
      "85% automated approval rate",
      "Reduced manual review time",
      "Improved customer experience"
    ],
    status: "active",
    category: "Financial Services"
  },
  {
    company: "EduTech Solutions",
    industry: "Educational Technology",
    testimonial: "Student enrollment and course management was a nightmare. Our automated workflow now handles everything from application to course assignment, freeing up our staff to focus on student success.",
    author: "Professor David Kim",
    role: "Academic Director",
    metrics: [
      {
        label: "Enrollment Time",
        value: "70%",
        improvement: "faster processing"
      },
      {
        label: "Staff Efficiency",
        value: "3x",
        improvement: "more productive"
      }
    ],
    implementation: [
      "Student enrollment automation",
      "Course assignment workflows",
      "Grade processing automation",
      "Communication system integration"
    ],
    results: [
      "70% faster enrollment processing",
      "3x increase in staff productivity",
      "Automated course assignments",
      "Streamlined student communication"
    ],
    status: "completed",
    category: "Education"
  }
];

export const allSuccessStories: SuccessStoryProps[] = [
  ...voiceAgentStories,
  ...workflowAutomationStories
];

