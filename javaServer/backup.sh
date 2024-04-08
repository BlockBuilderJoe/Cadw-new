#!/bin/bash

# Pulls the git repo
git pull

# Saves the server
tmux send-keys "save-all" Enter

# Wait a bit to ensure the save completes
sleep 5

# Capture the last user to leave the game
lastUser=$(tmux capture-pane -p -t buildServer | grep "left the game" | tail -n1 | awk '{print $3}')

# Check if lastUser is not empty
if [ -n "$lastUser" ]; then
    # Commits the repo with the username and date
    git commit -am "Server Backup on $(date +%d-%m), last user to leave: $lastUser"
else
    # Commits the repo just with the date if no user was found
    git commit -am "Server Backup on $(date +%d-%m)"
fi

#Pushes the repo.
git push

# Reboots the server
tmux send-keys "stop" Enter


