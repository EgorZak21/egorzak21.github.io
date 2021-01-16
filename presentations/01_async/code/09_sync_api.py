import requests
import json
import time

t_0 = time.time()
rates = []
for day in range(1, 31):
    r = requests.get(
        f"https://api.exchangeratesapi.io/2020-10-{day}?symbols=RUB")
    rates.append(json.loads(r.content)["rates"]["RUB"])

dt = time.time() - t_0

print(f"Затрачено {dt:.2f} секунды")
print(rates)
