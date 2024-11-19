require('dotenv').config();
const { REFUSED } = require('dns');
const { Bot, GrammyError, HttpError, Keyboard, InlineKeyboard} = require('grammy');

const bot = new Bot(process.env.BOT_TOKEN_KEY);// токен бота


bot.api.setMyCommands([
    { command: 'start', description: 'начало работы' },
    { command: 'help', description: 'помощь' },
    { command: 'menu', description: 'вызов меню' },
])

bot.command("start", async (ctx) =>
    {
        const inlineKeyboard = new InlineKeyboard()
        .url("Перейти", "https://t.me/Dev_test_bot")

        await ctx.reply(`Привет, ${ctx.from.first_name} \nНиже ссылка на наш сайт\n \n(^///^)`, { reply_markup: inlineKeyboard })
     
    }
)






// команда /start
bot.command("help", async (ctx) => await ctx.reply(`нашел баг? \nнапиши => @Laila123g`)); // команда /help

bot.command("menu", async (ctx) => 
    // создаем клавиатуру
    {
        const inlineKeyboard = new InlineKeyboard()
        .text("« 1", "first")
        .text("‹ 3", "prev")
        .text("· 4 ·", "stay")
        .text("5 ›", "next")
        .text("31 »", "last");
        await ctx.reply('выбор', { reply_markup: inlineKeyboard })
     
    }
) 
function chooseTheDifficulty() {
    const picker = new Keyboard()
    .text('Легко')
    .text('Средний')
    .text('Сложно')
    .resized()
    return picker
} // function chooseTheifficulty


bot.hears(['HTML', 'CSS', 'JS', 'PHP', 'PYTHON', 'REACT', 'JAVA'], async (ctx) => {
    programmingLanguage = ctx.match
    await ctx.reply('вы выбрали ' + ctx.match)
    await ctx.reply('выберите уровень сложности', { reply_markup: chooseTheDifficulty() })
})
bot.hears(['Легко', 'Средний', 'Сложно'], async (ctx) => {
    complexity = ctx.match
    await ctx.reply('вы выбрали ' + ctx.match)
    await ctx.reply(complexity)
    
}) 





// ОБРАБОТЧИК ОШИБОК
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