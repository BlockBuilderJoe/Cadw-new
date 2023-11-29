with open("/Users/joe/Documents/GitHub/Cadw-new/New_Translation/latest_texts/new_translated.lang") as f:
    translated = f.readlines()
    translated = [line for line in translated if line.strip()]

with open("/Users/joe/Documents/GitHub/Cadw-new/New_Translation/latest_texts/master_file.lang") as f:
    master_file = f.readlines()
    master_file = [line for line in master_file if line.strip()]

master_file_index = [line.split('=')[0].strip() for line in master_file]
translated_index = [line.split('=')[0].strip() for line in translated]

#when the index of the master file matches add the [1] element to the translated list
for line in master_file_index:
    if line in translated_index:
        translated_index.append(line)
        translated_index.append(master_file_index.index(line))
        translated_index.append(master_file[master_file_index.index(line)])
        translated_index.append(translated[translated_index.index(line)])
        print(translated_index)
        translated_index = []
        

    
  