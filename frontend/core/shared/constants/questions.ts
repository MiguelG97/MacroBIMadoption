import { Chart } from "@/core/utils/generator/graphql";
import { Campaign, SectionName } from "../enums/questionnary_enum";
import { IQuestionnaire } from "../types/postgresql_schema_types";

/**For further questionnaires this should be parse automatically! */
export const questions_postgresql: IQuestionnaire[] = [
  /**section 1 */
  {
    title:
      "Does your institution offer BIM-related educational content within its programmes?",
    questionId: 1662403538119,
    choices: ["Yes", "No", "Not sure"],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  {
    title:
      "Which academic programme offered by your institution include BIM-related educational content?",
    questionId: 1665076540133,
    choices: [
      "Architecture programme",
      "Architecture Technology programme",
      "Building Services (or Architectural Engineering) programme",
      "Civil Engineering programme",
      "Construction Management programme",
    ],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  {
    title:
      "At what level(s) are BIM-related educational content offered within the identified academic programme?",
    questionId: 1662403538116,
    choices: [
      "Undergraduate level (Bachelor)",
      "Postgraduate level (Masters or Doctorate)",
    ],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  {
    title:
      "How many modules within the identified academic programme offer BIM-related educational content?",
    questionId: 1662404194408,
    choices: ["A few of them", "Around half of them", "Most of them"],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  {
    title: "How is BIM-related content infused into the educational programme?",
    questionId: 1662404194401,
    choices: [
      "New dedicated courses/units",
      "Additional content within legacy courses/units",
      "Integrated topics across the whole programme",
    ],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  //5
  {
    title: "How are students taught BIM-related content within this programme?",
    questionId: 1662404194402,
    choices: [
      "Students are taught how to use software tools",
      "Students are taught in classroom-based lectures",
      "Students work on individualised projects",
      "Students work on collaborative multidisciplinary projects",
    ],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //6
  {
    title: "What general BIM contents are taught as part of this programme?",
    questionId: 1665080678818,
    choices: [
      "General BIM-related concepts (e.g., terminology, value and impact, etc.)",
      "How to apply national/ international information management standards on projects (EIR, CDE, etc.)",
      "How to implement BIM in organisation/projects",
    ],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //7
  {
    title:
      "What is the educational delivery format used for BIM-related content within your programme?",
    questionId: 1662404194405,
    choices: [
      "Face-to-face learning",
      "Synchronous distance learning",
      "Asynchronous distance learning",
      "Blended learning",
    ],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //8
  {
    title:
      "What types of BIM-related on-campus learning resources are available to students within this programme?",
    questionId: 1662404194409,
    choices: [
      "Computer lab and software tools",
      "Immersive virtual reality tools and environment / CAVE",
      "Self-paced textual and audiovisual materials",
    ],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //9
  {
    title:
      "Which of the below factors encouraged the inclusion of BIM-related content within this programme?",
    questionId: 1662404194403,
    choices: [
      "Students are demanding BIM-related content",
      "Other institutions are teaching BIM-related content",
      "Professional associations are requesting BIM-related content",
      "There is a government mandate covering BIM-related content",
      "There are government incentives for educational institutions that encourage the inclusion of BIM-related content",
      "BIM-related content are a requirement by accreditation bodies",
      "BIM is currently (or is becoming) the norm across the industry",
    ],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //10
  {
    title:
      "What BIM content related to Capturing and Representing are taught as part of this programme?",
    questionId: 1662404194404,
    choices: [
      "2D Documentation",
      "3D Detailing",
      "As-constructed Representation",
      "Generative Design",
      "Laser Scanning / Photogrammetry",
      "Surveying",
      "Visual Communication",
    ],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //11
  {
    title:
      "What BIM content related to Planning and Designing are taught as part of this programme?",
    questionId: 1665076969613,
    choices: [
      "Conceptualization",
      "Construction Planning",
      "Design Authoring",
      "Space Programming",
      "Urban Planning",
      "Value Analysis",
    ],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //12
  {
    title:
      "What BIM content related to Simulating and Quantifying are taught as part of this programme?",
    questionId: 1665076969614,
    choices: [
      "Accessibility Analysis",
      "Acoustic Analysis",
      "Augmented Reality Simulation",
      "Clash Detection (and avoidance)",
      "Code Checking & Validation",
      "Construction Operation Analysis",
      "Cost Estimation",
      "Energy Utilisation",
      "Finite Element Analysis",
      "Lighting Analysis",
      "Quantity Take-off",
      "Safety Analysis",
      "Site Analysis",
      "Solar Analysis",
      "Spatial Analysis",
      "Structural Analysis",
      "Sustainability Analysis",
      "Thermal Analysis",
      "Virtual Reality Simulation",
      "Life Cycle Assessment",
      "Wind Studies",
    ],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //13
  {
    title:
      "What BIM content related to Constructing and Fabricating are taught as part of this programme?",
    questionId: 1665080678817,
    choices: ["3D Printing", "Construction Logistics"],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //14
  {
    title:
      "What BIM content related to Operating and Maintaining are taught as part of this programme?",
    questionId: 1665080678815,
    choices: ["Asset Maintenance", "Space Management"],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //15
  {
    title:
      "What BIM content related to Interoperability are taught as part of this programme?",
    questionId: 1665080678819,
    choices: [
      "General interoperability concepts",
      "IFC - Industry Foundation Classes",
      "MVD - Model View Definition",
      "IDM - Information Delivery Manual",
    ],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  /**section 2 MERGED with sec1*/
  {
    title:
      "Does the programme identified in the previous section generate BIM-related research?",
    questionId: 1662416269541,
    choices: ["Yes", "No", "Not sure"],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  {
    title:
      "What types of BIM-related research deliverables are generated by this programme?",
    questionId: 1662416269548,
    choices: [
      "Reports or guides",
      "Master theses",
      "Ph.D. dissertations",
      "Peer-reviewed papers",
      "Software tools",
      "Patents",
    ],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  {
    title:
      "Please identify the publicly accessible repository(ies) for BIM-related research delivered by this programme:",
    questionId: 1662416269554,
    choices: [],
    sectionName: SectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Table,
  },
  /**Section 3 */
  {
    questionId: 1662406986498,
    title:
      "Is there a published region-wide Learning Outcomes Taxonomy or similar document covering BIM learning and training topics?",
    choices: ["Yes", "No", "Not sure"],
    sectionName: SectionName.Educational_framework,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  {
    questionId: 1662406986479,
    title:
      "Please identify the party(ies) that led or are leading the development of the region-wide, BIM-focused Learning Outcomes Taxonomy or similar documents:",
    choices: [
      "Government Bodies",
      "Academic Institutions",
      "Industry Associations",
      "Community Groups",
    ],
    sectionName: SectionName.Educational_framework,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  {
    title:
      "Which BIM topics does the region-wide Learning Outcomes Taxonomy or similar document cover?",

    questionId: 1662406986481,
    choices: [
      "BIM fundamental concepts and terminology",
      "Strategic context for BIM adoption within your country/region",
      "Value and impact of BIM for organisations and projects",
      "The concepts of interoperability and how to implement an openBIM workflows",
      "Information management standards (e.g., information requirements, BIM Execution Plans) applicable to BIM-enabled projects",
      "Model uses for visualisation, simulation, quantification and similar",
      "Product information (e.g., data templates) across an asset lifecycle",
      "Legal, contractual and commercial implications on organisations and supply chains",
      "Procurement challenges related to the use of BIM on projects",
      "Change management challenges for adopting BIM in organisations",
    ],
    sectionName: SectionName.Educational_framework,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  {
    title:
      "Please provide more information about the region-wide, BIM-focused Learning Outcomes Taxonomy or similar document:",

    questionId: 1662406986480,
    choices: [],
    sectionName: SectionName.Educational_framework,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Table,
  },
  //4
  {
    title:
      "Is there an Educational Framework to guide the teaching/learning of BIM topics within higher education institutions in your region?",

    questionId: 1662403322493,
    choices: ["Yes", "No", "Not sure"],
    sectionName: SectionName.Educational_framework,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  //5
  {
    title:
      "Please identify the main elements of the Educational Framework intended to guide the teaching/learning of BIM topics within higher education institutions in your region:",
    questionId: 1662403538117,
    choices: [
      "Identifies the overall benefits and provides basic guidance on how to develop BIM-focused educational programmes",
      "Identifies learning outcomes that generically apply across all disciplines and specialties",
      "Identifies learning outcomes by discipline - apply specifically to architectural, engineering, or construction management students",
      "Identifies specific learning outcomes that apply per year level  - apply to Year 1, 2 or 3",
    ],
    sectionName: SectionName.Educational_framework,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //6
  {
    title:
      "Please identify the entity(ies) that issued or commissioned the BIM-focused Educational Framework for higher education institutions:",

    questionId: 1662403538118,
    choices: [],
    sectionName: SectionName.Educational_framework,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Table,
  },
  /**Section 5 */
  {
    questionId: 1662406986478,
    title:
      "Are there short BIM Training courses (e.g., continuous professional development courses) available in your region?",
    choices: ["Yes", "No", "Not sure"],
    sectionName: SectionName.Training_courses,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  {
    questionId: 1662416260169,
    title:
      "Which institutions provide these BIM Training courses in your region?",
    choices: [
      "Higher Education Institutions",
      "Technical colleges",
      "Technology services providers (e.g., software developers and resellers)",
      "Specialised training providers",
      "Industry bodies and associations",
      "Technology advocates (e.g., buildingSMART local chapter)",
      "Communities of practice (e.g., BIM user group)",
    ],
    sectionName: SectionName.Training_courses,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  {
    questionId: 1662416269575,
    title:
      "What type of content is delivered in the short BIM Training courses?",
    choices: [
      "General BIM-related concepts (e.g., terminology, value and impact, interoperability, etc.)",
      "How to use BIM software tools on projects (e.g., using model authoring tools to design)",
      "How to conduct BIM processes on projects (e.g., clash detection analysis)",
      "How to apply national/ international information management standards on projects (EIR, CDE, etc.)",
      "How to implement BIM in organisation/projects",
    ],
    sectionName: SectionName.Training_courses,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  {
    questionId: 1662416269584,

    title:
      "Are there short BIM Training courses accredited/certified by accreditation bodies?",
    choices: ["Yes", "No", "Not sure"],
    sectionName: SectionName.Training_courses,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  //this one is expected to have a variety answers
  {
    questionId: 1662416269547,

    title:
      "Please identify the accreditation bodies that have certified/accredited those short BIM Training courses:",
    choices: [],
    sectionName: SectionName.Training_courses,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Table,
  },
  /**Section 6 */
  {
    questionId: 1696216528318,

    title:
      "Is there any formal collaboration between academia, government and/or industry for the purposes of improving BIM Competency?",
    choices: ["Yes", "No", "Not sure"],
    sectionName: SectionName.Collaboration,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  {
    questionId: 1696216897343,
    title:
      "What does this formal collaboration between academia, government and/or industry cover with respect to BIM competency?",
    choices: [
      "Improving the BIM competence of students with the assistance of practicing professionals",
      "Improving the BIM competence of practicing professionals with the assistance of academic institutions",
      "Conducting joint research in BIM-specific topics",
      "Organising or delivering a BIM-focused conference, seminar or similar",
    ],
    sectionName: SectionName.Collaboration,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  {
    questionId: 1696217569183,
    title:
      "Please identify the parties included in this formal collaboration between academia, government and/or industry covering BIM competency:",
    choices: [
      "Government or governmental authorities",
      "Design or construction companies",
      "Facility owners or operators",
      "Regional or national professional associations (e.g., architectural association or engineering body)",
      "Regional or national research, standards or codes' bodies",
      "Local, regional or national not-for-profit entities (e.g., communities of practice, local buildingSMART chapter, or similar)",
      "International not-for-profit entities (e.g., buildingSMART International, BIMe Initiative, World Bank, or similar)",
    ],
    sectionName: SectionName.Collaboration,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //this one is expected to have a variety answers
  {
    questionId: 1696216665638,
    title:
      "Please provide more information about the objectives and deliverables of the formal collaboration between academia, government and/or industry for the purposes of improving BIM competency:",
    choices: [],
    sectionName: SectionName.Collaboration,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Table,
  },
];
