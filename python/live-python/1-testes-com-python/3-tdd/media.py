from unittest import TestCase, main

def calcula_media(n1, n2, n3):
    """
        Calcula media simples recebendo 3 notas

        n1:float, n2:float, n3:float -> media:float
    """
    return (n1 + n2 + n3) / 3

def esta_passado(media):
    """
        Retorna se o aluno passou de ano a partir de uma média fornecida

        media: float -> result: bool
    """
    return True if media >= 7 else False


class Testes(TestCase):
    def teste_media_int(self):
        self.assertEqual(calcula_media(7, 7, 7), 7)

    def teste_media_float(self):
        self.assertEqual(calcula_media(5.5, 6.5, 7.5), 6.5)

    def teste_passado(self):
        self.assertEqual(esta_passado(7), True)

    def teste_reprovado(self):
        self.assertEqual(esta_passado(6.9), False)

if(__name__ == '__main__'):
    main()