class Pessoa():
    def __init__(self, nome, idade, cpf): 
        self.nome = nome
        self.idade = idade
        self.cpf = cpf
        self.nacionalidade = "Brasileiro"
    def __str__(self):
        return f'{self.nome}, {self.idade}, {self.cpf}'
    
    def falar(self):
        return "Ola"

pessoa1 = Pessoa(Pessoa("Gustavo", 30, 232342))
print(pessoa1, pessoa1.falar())