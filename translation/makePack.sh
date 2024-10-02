#!/bin/bash

# Check if zip command is available
if ! command -v zip &> /dev/null; then
    echo "Error: zip command not found. Please install zip and try again."
    exit 1
fi

# Check if Cadw folder exists
if [ ! -d "Cadw" ]; then
    echo "Error: Cadw folder not found in the current directory."
    exit 1
fi

# Generate new UUIDs
header_uuid=$(uuidgen)
module_uuid=$(uuidgen)

# Update manifest.json with new UUIDs
sed -i "s/\"uuid\": \"[0-9a-f-]*\",/\"uuid\": \"$header_uuid\",/" Cadw/manifest.json
sed -i "s/\"uuid\": \"[0-9a-f-]*\",/\"uuid\": \"$module_uuid\",/" Cadw/manifest.json

# Create the mcpack file
zip -r Cadw.mcpack Cadw

# Check if the zip command was successful
if [ $? -eq 0 ]; then
    echo "Successfully created Cadw.mcpack with updated UUIDs"
    echo "Header UUID: $header_uuid"
    echo "Module UUID: $module_uuid"
else
    echo "Error: Failed to create Cadw.mcpack"
    exit 1
fi