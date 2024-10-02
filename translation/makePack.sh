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

# Create the mcpack file
zip -r Cadw.mcpack Cadw

# Check if the zip command was successful
if [ $? -eq 0 ]; then
    echo "Successfully created Cadw.mcpack"
else
    echo "Error: Failed to create Cadw.mcpack"
    exit 1
fi
