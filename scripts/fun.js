import { World, Commands } from "Minecraft";
import * as Minecraft from "Minecraft";

let dim = World.getDimension("overworld")

Minecraft.World.events.beforeChat.subscribe(chatmsg => {
	onChat(chatmsg);
});

const foo = {
    "marco" : "polo",
    "lol" : "Whats so funny",
    "lmao" : "Whats so funny",
    "hongyi is handsome" : "He is super handsome",
    "hongyi is ugly" : "Your mom is ugly",
    "hongyimc is handsome" : "He is super handsome",
    "hongyimc is ugly" : "Your mom is ugly",
    "who is candice" : "Candice d**k fit in your mouth?",
    "who is candice?" : "Candice d**k fit in your mouth?",
    "how to play" : "Use a boat to leave spawn and enjoy vanilla survival",
    "how to play survival" : "Use a boat to leave spawn and enjoy vanilla survival",
    "how do i play" : "Use a boat to leave spawn and enjoy vanilla survival",
    "how do i play survival" : "Use a boat to leave spawn and enjoy vanilla survival",
    "how do i leave spawn" : "Use a boat to leave spawn and enjoy vanilla survival",
    "how to leave spawn" : "Use a boat to leave spawn and enjoy vanilla survival",
    "how to play?" : "Use a boat to leave spawn and enjoy vanilla survival",
    "how to play survival?" : "Use a boat to leave spawn and enjoy vanilla survival",
    "how do i play?" : "Use a boat to leave spawn and enjoy vanilla survival",
    "how do i play survival?" : "Use a boat to leave spawn and enjoy vanilla survival",
    "how do i leave spawn?" : "Use a boat to leave spawn and enjoy vanilla survival",
    "how to leave spawn?" : "Use a boat to leave spawn and enjoy vanilla survival",
    "hi" : "hello!"
};

function onChat(chatmsg) {
    if (chatmsg.message.toLowerCase() in foo) {
        const rawText = {
            rawtext : [{
                text : "<§eInto§6CMD§r> " + foo[chatmsg.message.toLowerCase()]
            }]
        };
		Commands.run(`tellraw @a ${JSON.stringify(rawText)}`, dim);
    }
};
