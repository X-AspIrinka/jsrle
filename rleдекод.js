let fs = require('fs');
let inText;// создаём переменную, в которую будем записывать декодированный текст
let i = 0// создаём переменную i - указатель, который ищет закодированную строку
inText = fs.readFileSync('code3.txt');//считываем содержимое файла
inText = inText.toString();//получаем строку
while (i < inText.length)//создаём цикл, который идет до конца текста
{
    if (inText[i] == '#')//если символ #, декодируем
    {    inText = inText.replace(inText.substring(i, i+3), inText[i + 2] * String.fromCharCode(inText[i + 1]));//заменяем код на подстроку
        console.log(i, inText.substring(i, i+3), inText[i])
        i += String.fromCharCode(inText[i + 1]);//передвигаем указатель
    }
    else
    {
        i += 1
    }
}
fs.open('decode.txt', 'w', (err) => {//создаём новый файл, в который запишем результат декодирования
    if(err) throw err;
 });
 fs.writeFile('decode.txt', inText, (err) => {//записываем результат в файл
    if(err) throw err;
});
fs.readFile('decode.txt', 'utf8', (err, data) => {//выводим результат
    if(err) throw err;
    console.log(data);
})