tp @p 9883 29 10191 facing 9883 29 10195
effect @p clear
function giveItems
remove @e[type=agent]
gamemode adventure @p
tag @p remove buildChallenge 

#Changes the original Master Builder NPC back to second dialogue
dialogue change @e[tag=mmbNPC] mmbNPC2