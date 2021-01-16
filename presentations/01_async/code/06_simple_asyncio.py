import asyncio
from random import randint


async def task(name):
    duration = randint(1, 3)
    await asyncio.sleep(duration)
    response = f"Выполнил задачу {name}"
    print(response)

asyncio.run(task("Подготовить бумаги"))
