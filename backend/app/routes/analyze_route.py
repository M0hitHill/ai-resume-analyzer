from fastapi import APIRouter, UploadFile, File, Form

from services.resume_service import (
    analyze_resume_service
)

router = APIRouter()


@router.post("/analyze")
async def analyze_resume(
    resume: UploadFile = File(),
    job_description: str = Form()
):

    if resume.content_type != "application/pdf":
        return {
            "error": "Only PDF files are allowed"
        }

    try:

        analysis = await analyze_resume_service(
            resume,
            job_description
        )
        print(analysis)
        return analysis

    except Exception as e:
        return {
            "error": str(e)
        }