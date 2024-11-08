setblock 79936 -60 80022 minecraft:diamond_block 

tp @p 9939 40 10178 
dialogue change @e[type=npc,c=1] pcNPC1

tp @p 9942 52 10218
dialogue change @e[type=npc,c=1] wbNPC1

tp @p 9954 52 10222
dialogue change @e[type=npc,c=1] mgNPC1

tp @p 9983 52 10202
dialogue change @e[type=npc,c=1] mmbNPC1

tp @p 9972 52 10217 
dialogue change @e[type=npc,c=1] owNPC1

tp @p 9958 80 10198
dialogue change @e[type=npc,c=1] nwtNPC1

tp @p 9969 80 10242
dialogue change @e[type=npc,c=1] swtNPC1

tp @p 9998 47 10246
dialogue change @e[type=npc,c=1] cghNPC1

tp @p 10025 57 10266
dialogue change @e[type=npc,c=1] ptNPC1

tp @p 10013 50 10204
dialogue change @e[type=npc,c=1] kitchNPC1

tp @p 10059 47 10208
dialogue change @e[type=npc,c=1] wellNPC1

tp @p 10128 43 10196
dialogue change @e[type=npc,c=1] cgcNPC1

tp @p 10133 43 10186
dialogue change @e[type=npc,c=1] ctNPC1

tp @p 10143 52 10177
dialogue change @e[type=npc,c=1] ctNPC2

tp @p 10137 58 10176
dialogue change @e[type=npc,c=1] wcNPC1

tp @p 10150 47 10227
dialogue change @e[type=npc,c=1] ktNPC1

tp @p 10136 43 10227
dialogue change @e[type=npc,c=1] kcNPC1

tp @p 10136 43 10223
dialogue change @e[type=npc,c=1] kcNPC1

tp @p 10106 44 10231
dialogue change @e[type=npc,c=1] qcNPC1

tp @p 10094 45 10241 
dialogue change @e[type=npc,c=1] bhNPC1

tp @p 10093 45 10185
dialogue change @e[type=npc,c=1] stNPC1

tp @p 10160 40 10204
dialogue change @e[type=npc,c=1] ebNPC1

dialogue change @e[tag=dvlNPC] dvlNPC1

#This is the final tp, so put the player start coordinate here
tp @p 79934 -42 80020 facing 79934 -42 80014

tag @p remove buildChallenge

remove @e[type=agent]
gamemode adventure @p
effect @p clear
function giveItems

