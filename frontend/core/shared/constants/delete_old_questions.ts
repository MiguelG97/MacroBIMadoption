//we need of answers section to filter from defined answers and other comments

export const section1: any = [
  //0
  {
    question_id: 1662403538119,
    es: "¿Su institución ofrece contenidos educativos relacionados con BIM dentro de sus programas?",
    default:
      "Does your institution offer BIM-related educational content within its programmes?",
    answers: ["Yes", "No", "Not sure"],
    chart: "pie",
  },
  //1
  //problem here, since we have the both keyword instead [if it does not appear, set it as another]
  {
    question_id: 1665076540133,
    es: "¿Qué programa académico ofrecido por su institución incluye contenidos educativos relacionados con BIM?",
    default:
      "Which academic programme offered by your institution include BIM-related educational content?",
    answers: [
      "Architecture programme",
      "Architecture Technology programme",
      "Building Services (or Architectural Engineering) programme",
      "Civil Engineering programme",
      "Construction Management programme",
    ],
    chart: "bar",
  },
  //2
  {
    question_id: 1662403538116,
    es: "¿En qué nivel o niveles se ofrecen contenidos educativos relacionados con BIM dentro del programa académico identificado?",
    default:
      "At what level(s) are BIM-related educational content offered within the identified academic programme?",
    answers: [
      "Undergraduate level (Bachelor)",
      "Postgraduate level (Masters or Doctorate)",
    ],
    chart: "pie",
  },
  //3
  {
    question_id: 1662404194408,
    es: "¿Cuántos módulos del programa académico identificado ofrecen contenidos educativos relacionados con BIM?",
    default:
      "How many modules within the identified academic programme offer BIM-related educational content?",
    answers: ["A few of them", "Around half of them", "Most of them"],
  },
  //4
  {
    question_id: 1662404194401,
    es: "¿Cómo se integran los contenidos relacionados con BIM en este programa educativo?",
    default:
      "How is BIM-related content infused into the educational programme?",
    answers: [
      "New dedicated courses/units",
      "Additional content within legacy courses/units",
      "Integrated topics across the whole programme",
    ],
  },
  //5
  {
    question_id: 1662404194402,
    es: "¿Cómo se enseñan a los estudiantes los contenidos relacionados con BIM dentro de este programa?",
    default:
      "How are students taught BIM-related content within this programme?",
    answers: [
      "Students are taught how to use software tools",
      "Students are taught in classroom-based lectures",
      "Students work on individualised projects",
      "Students work on collaborative multidisciplinary projects",
    ],
  },
  //6
  {
    question_id: 1665080678818,
    es: "¿Qué contenidos generales de BIM se imparten como parte de este programa?",
    default: "What general BIM contents are taught as part of this programme?",
    answers: [
      "General BIM-related concepts (e.g., terminology, value and impact, etc.)",
      "How to apply national/ international information management standards on projects (EIR, CDE, etc.)",
      "How to implement BIM in organisation/projects",
    ],
  },
  //7
  {
    question_id: 1662404194405,
    es: "¿Cuál es el formato educativo utilizado para los contenidos relacionados con BIM dentro de su programa?",
    default:
      "What is the educational delivery format used for BIM-related content within your programme?",
    answers: [
      "Face-to-face learning",
      "Synchronous distance learning",
      "Asynchronous distance learning",
      "Blended learning",
    ],
  },
  //8
  {
    question_id: 1662404194409,
    es: "¿Qué tipos de recursos de aprendizaje en el campus relacionados con BIM están a disposición de los estudiantes en este programa?",
    default:
      "What types of BIM-related on-campus learning resources are available to students within this programme?",
    answers: [
      "Computer lab and software tools",
      "Immersive virtual reality tools and environment / CAVE",
      "Self-paced textual and audiovisual materials",
    ],
  },
  //9
  {
    question_id: 1662404194403,
    es: "¿Cuáles de los siguientes factores fomentaron la inclusión de contenidos relacionados con BIM en este programa?",
    default:
      "Which of the below factors encouraged the inclusion of BIM-related content within this programme?",
    answers: [
      "Students are demanding BIM-related content",
      "Other institutions are teaching BIM-related content",
      "Professional associations are requesting BIM-related content",
      "There is a government mandate covering BIM-related content",
      "There are government incentives for educational institutions that encourage the inclusion of BIM-related content",
      "BIM-related content are a requirement by accreditation bodies",
      "BIM is currently (or is becoming) the norm across the industry",
    ],
  },
  //10
  {
    question_id: 1662404194404,
    es: "¿Qué contenidos BIM relacionados con Captura y representación se imparten como parte de este programa?",
    default:
      "What BIM content related to Capturing and Representing are taught as part of this programme?",
    answers: [
      "2D Documentation",
      "3D Detailing",
      "As-constructed Representation",
      "Generative Design",
      "Laser Scanning / Photogrammetry",
      "Surveying",
      "Visual Communication",
    ],
  },
  //11
  {
    question_id: 1665076969613,
    es: "¿Qué contenidos BIM relacionados con Planificación y diseño se imparten como parte de este programa?",
    default:
      "What BIM content related to Planning and Designing are taught as part of this programme?",
    answers: [
      "Conceptualization",
      "Construction Planning",
      "Design Authoring",
      "Space Programming",
      "Urban Planning",
      "Value Analysis",
    ],
  },
  //12
  {
    question_id: 1665076969614,
    es: "¿Qué contenidos BIM relacionados con Simulación y cuantificación se imparten como parte de este programa?",
    default:
      "What BIM content related to Simulating and Quantifying are taught as part of this programme?",
    answers: [
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
  },
  //13
  {
    question_id: 1665080678817,
    es: "¿Qué contenidos BIM relacionados con Construcción y Fabricación se imparten como parte de este programa?",
    default:
      "What BIM content related to Constructing and Fabricating are taught as part of this programme?",
    answers: ["3D Printing", "Construction Logistics"],
  },
  //14
  {
    question_id: 1665080678815,
    es: "¿Qué contenidos BIM relacionados con Operación y mantenimiento se imparten como parte de este programa?",
    default:
      "What BIM content related to Operating and Maintaining are taught as part of this programme?",
    answers: ["Asset Maintenance", "Space Management"],
  },
  //15
  {
    question_id: 1665080678819,
    es: "¿Qué contenidos BIM relacionados con Interoperabilidad se imparten como parte de este programa?",
    default:
      "What BIM content related to Interoperability are taught as part of this programme?",
    answers: [
      "General interoperability concepts",
      "IFC - Industry Foundation Classes",
      "MVD - Model View Definition",
      "IDM - Information Delivery Manual",
    ],
  },
];

export const section2: any[] = [
  {
    question_id: 1662416269541,
    es: "¿El programa identificado en el apartado anterior genera investigación relacionada con BIM?",
    default:
      "Does the programme identified in the previous section generate BIM-related research?",
    answers: ["Yes", "No", "Not sure"],
  },
  {
    question_id: 1662416269548,
    es: "¿Qué tipos de resultados de investigación relacionados con BIM genera este programa?",
    default:
      "What types of BIM-related research deliverables are generated by this programme?",
    answers: [
      "Reports or guides",
      "Master theses",
      "Ph.D. dissertations",
      "Peer-reviewed papers",
      "Software tools",
      "Patents",
    ],
  },
  //this one is expected to have a variety answers
  {
    question_id: 1662416269554,
    es: "Identifique el repositorio o repositorios de acceso público para la investigación relacionada con BIM realizada por este programa:",
    default:
      "Please identify the publicly accessible repository(ies) for BIM-related research delivered by this programme:",
    answers: [],
  },
];

export const section34: any[] = [
  {
    question_id: 1662406986498,
    default:
      "Is there a published region-wide Learning Outcomes Taxonomy or similar document covering BIM learning and training topics?",
    answers: ["Yes", "No", "Not sure"],
    es: "¿Existe una Taxonomía de resultados de aprendizaje o documento similar publicado para toda la región que cubra los temas de aprendizaje y formación BIM?",
  },
  {
    question_id: 1662406986479,
    default:
      "Please identify the party(ies) that led or are leading the development of the region-wide, BIM-focused Learning Outcomes Taxonomy or similar documents:",
    answers: [
      "Government Bodies",
      "Academic Institutions",
      "Industry Associations",
      "Community Groups",
    ],
    es: "Por favor, identifique a la(s) parte(s) que ha(n) dirigido o está(n) dirigiendo el desarrollo de la Taxonomía de resultados de aprendizaje o documentos similares centrados en BIM para toda la región:",
  },
  {
    default:
      "Which BIM topics does the region-wide Learning Outcomes Taxonomy or similar document cover?",
    es: "¿Qué temas BIM cubre la Taxonomía de resultados del aprendizaje o documento similar de toda la región?",
    question_id: 1662406986481,
    answers: [
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
  },
  {
    default:
      "Please provide more information about the region-wide, BIM-focused Learning Outcomes Taxonomy or similar document:",
    es: "Por favor, proporcione más información sobre la Taxonomía de resultados de aprendizaje o documento similar centrado en BIM y de ámbito regional:",
    question_id: 1662406986480,
    answers: [],
  },
  {
    default:
      "Is there an Educational Framework to guide the teaching/learning of BIM topics within higher education institutions in your region?",
    es: "¿Existe un Marco Educativo que oriente la enseñanza/aprendizaje de temas BIM en las instituciones de educación superior de su región?",
    question_id: 1662403322493,
    answers: ["Yes", "No", "Not sure"],
  },
  {
    default:
      "Please identify the main elements of the Educational Framework intended to guide the teaching/learning of BIM topics within higher education institutions in your region:",
    es: "Por favor, identifique los principales elementos del Marco Educativo destinado a guiar la enseñanza/aprendizaje de temas BIM en las instituciones de educación superior de su región:",
    question_id: 1662403538117,
    answers: [
      "Identifies the overall benefits and provides basic guidance on how to develop BIM-focused educational programmes",
      "Identifies learning outcomes that generically apply across all disciplines and specialties",
      "Identifies learning outcomes by discipline - apply specifically to architectural, engineering, or construction management students",
      "Identifies specific learning outcomes that apply per year level  - apply to Year 1, 2 or 3",
    ],
  },
  {
    default:
      "Please identify the entity(ies) that issued or commissioned the BIM-focused Educational Framework for higher education institutions:",
    es: "Por favor, identifique la(s) entidad(es) que emitió(eron) o encargó(aron) el Marco Educativo centrado en BIM para instituciones de educación superior:",
    question_id: 1662403538118,
    answers: [],
  },
];

export const section5: any[] = [
  {
    question_id: 1662406986478,
    es: "¿Existen cursos breves de Formación BIM (por ejemplo, cursos de desarrollo profesional continuo) en su región?",
    default:
      "Are there short BIM Training courses (e.g., continuous professional development courses) available in your region?",
    answers: ["Yes", "No", "Not sure"],
  },
  {
    question_id: 1662416260169,
    es: "¿Qué instituciones imparten estos cursos de Formación BIM en su región?",
    default:
      "Which institutions provide these BIM Training courses in your region?",
    answers: [
      "Higher Education Institutions",
      "Technical colleges",
      "Technology services providers (e.g., software developers and resellers)",
      "Specialised training providers",
      "Industry bodies and associations",
      "Technology advocates (e.g., buildingSMART local chapter)",
      "Communities of practice (e.g., BIM user group)",
    ],
  },
  {
    question_id: 1662416269575,
    es: "¿Qué tipo de contenidos se imparten en los cursos breves de Formación BIM?",
    default:
      "What type of content is delivered in the short BIM Training courses?",
    answers: [
      "General BIM-related concepts (e.g., terminology, value and impact, interoperability, etc.)",
      "How to use BIM software tools on projects (e.g., using model authoring tools to design)",
      "How to conduct BIM processes on projects (e.g., clash detection analysis)",
      "How to apply national/ international information management standards on projects (EIR, CDE, etc.)",
      "How to implement BIM in organisation/projects",
    ],
  },
  {
    question_id: 1662416269584,
    es: "¿Existen cursos cortos de Formación BIM acreditados/certificados por organismos de acreditación?",
    default:
      "Are there short BIM Training courses accredited/certified by accreditation bodies?",
    answers: ["Yes", "No", "Not sure"],
  },
  //this one is expected to have a variety answers
  {
    question_id: 1662416269547,
    es: "Por favor, identifique los organismos de acreditación que han certificado/acreditado esos cursos cortos de Formación BIM:",
    default:
      "Please identify the accreditation bodies that have certified/accredited those short BIM Training courses:",
    answers: [],
  },
];

export const section6: any[] = [
  {
    question_id: 1696216528318,
    es: "¿Existe alguna colaboración formal entre la academia, el gobierno y/o la industria con el fin de mejorar la Competencia BIM?",
    default:
      "Is there any formal collaboration between academia, government and/or industry for the purposes of improving BIM Competency?",
    answers: ["Yes", "No", "Not sure"],
  },
  {
    question_id: 1696216897343,
    es: "¿Qué cubre esta colaboración formal entre la academia, el gobierno y/o la industria con respecto a la Competencia BIM?",
    default:
      "What does this formal collaboration between academia, government and/or industry cover with respect to BIM competency?",
    answers: [
      "Improving the BIM competence of students with the assistance of practicing professionals",
      "Improving the BIM competence of practicing professionals with the assistance of academic institutions",
      "Conducting joint research in BIM-specific topics",
      "Organising or delivering a BIM-focused conference, seminar or similar",
    ],
  },
  {
    question_id: 1696217569183,
    es: "Por favor, identifique las partes incluidas en esta colaboración formal entre la academia, el gobierno y/o la industria que cubre la Competencia BIM:",
    default:
      "Please identify the parties included in this formal collaboration between academia, government and/or industry covering BIM competency:",
    answers: [
      "Government or governmental authorities",
      "Design or construction companies",
      "Facility owners or operators",
      "Regional or national professional associations (e.g., architectural association or engineering body)",
      "Regional or national research, standards or codes' bodies",
      "Local, regional or national not-for-profit entities (e.g., communities of practice, local buildingSMART chapter, or similar)",
      "International not-for-profit entities (e.g., buildingSMART International, BIMe Initiative, World Bank, or similar)",
    ],
  },
  //this one is expected to have a variety answers
  {
    question_id: 1696216665638,
    es: "Proporcione más información sobre los objetivos y resultados de la colaboración formal entre el mundo académico, el gobierno y/o la industria con el fin de mejorar la Competencia BIM:",
    default:
      "Please provide more information about the objectives and deliverables of the formal collaboration between academia, government and/or industry for the purposes of improving BIM competency:",
    answers: [],
  },
];
