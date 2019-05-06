from unittest import TestCase, main

def soma(n1, n2):
    return n1 + n2

def subtracao(n1, n2):
    return n1 - n2

def divisao(n1, n2):
    return n1 / n2

def multiplicacao(n1, n2):
    return n1 * n2

class Testes(TestCase):
    def test_soma(self):
        self.assertEqual(soma(5,5), 10)

    # def test_soma_errada(self):
    #     self.assertEqual(soma(5,6), 10)

    def test_sub(self):
        self.assertEqual( subtracao(10, 10), 0)

    # def test_sub_errada(self):
    #     self.assertEqual( subtracao(10, 9), 0)


if __name__ == '__main__':
    main()