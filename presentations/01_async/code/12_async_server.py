import aiohttp
import asyncio
from aiohttp import web
import time


async def get_todo(session, todo_id):
    async with session.get(f"https://jsonplaceholder.typicode.com/todos/{todo_id}") as resp:
        r = await resp.json()
        return r['title']


async def get_todos():
    async with aiohttp.ClientSession() as session:
        resps = [get_todo(session, todo_id) for todo_id in range(1, 30)]
        todos_list = await asyncio.gather(*resps)
        return todos_list


async def todos(request):
    t_0 = time.time()
    todos_list = await get_todos()
    dt = time.time()-t_0
    print(f"Затрачено {dt:.2f} секунд")
    return web.Response(text="\n".join(todos_list))

app = web.Application()
app.add_routes([web.get('/', todos)])

web.run_app(app, host="localhost")
