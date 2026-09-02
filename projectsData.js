export const projectsData = [
  {
    id: "fake-review-detection",
    title: "FAKE REVIEW DETECTION",
    category: "Machine Learning / NLP",
    year: "2026",
    shortDescription: "A Python machine learning pipeline leveraging TF-IDF feature extraction and Random Forest classification to verify review authenticity across 40,432 records.",
    overview: "Built as an academic data science case study using Python and Jupyter Notebooks (`DSC_project_latest.ipynb`). Conducts text normalization, duplicate removal, vectorization, and model evaluation across multiple classifiers.",
    context: "Academic Machine Learning Project / Data Science Coursework",
    datasetInfo: "40,432 Review Records",
    flowchart: [
      "Dataset Ingestion",
      "Data Cleaning & Deduplication",
      "NLTK Text Preprocessing",
      "TF-IDF Feature Extraction",
      "Model Training (Random Forest)",
      "Classification Prediction"
    ],
    techniques: ["TF-IDF Vectorization", "Random Forest", "Naive Bayes", "XGBoost", "Feature Engineering"],
    metrics: [
      { model: "Naive Bayes", accuracy: "85.08%" },
      { model: "Random Forest Classifier", accuracy: "85.66%" },
      { model: "XGBoost Classifier", accuracy: "81.43%" },
      { model: "Enhanced Random Forest", accuracy: "85.66%" }
    ],
    problem: "E-commerce platforms suffer from spam and deceptive text reviews, making automated sentiment and review authenticity verification essential.",
    approach: "Engineered an end-to-end ML pipeline with NLTK for text cleaning (lowercasing, punctuation stripping, stopword removal) and TF-IDF (max_features=5000) feature scaling.",
    solution: "Constructed a Scikit-Learn ColumnTransformer pipeline combining TF-IDF text features with numerical metadata scaling to compare model precision across classifiers.",
    technologies: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Scikit-learn", "NLTK", "TF-IDF", "Random Forest"],
    features: [
      "Dataset preprocessing pipeline handling 40,432 records and duplicate removal",
      "NLTK text normalization (lowercasing, stopword removal, stemming)",
      "ColumnTransformer uniting TF-IDF text vectors with metadata feature scaling",
      "Model comparison metrics: Naive Bayes (85.08%), Random Forest (85.66%), XGBoost (81.43%)",
      "Classification reports and confusion matrices for model accuracy analysis"
    ],
    howItWorks: "1. Dataset loaded into Pandas, missing values handled, and duplicates dropped.\n2. Text fields cleaned via NLTK and converted to numerical n-gram vectors using TfidfVectorizer.\n3. ColumnTransformer scales combined features into Random Forest / Naive Bayes classifiers.\n4. Model predictions evaluated against test datasets.",
    challenges: "Optimizing TF-IDF max_features and n-gram parameters to balance classification accuracy against computational overhead.",
    learning: "Gained practical experience in NLP preprocessing, Scikit-learn Pipeline construction, ColumnTransformer, and classifier metric evaluation.",
    myContribution: "Wrote preprocessing functions, constructed ColumnTransformer pipeline, tuned classifier parameters, and compiled model performance metrics.",
    githubUrl: null,
    liveUrl: null,
    faq: [
      {
        q: "What dataset was used?",
        a: "A dataset of 40,432 review records, cleaned for duplicate removal and text normalization."
      },
      {
        q: "What model accuracies were achieved?",
        a: "Random Forest achieved 85.66% accuracy, Naive Bayes 85.08%, and XGBoost 81.43%."
      },
      {
        q: "What technologies were used?",
        a: "Python, Scikit-learn, Pandas, NumPy, NLTK, TF-IDF Vectorizer, and Random Forest."
      }
    ]
  },

  {
    id: "credit-card-dashboard",
    title: "CREDIT CARD USAGE DASHBOARD",
    category: "Power BI / Data Analytics",
    year: "2025",
    shortDescription: "An interactive Power BI financial analytics dashboard tracking credit card spending behavior, transaction categories, credit limits, and security risk distributions.",
    overview: "A data analytics project converting raw credit card transaction data into visual executive insights using Power BI, Power Query, and DAX measures.",
    context: "Data Analytics Case Study / Power BI Financial Modeling",
    datasetInfo: "Multi-Category Credit Card Transactions",
    flowchart: [
      "CSV Data Ingestion",
      "Power Query ETL Transformations",
      "DAX Measures & KPIs",
      "Data Model Relationships",
      "Interactive Dashboard Reports"
    ],
    problem: "Raw financial transaction records in spreadsheets make spending trends, credit limit utilization, and security anomaly risks hard to visualize.",
    approach: "Combined Python Pandas pre-processing with Power Query M-code transformations to clean raw card records, authoring DAX calculations to model metrics dynamically.",
    solution: "Developed an interactive Power BI dashboard featuring KPI cards, category breakdown charts, expiration timeline slicers, credit limit distributions, and dark web exposure indicators.",
    technologies: ["Microsoft Power BI", "DAX", "Power Query", "Data Preparation", "Data Analysis", "Pandas"],
    features: [
      "Interactive KPI cards tracking total spending, credit limit averages, and risk flags",
      "Dynamic filtering by account opening date, expiration month, and chip status",
      "Category distribution charts highlighting consumer spending patterns",
      "Data cleaning pipeline stripping invalid currency characters and duplicate records",
      "Security risk segmentation evaluating dark web exposure metrics"
    ],
    howItWorks: "1. Raw transaction data ingested into Power Query for transformation.\n2. Dates standardized and currency symbols converted to numerical types.\n3. DAX measures compute spending averages and risk metrics.\n4. Power BI visual charts update dynamically on user filter selection.",
    challenges: "Standardizing inconsistent date formats and maintaining numerical precision during Power Query data transformations.",
    learning: "Strengthened expertise in Power Query ETL workflows, DAX measure calculation, data modeling, and visual report design.",
    myContribution: "Cleaned raw data, authored DAX measures, designed dashboard layout, and published analytical reports.",
    githubUrl: null,
    liveUrl: null,
    faq: [
      {
        q: "What problem does this dashboard solve?",
        a: "It converts complex raw transaction tables into visual executive charts for tracking spending behavior and security risks."
      },
      {
        q: "What tools were used?",
        a: "Microsoft Power BI, DAX formulas, Power Query M-code, and Python Pandas."
      }
    ]
  },

  {
    id: "smart-expense-tracker",
    title: "SMART EXPENSE TRACKER",
    category: "Web Application / PHP",
    year: "2024",
    shortDescription: "A web-based personal finance tracker built with HTML, CSS, JavaScript, and PHP for logging, categorizing, and monitoring daily expenditures.",
    overview: "A full-stack web application assisting users in logging daily financial transactions with real-time arithmetic calculations and category-wise spending summaries.",
    context: "Web Development / Full-Stack Fundamentals",
    flowchart: [
      "User Input Entry",
      "JS Form Validation",
      "PHP Server Processing",
      "Category Summarization",
      "UI Dashboard Update"
    ],
    problem: "Tracking daily personal expenses manually on paper or spreadsheets is tedious and prone to calculation errors.",
    approach: "Designed a clean web architecture with HTML/CSS frontend, JavaScript client validation, and PHP server POST processing.",
    solution: "Created a responsive dashboard for logging expense entries (Food, Travel, Bills, Entertainment) with dynamic budget tracking.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Web Backend Integration", "MySQL / Form Data"],
    features: [
      "Expense logging interface with date, title, amount, and category selection",
      "Category-wise spending breakdown with automated monthly summaries",
      "Server-side form validation and record handling built in PHP",
      "Responsive layout for mobile and desktop browser usage"
    ],
    howItWorks: "1. User submits an expense entry via the HTML web form.\n2. Client-side JS validates input values.\n3. PHP receives POST data, updates records, and calculates category spending.\n4. Dashboard UI updates instantly with new spending metrics.",
    challenges: "Enforcing consistent dual-layer validation on both client and server sides to prevent empty or invalid entries.",
    learning: "Gained foundational experience in web architecture, HTTP POST handling, PHP form validation, and responsive layout design.",
    myContribution: "Designed frontend UI, wrote JavaScript validation script, and authored PHP backend data processing.",
    githubUrl: null,
    liveUrl: null,
    faq: [
      {
        q: "What technologies were used?",
        a: "HTML5, CSS3, JavaScript, PHP, and server-side POST processing."
      }
    ]
  },

  {
    id: "smart-parking",
    title: "SMART PARKING SYSTEM",
    category: "IoT / Embedded Systems",
    year: "2025",
    shortDescription: "An IoT hardware prototype utilizing ultrasonic and infrared sensors to detect vehicle presence and monitor parking bay availability live.",
    overview: "An IoT hardware-software model designed to reduce urban traffic congestion by detecting vehicle occupancy at parking bays in real-time.",
    context: "IoT Hardware Model / Microcontroller Project",
    slotStatusPreview: [
      { slot: "P01", status: "FREE" },
      { slot: "P02", status: "OCCUPIED" },
      { slot: "P03", status: "FREE" },
      { slot: "P04", status: "OCCUPIED" }
    ],
    flowchart: [
      "Proximity Sensor Trigger",
      "Signal Distance Thresholding",
      "Microcontroller Processing",
      "Bay State Calculation",
      "LED & Status Indicator Update"
    ],
    problem: "Drivers spend excessive time searching for open parking spots in congested facilities due to a lack of live vacancy information.",
    approach: "Connected Ultrasonic and Infrared sensors to a central microcontroller to measure distance at individual parking bays.",
    solution: "Constructed a prototype sensor circuit that updates parking bay status (FREE / OCCUPIED) live based on vehicle proximity thresholds.",
    technologies: ["IoT Hardware", "Ultrasonic Sensors", "IR Sensors", "Microcontroller Logic", "LED Indicators", "C/C++ Embedded Logic"],
    features: [
      "Real-time vehicle presence detection using Ultrasonic & Infrared hardware sensors",
      "Automated slot allocation and live vacancy indication",
      "Reduced vehicle search time and improved facility traffic flow",
      "Instant dual-color LED status feedback (FREE / OCCUPIED)"
    ],
    howItWorks: "1. Ultrasonic/IR sensors mounted at parking bays measure proximity.\n2. Entering vehicles interrupt sensor beams below pre-set distance thresholds.\n3. Microcontroller processes signals and toggles slot occupancy state.\n4. Bay indicators switch between FREE and OCCUPIED status.",
    challenges: "Filtering sensor noise and ambient light reflections during hardware distance calibration.",
    learning: "Learned hardware-software signal interfacing, sensor threshold calibration, and embedded microcontroller logic.",
    myContribution: "Wired sensor circuits, authored microcontroller C/C++ thresholding logic, and conducted real-time bay testing.",
    githubUrl: null,
    liveUrl: null,
    faq: [
      {
        q: "How does the vehicle detection work?",
        a: "Ultrasonic and IR sensors measure distance at each slot. When a vehicle blocks the beam below a set threshold, the status updates."
      },
      {
        q: "What hardware was used?",
        a: "Ultrasonic sensors, IR sensors, microcontroller, C/C++ embedded code, and status LEDs."
      }
    ]
  },

  {
    id: "reminder-app",
    title: "REMINDER MOBILE APPLICATION",
    category: "Android / Java SDK",
    year: "2025",
    shortDescription: "A native Android task manager built in Java featuring category metrics (Today, Urgent, All, Completed), date/time pickers, and local task storage.",
    overview: "A native Android task application designed in Android Studio with Java. Offers card-based task metrics, custom date-time pickers, and persistent local storage.",
    context: "Android Application Development / Mobile SDK Project",
    previewCard: { title: "Team Sync", time: "10:30 AM", date: "Tomorrow", notification: "Enabled" },
    flowchart: [
      "User Launch & Metric Load",
      "FAB Reminder Creation",
      "Date / Time Dialog Selection",
      "SharedPreferences Serialization",
      "Dashboard Metric Refresh"
    ],
    problem: "Generic task applications are often cluttered, making rapid daily task creation and priority review slow.",
    approach: "Structured Android XML layouts using ConstraintLayout and CardView, backing UI components with Java activity handlers and SharedPreferences.",
    solution: "Built a native Android task management app with category counters, quick reminder entry, date-time dialogs, and local data persistence.",
    technologies: ["Java", "Android SDK", "Android Studio", "XML Layouts", "SharedPreferences", "ConstraintLayout"],
    features: [
      "Dashboard metrics displaying live counts for Today, All, Urgent, and Completed tasks",
      "Floating Action Button (FAB) for instant reminder creation",
      "Date and Time picker dialogs for custom notification scheduling",
      "Local task persistence using SharedPreferences serialization",
      "Category filtering interface for clear task organization"
    ],
    howItWorks: "1. App loads dashboard metrics for active reminder categories.\n2. User taps FAB to open AddReminderActivity for title, deadline date/time, and urgency.\n3. Reminders serialize into SharedPreferences.\n4. MainActivity refreshes task counts during activity lifecycle updates.",
    challenges: "Synchronizing task counters across Android activity transitions without stale UI states.",
    learning: "Mastered Android Activity lifecycles (onCreate, onResume), ConstraintLayout XML design, and SharedPreferences storage.",
    myContribution: "Authored XML layouts (`activity_main.xml`), wrote Java activity logic (`MainActivity.java`), and created local storage mapping.",
    githubUrl: null,
    liveUrl: null,
    faq: [
      {
        q: "What technologies were used?",
        a: "Java, Android SDK, Android Studio, XML Layouts, and SharedPreferences."
      },
      {
        q: "How are task records stored?",
        a: "Tasks serialize into Android SharedPreferences key-value string sets."
      }
    ]
  },

  {
    id: "library-management",
    title: "LIBRARY MANAGEMENT SYSTEM",
    category: "Python / OOP / CSV Data",
    year: "2024",
    shortDescription: "A Python console application demonstrating Object-Oriented Programming (OOP) principles, modular architecture, and file-based book inventory operations.",
    overview: "A modular Python system for cataloging library books, issuing titles to members, accepting returns, and modifying inventory records via a menu console.",
    context: "Python Application / Modular OOP Project",
    modules: ["Book.py (Library Class)", "Members.py (Student Class)", "Main Menu Program", "CSV Inventory Storage"],
    flowchart: [
      "Console Menu Launch",
      "User Action Selection",
      "OOP Class Execution",
      "Availability Array Update",
      "CSV File Persistence"
    ],
    problem: "Small institutional libraries need a simple, reliable tool to manage book cataloging and borrowing without heavy commercial software.",
    approach: "Decoupled application logic into modular Python classes (`Library`, `Student`, `Book.py`, `Members.py`) with CSV file persistence.",
    solution: "Created a structured Python program supporting core operations: Add, Modify, Delete, Search, List, Issue, and Return books.",
    technologies: ["Python 3", "Object-Oriented Programming (OOP)", "File I/O / CSV Handling", "IDLE / Terminal", "Modular Architecture"],
    features: [
      "Menu-driven interface supporting List, Add, Modify, Delete, Search, Issue, and Return",
      "Add new book records with author, title, and availability attributes",
      "Modify existing book records and delete retired titles from inventory",
      "Search book titles with immediate availability verification",
      "Modular class architecture split into dedicated Python files"
    ],
    howItWorks: "1. Program instantiates Library and Student objects.\n2. Menu prompts user to select action (List, Issue, Return, Add, Search, Delete).\n3. OOP methods execute selected logic and update CSV records immediately.",
    challenges: "Handling concurrent borrow requests and preventing duplicate book issuing in program memory.",
    learning: "Deepened practical understanding of Object-Oriented Programming (Classes, Methods, Encapsulation) and Python File I/O.",
    myContribution: "Designed OOP class abstractions, structured modular files (`Book.py`, `Members.py`), and wrote menu loop logic.",
    githubUrl: null,
    liveUrl: null,
    faq: [
      {
        q: "What technologies were used?",
        a: "Python 3, Object-Oriented Programming (OOP), Modular Files (`Book.py`, `Members.py`), and CSV Data Handling."
      },
      {
        q: "What operations does it perform?",
        a: "Add book, Modify book, Delete book, Search book, List all books, Issue book, Return book."
      }
    ]
  }
];
