import aiohttp
import asyncio
import time

t_0 = time.time()


async def day_rate(session, day):
    async with session.get(f"https://api.exchangeratesapi.io/2020-10-{day}?symbols=RUB") as resp:
        r = await resp.json()
        return r["rates"]["RUB"]


async def main():
    async with aiohttp.ClientSession() as session:
        resps = [day_rate(session, day) for day in range(1, 31)]
        rates = await asyncio.gather(*resps)

    dt = time.time() - t_0
    print(f"Затрачено {dt:.2f} секунды")
    print(rates)


event_loop = asyncio.get_event_loop()
event_loop.run_until_complete(main())
