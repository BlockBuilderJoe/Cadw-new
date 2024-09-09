def read_lang_file(file_path):
    """Read a lang file and return its content as a list of lines."""
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.readlines()

def parse_lang_entries(content):
    """Parse lang file content into a dictionary of key-value pairs."""
    entries = {}
    for line in content:
        line = line.strip()
        if '=' in line:
            key, value = line.split('=', 1)
            entries[key] = value
        else:
            # Preserve comments and empty lines
            entries[line] = None
    return entries

def merge_lang_entries(existing_entries, new_entries):
    """Merge new entries into existing entries, updating duplicates."""
    for key, value in new_entries.items():
        existing_entries[key] = value
    return existing_entries

def write_combined_lang_file(output_file, entries):
    """Write the combined entries to the output file."""
    with open(output_file, 'w', encoding='utf-8') as f:
        for key, value in entries.items():
            if value is None:
                f.write(f"{key}\n")
            else:
                f.write(f"{key}={value}\n")

def combine_lang_files(to_add_file, cy_cy_file):
    """Combine two lang files, replacing duplicates in the original file."""
    # Read and parse existing cy_CY.lang file
    cy_cy_content = read_lang_file(cy_cy_file)
    existing_entries = parse_lang_entries(cy_cy_content)

    # Read and parse to_add.lang file
    to_add_content = read_lang_file(to_add_file)
    new_entries = parse_lang_entries(to_add_content)

    # Merge entries
    combined_entries = merge_lang_entries(existing_entries, new_entries)

    # Write combined entries to output file
    write_combined_lang_file(cy_cy_file, combined_entries)

# Usage (translation to add, translated file)
combine_lang_files('translation/to_add.lang', 'translation/Cadw/texts/cy_CY.lang')
