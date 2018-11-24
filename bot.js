const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('message', message => {
    if (message.content == "#play") {
        var x = ["Royal",
"DeathGames",
"أرض الأحلام",
"ألبرازيل",
"القسطنطينية",
"النهاية",
"امازون",
"جافاسكربت",
"سهله مو صعبه",
"طبق رطب مرق بقر",
"متجر",
"شجرة الأوغيري",
"عش العصفور",
"هلا بلخميس",
"الحوت الأزرق",
"YouTube",
"Discord",
"M7moudRoyal",
"RoyalServer",
"اساطير محمود رويال",
];
        var x2 = ['Royal',
        "DeathGames",
        "أرض الأحلام",
		"ألبرازيل",
		"القسطنطينية",
		"النهاية",
		"امازون",
		"جافاسكربت",
		"سهله مو صعبه",
		"طبق رطب مرق بقر",
		"متجر",
		"شجرة الأوغيري",
		"عش العصفور",
		"هلا بلخميس",
		"الحوت الأزرق",
                "YouTube",
		"Discord",
		"M7moudRoyal",
		"RoyalServer",
		"اساطير محمود رويال",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يكتب :  __**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الكلمة في الوقت المناسب  `);
        })
        })
    }
})





client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Script By : ROYAL`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Royal ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Ryoal Server `,"http://twitch.tv/YouTube")
client.user.setStatus("dnd")
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
