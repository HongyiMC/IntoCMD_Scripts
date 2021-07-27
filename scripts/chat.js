import { World, Commands } from "Minecraft";
import * as Minecraft from "Minecraft";

const dim0 = World.getDimension("overworld")
const dim1 = World.getDimension("nether")
const dim2 = World.getDimension("the end")
let currentVersion = "1.17.20.23"

function chatTrigger(chat) {
	
	const respond = {
		".help" : 'tellraw "' + chat.sender.name + '" {"rawtext":[{"text":"§aHelp is on the way"}]}',
		".me" : 'tellraw "' + chat.sender.name + '" {"rawtext":[{"text":"§bHi §e' + chat.sender.name + '"}]}',
		".version" : 'tellraw "' + chat.sender.name + '" {"rawtext":[{"text":"§6Current version: §e' + currentVersion + '"}]}'
	};
	
	if (chat.message.toLowerCase() in respond) {
		chat.cancel = true;
		Commands.run(respond[chat.message.toLowerCase()], dim0);
	}else if (chat.message.startsWith(".")) {
		chat.cancel = true;
	}else {
		//tag @s add "$(PREFIX)"
		const data = Minecraft.Commands.run(`tag ${chat.sender.name} list`, dim0);
		const allRanks = data.statusMessage.match(/(?<=\$\().+?(?=\))/g);
		if(!allRanks) return;
		chat.cancel = true;
		return Minecraft.Commands.run(`tellraw @a {"rawtext":[{"text":"[${allRanks.join(' ').trim()}] ${chat.sender.name}: ${chat.message}"}]}`, dim0);
	}
};

Minecraft.World.events.beforeChat.subscribe(chat => {
	chatTrigger(chat);
});