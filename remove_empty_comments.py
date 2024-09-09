def remove_empty_comments(input_file):
    with open(input_file, 'r', encoding='utf-8') as infile:
        lines = infile.readlines()

    filtered_lines = []
    for line in lines:
        if '##' in line:
            line = line.split('##')[0].strip() + '\n'
        if line.strip() not in ['#', '##']:
            filtered_lines.append(line)

    with open(input_file, 'w', encoding='utf-8') as outfile:
        outfile.writelines(filtered_lines)

# Usage
input_file = 'translation/Cadw/texts/cy_CY.lang'
remove_empty_comments(input_file)

print(f"Processed {input_file}")

