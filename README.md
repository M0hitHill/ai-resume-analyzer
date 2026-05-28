# AI Resume Analyzer

AI-powered ATS Resume Analyzer built with FastAPI, modular frontend architecture, and Google Gemini AI.

This project analyzes resumes against job descriptions and generates:

* ATS compatibility scores
* Skill matching analysis
* Missing skill detection
* AI-generated recommendations
* Resume summaries

The application is designed with scalable backend and frontend architecture principles.

---

# Features

## Resume Analysis

* Upload PDF resumes
* Extract resume text from PDFs
* Analyze resumes against job descriptions
* Generate ATS-style compatibility score

## AI-Powered Insights

* Resume summarization
* Skill extraction
* Missing skill detection
* AI-generated improvement recommendations

## Frontend

* Responsive modern dashboard UI
* Component-based frontend architecture
* Loading states and error handling
* Animated SaaS-style interface
* Modular CSS architecture

## Backend

* FastAPI backend architecture
* Modular services and routes
* Environment variable management
* AI service separation
* Structured API layer

---

# Tech Stack

## Backend

* Python
* FastAPI
* Google Gemini API
* PyMuPDF
* python-dotenv

## Frontend

* HTML5
* CSS3
* Vanilla JavaScript

## Architecture

* Modular frontend system
* Component-based rendering
* API abstraction layer
* UI state management structure

---

# Project Structure

```bash
ai-resume-analyzer/
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── prompts/
│   │   └── main.py
│
├── frontend/
│   ├── js/
│   │   ├── api/
│   │   ├── components/
│   │   ├── config/
│   │   ├── state/
│   │   └── utils/
│   │
│   ├── styles/
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── utilities.css
│   │   ├── animations.css
│   │   └── themes.css
│   │
│   ├── index.html
│   └── app.js
│
├── uploads/
├── .env
├── .gitignore
├── requirements.txt
└── README.md
```

---

# API Endpoint

## Analyze Resume

```http
POST /analyze
```

### Form Data

| Field           | Type     |
| --------------- | -------- |
| resume          | PDF File |
| job_description | String   |

---

# Example Response

```json
{
  "candidate_name": "John Doe",
  "ats_score": 82,
  "summary": "Backend developer with FastAPI experience.",
  "matched_skills": [
    "Python",
    "FastAPI",
    "REST APIs"
  ],
  "missing_skills": [
    "Docker",
    "AWS"
  ],
  "recommendations": [
    "Add Docker projects",
    "Highlight backend architecture experience"
  ]
}
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/M0hitHill/ai-resume-analyzer.git
```

## Navigate To Project

```bash
cd ai-resume-analyzer
```

## Create Virtual Environment

```bash
python -m venv .venv
```

## Activate Virtual Environment

### macOS/Linux

```bash
source .venv/bin/activate
```

### Windows

```bash
.venv\Scripts\activate
```

---

# Install Dependencies

```bash
pip install -r requirements.txt
```

---

# Environment Variables

Create `.env` file in root directory:

```env
GOOGLE_API_KEY=your_google_gemini_api_key
```

---

# Run Backend

```bash
uvicorn backend.app.main:app --reload
```

---

# Run Frontend

Open:

```txt
frontend/index.html
```

with Live Server.

---

# Current Development Goals

* JWT authentication
* Resume history system
* PostgreSQL integration
* Docker deployment
* Async processing pipeline
* Drag-and-drop uploads
* ATS analytics dashboard
* Resume version tracking

---

# Future Improvements

* React frontend migration
* Authentication system
* User dashboards
* Resume history database
* AI interview preparation tools
* Multi-resume comparison
* Advanced ATS scoring engine
* Cloud deployment

---

# Screenshots

Add screenshots here after UI completion.

---

# Demo Video

Add demo video link here.

---

# Security Notes

* `.env` is ignored using `.gitignore`
* API keys are never hardcoded
* Uploaded resumes are excluded from Git tracking

---

# Author

## Mohit Hill

* GitHub: [https://github.com/M0hitHill](https://github.com/M0hitHill)
* LinkedIn: [https://linkedin.com/in/YOUR-LINK](https://linkedin.com/in/YOUR-LINK)

---

# License

MIT License
