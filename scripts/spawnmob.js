import { World, Commands } from "Minecraft";
import * as Minecraft from "Minecraft";

const dim = World.getDimension("overworld")
const mostSpawnAmount = 50

function beforeChat(chatmsg) {
	
	if (chatmsg.message.toLowerCase().startsWith(".spawnmob")) {
		const target = chatmsg.message.split(' ')[1];
		const mobType = chatmsg.message.split(' ')[2];
		const amount = Math.floor(parseInt(chatmsg.message.split(' ')[3]));
		const customName = chatmsg.message.split(' ')[4];
		if (target === undefined | target === "") {
			Commands.run(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§cPlease provide a valid Username. Target:(${chatmsg.message.split(' ')[1]})"}]}`, dim);
			return;
		}
		if (amount <= 0 | isNaN(amount)) {
			Commands.run(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§cPlease provide a valid Integer. Amount:(${chatmsg.message.split(' ')[3]})"}]}`, dim);
			return;
		}
		if (amount > mostSpawnAmount) {
			Commands.run(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§cThat is way too much to spawn."}]}`, dim);
			return;
		}
		if (customName === undefined | customName === "") {
			for (let i = 0; i < amount; i++) {
				Commands.run(`execute "${target}" ~ ~ ~ summon ${mobType}`, dim);
			}
		}else {
			for (let i = 0; i < amount; i++) {
				Commands.run(`execute "${target}" ~ ~ ~ summon ${mobType} ${customName}`, dim);
			}
		}
	}
}

World.events.beforeChat.subscribe(chatmsg => {
	beforeChat(chatmsg);
});