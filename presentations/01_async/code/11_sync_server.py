from flask import Flask
import requests
import time

app = Flask(__name__)


def get_todos():
    todos_list = []
    for todo_id in range(1, 30):
        r = requests.get(
            f"https://jsonplaceholder.typicode.com/todos/{todo_id}")
        todos_list.append(r.json()['title'])
    return todos_list


@app.route('/')
def hello_world():
    t_0 = time.time()
    todos_list = get_todos()
    dt = time.time()-t_0
    print(f"Затрачено {dt:.2f} секунд")
    return "<br>".join(todos_list)

# Для запуска:
# $env:FLASK_APP = "11_sync_server.py"
# python -m flask run
