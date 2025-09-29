# Place the structure with chest near the button (underground)
structure load quest_book_three -40266 -12 -40000

# Break the chest to drop items and teleport them to player
setblock -40266 -12 -40000 air destroy
tp @e[type=item,x=-40266,y=-12,z=-40000,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest