from unittest import TestCase, main

def eh_par(n):
    """
        Função que verifica se o número é par

        n:int -> bool
    """

    try:
        return n % 2 == 0
    except TypeError:
        return False

class Testes(TestCase):
    def test_par(self):
        self.assertEqual(eh_par(4), True)
    
    def test_impar(self):
        self.assertEqual(eh_par(5), False)

    def test_tipo(self):
        self.assertEqual(eh_par('teste'), False)


if(__name__ == '__main__'):
    main()