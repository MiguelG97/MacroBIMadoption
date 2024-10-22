import { Chart } from "@/core/utils/generator/graphql";
import {
  Campaign,
  EduSectionName,
  OrgSectionName,
} from "../enums/campaign_sections_enum";
import { IQuestionnaire } from "../types/postgresql_schema_types";

/**For further questionnaires this should be parse automatically! */
export const education_questionnaires: IQuestionnaire[] = [
  /**section 1 */
  {
    title:
      "Does your institution offer BIM-related educational content within your programme?",
    questionId: 1662403538119,
    choices: ["Yes", "No", "Not sure"],
    sectionName: EduSectionName.Higher_edu_programmes,
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
    sectionName: EduSectionName.Higher_edu_programmes,
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
    sectionName: EduSectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  {
    title:
      "How many modules within the identified academic programme offer BIM-related educational content?",
    questionId: 1662404194408,
    choices: ["A few of them", "Around half of them", "Most of them"],
    sectionName: EduSectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  {
    title: "How is BIM-related content infused into the academic programme?",
    questionId: 1662404194401,
    choices: [
      "New dedicated courses/units",
      "Additional content within legacy courses/units",
      "Integrated topics across the whole programme",
    ],
    sectionName: EduSectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  //5
  {
    title:
      "How are students taught BIM-related content within this academic programme?",
    questionId: 1662404194402,
    choices: [
      "Students are taught how to use software tools",
      "Students are taught in classroom-based lectures",
      "Students work on individualised projects",
      "Students work on collaborative multidisciplinary projects",
    ],
    sectionName: EduSectionName.Higher_edu_programmes,
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
    sectionName: EduSectionName.Higher_edu_programmes,
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
    sectionName: EduSectionName.Higher_edu_programmes,
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
    sectionName: EduSectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //9
  {
    title:
      "Which of the below factors encouraged the inclusion of BIM-related content within this academic programme?",
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
    sectionName: EduSectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //10
  {
    title:
      "What BIM content related to Capturing and Representing are taught* as part of this programme?",
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
    sectionName: EduSectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //11
  {
    title:
      "What BIM content related to Planning and Designing are taught* as part of this programme?",
    questionId: 1665076969613,
    choices: [
      "Conceptualization",
      "Construction Planning",
      "Design Authoring",
      "Space Programming",
      "Urban Planning",
      "Value Analysis",
    ],
    sectionName: EduSectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //12
  {
    title:
      "What BIM content related to Simulating and Quantifying are taught* as part of this programme?",
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
    sectionName: EduSectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //13
  {
    title:
      "What BIM content related to Constructing and Fabricating are taught* as part of this programme?",
    questionId: 1665080678817,
    choices: ["3D Printing", "Construction Logistics"],
    sectionName: EduSectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //14
  {
    title:
      "What BIM content related to Operating and Maintaining are taught* as part of this programme?",
    questionId: 1665080678815,
    choices: ["Asset Maintenance", "Space Management"],
    sectionName: EduSectionName.Higher_edu_programmes,
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
    sectionName: EduSectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  /**section 2 MERGED with sec1*/
  //16 [0]
  {
    title:
      "Does the academic programme identified in the previous section generate BIM-related research?",
    questionId: 1662416269541,
    choices: ["Yes", "No", "Not sure"],
    sectionName: EduSectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  //17[1]
  {
    title:
      "What types of BIM-related research deliverables are generated by this academic programme?",
    questionId: 1662416269548,
    choices: [
      "Reports or guides",
      "Master theses",
      "Ph.D. dissertations",
      "Peer-reviewed papers",
      "Software tools",
      "Patents",
    ],
    sectionName: EduSectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //18 [2]
  {
    title:
      "Please identify the publicly accessible repository(ies) for BIM-related research delivered by this academic programme:",
    questionId: 1662416269554,
    choices: [],
    sectionName: EduSectionName.Higher_edu_programmes,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Table,
  },
  /**Section 3 */
  {
    questionId: 1662406986498,
    title:
      "Is there a published region-wide Learning Outcomes Taxonomy or similar document covering BIM learning and training topics?",
    choices: ["Yes", "No", "Not sure"],
    sectionName: EduSectionName.Educational_framework,
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
    sectionName: EduSectionName.Educational_framework,
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
    sectionName: EduSectionName.Educational_framework,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  {
    title:
      "Please provide more information about the region-wide, BIM-focused Learning Outcomes Taxonomy or similar document:",

    questionId: 1662406986480,
    choices: [],
    sectionName: EduSectionName.Educational_framework,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Table,
  },
  //4
  {
    title:
      "Is there an Educational Framework to guide the teaching/learning of BIM topics within higher education institutions in your region?",

    questionId: 1662403322493,
    choices: ["Yes", "No", "Not sure"],
    sectionName: EduSectionName.Educational_framework,
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
    sectionName: EduSectionName.Educational_framework,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //6
  {
    title:
      "Please identify the entity(ies) that issued or commissioned the BIM-focused Educational Framework for higher education institutions:",

    questionId: 1662403538118,
    choices: [],
    sectionName: EduSectionName.Educational_framework,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Table,
  },
  /**Section 5 */
  {
    questionId: 1662406986478,
    title:
      "Are there short BIM Training courses (e.g., continuous professional development courses) available in your region?",
    choices: ["Yes", "No", "Not sure"],
    sectionName: EduSectionName.Training_courses,
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
    sectionName: EduSectionName.Training_courses,
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
    sectionName: EduSectionName.Training_courses,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  {
    questionId: 1662416269584,

    title:
      "Are there short BIM Training courses accredited/certified by accreditation bodies?",
    choices: ["Yes", "No", "Not sure"],
    sectionName: EduSectionName.Training_courses,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Pie,
  },
  //this one is expected to have a variety answers
  {
    questionId: 1662416269547,

    title:
      "Please identify the accreditation bodies that have certified/accredited those short BIM Training courses:",
    choices: [],
    sectionName: EduSectionName.Training_courses,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Table,
  },
  /**Section 6 */
  {
    questionId: 1696216528318,

    title:
      "Is there any formal collaboration between academia, government and/or industry for the purposes of improving BIM Competency?",
    choices: ["Yes", "No", "Not sure"],
    sectionName: EduSectionName.Collaboration,
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
    sectionName: EduSectionName.Collaboration,
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
    sectionName: EduSectionName.Collaboration,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Bar,
  },
  //this one is expected to have a variety answers
  {
    questionId: 1696216665638,
    title:
      "Please provide more information about the objectives and deliverables of the formal collaboration between academia, government and/or industry for the purposes of improving BIM competency:",
    choices: [],
    sectionName: EduSectionName.Collaboration,
    campaign: Campaign.Education_Landscape,
    chartType: Chart.Table,
  },
];

export const organization_questionnaires: IQuestionnaire[] = [
  /**Org Information */
  {
    title: "Which of the following disciplines describes your organisation?",
    questionId: 1662464237570,
    choices: [
      "Client/Owner/Developer",
      "Planner (ex: urban planner)",
      "Architect",
      "Design Consultant (ex: electrical engineer)",
      "Constructors/Builder (ex: general contractor)",
      "Specialty Sub-contractor (ex: ducting installer)",
      "Supplier (ex: materials and equipment)",
      "Project Manager",
      "Cost Manager",
      "Facility Manager",
    ],
    sectionName: OrgSectionName.Org_information,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //this information is not being used so far!!
  },
  {
    title: "How many employees does your organisation have?",
    questionId: 1662925111506,
    choices: ["Less than 10", "10-50", "51-250", "251-1000", "More than 1000"],
    sectionName: OrgSectionName.Org_information,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //this information is not being used so far!!
  },
  {
    title: "Is your organisation involved in building projects?",
    questionId: 1662925111501,
    choices: ["Yes", "No", "Not sure"],
    sectionName: OrgSectionName.Org_information,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //this information is not being used so far!!
  },
  {
    title:
      "Which of the following best describes the type of building projects that your organisation is involved in?",
    questionId: 1662925111502,
    choices: [
      "Corporate/Offices",
      "Culture/Entertainment",
      "Education",
      "Health",
      "Hospitality/Hotels",
      "Housing/Residential",
      "Industrial",
      "Religious",
      "Retail",
      "Sport/Leisure",
    ],
    sectionName: OrgSectionName.Org_information,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //this information is not being used so far!!
  },
  {
    title: "Is your organisation involved in infrastructure projects?",
    questionId: 1662925111503,
    choices: ["Yes", "No", "Not Sure"],
    sectionName: OrgSectionName.Org_information,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //this information is not being used so far!!
  },
  {
    title:
      "Which of the following best describes the type of infrastructure projects that your organisation is involved in?",
    questionId: 1662925111504,
    choices: [
      "Energy/Utility/Dams/Power",
      "Airports/Ports",
      "Railway/Roads/Bridges",
      "Telecommunications",
      "Water/Sewerage",
      "Mining",
    ],
    sectionName: OrgSectionName.Org_information,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //this information is not being used so far!!
  },
  {
    title: "In which country is your organisation based (head quartered)?",
    questionId: 1686658529676,
    choices: [],
    sectionName: OrgSectionName.Org_information,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title: "What is the geographical coverage of your organisation?",
    questionId: 1662925111508,
    choices: ["Local", "Regional", "National", "International"],
    sectionName: OrgSectionName.Org_information,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },

  /**Adoption */
  {
    title: "Has your organisation adopted BIM?",
    questionId: 1662925111509,
    choices: ["Yes (partial or complete adoption)", "No", "Not sure"],
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title: "How many years has your organisation been adopting BIM?",
    questionId: 1662925111513,
    choices: [
      "Less than one year",
      "One year",
      "Two years",
      "Three to five years",
      "Five to ten years",
      "10+ years",
    ],
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "What of these external factors that motivated the adoption of BIM in your organization?",
    questionId: 1662925111514,
    choices: [
      "There are business gains (productivity, profitability) from adopting BIM in the market",
      "Our competitors are using BIM tools and workflows",
      "It has become the norm in the profession",
      "There is a Government Mandate",
      "There are Government Incentives",
      "There is a Client/procurer requirement",
    ],
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Please identify how the organisation initiated its BIM Adoption process",
    questionId: 1662925111515,
    choices: [
      "Engaged an external consultant",
      "Employed an expert",
      "Trained existing employees ",
      "Relied on available materials",
    ],
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Does the organisation currently rely on external consultants to produce BIM-related deliverables?",
    questionId: 1662925111516,
    choices: ["Yes", "No", "Not sure"],
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title: "Identify the services provided by external consultants",
    questionId: 1662925111517,
    choices: [
      "Assist in General Modelling",
      "Generate Object Libraries",
      "Conduct Clash detection",
      "Cost Planning",
      "Deliver Construction Detailing",
    ],
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title: "What type of BIM Training content does your organisation need?",
    questionId: 1662925111518,
    choices: [
      "General BIM-related concepts (ex: terminology, value and impact, interoperability, etc.)",
      "How to use BIM software tools on projects (ex: using model authoring tools to design)",
      "How to conduct BIM processes on projects (ex: clash detection analysis)",
      "How to apply national/ international information management standards on projects (EIR, CDE, etc.)",
      "How to implement BIM in organisation/projects",
    ],
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Are there BIM Training courses available in the market that meet the organisation requirements?",
    questionId: 1662925111519,
    choices: ["Yes", "No", "Not Sure"],
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Please provide more information about the alignment of available BIM Training courses in the market and the organisation requirements:",
    questionId: 1662925111520,
    choices: [],
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Table, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Are you able to recruit the trained personnel needed to work on your organisations's BIM projects?",
    questionId: 1662925111521,
    choices: ["Yes", "No", "Not Sure"],
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Please provide more information about the availability of trained personnel in your region to work on your organisation's BIM projects:",
    questionId: 1662925111522,
    choices: [],
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Table, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "What is the influence of competitors on your organisation's decision to adopt BIM?",
    questionId: 1662925111523,
    choices: [], //ratings (20%, 80%, ...wtf)
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "What is the influence of the government mandate on your organisation's decision to adopt BIM?",
    questionId: 1663671228314,
    choices: [], //ratings (20%, 80%, ...wtf)
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "What is the influence of BIM, as the accepted approach in the profession, on your organisation's decision to adopt BIM?",
    questionId: 1663671228315,
    choices: [], //ratings (20%, 80%, ...wtf)
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "What is the influence of clients/procurers on your organisation's decision to adopt BIM?",
    questionId: 1663671040629,
    choices: ["Low", "Medium-low", "Medium", "Medium-high", "High"], //ratings (20%, 80%, ...wtf)
    sectionName: OrgSectionName.Adoption,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  /** Non-adopter*/
  {
    title: "Why has your organisation not adopted BIM?",
    questionId: 1662925111510,
    choices: [
      "The benefits are not clear",
      "The technology is not affordable",
      "There is no mandate by the government",
      "There are no client demands",
      "There is not enough BIM compentent professionals in the market",
      "It is not compatible with our current processes",
    ],
    sectionName: OrgSectionName.Non_adopters,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title: "Is your organisation planning to adopt?",
    questionId: 1662925111511,
    choices: ["Yes", "No", "Not sure"],
    sectionName: OrgSectionName.Non_adopters,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title: "What actions is the organisation taking to adopt BIM?",
    questionId: 1662925111512,
    choices: [
      "Preparing the technology infrastructure",
      "Trialing software solutions",
      "Consulting with our supply chain",
      "Training Staff",
      "Developing a strategy/business case",
      "Hiring/consulting an implementation specialist",
      "Reviewing guides/standards",
    ],
    sectionName: OrgSectionName.Non_adopters,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
  /**Target Deliverables */
  {
    title:
      "Does your organisation use BIM models for Capturing and Representing?",
    questionId: 1662925111524,
    choices: ["Yes", "No", "Not sure"],
    sectionName: OrgSectionName.Target_deliv,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Identify the Model Uses that the organisation has adopted for Capturing and Representing",
    questionId: 1662925111525,
    choices: [
      "2D Documentation",
      "3D Detailing",
      "As-constructed Representation",
      "Generative Design",
      "Laser Scanning",
      "Photogrammetry",
      "Record Keeping",
      "Surveying",
      "Visual Communication",
    ],
    sectionName: OrgSectionName.Target_deliv,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title: "Does your organisation use BIM models for Planning and Designing?",
    questionId: 1662925111526,
    choices: ["Yes", "No", "Not sure"],
    sectionName: OrgSectionName.Target_deliv,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Identify the Model Uses that the organisation has adopted for Planning and Designing",
    questionId: 1662925111527,
    choices: [
      "Conceptualization",
      "Construction Planning",
      "Demolition Planning",
      "Design Authoring",
      "Disaster Planning",
      "Lean Process Analysis",
      "Lift Planning",
      "Operations Planning",
      "Selection and Specification",
      "Space Programming",
      "Urban Planning",
      "Value Analysis",
    ],
    sectionName: OrgSectionName.Target_deliv,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Does your organisation use BIM models for  Simulating and Quantifying?",
    questionId: 1662925111528,
    choices: ["Yes", "No", "Not sure"],
    sectionName: OrgSectionName.Target_deliv,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Identify the Model Uses that the organisation has adopted for Simulating and Quantifying",
    questionId: 1662925111529,
    choices: [
      "Clash Detection (and avoidance)",
      "Code Checking & Validation",
      "Constructability Analysis",
      "Construction Operation Analysis",
      "Cost Estimation",
      "Egress and Ingress",
      "Energy Utilisation",
      "Finite Element Analysis",
      "Fire and Smoke Simulation",
      "Lighting Analysis",
      "Quantity Take-off",
      "Reflectivity Analysis",
      "Risk and Hazard Assessment",
      "Safety Analysis",
      "Security Analysis",
      "Site Analysis",
      "Solar Analysis",
      "Spatial Analysis",
      "Structural Analysis",
      "Sustainability Analysis",
      "Thermal Analysis",
      "Virtual Reality Simulation",
      "Life Cycle Assessment1",
      "Wind Studies",
    ],
    sectionName: OrgSectionName.Target_deliv,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Does your organisation use BIM models for Constructing and Fabricating?",
    questionId: 1662925111530,
    choices: ["Yes", "No", "Not sure"],
    sectionName: OrgSectionName.Target_deliv,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Identify the Model Uses that the organisation has adopted for Constructing and Fabricating",
    questionId: 1662925111531,
    choices: [
      "3D Printing",
      "Architectural Modules Prefabrication",
      "Casework Prefabrication",
      "Concrete Precasting",
      "Construction Logistics",
      "Construction Waste Management",
      "Mechanical Assemblies Prefabrication",
      "Sheet Metal Forming",
      "Site Set-outs",
    ],
    sectionName: OrgSectionName.Target_deliv,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Does your organisation use BIM models for Operating and Maintaining?",
    questionId: 1662925111532,
    choices: ["Yes", "No", "Not sure"],
    sectionName: OrgSectionName.Target_deliv,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Identify the Model Uses that the organisation has adopted for Operating and Maintaining",
    questionId: 1662925111533,
    choices: [
      "Asset Maintenance",
      "Asset Procurement",
      "Asset Tracking",
      "Building Inspection",
      "Handover and Commissioning",
      "Relocation Management",
      "Space Management",
    ],
    sectionName: OrgSectionName.Target_deliv,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Does your organisation use BIM models for Monitoring and Controlling?",
    questionId: 1662925111534,
    choices: ["Yes", "No", "Not sure"],
    sectionName: OrgSectionName.Target_deliv,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Identify the Model Uses that the organisation has adopted for Monitoring and Controlling",
    questionId: 1662925111535,
    choices: [
      "Building Automation",
      "Field BIM",
      "Performance Monitoring",
      "Real-time Utilization",
      "Structural Health Monitoring",
    ],
    sectionName: OrgSectionName.Target_deliv,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Does your organisation use BIM models for linking Linking and Extending with other systems?",
    questionId: 16629251115836,
    choices: ["Yes", "No", "Not sure"],
    sectionName: OrgSectionName.Target_deliv,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Identify the Model Uses that the organisation has adopted for Linking and Extending",
    questionId: 1662925111537,
    choices: [
      "BIM/Spec Linking",
      "BIM/ERP Linking",
      "BIM/FM Integration",
      "BIM/GIS Overlapping",
      "BIM/IOT Interfacing",
      "BIM/PLM Overlapping",
      "BIM/Web-services Extension",
    ],
    sectionName: OrgSectionName.Target_deliv,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
  /**Interoperability */ {
    title:
      "Does your organisation have the capability to generate high-quality IFC Industry Foundation Classes model files from proprietary BIM Software Tools",
    questionId: 1662925111538,
    choices: ["Yes", "No", "Not sure"],
    sectionName: OrgSectionName.Interop,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Has your organisation participated in projects where IFC (Industry Foundation Classes) was the preferred format of final submission?",
    questionId: 1662925111539,
    choices: ["Yes", "No", "Not sure"],
    sectionName: OrgSectionName.Interop,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "How many projects has your organisation participated in where IFC Industry Foundation Classes was the preferred format of final submission?",
    questionId: 1662925111540,
    choices: [
      "One project",
      "A few projects (2-4 projects)",
      "Many projects (5 or more projects)",
    ],
    sectionName: OrgSectionName.Interop,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "Has your organisation aligned its Information Management processes with applicable International Standards (e.g. ISO 19650)?",
    questionId: 1662925111541,
    choices: ["Yes", "No", "Not sure"],
    sectionName: OrgSectionName.Interop,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Pie, //it seems that a table is more convenient since they can type everything here!
  },
  {
    title:
      "What Information Management processes did your organisation align with applicable International Standards (e.g ISO 19650)?",
    questionId: 1662925111542,
    choices: [
      "Naming conventions of deliverables",
      "Information Requirements (OIR, AIR, EIR)",
      "Responsibility Matrices",
      "BIM Execution Plans (BEP)",
      "Common Data Environments (CDE)",
      "Other", //??
    ],
    sectionName: OrgSectionName.Interop,
    campaign: Campaign.Org_Adoption,
    chartType: Chart.Bar, //it seems that a table is more convenient since they can type everything here!
  },
];
