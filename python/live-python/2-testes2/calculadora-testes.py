from unittest import TestCase, main
from decimal import Decimal

class Calc:
    def __init__(self):
        self.cache = 0

    def soma(self, x, y = None):
        if isinstance(x, int) and isinstance(y, int):
            self.cache = x + y
            return self.cache
        elif y is None:
            return x + self.cache
        else:
            raise Exception('insira somente números')

    def sub(self, x, y = None):
        if( y is None):
            self.cache = x - self.cache
            return self.cache
        else:
            self.cache = x - y
            return self.cache
    
    def mult(self, x, y):
        if isinstance(x, int) and isinstance(y, int):
            return x * y
        else:
            raise Exception('insira somente números')
    
    def div(self, x, y):
        return x / y
    

class Testes_calculadora(TestCase):
    def setUp(self):
        self.calc = Calc()

    def test_soma(self):
        self.assertEqual(self.calc.soma(2, 2), 4)
    def test_soma_neg(self):
        self.assertEqual(self.calc.soma(2, -3), -1)
    # def test_soma_float(self):
    #     self.assertEqual(self.calc.soma(2.0, 1.0), 3.0)
    def test_soma_string(self):
        with self.assertRaises(Exception):
            self.calc.soma('string1', 'string2')



    def test_sub(self):
        self.assertEqual(self.calc.sub(3, 2), 1)
    def test_sub_neg(self):
        self.assertEqual(self.calc.sub(-3, 2), -5)
    def test_sub_pos_neg(self):
        self.assertEqual(self.calc.sub(3, -2), 5)
    def test_sub_neg_neg(self):
        self.assertEqual(self.calc.sub(-4, -3), -1)
    def test_sub_float(self):
        self.assertEqual(self.calc.sub(3.1, -2.1), 5.2)
    def test_sub_string(self):
        with self.assertRaises(Exception):
            self.calc.sub('string1', 'string2')

    def test_mult(self):
        self.assertEqual(self.calc.mult(3, 2), 6)
    def test_mult_neg(self):
        self.assertEqual(self.calc.mult(-3, -4), 12)
    def test_mult_neg_pos(self):
        self.assertEqual(self.calc.mult(-4, 4), -16)
    # def test_mult_float(self):
    #     self.assertEqual(self.calc.mult(3.5, 2), 7.0)
    def test_mult_string(self):
        with self.assertRaises(Exception):
            self.calc.mult('string1', 'string2')
    def test_mult_string_number(self):
        with self.assertRaises(Exception):
            self.calc.mult('string1', 3)

    def test_div(self):
        self.assertEqual(self.calc.div(4,2), 2)
    def test_div_fracao(self):
        self.assertEqual(self.calc.div(4,8), 0.5)
    def test_div_zero(self):
        with self.assertRaises(Exception):
            self.calc.div(2, 0)
    def test_div_string(self):
        with self.assertRaises(Exception):
            self.calc.mult('string1', 'string2')
    def test_div_string_number(self):
        with self.assertRaises(Exception):
            self.calc.mult('string1', 2)

    def test_cache_soma(self):
        self.assertEqual(self.calc.soma(self.calc.soma(2, 2)), 8)
    def test_cache_sub(self):
        """
            Explicação:
            x  - y = cache
            10 - 5 = 5

            cache - resultado = 0
        """
        self.assertEqual(self.calc.sub(self.calc.sub(10, 5)), 0)

if(__name__ == '__main__'):
    main()