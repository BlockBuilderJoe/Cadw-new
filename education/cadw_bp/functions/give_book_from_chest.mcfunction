# Place the structure with chest near the button (underground)
structure load book_chest_3 -40287 -21 -40008

# Break the chest to drop items and teleport them to player
setblock -40287 -21 -40008 air destroy
tp @e[type=item,x=-40287,y=-21,z=-40008,r=3] @p

# Remove the chest from player's inventory after a short delay
function remove_chest