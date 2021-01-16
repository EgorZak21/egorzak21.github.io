import asyncio
from random import randint


async def task(name):
    duration = randint(1, 3)
    await asyncio.sleep(duration)
    response = f"Выполнил задачу {name}"
    print(response)

queue = [
    "Подготовить бумаги",
    "Проверить почту",
    "Консультация по проекту",
    "Заполнить форму"
]


async def main():
    tasks = []
    for task_name in queue:
        tasks.append(task(task_name))
    await asyncio.gather(*tasks)

asyncio.run(main())
