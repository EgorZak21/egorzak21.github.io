from random import randint
import time


class Task:
    def __init__(self, callback):
        self.completed = False
        self.response = None
        self.callback = callback

    @property
    def ready(self):
        raise NotImplementedError()

    @property
    def need_process(self):
        return self.ready and not self.completed

    def process(self):
        self.completed = True
        self.callback(self.response)


class TimeoutTask(Task):
    def __init__(self, name, callback):
        super().__init__(callback)
        self.name = name
        self.__end = time.time() + randint(1, 5)

    @property
    def ready(self):
        return time.time() > self.__end

    def process(self):
        self.response = f'Выполнена задача {self.name}'
        super().process()


class TaskManager:
    def __init__(self):
        self.tasks = []

    def add(self, task):
        self.tasks.append(task)

    def loop(self):
        while self.tasks:
            task = self.tasks.pop(0)
            if task.need_process:
                task.process()
            else:
                self.tasks.append(task)


tm = TaskManager()


def simple_handler(response):
    print(response)


queue = [
    "Подготовить бумаги",
    "Проверить почту",
    "Консультация по проекту",
    "Заполнить форму"
]

for task_name in queue:
    tm.add(TimeoutTask(task_name, simple_handler))

tm.loop()
