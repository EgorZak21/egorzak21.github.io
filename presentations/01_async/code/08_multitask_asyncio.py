import asyncio
from random import randint


async def task(name):
    duration = randint(1, 3)
    await asyncio.sleep(duration)
    response = f"Выполнил задачу {name}"
    return response


async def main():
    await task("Скачивание файла")
    print("Скачали файл")
    await task("Чтение файла")
    print("Прочли файл")
    await task("Запрос к БД")
    print("Получили результат из БД")
    await task("Получили результат из API")
    print("Получили результат из API")
    await task("Сгенерировать ответ")
    print("Вернули ответ пользователю")

asyncio.run(main())
