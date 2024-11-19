require('dotenv').config();
const { REFUSED } = require('dns');
const { Bot, GrammyError, HttpError, Keyboard, InlineKeyboard} = require('grammy');

const bot = new Bot(process.env.BOT_TOKEN_KEY);// токен бота


bot.api.setMyCommands([
    { command: 'start', description: 'начало работы' },
    { command: 'help', description: 'помощь' },
    { command: 'menu', description: 'вызов меню' },
])


// команда /start
bot.command("start", async (ctx) =>
    {
        const inlineKeyboard = new InlineKeyboard()
        .url("Перейти", "https://t.me/dev_test_lalo_bot")

        await ctx.reply(`Привет, ${ctx.from.first_name} \nНиже ссылка на наш сайт\n \n(^///^)`), { reply_markup: inlineKeyboard }
     
    }
)


bot.command("help", async (ctx) => await ctx.reply(`нашел баг? \nнапиши => @Laila123g`)); // команда /help




const KeyboardLanguage = new Keyboard()
.text('HTML')
.text('CSS')
.text('JS')
.text('PHP')
.row()
.text('PYTHON')
.text('REACT')
.text('JAVA')
.resized()

bot.command("menu", async (ctx) => 
    // создаем клавиатуру
    {
        await ctx.reply('выбери', { reply_markup: KeyboardLanguage })
     
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


bot.hears(/иди нахуй/,
    async (ctx) => {
        await ctx.reply(`сам`)
    }
)

bot.start();