from random import randint
import time


class Task:
    def __init__(self, name):
        self.completed = False
        self.response = None
        self.name = name
        self.__end = time.time() + randint(1, 5)

    def ready(self):
        return time.time() > self.__end

    def process(self):
        if self.ready and not self.completed:
            self.completed = True
            self.response = f"Выполнил задачу {self.name}"

    def sync_complete(self):
        while not self.ready():
            time.sleep(0.1)
        self.process()


queue = [
    "Подготовить бумаги",
    "Проверить почту",
    "Консультация по проекту",
    "Заполнить форму"
]

tasks = []

for task_name in queue:
    tasks.append(Task(task_name))

completed = 0
while True:
    for task in tasks:
        if task.ready() and not task.completed:
            task.process()
            completed += 1
            print(task.response)

    if completed == len(tasks):
        break
