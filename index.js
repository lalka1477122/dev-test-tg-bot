require('dotenv').config();
const { Bot, GrammyError, HttpError } = require('grammy');

const bot = new Bot(process.env.BOT_TOKEN_KEY);// токен бота
bot.api.setMyCommands([
    { command: 'start', description: 'начало работы' },
    { command: 'help', description: 'помощь' },

])



bot.command("start", async (ctx) => await ctx.reply(`привет, ${ctx.from.first_name} ${ new Date().toLocaleTimeString().slice(0,-3)}`)); // команда /start
bot.command("help", async (ctx) => await ctx.reply(`  `)); // команда /help













bot.on("message:photo", async (ctx) => await ctx.reply(`нахуй мне фото`));
bot.on("message:video", async (ctx) => await ctx.reply(`нахуй мне видео`));
bot.on("message:sticker", async (ctx) => await ctx.reply(`нахуй мне стикеры`));
bot.on("message:voice", async (ctx) => await ctx.reply(`нахуй мне голосовые`));
bot.on("message:video_note", async (ctx) => await ctx.reply(`нахуй мне видео ноты`));
bot.on("message:animation", async (ctx) => await ctx.reply(`нахуй мне анимации`));
bot.on("message:location", async (ctx) => await ctx.reply(`нахуй мне локацию`));
bot.on("message:contact", async (ctx) => await ctx.reply(`нахуй мне контакты`));
bot.on("message:file", async (ctx) => await ctx.reply(`нахуй мне файлы`));
bot.on("message:invoice", async (ctx) => await ctx.reply(`нахуй мне счета`));
bot.on("message:game", async (ctx) => await ctx.reply(`нахуй мне игры`));
bot.on("message:document", async (ctx) => await ctx.reply(`нахуй мне документы`));





bot.catch((err) => {
    if (err instanceof GrammyError) {
        console.error('Error in request:', err.description);
    } else if (err instanceof HttpError) {
        console.error('Could not contact Telegram:', err);
    } else {
        console.error('Unknown error:', err);
    }
});
bot.start();