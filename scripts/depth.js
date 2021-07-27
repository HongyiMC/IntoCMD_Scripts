import { World, Commands } from "Minecraft";
import * as Minecraft from "Minecraft";

const dim0 = World.getDimension("overworld")
const dim1 = World.getDimension("nether")
const dim2 = World.getDimension("the end")
const yOffset = 1.620009899139404
const seaLevel = 63

Minecraft.World.events.beforeChat.subscribe(ChatEvent => {
	chatCMD(ChatEvent);
});

function chatCMD(ChatEvent) {
    if (ChatEvent.message.toLowerCase() === ".depth") {
        const pos = ChatEvent.sender.location;
		const posY = Math.floor(pos.y - yOffset);
		const posZ = Math.floor(pos.z);
		if (posZ <= -1934427684864) {
			Commands.run(`tellraw "${ChatEvent.sender.name}" {"rawtext":[{"text":"§cError getting Location, please retry again in few seconds."}]}`, dim0);
			return;
		}
		if (posY > seaLevel) {
			let yDifference = posY - seaLevel
			Commands.run(`tellraw "${ChatEvent.sender.name}" {"rawtext":[{"text":"§6You are §a${yDifference} §6block(s) above sea level."}]}`, dim0);
		}else if (posY < seaLevel) {
			let yDifference = seaLevel - posY
			Commands.run(`tellraw "${ChatEvent.sender.name}" {"rawtext":[{"text":"§6You are §c${yDifference} §6block(s) below sea level."}]}`, dim0);
		}else Commands.run(`tellraw "${ChatEvent.sender.name}" {"rawtext":[{"text":"§6You are at sea level."}]}`, dim0);
    }
};
