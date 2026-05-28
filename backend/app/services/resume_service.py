from services.storage_service import store_job_description,store_file_content

from services.parser_service import extract_text_from_pdf

from services.ai_service import analyze_resume_with_ai

from prompts.ats_prompt import ATS_PROMPT


async def analyze_resume_service(
    resume,
    job_description
):

    store_job_description(
        f"Job Description: {job_description}"
    )

    saved_path = store_file_content(
        await resume.read(),
        resume.filename
    )

    full_text = extract_text_from_pdf(saved_path)

    final_prompt = ATS_PROMPT

    final_prompt = final_prompt.replace(
        "<<RESUME_TEXT>>",
        full_text
    )

    final_prompt = final_prompt.replace(
        "<<JOB_DESCRIPTION>>",
        job_description
    )


    analysis = analyze_resume_with_ai(
        final_prompt
    )
    # print(analysis)

    return analysis