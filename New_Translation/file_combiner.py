import pandas as pd

# Define the file path. Replace this with your actual file path
file_path = "/Users/joe/Documents/GitHub/Cadw-new/Translation/Barrys_Translation.xlsx"
data = pd.read_excel(file_path)
translated_list = []
# Convert the 'Full text' column to a list of strings
full_text_list = data['Full text'].tolist()
# Split each string at the '=' character and take the first part
full_text_list = [text.split('=')[0] for text in full_text_list]
# Convert the list to a set
translated = set(full_text_list)

with open("latest_texts/master_file.lang", "r") as master_file:
    #read the lines of the master file
    master_file = [line.split('=')[0].strip() for line in master_file]
    
untranslated = set(master_file)
common_elements = translated.intersection(untranslated)

print("The number of common elements is: " + str(len(common_elements)))

for index, row in data.iterrows():
    if row['Full text'].split('=')[0].strip() in common_elements:
        translated_text = f"{row['Full text'].split('=')[0].strip()}={row['Cymraeg']}"
        translated_text = translated_text.replace('\\t', '')
        translated_list.append(translated_text)

#write the translated list to a file
with open("latest_texts/translated.lang", "a") as translated_file:
    for line in translated_list:
        translated_file.write(line + '\n')