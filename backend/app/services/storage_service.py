def store_job_description(job_description):
    import os
    try:
        folder_name ="uploads"
        folder_path = os.path.join("/Users/mohithill/Desktop/ai-resume-analyzer/",folder_name)
        job_description_file = "job_description.txt" 
        job_description_file_path = os.path.join(folder_path,job_description_file)
        os.makedirs(folder_path,exist_ok=True)
        print(f"Directory '{folder_name}' created")
    except FileExistsError:
        print("Error: In store_job_description")

    try:
        with open(job_description_file_path, "w") as file:
            file.write(job_description)
        print(f"file '{job_description_file}' created")

        return job_description_file_path
    except FileExistsError:
        print("Error: In store_job_description (wr)")




def store_file_content(res_file_content,res_file_name):
    import os
    try:
        folder_name ="uploads"
        folder_path = os.path.join("/Users/mohithill/Desktop/ai-resume-analyzer/",folder_name)
        file_path = os.path.join(folder_path,res_file_name)
        os.makedirs(folder_path,exist_ok=True)
        print(f"Directory '{folder_name}' created")
    except FileExistsError:
        print("Error: In store_file_content")

    try:
        with open(file_path, "wb") as file:
            file.write(res_file_content)
            return file_path
    except Exception as e:
        print("Error in store_file_content (wr)", e)

    
       
