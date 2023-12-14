import regex as re
newline = []
#open the file /Users/joe/Desktop/Translation/latest_texts/combined_file.lang
with open ("/Users/joe/Desktop/Translation/latest_texts/combined_file.lang") as f:
    content = f.readlines()
    for line in content:
        if "=" in line:
            line = re.sub(r"=.*", "=a", line)
        newline.append(line)

#write to file
with open("latest_texts/edited_file.lang", "w") as f:
    for line in newline:
        f.write(line)
    


      