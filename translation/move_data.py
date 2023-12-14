import pandas as pd
# Define the file path. Replace this with your actual file path
file_path = "/Users/joe/Desktop/Translation/Manons Translation v.1.xlsx"
data = pd.read_excel(file_path)
language_list = []
Full_text = data['Full text']
for index, row in data.iterrows():
    #replace the English with the Cymraeg in the Full_text
     newline = row["Full text"].replace(row["English"], row["Cymraeg"])
     #remove /t
     newline = newline.replace("\\t", "")
     language_list.append(newline)
with open("/Users/joe/Desktop/Translation/Cadw test/texts/cy_CY.lang", "w") as f:
    for line in language_list:
        f.write(line + "\n")
