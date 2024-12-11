setblock 79936 -60 80022 minecraft:diamond_block 

#This is the final tp, so put the player start coordinate here
tp @p 79934 -42 80020 facing 79934 -42 80014

tag @p remove buildChallenge

#Adds in barrier blocks above the 2 chests so the player can't open them until they finish the tour
setblock 10150 45 10206 minecraft:barrier

gamemode adventure @p
effect @p clear
function giveItems

#Changes dialogue for the NPCs at the start of each quest
tp @p 10139 43 10216
dialogue change @e[tag=dvlNPC] dvlNPC1

tp @p 9983 52 10204
dialogue change @e[tag=mmbNPC] mmbNPC1

tp @p 10143 52 10169 
dialogue change @e[tag=sgNPC] sgNPC1

tp @p 10158 40 10210
dialogue change @e[tag=ffqNPC] ffqNPC1

tp @p 9952 82 10249
dialogue change @e[tag=flfNPC] flfNPC1

tp @p 10024 43 10277
dialogue change @e[tag=ctcNPC] ctcNPC1

tp @p 9883 29 10191 facing 9883 29 10196
dialogue change @e[tag=taliesinend] taliesinendNPC1

scoreboard players set completed quest 0

#Final tp location
tp @p 79934 -42 80019 facing 79934 -42 80016



