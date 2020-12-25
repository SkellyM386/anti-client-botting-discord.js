
<h1>Anti Client/User Botting Discord.js</h1>
<p>Pretty simple This is the Source code method for anti client/user Botting</p>
<hr />
<embed href="https://www.youtube.com/embed/v8MUdMdpsKk"></embed>
<hr />
<img alt="Bot Permissions: use all reactions, send messages and view channels" src="https://cdn.glitch.com/cdac0e92-9561-4ca6-82d5-b078797c76f9%2Fpermissions.png?v=1608849427694" />
<hr />
<a href="https://discord.com/api/oauth2/authorize?client_id=791786871393878047&permissions=265280&scope=bot" targer="_blank">Add Bot</a>
<hr />
<u><h3>License</h3></u>
<li>MIT</li>
<hr>
<span>Contact?</span>
<ul>
<li>yes I do accept emails.</li>
<li>yes I take suggestions.</li>
<li>yes you can send me better code that i can replace this with.</li>
<li>no i will not translate it to anouther language. <i>if you can understand the code and translate it to anouther language and then send me the github link i will include the link to the documentation here for people to see with the corresponding info to the project IE what language it is and maybe a comment from me and a comment from the owner if they include the comment in their email to me.</i></li>
<li>are you going to have a great day yes.</li>
</ul><hr />
<span>Contact info</span><br />
<u>Email:</u><span style="color: rgb(0,150,200);"> skellymclane@gmail.com</span>
<hr />
<h4>How Did I Make this?</h4>
<ul>
I said to myself how do I make a Bot that cant be client botted<i>(botted as in a bot being used by a "client bot")</i> first i said to myself i gotta make one to understand it so i had to go with the most likely occurances or actions in creating a client bot and so i went to google and i searched up browser automation and found puppeteer but first i did find browserify which looked like a steaming pile of hot trash in using it, setting it up and whatnot. So the obvious choice was puppeteer since thats probably what most would use and so i developed a full proof invincible bot that i do apologize to the owners of Yui bot and Dank Memer bot for being unwilling test subjects but anyways i tried aggrivation on one of the bot owners to see if they would take proper precautions and measurements to try to stop my user bot which they didnt and just ran a scan of every user in a guild with the name skelly and then blacklisted them so nothing actually done to prevent client botting which was a dissapointment but i worked further making sure the client bot was to the peak performance undetectable with random time intervals in sending the messages each time interval would change every few seconds and the client bot would switch between 3 different guilds and use different bot prefixes for each. so you could say it was invinsible but now im at the point where alright this is at peak performance now I just have to code a discord bot to detect or work against my methods and i did right here.
<br /><br />The code works by forcing whoever trys to use the eco bot command will have to say yes i want to use this command and they would press the correct color emoji using 4 primary colors that even if your color blind you could easily tell the difference unless it was like grayscale color blindness but still the message that asks you to to click the confirm shows you which one it wants you to press so it should work for everyone.
<br /><br />
whats to stop other people from taking this info and creating more client bots and making them able to get around this method?
<br /><br />
for one puppeteer actions revolve around html selectors and a bot has to read through 6000+ characters per message and each message has their own ids inplemented in the main selectors as well as displaying over 60 messages at a time the bot has to read through all that and then when they find the newest message the message element is changed for however many different emoji options that command has so we're talking more than a phone can handle in cpu to get element and its final phase and then it has to read and click on the correct reaction which should all take way to much time to work asynchronously <i>(dont worry if you dont understand why asynchronously is a problem for client bots I'll explain that next.)</i>
<br /><br />Well client bots using puppeteer work asynchronously meaning if those promises don't respond in time then they'll fail the test.
which is why i say you should do it for like 10 seconds ish cause if they always reply within milliseconds every time its gonna be SUS to bot detectors and the average person on their phone takes at minimum 5 seconds to hit the button. so within those 10 seconds you can catch common reaction times and its very to detect bots this way since we as humans are flawed by our reaction time.
</ul>
