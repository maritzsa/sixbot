const discord = require ('discord.js');

var client = new discord.Client();

client.on ("ready", () => {
    console.log ("wegot6?");

    client.user.setActivity ("without 6");
});

//var token = "NTE0NTkxODUyODc2MjY3NTIw.DtZA-g.DxbTLt5RU3LToQM4RJHk625ZRPA";

client.login (process.env.token);

client.on ("message", (message) => {
    
    if (message.author.bot) return;


    if (message.content.includes ("Yo we got?") || message.content.includes ("6") || message.content.includes ("deceit") || message.content.includes ("Deceit")) {
        message.channel.send ("*Yo we got 6?*");
    }

    //if (message.content.startsWith ("change bot avatar")) {
        //image = message.attachments.first().url;
        //client.user.setAvatar (image);
    //}
    
});
