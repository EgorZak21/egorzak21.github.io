from extensions import Convertor
import traceback

try:
    msg = Convertor.get_price('рубль','до1ллар', 123)
    print(msg)
except Exception as e:
    traceback.print_tb(e.__traceback__)