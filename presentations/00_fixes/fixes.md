# МОДУЛЬ C2

---

## Юнит C2.2

---

### Правка 1:

Скриншот с местом правки: <br>
<kbd><img src="./img/1.png" width="100%" border="1px round"></kbd>

<ins>Заменить блок с кодом на </ins>

```python
class StaticClass:

    @staticmethod # помечаем метод который мы хотим сделать статичным декоратором @staticmethod
    def bar():
        print("bar")

StaticClass.bar()
```

---

### Правка 2:

Скриншот с местом правки: <br>
<kbd><img src="./img/2.png" width="100%" border="1px round"></kbd>

<ins>Заменить блок с кодом на  </ins>

```python
class StaticClass:

    @staticmethod
    def bar():
        print("bar")

f = StaticClass()
f.bar() # вызывать статические методы через объекты так же никто не запрещает
```

---

### Правка 3:

Скриншот с местом правки: <br>
<kbd><img src="./img/3.png" width="100%" border="1px round"></kbd>

<ins>Заменить блок с кодом на</ins>

```python
class StaticClass:

    @staticmethod
    def GET_BAR(): # вспоминаем, что константа пишется со всеми заглавными буквами (в простонародье - капсом)
        return "bar"

print(StaticClass.GET_BAR())
```

---

### Правка 4:

Скриншот с местом правки: <br>
<kbd><img src="./img/4.png" width="100%" border="1px round"></kbd>

<ins> **Задание 2.2.4** в спойлере с ответом заменить блок с кодом на </ins>

```python
class Square:
    def __init__(self, side):
        self.side = side

class SquareFactory:
    @staticmethod
    def create_square(side):
        return Square(side)

sq1 = SquareFactory.create_square(1)
print(sq1.side)
```

---

## Юнит C2.3

---

### Правка 5:

Скриншот с местом правки: <br>
<kbd><img src="./img/5.png" width="80%" border="1px round"></kbd>

<ins>Беда с отступами, нужно заменить блок кода на </ins>

```python
# создадим класс собаки
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # создадим свойство human_age, которое будет переводить возраст животного в человеческий
    @property  # тот самый магический декоратор
    def human_age(self):
        return self.age * 7.3


jane = Dog("jane", 4)
# т.к. метод помечен декоратором property, то нам не надо вызывать этот метод чтобы получить результат
print(jane.human_age)
```

---

### Правка 6:

Скриншот с местом правки: <br>
<kbd><img src="./img/6.png" width="100%" border="1px round"></kbd>

<ins>Беда с отступами, нужно заменить блок кода на </ins> 

```python
class Dog:
    _happiness = 10

    def __init__(self, name, age):
        self.name = name
        self.age = age

    @property
    def human_age(self):
        return self.age * 7.3

    # добавим новое поле - шкала счастья
    @property
    def happiness(self):
        return self._happiness

    # с помощью декоратора setter мы можем неявно передать во второй аргумент значение, находящееся справа от равно, а не закидывать это значение в скобки, как мы это делали в 15м модуле, когда не знали о декораторах класса
    @happiness.setter
    # допустим мы хотим, чтобы счастье питомца измерялось шкалой от 0 до 100
    def happiness(self, value):
        if value <= 100 and value >= 0:
            self._happiness = value
        else:
            raise ValueError("Happiness must be between 0 ... 100")


jane = Dog("jane", 4)
jane.happiness = 100  # осчастливим нашу собаку < :
print(jane.happiness)
```

---

## Юнит C2.4

---

### Правка 7:

Скриншот с местом правки: <br>
<kbd><img src="./img/9.png" width="100%" border="1px round"></kbd>

<ins>Нужно заменить блок кода на  </ins>

```python
print("Перед исключением")
# теперь пользователь сам вводит числа для деления
a = int(input("a: "))
b = int(input("b: "))
c = a / b  # здесь может возникнуть исключение деления на ноль
print(c)  # печатаем c = a / b если всё хорошо
print("После исключения")
```

---

### Правка 8:

Скриншот с местом правки: <br>
<kbd><img src="./img/7.png" width="100%" border="1px round"></kbd>

<ins>Нужно заменить блок кода на</ins>

```python
try:
    age = int(input("How old are you?"))

    if age > 100 or age <= 0:
        raise ValueError("Тебе не может быть столько лет")

    # Возраст выводится только если пользователь ввёл правильный возраст.
    print(f"You are {age} years old!")
except ValueError:
    print("Неправильный возраст")

```

---

### Правка 9:

Скриншот с местом правки: <br>
<kbd><img src="./img/8.png" width="100%" border="1px round"></kbd>

<ins>В **Задании 2.4.7** правильным является первый ответ, а не второй.</ins>

---

## Юнит C2.5

---

---

# МОДУЛЬ C4

---

## Юнит C4.4

---

### Правка 12:

Скриншот с местом правки: <br>
<kbd><img src="./img/10.png" width="100%" border="1px round"></kbd>

<ins>Весь блок кода (прямо перед Заданием 4.4.6) надо заменить на</ins>

```python
# Создадим класс Queue - нужная нам очередь
class Queue:
    # Конструктор нашего класса, в нём происходит нужная инициализация объекта
    def __init__(self, max_size):
        self.max_size = max_size # размер очереди
        self.task_num = 0 # будем хранить сквозной номер задачи

        self.tasks = [0 for _ in range(self.max_size)] # инициализируем список с нулевыми элементами
        self.head = 0 # указатель на начало очереди
        self.tail = 0 # указатель на элемент следующий за концом очереди
    
    # !!! Класс далее нужно дополнить методами !!!


# Используем класс
size = int(input("Определите размер очереди: "))
q = Queue(size)

while True:
    cmd = input("Введите команду:")
    if cmd == "empty": 
        if q.is_empty():
            print("Очередь пустая")
        else:
            print("В очереди есть задачи")
    elif cmd == "size":
        print("Количество задач в очереди:", q.size())
    elif cmd == "add": 
        if q.size() != q.max_size:
            q.add()
        else:
            print("Очередь переполнена")
    elif cmd == "show": 
        if q.is_empty():
            print("Очередь пустая")
        else:
            q.show()
    elif cmd == "do": 
        if q.is_empty():
            print("Очередь пустая")
        else:
            q.do()
    elif cmd == "exit": 
        for _ in range(q.size()):
            q.do()
        print("Очередь пустая. Завершение работы")
        break
    else:
        print("Введена неверная команда")
```

---

### Правка 13:

Скриншот с местом правки: <br>
<kbd><img src="./img/11.png" width="100%" border="1px round"></kbd>

<ins>В **задании 4.4.6** надо условие поменять на </ins>

> Добавьте в класс `Queue` метод `is_empty`, который проверяет наличие элементов в очереди, используя указатели `head` и `tail`. Запрещается использование функции `len(list_)`, так как ее сложность O(n).  

<ins>А код в **ответе** на:</ins>

```python
    def is_empty(self):  # очередь пуста?
        # да, если указатели совпадают и в них содержится ноль
        return self.head == self.tail and self.tasks[self.head] == 0
```

---

### Правка 14:

Скриншот с местом правки: <br>
<kbd><img src="./img/12.png" width="100%" border="1px round"></kbd>

<ins>В **задании 4.4.7** надо условие поменять на</ins> 

> Добавьте в класс `Queue` метод `size`, который возвращает текущий размер очереди. Учтите, что необходимо рассмотреть несколько случаев: когда очередь пустая, когда очередь полная (какому условию соответствует?), а также отдельное внимание стоит обратить на тот случай, когда хвост очереди переместился в начало списка (закольцевался).

<ins>А код в **ответе** на:</ins>

```python
    def size(self):  # получаем размер очереди
        if self.is_empty():  # если она пуста
            return 0  # возвращаем ноль
        elif self.head == self.tail:  # иначе, если очередь не пуста, но указатели совпадают
            return self.max_size  # значит очередь заполнена
        elif self.head > self.tail:  # если хвост очереди сместился в начало списка
            return self.max_size - self.head + self.tail
        else:  # или если хвост стоит правее начала
            return self.tail - self.head
```

---

### Правка 15:

Скриншот с местом правки: <br>
<kbd><img src="./img/13.png" width="100%" border="1px round"></kbd>

<ins>В **задании 4.4.8** надо условие поменять на </ins>

> Добавьте в класс `Queue` метод `add`, который добавляет задачу в конец очереди. Также учтите, что размер массива ограничен и при достижении этого предела, необходимо перенести указатель в положение 0. Также обратите внимание на области видимости переменных `tail` и `order`. После добавления задачи в очередь, она должна вывести уведомление об этом в формате: 

<ins>А код в **ответе** на:</ins>

```python
    def add(self):
        self.task_num += 1  # увеличиваем порядковый номер задачи
        self.tasks[self.tail] = self.task_num  # добавляем его в очередь
        print(f"Задача №{self.tasks[self.tail]} добавлена")

        # увеличиваем указатель на 1 по модулю максимального числа элементов
        # для зацикливания очереди в списке
        self.tail = (self.tail + 1) % self.max_size
```

---

### Правка 16:

Скриншот с местом правки: <br>
<kbd><img src="./img/14.png" width="100%" border="1px round"></kbd>

<ins>В **задании 4.4.9** надо условие поменять на </ins>

> Добавьте в класс `Queue` метод `show`, печатающий информацию о приоритетной задаче в формате
> ```python
> "Задача №1 в приоритете"
> ```

<ins>А код в **ответе** на:</ins>

```python
    def show(self):  # выводим приоритетную задачу
        print(f"Задача №{self.tasks[self.head]} в приоритете")
```

---

### Правка 17:

Скриншот с местом правки: <br>
<kbd><img src="./img/15.png" width="100%" border="1px round"></kbd>

<ins>В **задании 4.4.10** надо условие поменять на </ins>

> Добавьте в класс `Queue` метод `do` , которая печатает в консоль задачу (=выполняет ее) и, соответственно, удаляет ее из очереди, присваивая ей значение 0. Формат вывода:
> ```python
> "Задача №1 выполнена"
> ```

<ins>А код в **ответе** на:</ins>

```python
    def do(self):  # выполняем приоритетную задачу
        print(f"Задача №{self.tasks[self.head]} выполнена")
        # после выполнения зануляем элемент по указателю
        self.tasks[self.head] = 0
        # и циклично перемещаем указатель
        self.head = (self.head + 1) % self.max_size
```

---

### Правка 18:

<ins>В **задании 4.4.11** нужно поменять ответы (указал два возможных ответа)</ins>

```
7,8,9,10
7, 8, 9, 10
```
