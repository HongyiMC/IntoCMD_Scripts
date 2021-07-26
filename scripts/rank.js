import { World, Commands } from "Minecraft";
import * as Minecraft from "Minecraft";

let dim = World.getDimension("overworld")

function displayRank(chatmsg) {
    const data = Minecraft.Commands.run(`tag ${chatmsg.sender.name} list`, dim);
    const allRanks = data.statusMessage.match(/(?<=\$\().+?(?=\))/g);
    if(!allRanks) return;
    chatmsg.cancel = true;
    return Minecraft.Commands.run(`tellraw @a {"rawtext":[{"text":"[${allRanks.join(' ').trim()}] ${chatmsg.sender.name}: ${chatmsg.message}"}]}`, dim);
};

Minecraft.World.events.beforeChat.subscribe(chatmsg => {
	displayRank(chatmsg);
});