---
marp: true
theme: default
_class: lead
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
---

# **Разбор проекта по ООП "Телеграм-бот"**

<br>
<br>
<br>

#### SkillFactory <br> Вебинар 23 января  <br> ментор Егор Закутей

---

# Простой ответ на сообщения

```python
import telebot

exchanges = {
    'доллар': 'USD',
    'евро': 'EUR',
    'рубль': 'RUB'
}
TOKEN = "1444339635:AAEWaQQmfy-Guk47iioxwIDiT7lbL5h5z-I"

bot = telebot.TeleBot(TOKEN)

@bot.message_handler(commands=['start', 'help'])
def start(message: telebot.types.Message):
    text = "Приветствие!"
    bot.send_message(message.chat.id, text)

@bot.message_handler(commands=['values'])
def values(message: telebot.types.Message):
    text = 'Доступные валюты:'
    for i in exchanges.keys():
        text = '\n'.join((text, i))
    bot.reply_to(message, text)
    
bot.polling()
```

<br>

<!-- _footer: "**Полный код в файле [01_simple.py](https://github.com/EgorZak21/egorzak21.github.io/blob/master/presentations/03_telebot/code/01_simple.py)**" -->

---

# Работа с API
Изучаем докуентацию на сайте [https://exchangeratesapi.io/](https://exchangeratesapi.io/)
> Rates are quoted against the Euro by default. Quote against a different currency by setting the base parameter in your request.
> ```http
> GET https://api.exchangeratesapi.io/latest?base=USD HTTP/1.1
> ```
> Request specific exchange rates by setting the symbols parameter.
> ```http
> GET https://api.exchangeratesapi.io/latest?symbols=USD,GBP HTTP/1.1
> ```
Для тестирования API можно поставить расширение [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=ru). Нужный запрос: 
```http
GET https://api.exchangeratesapi.io/latest?base=USD&symbols=RUB HTTP/1.1
```

<br>

<!-- _footer: "**Полный код в файле [03_api.py](https://github.com/EgorZak21/egorzak21.github.io/blob/master/presentations/03_telebot/code/03_api.py)**" -->

---

# Базовая конвертация

```python
@bot.message_handler(content_types=['text'])
def converter(message: telebot.types.Message):
    base, sym, amount = message.text.split(' ')
    r = requests.get(f"https://api.exchangeratesapi.io/latest?base={base}&symbols={sym}")
    resp = json.loads(r.content)
    new_price = resp['rates'][sym] * float(amount)
    bot.reply_to(message, f"Цена {amount} {base} в {sym} : {new_price}")
```
# Выносим параметры в `config.py`

```python
TOKEN = "1444339635:AAEWaQQmfy-Guk47iioxwIDiT7lbL5h5z-I"
exchanges = {
    'доллар': 'USD',
    'евро': 'EUR',
    'рубль': 'RUB'
}
```

<br>

<!-- _footer: "**Полный код в файле [02_baseline.py](https://github.com/EgorZak21/egorzak21.github.io/blob/master/presentations/03_telebot/code/02_baseline.py)**" -->

---

# Функционал в классе с обработкой ошибок

```python
class Convertor:
    @staticmethod
    def get_price(base, sym, amount):
        try:
            base_key = exchanges[base.lower()]
        except KeyError:
            raise APIException(f"Валюта {base} не найдена!")

        try:
            sym_key = exchanges[sym.lower()]
        except KeyError:
            raise APIException(f"Валюта {sym} не найдена!")

        if base_key == sym_key:
            raise APIException(f'Невозможно перевести одинаковые валюты {base}!')
        
        try:
            amount = float(amount)
        except ValueError:
            raise APIException(f'Не удалось обработать количество {amount}!')
        
        r = requests.get(f"https://api.exchangeratesapi.io/latest?base={base_key}&symbols={sym_key}")
        resp = json.loads(r.content)
        new_price = resp['rates'][sym_key] * amount
        new_price = round(new_price, 3)
        message =  f"Цена {amount} {base} в {sym} : {new_price}"
        return message
```

<br>

<!-- _footer: "**Полный код в файле [extensions.py](https://github.com/EgorZak21/egorzak21.github.io/blob/master/presentations/03_telebot/code/extensions.py)**" -->

---

# Используем класс

```python
@bot.message_handler(content_types=['text'])
def converter(message: telebot.types.Message):
    values = message.text.split(' ')
    try:
        if len(values) != 3:
            raise APIException('Неверное количество параметров!')
        
        answer = Convertor.get_price(*values)
    except APIException as e:
        bot.reply_to(message, f"Ошибка в команде:\n{e}" )
    except Exception as e:
        traceback.print_tb(e.__traceback__)
        bot.reply_to(message, f"Неизвестная ошибка:\n{e}" )
    else:
        bot.reply_to(message,answer)
```

<!-- _footer: "**Полный код в файле [04_main.py ](https://github.com/EgorZak21/egorzak21.github.io/blob/master/presentations/03_telebot/code/04_main.py)**" -->