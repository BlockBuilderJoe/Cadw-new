# Function for geraldNPC7 button interaction
# Teleport geraldNPC to new location
tp @e[tag=geraldNPC] -40299 -16 -40004
# Teleport the player to specified location facing gerald
tp @p -40299 -16 -40002 facing -40299 -16 -40004
# Change gerald's dialogue to geraldNPC8
dialogue change @e[tag=geraldNPC] geraldNPC8