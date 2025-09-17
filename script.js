document.addEventListener("DOMContentLoaded", () => {
  // --- SCROLL-BASED ANIMATIONS ---
  const initScrollAnimations = () => {
    const scrollElements = document.querySelectorAll(".anim-on-scroll");
    if (!scrollElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    scrollElements.forEach((element) => {
      observer.observe(element);
    });
  };

  // --- HEADER SCROLL STATE ---
  const initHeaderScrollState = () => {
    const header = document.querySelector(".header");
    if (!header) return;
    const toggleHeaderScrolled = () => {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", toggleHeaderScrolled);
    toggleHeaderScrolled(); // Initial check
  };

  // --- PROJECT DATA & ACCORDION LOGIC ---
  const initWorkAccordion = () => {
    const accordionContainer = document.getElementById("work-accordion");
    if (!accordionContainer) return;

    // const projectDetails = {
    //   projects: [
    //     {
    //       id: "salesgpt",
    //       title: "Custom GPT for Sales Enablement",
    //       summary:
    //         "An AI knowledge base that accelerates sales data retrieval by 90% and boosts proposal output by 40%.",
    //       challenge:
    //         "The sales team was spending hours manually searching through unstructured PowerPoint case studies and website data to find relevant information for client proposals, significantly slowing down the sales cycle.",
    //       actions: [
    //         "Architected and developed a Custom GPT with a Python (Flask) backend to act as a centralized, intelligent knowledge base.",
    //         "Integrated a WordPress API to ingest website content and an AWS S3 connection to process a library of PowerPoint files, structuring all disorganized data.",
    //         "Engineered the system to understand natural language queries, allowing the sales team to ask complex questions and receive immediate, precise answers.",
    //         "Implemented a dynamic document generation feature that automatically personalizes master case studies with client-specific data, creating tailored proposals in seconds.",
    //       ],
    //       results: [
    //         "Accelerated the retrieval of client-specific data by 90%, reducing sales research time from hours to minutes.",
    //         "Optimized the proposal creation process, enabling the sales team to increase qualified proposal output by 40% per quarter.",
    //         "Eliminated information silos, ensuring 100% of the sales team had instant access to the most up-to-date and relevant data.",
    //       ],
    //       tags: [
    //         "Custom GPT",
    //         "Advanced Prompt Engineering",
    //         "Python (Flask)",
    //         "AWS S3",
    //         "API Integration",
    //         "Data Structuring",
    //         "Process Automation",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "meeting-assistant",
    //       title: "AI-Powered Meeting Assistant",
    //       summary:
    //         "A conversational AI that transcribes meetings and assigns action items, improving on-time completion by 60%.",
    //       challenge:
    //         "Post-meeting administrative work, including transcribing notes and assigning action items, was a manual and time-consuming process, leading to missed deliverables and a lack of accountability.",
    //       actions: [
    //         "Deployed a conversational AI assistant designed to join virtual meetings, listen, and transcribe the discussion in real-time.",
    //         "Engineered the AI to analyze the complete meeting transcript to automatically identify, summarize, and assign action items to the correct individuals.",
    //         "Integrated the system with the company's email service to distribute automated meeting summaries and action item reminders, creating a closed-loop accountability system.",
    //       ],
    //       results: [
    //         "Optimized team focus by eliminating 100% of manual meeting transcription and summarization tasks.",
    //         "Increased project velocity and accountability, leading to a 60% improvement in on-time completion of assigned action items.",
    //         "Reallocated an average of 3 hours per manager per week from administrative follow-up to high-value strategic work.",
    //       ],
    //       tags: [
    //         "Conversational AI",
    //         "Natural Language Processing (NLP)",
    //         "Task Automation",
    //         "API Integration",
    //         "Project Management Software",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "ad-generator",
    //       title: "Multi-Platform AI Ad Copy & Image Prompt Generation System",
    //       summary:
    //         "An AI system that cuts ad campaign creation time by 98% and increases A/B testing capacity by 500%.",
    //       challenge:
    //         "The marketing team needed to rapidly create and test high volumes of tailored ad campaigns, but writing unique copy and sourcing cohesive imagery for each platform (Google, Facebook, TikTok) was a slow, inconsistent, and unscalable process.",
    //       actions: [
    //         "Developed a modular system of 11 distinct prompt templates, each engineered for a specific advertising platform's character limits and best practices.",
    //         "Architected the system to take a single set of inputs and simultaneously generate platform-compliant ad text and a perfectly aligned, descriptive visual prompt for text-to-image AI.",
    //         "Implemented a sophisticated system of positive guidance and strong negative constraints to ensure the final image prompt was clean, purely visual, and ready for direct use in an image generator.",
    //       ],
    //       results: [
    //         "Optimized the creative workflow, reducing the average ad campaign creation time by 98% (from 3 hours to under 5 minutes).",
    //         "Increased A/B testing capacity by 500%, enabling the team to test more variations and improve ad spend effectiveness.",
    //         "Eliminated 100% of ad rejections caused by character limit or formatting violations through built-in compliance.",
    //       ],
    //       tags: [
    //         "Advanced Prompt Engineering",
    //         "Generative AI",
    //         "Structured Data Output",
    //         "Digital Marketing",
    //         "A/B Testing",
    //         "Cross-Platform API Simulation",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "seo-generator",
    //       title: "SEO Content & Image Prompt Generator",
    //       summary:
    //         "A custom GPT that accelerates end-to-end content creation by 400% while ensuring 100% SEO compliance.",
    //       challenge:
    //         "The marketing team struggled to scale content creation while maintaining high SEO standards and creating visually aligned header images, a slow and disjointed process that hindered growth.",
    //       actions: [
    //         "Built a custom GPT solution to generate complete, high-quality blog posts from a simple topic prompt.",
    //         "Engineered the prompt to produce content in clean HTML, automatically including on-page SEO best practices like metadata, titles, and keyword integration.",
    //         "Integrated a feature to simultaneously generate a detailed, descriptive text-to-image prompt for a header image, ensuring visual and textual content were thematically aligned.",
    //       ],
    //       results: [
    //         "Accelerated the end-to-end content creation process by 400%, moving from initial draft to ready-to-publish HTML in minutes.",
    //         "Ensured 100% of generated articles met on-page SEO technical standards, eliminating the need for manual review cycles.",
    //         "Improved content-to-image alignment, contributing to a 15% increase in average user engagement on new blog posts.",
    //       ],
    //       tags: [
    //         "Custom GPT",
    //         "Advanced Prompt Engineering",
    //         "SEO Best Practices",
    //         "HTML",
    //         "Content Automation",
    //         "Generative AI",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "hr-automation",
    //       title: "HR Document Automation System",
    //       summary:
    //         "An AI solution that reduces HR document generation time by 95% and eliminates 100% of data entry errors.",
    //       challenge:
    //         "The HR department was spending excessive time on repetitive document creation like offer letters and policy updates, leading to delays in onboarding and a high potential for human error.",
    //       actions: [
    //         "Architected a solution using a Custom GPT frontend connected to a custom backend for secure data processing and document management.",
    //         "Developed dynamic templates for various HR documents that the GPT could instantly and accurately populate with specific employee data.",
    //         "Created a simple interface for HR staff to input key variables and generate fully formatted, error-free documents in seconds.",
    //       ],
    //       results: [
    //         "Reduced the time spent on routine document generation by 95%.",
    //         "Eliminated 100% of data entry errors in templated documents by automating the data population process.",
    //         "Optimized HR operations, reallocating an estimated 20 hours per month from mundane tasks to strategic initiatives like employee development.",
    //       ],
    //       tags: [
    //         "Custom GPT",
    //         "Process Automation",
    //         "Python",
    //         "Backend Development",
    //         "Document Generation",
    //         "Information Security",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "community-support-gpt",
    //       title: "Community Support GPT for Arbaeen Pilgrimage",
    //       summary:
    //         "A large-scale AI that serviced over 2 million multilingual user queries with a 90% success rate during a 20-day event.",
    //       challenge:
    //         "During the Arbaeen pilgrimage, millions of attendees required immediate help with navigation and logistics, overwhelming the capacity of human support teams and creating information bottlenecks.",
    //       actions: [
    //         "Developed and deployed a large-scale, public-facing Community Helper GPT specifically trained on pilgrimage-related logistical data, maps, and FAQs.",
    //         "Engineered the AI to handle a massive volume of concurrent user queries in multiple languages, providing instant and accurate answers 24/7.",
    //         "Integrated the GPT into popular and accessible communication channels (WhatsApp and Telegram) to ensure ease of use for a diverse, global audience.",
    //       ],
    //       results: [
    //         "Successfully serviced over 2 million user queries during the 20-day pilgrimage period.",
    //         "Achieved a 90% success rate in resolving user questions without needing to escalate to a human volunteer.",
    //         "Optimized the allocation of human support staff, freeing them to focus on high-priority and emergency situations.",
    //       ],
    //       tags: [
    //         "Large-Scale AI Deployment",
    //         "Custom GPT",
    //         "Multilingual NLP",
    //         "High-Concurrency Systems",
    //         "Public Sector Technology",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "translation-gpt",
    //       title: "Nuanced Translation GPT for Product Localization",
    //       summary:
    //         "A fine-tuned AI translation model that reduced support tickets by 40% and improved user satisfaction by 25% in new markets.",
    //       challenge:
    //         "As the company's product expanded globally, standard machine translation tools failed to capture cultural context and industry-specific terms, resulting in a poor user experience and high support costs.",
    //       actions: [
    //         "Developed a specialized translation GPT fine-tuned on a custom dataset of idiomatic expressions and industry-specific terminology.",
    //         "Engineered the AI to not only translate text but also to provide brief explanations for culturally specific phrases, enhancing user comprehension and trust.",
    //         "Integrated the translation model directly into the product's UI for seamless, real-time language support.",
    //       ],
    //       results: [
    //         "Reduced translation-related user support tickets by 40% within three months of launch.",
    //         "Improved user satisfaction scores in new international markets by 25%.",
    //         "Accelerated the company's ability to enter new global markets by providing a scalable, high-quality localization solution.",
    //       ],
    //       tags: [
    //         "Custom GPT",
    //         "AI Model Fine-Tuning",
    //         "Natural Language Processing (NLP)",
    //         "Localization",
    //         "API Integration",
    //         "User Experience (UX)",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "social-media-creator",
    //       title: "Automated Social Media Content Creator",
    //       summary:
    //         "An AI system that reduced weekly content creation time from 8 hours to 30 minutes and increased audience engagement by 20%.",
    //       challenge:
    //         "Maintaining a consistent, on-brand presence across multiple social media platforms was a time-intensive manual process, resulting in an inconsistent posting schedule and missed engagement opportunities.",
    //       actions: [
    //         "Built a custom GPT that connected directly to the company's internal knowledge base, marketing assets, and brand style guides.",
    //         "Engineered the system to generate a full batch of platform-specific posts (e.g., for LinkedIn, X/Twitter, Instagram) from a single core idea or announcement.",
    //         "Tailored the AI's output to automatically match the distinct tone, format, and character limits required by each unique social media profile, complete with relevant hashtags.",
    //       ],
    //       results: [
    //         "Optimized the content workflow, reducing the time to create a week's worth of social media content from 8 hours to just 30 minutes.",
    //         "Increased posting consistency by 300%, which contributed to a 20% growth in overall audience engagement.",
    //         "Ensured 100% brand style and voice consistency across all social media channels, strengthening the company's market presence.",
    //       ],
    //       tags: [
    //         "Custom GPT",
    //         "Content Automation",
    //         "Social Media Marketing",
    //         "Brand Management",
    //         "API Integration",
    //         "Prompt Engineering",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "synapse-spark",
    //       title: "Synapse Spark: An AI Brainstorming Assistant",
    //       summary:
    //         "A proof-of-concept AI tool that accelerates the concept-to-roadmap journey by 70% through structured brainstorming workflows.",
    //       challenge:
    //         "As a personal project, I aimed to solve a common problem: traditional brainstorming sessions often lack structure, leading to disorganized ideas and a failure to convert valuable insights into actionable steps.",
    //       actions: [
    //         "Designed and built 'Synapse Spark,' a proof-of-concept AI assistant engineered to facilitate structured, productive thinking.",
    //         "Developed guided workflows within the AI to help users systematically generate, categorize, and prioritize ideas for any given challenge.",
    //         "Implemented features to help individuals and teams move from abstract goals to clear, actionable outputs, effectively bridging the gap between ideation and execution.",
    //       ],
    //       results: [
    //         "Tested the tool on three separate startup ideation sprints, accelerating the journey from initial concept to a prioritized feature list by an average of 70%.",
    //         "Designed to improve the clarity of project roadmaps by turning abstract goals into structured action plans.",
    //         "Received positive feedback from a small user testing group, with 85% reporting it helped them overcome creative blocks and better structure their thoughts.",
    //       ],
    //       tags: [
    //         "AI Product Design",
    //         "Custom GPT",
    //         "User Experience (UX)",
    //         "Structured Thinking Methodologies",
    //         "Rapid Prototyping",
    //         "Project Management",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "devops-turnaround",
    //       title: "DevOps Financial Turnaround & Process Overhaul",
    //       summary:
    //         "Transformed a DevOps function from a $3,757 monthly loss to a $2,126 monthly profit through automation and financial audits.",
    //       challenge:
    //         "I was tasked with managing a DevOps function that was operating at a significant financial loss due to chaotic infrastructure, unbilled services, and rampant inefficiencies.",
    //       actions: [
    //         "Automated comprehensive infrastructure audits using custom Python and Bash scripts to identify idle resources and unbilled services.",
    //         "Decommissioned over 40 inactive websites and numerous unused servers, immediately eliminating financial waste and reducing the infrastructure footprint.",
    //         "Conducted a multi-year forensic audit of client invoices against service usage logs, identifying and calculating significant unbilled revenue.",
    //         "Corrected all client invoices to reflect accurate monthly recurring revenue, establishing a stable and predictable income stream for the department.",
    //       ],
    //       results: [
    //         "Transformed the department from a monthly loss of $3,757 to a sustained monthly net profit of $2,126.",
    //         "Recovered $28,456 CAD in previously lost revenue through meticulous, data-driven financial audits.",
    //         "Reduced monthly infrastructure and operational costs by 46%.",
    //         "Increased monthly recurring revenue by 199% through billing corrections and optimization.",
    //       ],
    //       tags: [
    //         "Cloud Financial Management (FinOps)",
    //         "Automation Scripting (Python, Bash)",
    //         "Business Analysis",
    //         "Cost Optimization",
    //         "AWS",
    //         "DigitalOcean",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "security-response",
    //       title: "Security Incident Response & Proactive Hardening",
    //       summary:
    //         "Led an incident response that restored 95% of business leads within two weeks and improved the company's security score from 38% to 85%.",
    //       challenge:
    //         "The company was under an active insider threat that had compromised user accounts and caused a critical 70% drop in business leads. My role was to lead the forensic investigation, neutralize the threat, and architect a resilient security posture.",
    //       actions: [
    //         "Led a forensic investigation by correlating logs from Cloudflare, Kinsta, and Azure AD to rapidly identify the attacker's methods and points of entry.",
    //         "Contained the threat within hours by resetting compromised credentials and deploying intelligent Cloudflare WAF rules to block the attacker's access vectors.",
    //         "Conducted a full security audit of Microsoft 365 and Atlassian, discovering and revoking excessive administrator privileges to reduce the company's attack surface.",
    //         "Designed and implemented a new security framework based on the Principle of Least Privilege and and mandatory 2FA.",
    //       ],
    //       results: [
    //         "Restored business operations, leading to a 95% recovery of the lead generation pipeline within two weeks of containing the threat.",
    //         "Improved the company's Microsoft Secure Score from a critical 38% to a healthy 85% through proactive policy implementation.",
    //         "Eliminated critical vulnerabilities by removing shared admin accounts and enforcing modern security protocols.",
    //       ],
    //       tags: [
    //         "Cybersecurity",
    //         "Incident Response",
    //         "Forensic Analysis",
    //         "Security Architecture",
    //         "Cloudflare (WAF)",
    //         "Microsoft 365 Security",
    //         "ISO 27001",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "android-spiritual-app",
    //       title: "Android Application for Spiritual Education",
    //       summary:
    //         "An ad-free, offline-first native Android app with over 2,480 installs and an exceptional 4.68-star rating on Google Play.",
    //       challenge:
    //         "Many digital spiritual resources are cluttered with intrusive ads or require a constant internet connection, creating a distracting and inaccessible user experience. I identified an opportunity to develop a high-quality, focused educational tool.",
    //       actions: [
    //         "Designed, developed, and launched a native Android application from concept to publication on the Google Play Store.",
    //         "Engineered the app to be 100% ad-free and fully functional offline, ensuring an uninterrupted and universally accessible user experience.",
    //         "Implemented a clean, minimalistic user interface (UI) to provide a serene and intuitive learning environment.",
    //         "Integrated multilingual support (English and Gujarati) to cater to a broader, global user base.",
    //         "Developed key engagement features including an interactive quiz, daily reminders, and a 'Favorites' mode to encourage active learning and user retention.",
    //       ],
    //       results: [
    //         "Achieved over 2,480 total installs since launching on August 5, 2025.",
    //         "Earned an exceptional 4.68-star average rating on Google Play, with a consistent 5.0-star daily average rating.",
    //         "Cultivated an engaged community with 359 monthly active users and an 11.8% returning user conversion rate.",
    //         "Delivered a highly stable application with a near-zero crash rate.",
    //       ],
    //       tags: [
    //         "Native Android Development (Kotlin/Java)",
    //         "Android Studio",
    //         "UI/UX Design",
    //         "SQLite Database",
    //         "Google Play Console",
    //         "Product Launch",
    //       ],
    //       link: "https://play.google.com/store/apps/details?id=com.fatimiyahtech.alasmaulhusna",
    //     },
    //   ],
    // };
    // const projectDetails = {
    //   projects: [
    //     {
    //       id: "salesgpt",
    //       title: "Custom GPT for Sales Enablement",
    //       summary:
    //         "An AI knowledge base that accelerated sales data retrieval by 90 percent and boosted proposal output by 40 percent.",
    //       challenge:
    //         "The sales team spent hours searching through unstructured PowerPoint case studies and website data, slowing the sales cycle.",
    //       actions: [
    //         "Built a Custom GPT with a Python Flask backend as a centralized knowledge base.",
    //         "Integrated a WordPress API and AWS S3 to ingest and structure website content and PowerPoint files.",
    //         "Engineered natural language query handling to deliver precise answers instantly.",
    //         "Added automated document personalization to generate tailored proposals in seconds.",
    //       ],
    //       results: [
    //         "Reduced sales research time by 90 percent.",
    //         "Increased qualified proposal output by 40 percent per quarter.",
    //         "Eliminated silos and ensured instant access to current data for the entire sales team.",
    //       ],
    //       tags: [
    //         "Prompt Engineering",
    //         "Custom GPT",
    //         "Python Flask",
    //         "AWS S3",
    //         "API Integration",
    //         "Knowledge Retrieval",
    //         "Process Automation",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "meeting-assistant",
    //       title: "AI-Powered Meeting Assistant",
    //       summary:
    //         "A conversational AI that transcribed meetings and assigned action items, improving on-time completion by 60 percent.",
    //       challenge:
    //         "Manual transcription and follow-ups consumed valuable hours and led to missed deliverables.",
    //       actions: [
    //         "Deployed a virtual meeting assistant to transcribe conversations in real time.",
    //         "Engineered automatic detection and assignment of action items from transcripts.",
    //         "Integrated with email to distribute summaries and reminders automatically.",
    //       ],
    //       results: [
    //         "Eliminated manual meeting transcription and summarization.",
    //         "Improved on-time task completion by 60 percent.",
    //         "Freed up 3 hours per manager each week for higher-value work.",
    //       ],
    //       tags: [
    //         "Conversational AI",
    //         "NLP",
    //         "Task Automation",
    //         "API Integration",
    //         "Productivity Tools",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "ad-generator",
    //       title: "Multi-Platform AI Ad Generation",
    //       summary:
    //         "An AI system that cut ad campaign creation time by 98 percent and expanded A/B testing capacity by 500 percent.",
    //       challenge:
    //         "Marketing needed to create large volumes of tailored ads quickly, but manual workflows were slow and inconsistent.",
    //       actions: [
    //         "Created 11 modular prompt templates optimized for platform rules and best practices.",
    //         "Engineered simultaneous ad copy and descriptive image prompt generation from one input.",
    //         "Applied guidance and constraints to ensure compliance and clean outputs.",
    //       ],
    //       results: [
    //         "Reduced campaign creation from 3 hours to under 5 minutes.",
    //         "Enabled 500 percent more A/B testing capacity.",
    //         "Achieved zero ad rejections due to format or character issues.",
    //       ],
    //       tags: [
    //         "Prompt Engineering",
    //         "Generative AI",
    //         "AdTech",
    //         "Structured Outputs",
    //         "A/B Testing",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "seo-generator",
    //       title: "SEO Content and Image Generator",
    //       summary:
    //         "A custom GPT that accelerated content creation by 400 percent and ensured SEO compliance.",
    //       challenge:
    //         "Content production was slow and lacked SEO consistency with mismatched imagery.",
    //       actions: [
    //         "Built a GPT to generate blog posts in HTML with SEO best practices baked in.",
    //         "Added metadata, keyword placement, and compliant titles automatically.",
    //         "Generated descriptive prompts for matching header images.",
    //       ],
    //       results: [
    //         "Accelerated draft-to-publish workflow by 400 percent.",
    //         "Ensured 100 percent SEO compliance without manual review.",
    //         "Boosted user engagement by 15 percent through better content-image alignment.",
    //       ],
    //       tags: [
    //         "Prompt Engineering",
    //         "Custom GPT",
    //         "SEO Automation",
    //         "Content Workflows",
    //         "Generative AI",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "hr-automation",
    //       title: "HR Document Automation System",
    //       summary:
    //         "An AI tool that reduced HR document generation time by 95 percent and eliminated errors.",
    //       challenge:
    //         "Repetitive HR document creation caused onboarding delays and high error rates.",
    //       actions: [
    //         "Developed a Custom GPT frontend with a secure backend for document processing.",
    //         "Created dynamic templates for instant and accurate population with employee data.",
    //         "Built an interface for staff to generate formatted, error-free documents quickly.",
    //       ],
    //       results: [
    //         "Cut routine document generation by 95 percent.",
    //         "Eliminated 100 percent of data entry errors in templated docs.",
    //         "Freed up 20 hours per month for strategic HR initiatives.",
    //       ],
    //       tags: [
    //         "Custom GPT",
    //         "Process Automation",
    //         "Python",
    //         "Document Management",
    //         "Information Security",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "arbaeen-gpt",
    //       title: "Arbaeen Pilgrimage Guide GPT",
    //       summary:
    //         "A multilingual AI guide that helped new pilgrims prepare, pack, and find services during the Arbaeen walk.",
    //       challenge:
    //         "First-time visitors to the Arbaeen pilgrimage often struggled with preparation, packing essentials, and locating services or mawkibs along the route.",
    //       actions: [
    //         "Designed a GPT persona as a compassionate and knowledgeable Arbaeen guide, fluent in multiple languages.",
    //         "Implemented an initial greeting protocol to create a respectful and welcoming user experience.",
    //         "Configured the system to provide simple, clear, and actionable answers for packing, health, and service-related questions.",
    //         "Built query routing to direct spiritual, health, and logistical questions to the right knowledge sources.",
    //         "Integrated proactive follow-up prompts to anticipate and address related pilgrim needs.",
    //       ],
    //       results: [
    //         "Helped first-time pilgrims prepare effectively with tailored packing and health guidance.",
    //         "Enabled quick discovery of nearby mawkibs and essential services along the route.",
    //         "Provided an accessible, always-available assistant that reduced reliance on human volunteers for basic information.",
    //       ],
    //       tags: [
    //         "Prompt Engineering",
    //         "Custom GPT",
    //         "Multilingual NLP",
    //         "Spiritual Guidance",
    //         "Pilgrimage Assistance",
    //       ],
    //       link: "https://chatgpt.com/g/g-687bc7d45f10819191df8af2c8ac1204-arbaeen-helper-2025",
    //     },
    //     {
    //       id: "translation-gpt",
    //       title: "Nuanced Translation GPT for Shia Islamic Texts",
    //       summary:
    //         "An AI assistant for translating Shia Islamic books, articles, and texts with theological accuracy and cultural reverence.",
    //       challenge:
    //         "Generic translation tools introduced errors in terminology and tone, which risked misrepresenting Shia doctrine and losing scholarly precision.",
    //       actions: [
    //         "Developed a GPT persona specialized in Twelver Shia Islamic texts, trained to preserve scholarly accuracy and reverence.",
    //         "Implemented a mandatory tool-first workflow with text extraction (OCR and parsing) to ensure reliable source input before translation.",
    //         "Embedded strict terminology, honorifics, and formatting rules based on a custom glossary and theological reference guide.",
    //         "Configured the system to translate line by line in Markdown format, maintaining fidelity and flow of the original texts.",
    //       ],
    //       results: [
    //         "Delivered translations that preserved theological accuracy across Gujarati, Urdu, Arabic, and Persian texts.",
    //         "Ensured cultural reverence by maintaining precise terminology and honorifics.",
    //         "Provided a reliable, scalable solution for translating scholarly and religious materials.",
    //       ],
    //       tags: [
    //         "Prompt Engineering",
    //         "Custom GPT",
    //         "Translation",
    //         "NLP",
    //         "Cultural Sensitivity",
    //         "AI Model Fine-Tuning",
    //       ],
    //       link: "https://chatgpt.com/g/g-688eca40aab0819180952df2b2cc3e34-fatimiyah-tech-translation-gpt",
    //     },
    //     {
    //       id: "social-media-creator",
    //       title: "Automated Social Media Content Creator",
    //       summary:
    //         "An AI tool that reduced content creation time from 8 hours to 30 minutes and boosted engagement by 20 percent.",
    //       challenge:
    //         "Maintaining a consistent multi-platform social presence was time-consuming and inconsistent.",
    //       actions: [
    //         "Built a GPT integrated with brand style guides and marketing assets.",
    //         "Engineered generation of LinkedIn, Twitter, and Instagram posts from a single idea.",
    //         "Tailored outputs for tone, format, and character limits per platform.",
    //       ],
    //       results: [
    //         "Cut content creation time by 94 percent.",
    //         "Increased posting consistency by 300 percent.",
    //         "Boosted engagement by 20 percent while ensuring brand voice.",
    //       ],
    //       tags: [
    //         "Custom GPT",
    //         "Content Automation",
    //         "Social Media Marketing",
    //         "Brand Management",
    //         "Prompt Engineering",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "synapse-spark",
    //       title: "Synapse Spark: AI Brainstorming Assistant",
    //       summary:
    //         "A proof-of-concept tool that accelerated ideation-to-roadmap by 70 percent with structured workflows.",
    //       challenge:
    //         "Brainstorming sessions often lacked structure and failed to convert insights into actions.",
    //       actions: [
    //         "Designed and built Synapse Spark as a structured brainstorming assistant.",
    //         "Created guided workflows to generate, categorize, and prioritize ideas.",
    //         "Enabled transition from abstract goals to actionable plans.",
    //       ],
    //       results: [
    //         "Accelerated ideation sprints by 70 percent.",
    //         "Improved clarity of project roadmaps through structured outputs.",
    //         "Helped 85 percent of test users overcome creative blocks.",
    //       ],
    //       tags: [
    //         "AI Product Design",
    //         "Custom GPT",
    //         "User Experience",
    //         "Rapid Prototyping",
    //       ],
    //       link: "https://chatgpt.com/g/g-67d2e69939008191a4caefba8feac51a-synapse-spark",
    //     },
    //     {
    //       id: "devops-turnaround",
    //       title: "DevOps Financial Turnaround",
    //       summary:
    //         "Transformed a DevOps unit from a $3,757 monthly loss to a $2,126 monthly profit.",
    //       challenge:
    //         "The DevOps function was operating at a loss due to inefficiencies and unbilled services.",
    //       actions: [
    //         "Automated audits with Python and Bash scripts to uncover idle resources.",
    //         "Decommissioned unused websites and servers to reduce waste.",
    //         "Performed forensic invoice audits to recover unbilled revenue.",
    //       ],
    //       results: [
    //         "Converted a $3,757 monthly loss into a $2,126 profit.",
    //         "Recovered $28,456 CAD in lost revenue.",
    //         "Reduced infrastructure costs by 46 percent and increased recurring revenue by 199 percent.",
    //       ],
    //       tags: [
    //         "FinOps",
    //         "Automation Scripting",
    //         "Business Analysis",
    //         "AWS",
    //         "Cost Optimization",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "security-response",
    //       title: "Security Incident Response and Hardening",
    //       summary:
    //         "Restored 95 percent of business leads and improved security scores from 38 percent to 85 percent after a major breach.",
    //       challenge:
    //         "An insider threat compromised accounts and caused a 70 percent drop in business leads.",
    //       actions: [
    //         "Led forensic investigation using Cloudflare, Kinsta, and Azure AD logs.",
    //         "Contained the attack by resetting accounts and deploying WAF rules.",
    //         "Audited admin privileges and enforced 2FA with a new security framework.",
    //       ],
    //       results: [
    //         "Recovered 95 percent of leads within two weeks.",
    //         "Raised Microsoft Secure Score from 38 percent to 85 percent.",
    //         "Eliminated vulnerabilities by enforcing least privilege and 2FA.",
    //       ],
    //       tags: [
    //         "Cybersecurity",
    //         "Incident Response",
    //         "Forensic Analysis",
    //         "Cloudflare",
    //         "Microsoft 365 Security",
    //       ],
    //       link: "#",
    //     },
    //     {
    //       id: "android-spiritual-app",
    //       title: "Android Application for Spiritual Education",
    //       summary:
    //         "A native Android app with 2,480 installs and a 4.68-star rating on Google Play.",
    //       challenge:
    //         "Spiritual apps were cluttered with ads and lacked offline functionality, limiting accessibility.",
    //       actions: [
    //         "Designed, developed, and launched a native Android app from concept to store release.",
    //         "Ensured offline-first functionality and ad-free user experience.",
    //         "Added multilingual support, quizzes, reminders, and favorites for engagement.",
    //       ],
    //       results: [
    //         "Reached 2,480 installs and a 4.68-star average rating.",
    //         "Maintained a strong returning user base and near-zero crash rate.",
    //         "Built a stable and serene learning experience for a global audience.",
    //       ],
    //       tags: [
    //         "Android Development",
    //         "Kotlin",
    //         "Java",
    //         "UI/UX Design",
    //         "SQLite",
    //         "Google Play",
    //       ],
    //       link: "https://play.google.com/store/apps/details?id=com.fatimiyahtech.alasmaulhusna",
    //     },
    //   ],
    // };

    const projectDetails = {
      projects: [
        {
          id: "salesgpt",
          title: "Custom GPT for Sales Enablement",
          summary:
            "An AI knowledge base that accelerated sales data retrieval by 90 percent and boosted proposal output by 40 percent.",
          challenge:
            "The sales team spent hours searching through unstructured PowerPoint case studies and website data, slowing the sales cycle.",
          actions: [
            "Built a Custom GPT with a Python Flask backend as a centralized knowledge base.",
            "Integrated a WordPress API and AWS S3 to ingest and structure website content and PowerPoint files.",
            "Engineered natural language query handling to deliver precise answers instantly.",
            "Added automated document personalization to generate tailored proposals in seconds.",
          ],
          results: [
            "Reduced sales research time by 90 percent.",
            "Increased qualified proposal output by 40 percent per quarter.",
            "Eliminated silos and ensured instant access to current data for the entire sales team.",
          ],
          tags: [
            "Prompt Engineering",
            "Custom GPT",
            "Python Flask",
            "AWS S3",
            "API Integration",
            "Knowledge Retrieval",
            "Process Automation",
          ],
          link: "#",
        },
        {
          id: "ad-generator",
          title: "Multi-Platform AI Ad Generation",
          summary:
            "An AI system that cut ad campaign creation time by 98 percent and expanded A/B testing capacity by 500 percent.",
          challenge:
            "Marketing needed to create large volumes of tailored ads quickly, but manual workflows were slow and inconsistent.",
          actions: [
            "Created 11 modular prompt templates optimized for platform rules and best practices.",
            "Engineered simultaneous ad copy and descriptive image prompt generation from one input.",
            "Applied guidance and constraints to ensure compliance and clean outputs.",
          ],
          results: [
            "Reduced campaign creation from 3 hours to under 5 minutes.",
            "Enabled 500 percent more A/B testing capacity.",
            "Achieved zero ad rejections due to format or character issues.",
          ],
          tags: [
            "Prompt Engineering",
            "Generative AI",
            "AdTech",
            "Structured Outputs",
            "A/B Testing",
          ],
          link: "#",
        },
        {
          id: "seo-generator",
          title: "SEO Content and Image Generator",
          summary:
            "A custom GPT that accelerated content creation by 400 percent and ensured SEO compliance.",
          challenge:
            "Content production was slow and lacked SEO consistency with mismatched imagery.",
          actions: [
            "Built a GPT to generate blog posts in HTML with SEO best practices baked in.",
            "Added metadata, keyword placement, and compliant titles automatically.",
            "Generated descriptive prompts for matching header images.",
          ],
          results: [
            "Accelerated draft-to-publish workflow by 400 percent.",
            "Ensured 100 percent SEO compliance without manual review.",
            "Boosted user engagement by 15 percent through better content-image alignment.",
          ],
          tags: [
            "Prompt Engineering",
            "Custom GPT",
            "SEO Automation",
            "Content Workflows",
            "Generative AI",
          ],
          link: "#",
        },
        {
          id: "meeting-assistant",
          title: "AI-Powered Meeting Assistant",
          summary:
            "A conversational AI that transcribed meetings and assigned action items, improving on-time completion by 60 percent.",
          challenge:
            "Manual transcription and follow-ups consumed valuable hours and led to missed deliverables.",
          actions: [
            "Deployed a virtual meeting assistant to transcribe conversations in real time.",
            "Engineered automatic detection and assignment of action items from transcripts.",
            "Integrated with email to distribute summaries and reminders automatically.",
          ],
          results: [
            "Eliminated manual meeting transcription and summarization.",
            "Improved on-time task completion by 60 percent.",
            "Freed up 3 hours per manager each week for higher-value work.",
          ],
          tags: [
            "Conversational AI",
            "NLP",
            "Task Automation",
            "API Integration",
            "Productivity Tools",
          ],
          link: "#",
        },
        {
          id: "hr-automation",
          title: "HR Document Automation System",
          summary:
            "An AI tool that reduced HR document generation time by 95 percent and eliminated errors.",
          challenge:
            "Repetitive HR document creation caused onboarding delays and high error rates.",
          actions: [
            "Developed a Custom GPT frontend with a secure backend for document processing.",
            "Created dynamic templates for instant and accurate population with employee data.",
            "Built an interface for staff to generate formatted, error-free documents quickly.",
          ],
          results: [
            "Cut routine document generation by 95 percent.",
            "Eliminated 100 percent of data entry errors in templated docs.",
            "Freed up 20 hours per month for strategic HR initiatives.",
          ],
          tags: [
            "Custom GPT",
            "Process Automation",
            "Python",
            "Document Management",
            "Information Security",
          ],
          link: "#",
        },
        {
          id: "translation-gpt",
          title: "Nuanced Translation GPT for Shia Islamic Texts",
          summary:
            "An AI assistant for translating Shia Islamic books, articles, and texts with theological accuracy and cultural reverence.",
          challenge:
            "Generic translation tools introduced errors in terminology and tone, which risked misrepresenting Shia doctrine and losing scholarly precision.",
          actions: [
            "Developed a GPT persona specialized in Twelver Shia Islamic texts, trained to preserve scholarly accuracy and reverence.",
            "Implemented a mandatory tool-first workflow with text extraction (OCR and parsing) to ensure reliable source input before translation.",
            "Embedded strict terminology, honorifics, and formatting rules based on a custom glossary and theological reference guide.",
            "Configured the system to translate line by line in Markdown format, maintaining fidelity and flow of the original texts.",
          ],
          results: [
            "Delivered translations that preserved theological accuracy across Gujarati, Urdu, Arabic, and Persian texts.",
            "Ensured cultural reverence by maintaining precise terminology and honorifics.",
            "Provided a reliable, scalable solution for translating scholarly and religious materials.",
          ],
          tags: [
            "Prompt Engineering",
            "Custom GPT",
            "Translation",
            "NLP",
            "Cultural Sensitivity",
            "AI Model Fine-Tuning",
          ],
          link: "https://chatgpt.com/g/g-688eca40aab0819180952df2b2cc3e34-fatimiyah-tech-translation-gpt",
        },
        {
          id: "arbaeen-gpt",
          title: "Arbaeen Pilgrimage Guide GPT",
          summary:
            "A multilingual AI guide that helped new pilgrims prepare, pack, and find services during the Arbaeen walk.",
          challenge:
            "First-time visitors to the Arbaeen pilgrimage often struggled with preparation, packing essentials, and locating services or mawkibs along the route.",
          actions: [
            "Designed a GPT persona as a compassionate and knowledgeable Arbaeen guide, fluent in multiple languages.",
            "Implemented an initial greeting protocol to create a respectful and welcoming user experience.",
            "Configured the system to provide simple, clear, and actionable answers for packing, health, and service-related questions.",
            "Built query routing to direct spiritual, health, and logistical questions to the right knowledge sources.",
            "Integrated proactive follow-up prompts to anticipate and address related pilgrim needs.",
          ],
          results: [
            "Helped first-time pilgrims prepare effectively with tailored packing and health guidance.",
            "Enabled quick discovery of nearby mawkibs and essential services along the route.",
            "Provided an accessible, always-available assistant that reduced reliance on human volunteers for basic information.",
          ],
          tags: [
            "Prompt Engineering",
            "Custom GPT",
            "Multilingual NLP",
            "Spiritual Guidance",
            "Pilgrimage Assistance",
          ],
          link: "https://chatgpt.com/g/g-687bc7d45f10819191df8af2c8ac1204-arbaeen-helper-2025",
        },
        {
          id: "social-media-creator",
          title: "Automated Social Media Content Creator",
          summary:
            "An AI tool that reduced content creation time from 8 hours to 30 minutes and boosted engagement by 20 percent.",
          challenge:
            "Maintaining a consistent multi-platform social presence was time-consuming and inconsistent.",
          actions: [
            "Built a GPT integrated with brand style guides and marketing assets.",
            "Engineered generation of LinkedIn, Twitter, and Instagram posts from a single idea.",
            "Tailored outputs for tone, format, and character limits per platform.",
          ],
          results: [
            "Cut content creation time by 94 percent.",
            "Increased posting consistency by 300 percent.",
            "Boosted engagement by 20 percent while ensuring brand voice.",
          ],
          tags: [
            "Custom GPT",
            "Content Automation",
            "Social Media Marketing",
            "Brand Management",
            "Prompt Engineering",
          ],
          link: "#",
        },
        {
          id: "synapse-spark",
          title: "Synapse Spark: AI Brainstorming Assistant",
          summary:
            "A proof-of-concept tool that accelerated ideation-to-roadmap by 70 percent with structured workflows.",
          challenge:
            "Brainstorming sessions often lacked structure and failed to convert insights into actions.",
          actions: [
            "Designed and built Synapse Spark as a structured brainstorming assistant.",
            "Created guided workflows to generate, categorize, and prioritize ideas.",
            "Enabled transition from abstract goals to actionable plans.",
          ],
          results: [
            "Accelerated ideation sprints by 70 percent.",
            "Improved clarity of project roadmaps through structured outputs.",
            "Helped 85 percent of test users overcome creative blocks.",
          ],
          tags: [
            "AI Product Design",
            "Custom GPT",
            "User Experience",
            "Rapid Prototyping",
          ],
          link: "https://chatgpt.com/g/g-67d2e69939008191a4caefba8feac51a-synapse-spark",
        },
        {
          id: "security-response",
          title: "Security Incident Response and Hardening",
          summary:
            "Restored 95 percent of business leads and improved security scores from 38 percent to 85 percent after a major breach.",
          challenge:
            "An insider threat compromised accounts and caused a 70 percent drop in business leads.",
          actions: [
            "Led forensic investigation using Cloudflare, Kinsta, and Azure AD logs.",
            "Contained the attack by resetting accounts and deploying WAF rules.",
            "Audited admin privileges and enforced 2FA with a new security framework.",
          ],
          results: [
            "Recovered 95 percent of leads within two weeks.",
            "Raised Microsoft Secure Score from 38 percent to 85 percent.",
            "Eliminated vulnerabilities by enforcing least privilege and 2FA.",
          ],
          tags: [
            "Cybersecurity",
            "Incident Response",
            "Forensic Analysis",
            "Cloudflare",
            "Microsoft 365 Security",
          ],
          link: "#",
        },
        {
          id: "devops-turnaround",
          title: "DevOps Financial Turnaround",
          summary:
            "Transformed a DevOps unit from a $3,757 monthly loss to a $2,126 monthly profit.",
          challenge:
            "The DevOps function was operating at a loss due to inefficiencies and unbilled services.",
          actions: [
            "Automated audits with Python and Bash scripts to uncover idle resources.",
            "Decommissioned unused websites and servers to reduce waste.",
            "Performed forensic invoice audits to recover unbilled revenue.",
          ],
          results: [
            "Converted a $3,757 monthly loss into a $2,126 profit.",
            "Recovered $28,456 CAD in lost revenue.",
            "Reduced infrastructure costs by 46 percent and increased recurring revenue by 199 percent.",
          ],
          tags: [
            "FinOps",
            "Automation Scripting",
            "Business Analysis",
            "AWS",
            "Cost Optimization",
          ],
          link: "#",
        },
        {
          id: "android-spiritual-app",
          title: "Android Application for Spiritual Education",
          summary:
            "A native Android app with 2,480 installs and a 4.68-star rating on Google Play.",
          challenge:
            "Spiritual apps were cluttered with ads and lacked offline functionality, limiting accessibility.",
          actions: [
            "Designed, developed, and launched a native Android app from concept to store release.",
            "Ensured offline-first functionality and ad-free user experience.",
            "Added multilingual support, quizzes, reminders, and favorites for engagement.",
          ],
          results: [
            "Reached 2,480 installs and a 4.68-star average rating.",
            "Maintained a strong returning user base and near-zero crash rate.",
            "Built a stable and serene learning experience for a global audience.",
          ],
          tags: [
            "Android Development",
            "Kotlin",
            "Java",
            "UI/UX Design",
            "SQLite",
            "Google Play",
          ],
          link: "https://play.google.com/store/apps/details?id=com.fatimiyahtech.alasmaulhusna",
        },
      ],
    };

    projectDetails.projects.forEach((project) => {
      const itemHTML = `
        <div class="work-accordion__item anim-on-scroll">
          <button
            class="work-accordion__button"
            id="accordion-button-${project.id}"
            aria-expanded="false"
            aria-controls="accordion-panel-${project.id}">
            <span class="work-accordion__button-content">
              <span class="work-accordion__title">${project.title}</span>
              <span class="work-accordion__summary">${project.summary}</span>
            </span>
            <span class="work-accordion__icon">+</span>
          </button>
          <div
            class="work-accordion__panel"
            id="accordion-panel-${project.id}"
            role="region"
            aria-labelledby="accordion-button-${project.id}"
            aria-hidden="true">
            <div class="work-accordion__content-wrapper">
              <div class="work-accordion__content">
                <h3>The Challenge</h3>
                <p>${project.challenge}</p>
                <h3>Actions Taken</h3>
                <ul>
                  ${project.actions
                    .map((action) => `<li>${action}</li>`)
                    .join("")}
                </ul>
                <h3>Quantified Results</h3>
                <ul>
                  ${project.results
                    .map((result) => `<li>${result}</li>`)
                    .join("")}
                </ul>
                <div class="work-accordion__tags">
                  ${project.tags
                    .map(
                      (tag) => `<span class="work-accordion__tag">${tag}</span>`
                    )
                    .join("")}
                </div>
                ${
                  project.link && project.link !== "#"
                    ? `<a href="${project.link}" class="work-accordion__link" target="_blank" rel="noopener noreferrer">View Project</a>`
                    : ""
                }
              </div>
            </div>
          </div>
        </div>
      `;
      accordionContainer.innerHTML += itemHTML;
    });

    accordionContainer.addEventListener("click", (e) => {
      const button = e.target.closest(".work-accordion__button");
      if (!button) return;

      const panel = button.nextElementSibling;
      const icon = button.querySelector(".work-accordion__icon");
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      button
        .closest(".work-accordion")
        .querySelectorAll(".work-accordion__button")
        .forEach((btn) => {
          if (btn !== button) {
            btn.setAttribute("aria-expanded", "false");
            btn.nextElementSibling.setAttribute("aria-hidden", "true");
            btn.querySelector(".work-accordion__icon").textContent = "+";
          }
        });

      button.setAttribute("aria-expanded", !isExpanded);
      panel.setAttribute("aria-hidden", isExpanded);
      icon.textContent = isExpanded ? "+" : "−";
    });
  };

  initHeaderScrollState();
  initWorkAccordion();
  initScrollAnimations();
});

document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("share-post");
  const copyBtn = document.getElementById("copy-link");

  const postUrl = window.location.href;
  const postTitle =
    document.querySelector(".post__title")?.innerText || "Check this out";

  // Generic share using Web Share API
  if (shareBtn) {
    shareBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      if (navigator.share) {
        try {
          await navigator.share({
            title: postTitle,
            url: postUrl,
          });
        } catch (err) {
          console.warn("Share canceled or failed:", err);
        }
      } else {
        // Fallback: copy link if Web Share API not supported
        navigator.clipboard.writeText(postUrl).then(() => {
          alert("Link copied to clipboard!");
        });
      }
    });
  }

  // Explicit copy link
  if (copyBtn) {
    copyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard
        .writeText(postUrl)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch(() => {
          alert("Failed to copy link.");
        });
    });
  }
});
