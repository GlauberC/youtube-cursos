def soma(n1, n2):
    return n1 + n2

def subtracao(n1, n2):
    return n1 - n2

def divisao(n1, n2):
    return n1 / n2

def multiplicacao(n1, n2):
    return n1 * n2

# teste soma
assert soma(0, 0) == 0
assert soma(1, 0) == 1

# teste subtracao
assert subtracao(1, 1) == 0
assert subtracao(2, 1) == 1
assert subtracao(1, 2) == -1

# teste divisao
assert divisao(4, 2) == 2
assert divisao(1, 1) == 1

# teste multiplicacao
assert multiplicacao(5, 1) == 5
assert multiplicacao(3, 0) == 0