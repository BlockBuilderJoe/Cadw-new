import os

def read_lang_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.readlines()

def get_entries(content):
    entries = {}
    for line in content:
        line = line.strip()
        if '=' in line:
            key, value = line.split('=', 1)
            entries[key.strip()] = line
    return entries

def find_missing_translations(latest_lang_pack_dir, cy_cy_file, output_file):
    cy_cy_content = read_lang_file(cy_cy_file)
    cy_cy_entries = get_entries(cy_cy_content)

    missing_translations = {}

    for root, dirs, files in os.walk(latest_lang_pack_dir):
        for file in files:
            if file.endswith('.lang'):
                lang_file_path = os.path.join(root, file)
                lang_content = read_lang_file(lang_file_path)
                lang_entries = get_entries(lang_content)
                
                for key, line in lang_entries.items():
                    if key not in cy_cy_entries:
                        missing_translations[key] = line

    with open(output_file, 'w', encoding='utf-8') as f:
        for key in sorted(missing_translations.keys()):
            f.write(f"{missing_translations[key]}\n")

    print(f"Missing translations saved to {output_file}")

# Usage
latest_lang_pack_dir = 'latest_language_pack/'
cy_cy_file = 'Cadw/texts/cy_CY.lang'
output_file = 'missing_translations.txt'

find_missing_translations(latest_lang_pack_dir, cy_cy_file, output_file)
