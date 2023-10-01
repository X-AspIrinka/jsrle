let fs = require('fs');
let inText;// создаём переменную, в которую будем записывать измененный текст
let i = 0, n = 1;// создаём 2 переменные, i - указатель на начало подстроки с одинаковыми символами, n - длинна подстроки
inText = fs.readFileSync('input3.txt');//считываем содержимое файла
inText = inText.toString();//получаем строку
while (i < inText.length)//создаём цикл, который идет до конца текста
{
    while (inText.charAt(i) == inText.charAt(i + n)){//создаём 2 цикл и сравниваем символы, если они равны увеличиваем длинну подстроки на 1
        n++;
    }
    if (inText[i] == '#' && n <= 3)//если символ # смотрим, нужно ли кодировать подстроку &&
    {
        continue;//если не нужно, пропускаем её 
    }
    else if (n > 3) //если это не #, кодируем подстроку
    {
        inText = inText.replace(inText.substring(i, i + n), '#' + String.fromCharCode(n) + inText.charAt(i));//заменяем подстроку на код
        n = 3
    }
    i += n;//передвигаем указатель на следущую подстроку
    n = 1;//скидываем длинну до 1 (тк следующая подстрока содержит только 1 символ)
}
fs.open('code.txt', 'w', (err) => {//создаём новый файл, в который запишем результат кодировки
    if(err) throw err;
 });
 fs.writeFile('code.txt',  inText, (err) => {//записываем результат в файл
    if(err) throw err;
});
fs.readFile('code.txt','utf8',  (err, data) => {//выводим результат
    if(err) throw err;
    console.log(data);
})