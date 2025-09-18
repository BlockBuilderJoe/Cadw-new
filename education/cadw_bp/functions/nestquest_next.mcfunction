# Function to transition from nestquestNPC1 to nestquestNPC2
# Change dialogue to nestquestNPC2
dialogue change @e[tag=nestquestNPC] nestquestNPC2
# Open the new dialogue for the nearest player
dialogue open @e[tag=nestquestNPC] @p nestquestNPC2