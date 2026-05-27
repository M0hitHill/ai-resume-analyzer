# AI Resume Analyzer

AI-powered ATS Resume Analyzer built with FastAPI, modular frontend architecture, and Google Gemini AI.

This project analyzes resumes against job descriptions and generates:
- ATS compatibility scores
- skill matching analysis
- missing skill detection
- AI-generated recommendations
- resume summaries

The application is designed with scalable backend and frontend architecture principles.

---

# Features

## Resume Analysis
- Upload PDF resumes
- Extract resume text from PDFs
- Analyze resumes against job descriptions
- Generate ATS-style compatibility score

## AI-Powered Insights
- Resume summarization
- Skill extraction
- Missing skill detection
- AI-generated improvement recommendations

## Frontend
- Responsive modern dashboard UI
- Component-based frontend architecture
- Loading states and error handling
- Animated SaaS-style interface
- Modular CSS architecture

## Backend
- FastAPI backend architecture
- Modular services and routes
- Environment variable management
- AI service separation
- Structured API layer

---

# Tech Stack

## Backend
- Python
- FastAPI
- Google Gemini API
- PyMuPDF
- python-dotenv

## Frontend
- HTML5
- CSS3
- Vanilla JavaScript

## Architecture
- Modular frontend system
- Component-based rendering
- API abstraction layer
- UI state management structure

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
