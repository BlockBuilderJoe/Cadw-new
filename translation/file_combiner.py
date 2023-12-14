import pandas as pd
from docx import Document

# Excel document path
file_path = "New_Translation/new_folder/Minecraft_Translations_26.11.23.xlsx"
data = pd.read_excel(file_path)
translated_list = []
missing_text_list = []
# Convert the 'Full text' column to a list of strings
full_text_list = data['Full text'].tolist()
# Split each string at the '=' character and take the first part
full_text_list = [text.split('=')[0] for text in full_text_list]
#word document path
file_path = "/Users/joe/Documents/GitHub/Cadw-new/New_Translation/new_folder/Welsh Translation Project Nov 23.docx"
document = Document(file_path)
#make the document a list of strings
document = [paragraph.text for paragraph in document.paragraphs]
#remove any empty strings from the list
document = list(filter(None, document))
#split each string at the '=' character and take the first part
first_Line_document = [text.split('=')[0] for text in document]
#append the document to the full_text_list
full_text_list.extend(first_Line_document)
# Convert the list to a set
translated = set(full_text_list)
missing_count = 0

with open("New_Translation/latest_texts/master_file.lang", "r") as master_file:
    #read the master file
    master_file_lines = master_file.readlines()
    #remove any empty strings from the list
    master_file_lines = list(filter(None, master_file_lines))
    #read the lines of the master file
    master_file_edited = [line.split('=')[0].strip() for line in master_file_lines]    #convert the master file to a set
    untranslated = set(master_file_edited)
    common_elements = translated.intersection(untranslated)
    missing_elements = untranslated.difference(translated)
    print("The number of common elements is: " + str(len(common_elements)))
    print("The number of missing elements is: " + str(len(missing_elements)))
    print(missing_elements)
    for line in master_file_lines:
        if line.split('=')[0].strip() in missing_elements:
            missing_text = line
            missing_text = missing_text.replace('\\t', '')
            if missing_text[-1] == '#':
                missing_text = missing_text[:-1]
            missing_text_list.append(missing_text)

#iterates throught the excel file and adds the translated text to a list
for index, row in data.iterrows():
    if row['Full text'].split('=')[0].strip() in common_elements:
        translated_text = f"{row['Full text'].split('=')[0].strip()}={row['Cymraeg']}"
        translated_text = translated_text.replace('\\t', '')
        #remove any hashtags from the translated text if it is the last character
        if translated_text[-1] == '#':
            translated_text = translated_text[:-1]
        translated_list.append(translated_text)

#if the text is not in the common elements list, add it to the missing elements list
for line in document:
    if line.split('=')[0].strip() in common_elements:
        word_translated_text = line
        word_translated_text = word_translated_text.replace('\\t', '')
        if word_translated_text[-1] == '#':
            word_translated_text = word_translated_text[:-1]
        translated_list.append(word_translated_text)

#remove any spaces between the first = and any characters
translated_list = [line.replace('= ', '=') for line in translated_list]
filtered_missing_list = [line for line in missing_text_list if line.strip()] #write the translated list to a file
no_hashtag = [line for line in filtered_missing_list if not line.startswith('#')]


# combine the two lists and write to excel with the full line in a Full_text column the english in the English column and the welsh in the Cymraeg column
combined_list = translated_list + no_hashtag

with open("New_Translation/latest_texts/new_translated.lang", "w") as translated_file:
    for line in translated_list:
        translated_file.write(line + '\n')

#write the missing elements to a file
with open("New_Translation/latest_texts/missing_elements.lang", "w") as missing_file:
    for line in no_hashtag:
        missing_file.write(line)



