setblock 79936 -60 80022 minecraft:diamond_block 

#This is the final tp, so put the player start coordinate here
tp @p 79934 -42 80020 facing 79934 -42 80014

tag @p remove buildChallenge

remove @e[type=agent]
gamemode adventure @p
effect @p clear
function giveItems

