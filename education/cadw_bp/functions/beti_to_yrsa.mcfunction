# Teleport player to Yrsa and open her dialogue for Beti's quest
# Change Yrsa's dialogue to yrsaNPC8
dialogue change @e[tag=yrsaNPC] yrsaNPC8
# Teleport the player to Yrsa's location with facing direction
tp @p -40328 -16 -40013 facing -40328 -16 -40016
# Open the dialogue
dialogue open @e[tag=yrsaNPC] @p yrsaNPC8