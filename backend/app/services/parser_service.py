def extract_text_from_pdf(name_pdf):
    import fitz
    full_text = ""
    doc = fitz.open(name_pdf)
    for page in doc:
        full_text += page.get_text()
    # print(full_text)
    return(full_text)