# Function for geraldNPC7 button interaction
# Teleport geraldNPC to new location
tp @e[tag=geraldNPC] -40297 -16 -40028
# Teleport the player to specified location facing gerald
tp @p -40297 -16 -40031 facing -40297 -16 -40028
# Change gerald's dialogue to geraldNPC8
dialogue change @e[tag=geraldNPC] geraldNPC8