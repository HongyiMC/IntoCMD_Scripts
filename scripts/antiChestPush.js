import { World, Commands } from "Minecraft";
import * as Minecraft from "Minecraft";

function beforePistonActivate(beforePistonActivateEvent) {
    let { piston } = beforePistonActivateEvent
    
    let hasChestAttached = piston.attachedBlocks.some(blockLocation => {
        let dimension = World.getDimension("overworld")
        let block = dimension.getBlock(blockLocation)
        let blockIdentifier = block.getBlockData().getType().getName()
        
        return blockIdentifier == "minecraft:chest"
    })
    
    if (hasChestAttached) {
        beforePistonActivateEvent.cancel = true
    }
}

World.events.beforePistonActivate.subscribe(beforePistonActivate)