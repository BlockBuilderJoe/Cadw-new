# Place the structure with chest near the button (underground)
structure load quest_book_two -40254 -21 -39962

# Break the chest to drop items and teleport them to player
setblock -40254 -21 -39962 air destroy
tp @e[type=item,x=-40254,y=-21,z=-39962,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest