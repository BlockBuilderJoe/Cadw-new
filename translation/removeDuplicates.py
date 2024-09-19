
def remove_duplicate_lines(file_path):
    # Read all lines from the file
    with open(file_path, 'r') as file:
        lines = file.readlines()

    # Remove duplicates while preserving order
    unique_lines = []
    seen = set()
    for line in lines:
        if line not in seen:
            seen.add(line)
            unique_lines.append(line)

    # Write the unique lines back to the file
    with open(file_path, 'w') as file:
        file.writelines(unique_lines)

    print(f"Duplicate lines removed from {file_path}")

# Example usage:
# remove_duplicate_lines('path/to/your/file.txt')
remove_duplicate_lines('missing_translations.txt')