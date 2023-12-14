with open ("/Users/joe/Desktop/Translation/latest_texts/translated.lang") as f:
    content = f.readlines()
    combined_file = [line for line in content if line.strip()]
    combined_file = [line.split('=')[0].strip() for line in combined_file]

combined_file = set(combined_file)
untranslated_list = []

with open ("/Users/joe/Desktop/Translation/latest_texts/master_file.lang") as f:
    content = f.readlines()
    master_file = [line for line in content if line.strip()]
    master_file = [line.split('=')[0].strip() for line in master_file]

master_file = set(master_file)

untranslated = master_file.difference(combined_file)

print("The number of untranslated elements is: " + str(len(untranslated)))

print(untranslated)

for line in content :
    if line.split('=')[0].strip() in untranslated:
        untranslated_list.append(line)

#write to file
with open("latest_texts/untranslated.lang", "w") as f:
    for line in untranslated_list:
        f.write(line)

        