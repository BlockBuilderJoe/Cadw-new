import pandas as pd

# Path to your original Excel file
excel_file = 'npc.xlsx'

# Read the CSV file
try:
    df = pd.read_excel(excel_file, sheet_name='Sheet1')  # Specify sheet name if needed
    print(f"Successfully read '{excel_file}' with {len(df)} rows.")
except FileNotFoundError:
    print(f"Error: The file '{excel_file}' does not exist.")
    exit(1)
except Exception as e:
    print(f"An error occurred while reading the Excel file: {e}")
    exit(1)

# Print column names to verify
print("DataFrame Columns:", df.columns.tolist())

# Define the columns to check
columns_to_check = [
    'Command Button 1',
    'Command Button 2',
    'Command Button 3',
    'Command Button 4',
    'Command Button 5',
    'Command Button 6',
    'Command',       # Welsh Command 1
    'Command.1',     # Welsh Command 2
    'Command.2',     # Welsh Command 3
    'Command.3',     # Welsh Command 4
    'Command.4',     # Welsh Command 5
    'Command.5'      # Welsh Command 6
]

def check_http(row, count):
    messages = []
    new_rows = []
    for col_name in columns_to_check:
        if col_name in df.columns:
            try:
                cell_value = str(row[col_name]).lower()
            except KeyError:
                messages.append(f"Row {row.name + 1} does not have a column named '{col_name}'.")
                continue

            if 'http' in cell_value:

                # Access 'Scene' and 'NPC Tag' using column names
                try:
                    scene = row['Scene']
                    tag = row['NPC Tag']
                except KeyError:
                    messages.append(f"Row {row.name + 1} does not have 'Scene' or 'NPC Tag' columns.")
                    continue

                # Create a new scene name

                sceneName = f"{scene}url{count}"
                count += 1
                # Prepare the new value
                new_value = f"dialogue open @e[tag={tag}] @p {sceneName}"

                # Update the cell
                try:
                    df.at[row.name, col_name] = new_value
                    messages.append(f"Updated Row {row.name + 1}, Column '{col_name}' to: {new_value}")

                    # Prepare new row data
                    new_row_data = row.copy()
                    new_row_data[:] = ''
                    new_row_data['Scene'] = sceneName
                    new_row_data['Text'] = "What language would you like to view the video in?"
                    new_row_data['Button Name 1'] = "English"
                    new_row_data["Name Button 2"] = "Cymraeg" 
                    # Assign the original URL to 'Command Button 1'
                    new_row_data['Command Button 1'] = cell_value
                    new_row_data['Text Welsh'] = "Whatever it is in welsh"
                    new_row_data['Button Name Welsh 1'] = "English"
                    new_row_data['Name Button Welsh 2'] = "Cymraeg"
                    new_row_data['NPC Name Welsh'] = row["NPC Name Welsh"]
                    col_index = df.columns.get_loc(col_name)
                    new_row_data['Command Button 2'] = df.iat[row.name, col_index + 15 ]


                    # For Welsh Command, get the corresponding Welsh URL
                    # Map English command columns to their corresponding Welsh command columns
                    english_to_welsh_command = {
                        'Command Button 1': 'Command',
                        'Command Button 2': 'Command.1',
                        'Command Button 3': 'Command.2',
                        'Command Button 4': 'Command.3',
                        'Command Button 5': 'Command.4',
                        'Command Button 6': 'Command.5',
                    }

                    welsh_command_col = english_to_welsh_command.get(col_name)
                    if welsh_command_col and welsh_command_col in df.columns:
                        welsh_cell_value = str(row[welsh_command_col])
                        new_row_data['Button Name 2'] = "Cymraeg"
                        new_row_data['Command Button 2'] = welsh_cell_value
                    else:
                        new_row_data['Button Name 2'] = "Cymraeg"
                        new_row_data['Command Button 2'] = ""
                        messages.append(f"No corresponding Welsh URL for Row {row.name + 1} in column '{welsh_command_col}'.")

                    # Clear other buttons if necessary
                    for btn_num in range(3, 7):
                        new_row_data[f'Button Name {btn_num}'] = ""
                        new_row_data[f'Command Button {btn_num}'] = ""

                    new_rows.append(new_row_data)
                    messages.append(f"Prepared new row for scene '{sceneName}'.")

                except Exception as e:
                    messages.append(f"Failed to update Row {row.name + 1}, Column '{col_name}'. Error: {e}")
           
        else:
            messages.append(f"Column '{col_name}' does not exist in the DataFrame.")
    return messages, new_rows

# Initialize lists to collect all messages and new rows
all_messages = []
all_new_rows = []

count = 0
# Iterate over each row and apply the check_http function
for _, row in df.iterrows():
    messages, new_rows = check_http(row, count)
    all_messages.extend(messages)
    all_new_rows.extend(new_rows)

# Append all new rows to the DataFrame after iteration
if all_new_rows:
    new_rows_df = pd.DataFrame(all_new_rows)
    df = pd.concat([df, new_rows_df], ignore_index=True)
    print(f"Added {len(all_new_rows)} new rows to the DataFrame.")
else:
    print("No new rows to add.")

# Print all collected messages
for message in all_messages:
    print(message)

# Save the updated DataFrame to a new Excel file
output_file = 'npc_updated.xlsx'
try:
    df.to_excel(output_file, index=False)
    print(f"Successfully saved the updated DataFrame to '{output_file}' with {len(df)} rows.")
except Exception as e:
    print(f"An error occurred while saving the Excel file: {e}")
    exit(1)

   
