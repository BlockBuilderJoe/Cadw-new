import glob
import regex as re
import os
#Combines the .lang files into one file

# Specify the path to the directory
directory_path = "/Users/joe/Desktop/Translation/latest_texts"
file_to_write = "/Users/joe/Desktop/Translation/latest_texts/combined_file.lang"

#delete the file if it already exists
try:
    os.remove(file_to_write)
except:
    pass
# Use glob to get all .lang files in the directory
lang_files = glob.glob(directory_path + "/*.lang")
combined = []
edited_list = []
# Now you can iterate over the files and read them
for file in lang_files:
    with open(file, 'r') as f:
        content = f.read()
        #add content to a list
        combined.append(content)
        
#remove any duplicate lines in the list
combined = list(set(combined))

#write to file
with open("latest_texts/combined_file.lang", "w") as f:
    for line in combined:
        f.write(line + "\n")
    

#replace everything after a = with the letter a
