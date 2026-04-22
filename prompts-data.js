const SECTIONS = [
  {
    id: "where-ai-helps",
    title: "Where Can AI Help in Writing?",
    icon: "🚀",
    cssClass: "sec-prompts",
    description: "Start here — tell AI your role and discover how it can help",
    prompts: [
      { title: "Discover AI Writing Use Cases for Your Role", emoji: "🎯", dept: "General", deptClass: "dept-general",
        text: "I am working as <your designation> in a world class coil coatings paint manufacturer based in Goa with a global customer base.\nWhere can AI help me in writing?\nKeep in short.",
        note: "Replace <your designation> with your actual role, e.g. Production Manager, HR Head, Quality Engineer, etc." }
    ]
  },
  {
    id: "writing",
    title: "AI for Writing",
    icon: "✍️",
    cssClass: "sec-writing",
    description: "Draft emails, notes, SOPs and more",
    prompts: [
      { title: "Making an Email More Professional", emoji: "📧", dept: "General", deptClass: "dept-general",
        text: "Rewrite this email clearly, professionally and in full sentences. Keep meaning exactly the same.\nText: We checked the machine issue. It may take two days to fix. We will update you tomorrow." },
      { title: "Writing a Technical Note from Rough Points", emoji: "📝", dept: "Engineering", deptClass: "dept-engineering",
        text: "Convert these rough notes into a clear technical note.\nNotes: Production delay due to supplier part mismatch. Quality check failed. Replacement ordered. Delivery expected next week." },
      { title: "Meeting Notes into Minutes", emoji: "🗒️", dept: "General", deptClass: "dept-general",
        text: "Convert these rough meeting notes into clean, structured minutes in simple English.\nNotes: Meeting today: Discussion on production delays, vendor issues, quality complaints. Action plan needed. Next review meeting next week." },
      { title: "Drafting an Internal Circular", emoji: "📢", dept: "General", deptClass: "dept-general",
        text: "Draft a clear and professional internal circular using the following information.\nInfo: Safety training scheduled on Friday at 3 PM. All shop floor employees must attend." },
      { title: "Writing an SOP", emoji: "📋", dept: "Operations", deptClass: "dept-ops",
        text: "Create the first draft of an SOP for reporting machine breakdowns in a manufacturing plant." },
      { title: "Defect Observations to Root Cause Analysis Report", emoji: "🔍", dept: "Quality", deptClass: "dept-quality",
        text: "Convert these defect observations into a structured root cause analysis report with possible corrective actions." },
      { title: "Supplier Delay Communication", emoji: "🚚", dept: "SCM", deptClass: "dept-scm",
        text: "Write a professional email to a supplier regarding a delay in delivery of raw materials. Ask them to confirm the revised delivery date and explain the reason for the delay." },
      { title: "Creating a Troubleshooting Guide", emoji: "🔧", dept: "Maintenance", deptClass: "dept-maintenance",
        text: "Create a simple troubleshooting guide for operators if a machine stops during production." },
      { title: "Creating a Job Description", emoji: "👤", dept: "HR", deptClass: "dept-hr",
        text: "Create a clear job description for a Production Supervisor. Include responsibilities and skill requirements." },
      { title: "Drafting Staff Communication", emoji: "💬", dept: "HR", deptClass: "dept-hr",
        text: "Rewrite this message politely and professionally for staff.\nText: Many people coming late. Please be on time." },
      { title: "Vendor Communication Writing", emoji: "💰", dept: "Accounts", deptClass: "dept-accounts",
        text: "Write a polite message asking a vendor to submit the pending invoice for last month." },
      { title: "Writing a Troubleshooting Guide (IT)", emoji: "🖥️", dept: "IT", deptClass: "dept-it",
        text: "Create a simple troubleshooting guide for staff on how to raise an IT support ticket." },
      { title: "Drafting a Project Update Report", emoji: "📊", dept: "General", deptClass: "dept-general",
        text: "Create a short project update report for management summarising: Project status, Key progress made, Current challenges, Next steps." },
      { title: "Creating Marketing Content", emoji: "📱", dept: "Marketing", deptClass: "dept-marketing",
        text: "Write a short LinkedIn post highlighting the benefits of coil coating paints." }
    ]
  },
  {
    id: "summarize",
    title: "Summarizing, Research & Idea Generation",
    icon: "📚",
    cssClass: "sec-summarize",
    description: "Upload a PDF or paste text and ask",
    prompts: [
      { title: "Quick Summary in Bullet Points", emoji: "📌", dept: "General", deptClass: "dept-general",
        text: "Summarize this entire PDF in ten simple bullet points focusing on the most important insights.",
        note: "Useful for technical reports, industry articles, internal project reports, vendor proposals" },
      { title: "Summarising Billing or Financial Reports", emoji: "💵", dept: "Accounts", deptClass: "dept-accounts",
        text: "Summarise this monthly billing report in simple points and highlight key trends.\n[Paste table or text or excel or pdf]",
        note: "AI can identify revenue trends, cost changes, profitability patterns, unusual expenses" },
      { title: "Summarising an HR Policy", emoji: "📄", dept: "HR", deptClass: "dept-hr",
        text: "Summarise this attendance policy in simple language for staff.\n[Paste policy text or pdf]" },
      { title: "Summarising Issue Logs", emoji: "🎫", dept: "IT", deptClass: "dept-it",
        text: "Summarise these IT support issues from this week and list common problems.\n[Paste ticket list or notes or excel or pdf]" },
      { title: "Summarise Quality Inspection Report", emoji: "✅", dept: "Quality", deptClass: "dept-quality",
        text: "Summarise this quality inspection report and highlight the major issues affecting product performance." },
      { title: "Summarise Supplier Performance Report", emoji: "📦", dept: "SCM", deptClass: "dept-scm",
        text: "Summarise this supplier performance report and identify the most critical supply risks." },
      { title: "Summarise Industry Report", emoji: "🌍", dept: "Sales", deptClass: "dept-sales",
        text: "Summarise this industry report on the coil coating paint market and identify potential growth opportunities." }
    ]
  },
  {
    id: "ideas",
    title: "Compare Options & Generate Ideas",
    icon: "💡",
    cssClass: "sec-ideas",
    description: "Use AI to compare, brainstorm and improve",
    prompts: [
      { title: "Compare Options", emoji: "⚖️", dept: "Engineering", deptClass: "dept-engineering",
        text: "Compare these three suppliers and highlight advantages, disadvantages and key differences." },
      { title: "Generate Ideas for Customer Satisfaction", emoji: "🌟", dept: "Sales", deptClass: "dept-sales",
        text: "Give ten ideas to improve customer satisfaction in a manufacturing company.",
        note: "AI can also help generate ideas for improving delivery performance, product quality, customer communication" },
      { title: "Improve Operational Efficiency", emoji: "⚙️", dept: "Production", deptClass: "dept-production",
        text: "Suggest five ideas to reduce operational costs in a manufacturing plant.",
        note: "AI can generate ideas related to process improvements, waste reduction, productivity improvements, better resource utilization" },
      { title: "Competitor Research", emoji: "🔎", dept: "Sales", deptClass: "dept-sales",
        text: "Summarise the key products and strengths and market positioning of the following competitor.",
        note: "AI can quickly analyse competitor websites, product catalogues, industry reports" }
    ]
  },
  {
    id: "deep-research",
    title: "Deep Research Using AI",
    icon: "🔬",
    cssClass: "sec-research",
    description: "Go deeper with industry analysis and actionable insights",
    prompts: [
      { title: "Latest Industry Findings Summary", emoji: "📰", dept: "General", deptClass: "dept-general",
        text: "Summarise the most important findings from the latest studies or industry reports on <coil coating paints or advanced manufacturing>. Limit the answer to the top ten points." },
      { title: "Compare Studies: Agreements & Differences", emoji: "🔄", dept: "General", deptClass: "dept-general",
        text: "Compare the findings from the latest research or industry reports on <mention topic such as coil coating paints, manufacturing processes or automation>.\nShow where they agree, where they differ, and possible reasons for these differences." },
      { title: "Convert Research into Actionable Steps", emoji: "🎯", dept: "General", deptClass: "dept-general",
        text: "Convert the latest research on <mention topic such as defect reduction, material optimisation, or production efficiency> into practical steps that engineers and production teams can implement in manufacturing operations." }
    ]
  },
  {
    id: "presentations",
    title: "AI for Presentations",
    icon: "📽️",
    cssClass: "sec-presentations",
    description: "Create slide outlines, then use Gamma.app or Canva",
    prompts: [
      { title: "Workplace Safety Presentation", emoji: "🦺", dept: "General", deptClass: "dept-general",
        text: "Create a 6-slide presentation outline on improving workplace safety in a manufacturing environment. For each slide give a title, 3 bullet points.",
        note: "Copy output into Gamma.app or use Canva app inside chatgpt.com" },
      { title: "Turn Text into Slides", emoji: "📝", dept: "General", deptClass: "dept-general",
        text: "Convert this paragraph into 5 slide titles and 3 bullets each, suitable for a 10 minute presentation.\n[Paste your paragraph here]" },
      { title: "HR / Admin Presentation", emoji: "👥", dept: "HR", deptClass: "dept-hr",
        text: "Create a 5 slide presentation on the attendance and punctuality policy. Each slide should have a title and three bullets. Keep language simple." },
      { title: "Quality Presentation", emoji: "✅", dept: "Quality", deptClass: "dept-quality",
        text: "Create a 5-slide presentation on reducing product rejection rates in manufacturing." },
      { title: "Supply Chain Presentation", emoji: "📦", dept: "SCM", deptClass: "dept-scm",
        text: "Create a 5-slide presentation on improving supplier performance and reducing procurement risks." },
      { title: "Business Development Presentation", emoji: "📈", dept: "Sales", deptClass: "dept-sales",
        text: "Create a 6-slide presentation introducing coil coating paints for customers." },
      { title: "IT Support Process Presentation", emoji: "🖥️", dept: "IT", deptClass: "dept-it",
        text: "Create a 5 slide presentation explaining the IT support ticket process. Include steps, common issues and best practices." },
      { title: "Financial Performance Summary", emoji: "💰", dept: "Finance", deptClass: "dept-finance",
        text: "Create a 5 slide summary of monthly financial performance. Include revenue trends, delays and two improvement suggestions." },
      { title: "Coil Coating Awareness Presentation", emoji: "🎨", dept: "Marketing", deptClass: "dept-marketing",
        text: "Create a 6 slide awareness presentation on advantages of coil coating paints for industrial applications." }
    ]
  },
  {
    id: "video",
    title: "Making Videos & Images Using AI",
    icon: "🎬",
    cssClass: "sec-video",
    description: "Create training videos, demos and images",
    prompts: [
      { title: "Safety Training Video", emoji: "🎥", dept: "General", deptClass: "dept-general",
        text: "Create a safety training video for Berger Becker Coatings, Goa (visit https://www.beckers-group.com/ to understand what they do)",
        note: "Use with invideo.io, heygen.com, or picstory.ai" }
    ]
  },
  {
    id: "spreadsheets",
    title: "Creating Spreadsheets Using AI",
    icon: "📊",
    cssClass: "sec-spreadsheets",
    description: "Generate Excel structures, formulas, and dashboards",
    prompts: [
      { title: "Daily Production Tracking", emoji: "🏭", dept: "Production", deptClass: "dept-production",
        text: "Create an Excel spreadsheet for tracking daily production in a coil coating paint manufacturing plant.\nAdd formulas to calculate total daily production, rejection percentage, production efficiency." },
      { title: "Defect Tracking", emoji: "🔍", dept: "Quality", deptClass: "dept-quality",
        text: "Create an Excel sheet for tracking quality defects in coil coating paint manufacturing.\nAdd formulas to calculate total defects per batch and defect rate per product." },
      { title: "Project Design Tracker", emoji: "📐", dept: "Engineering", deptClass: "dept-engineering",
        text: "Create an Excel sheet for tracking engineering design projects.\nAdd conditional formatting to highlight delayed projects." },
      { title: "Machine Maintenance Schedule", emoji: "🔧", dept: "Maintenance", deptClass: "dept-maintenance",
        text: "Create an Excel sheet for tracking preventive maintenance of factory machines.\nAdd a formula to highlight machines whose maintenance is due within 10 days." },
      { title: "Supplier Comparison Sheet", emoji: "📋", dept: "SCM", deptClass: "dept-scm",
        text: "Create an Excel spreadsheet for comparing suppliers of raw materials.\nAdd formulas to calculate total cost and rank suppliers." },
      { title: "Order Pipeline Tracking", emoji: "📈", dept: "Sales", deptClass: "dept-sales",
        text: "Create an Excel sheet to track sales pipeline for industrial projects.\nAdd formulas to calculate expected revenue." },
      { title: "Project Profitability Sheet", emoji: "💵", dept: "Finance", deptClass: "dept-finance",
        text: "Create an Excel spreadsheet for analysing project profitability.\nAdd formulas to calculate total cost and profit margin %." },
      { title: "Skill Matrix for Manufacturing Staff", emoji: "👥", dept: "HR", deptClass: "dept-hr",
        text: "Create an Excel sheet for tracking employee skills in a manufacturing plant.\nAdd a summary showing number of employees trained per skill." }
    ]
  },
  {
    id: "iterative-spreadsheet",
    title: "Iterative Spreadsheet Creation",
    icon: "🔄",
    cssClass: "sec-spreadsheets",
    description: "Build a spreadsheet step by step with refining prompts",
    prompts: [
      { title: "Step 1 — Start Simple", emoji: "1️⃣", dept: "Production", deptClass: "dept-production",
        text: "Create an Excel sheet for tracking production in a manufacturing plant." },
      { title: "Step 3 — Refine It", emoji: "3️⃣", dept: "Production", deptClass: "dept-production",
        text: "Add operator name and calculate rejection percentage. Add conditional formatting to highlight efficiency below 0.9." },
      { title: "Step 4 — Add Charts", emoji: "4️⃣", dept: "Production", deptClass: "dept-production",
        text: "Add 2 charts management should use to review this data." },
      { title: "Step 5 — Improve Look", emoji: "5️⃣", dept: "Production", deptClass: "dept-production",
        text: "Make the excel look visually good." }
    ]
  },
  {
    id: "data-analysis",
    title: "AI for Data Analysis",
    icon: "📈",
    cssClass: "sec-data",
    description: "Analyse data, identify trends, and get actionable insights",
    prompts: [
      { title: "Analyse Operational Data & Identify Trends", emoji: "📊", dept: "General", deptClass: "dept-general",
        text: "Summarise the key trends from this operational data and suggest 3 actions management should take to improve performance." },
      { title: "Identify Patterns in Production Data", emoji: "🔎", dept: "Production", deptClass: "dept-production",
        text: "Identify any patterns in this monthly production data. Explain the trends in simple language." },
      { title: "Converting Numbers into Insights", emoji: "💡", dept: "Accounts", deptClass: "dept-accounts",
        text: "Explain these financial numbers in simple language and give three action points.\n[Paste table]" },
      { title: "Analyse Defect Data", emoji: "✅", dept: "Quality", deptClass: "dept-quality",
        text: "Analyse defect data and identify the most common causes of product rejection." },
      { title: "Analyse Supplier Delivery Data", emoji: "📦", dept: "SCM", deptClass: "dept-scm",
        text: "Analyse supplier delivery data and identify vendors causing production delays." },
      { title: "Julius.ai Dashboard", emoji: "🌟", dept: "General", deptClass: "dept-general",
        text: "Give insights and create a world class dashboard from this spreadsheet.",
        note: "Use with julius.ai — AI will auto-generate charts, trend analysis, key insights, and actionable recommendations" }
    ]
  }
];
