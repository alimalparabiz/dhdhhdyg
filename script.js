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
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".header__link");
  const header = document.getElementById("header");

  // A single function to open or close the menu
  const toggleMenu = () => {
    const isMenuOpen = navMenu.classList.contains("is-open");

    // Update ARIA attribute for accessibility
    navToggle.setAttribute("aria-expanded", !isMenuOpen);

    // Toggle the menu's visibility
    navMenu.classList.toggle("is-open");

    // Prevent the page from scrolling when the menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  // --- Toggle Mobile Menu on button click ---
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", toggleMenu);
  }

  // --- Close Menu when a link is clicked ---
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Only close if the menu is already open
      if (navMenu.classList.contains("is-open")) {
        toggleMenu();
      }
    });
  });

  // --- Header Scroll Effect (more concise) ---
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });
  }
});
