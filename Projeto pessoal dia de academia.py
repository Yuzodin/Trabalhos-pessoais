print('-='*31)
print("FICHA de treino semanal pessoal de treino A,B E C (Seg - Sab)")
print('-='*31)
r = 0
mais = 0
while True:
    dia = str(input('Qual dia da semana é hoje?:')).upper().strip()
    if dia == 'SEGUNDA':
        print('Hoje é dia de treino de Peito e Triceps na academia')
        print()
        print('''LISTA DE EXERCISIOS SEGUNDA
        1 - Supino 30 graus
        2 - Crucifixo
        3 - Desevolvimento Maquina
        4 - Crossover
        5- Triceps Pulley
        6- Elevação Lateral.''')
        print('='*30)
        mais = str (input('Deseja continuar no progama?:[S/N]: ')).upper().strip()
        if mais == 'N':
            break

    elif dia == 'TERÇA':
            print('Hoje é dia de treino de Costas e Biceps na academia')
            print()
            print('''LISTA DE EXERCISIOS TERÇA
        1 - Pulley Frente
        2 - Remada Baixa
        3 - Cruxifixo Invertido
        4 - Rosca Direta
        5- Rosca Martelo
        6- Encolhimento Trapezio.''')
            print('='*30)
            mais = str (input('Deseja continuar no progama?:[S/N]: ')).upper().strip()
            if mais == 'N':
                break

    elif dia == 'QUARTA':
        print('Hoje é dia de treino de Perna na academia')
        print()
        print('''LISTA DE EXERCISIOS QUARTA
        1 - Agachamento
        2 - Cadeira Extensora
        3 - Mesa
        4 - Panturrilha
        5- Cadeira Abdutora e Adutora
        6- Abdominal Maquina.''')
        print('='*30)
        mais = str (input('Deseja continuar no progama?:[S/N]: ')).upper().strip()
        if mais == 'N':
            break

    elif dia == 'QUINTA':
        print('Hoje é dia de treino de Peito e Triceps na academia')
        print()
        print('''LISTA DE EXERCISIOS QUINTA
        1 - Supino 30 graus
        2 - Crucifixo
        3 - Desevolvimento Maquina
        4 - Crossover
        5- Triceps Pulley
        6- Elevação Lateral.''')
        print('='*30)
        mais = str (input('Deseja continuar no progama?:[S/N]: ')).upper().strip()
        if mais == 'N':
            break

    elif dia == 'SEXTA':
        print('Hoje é dia de treino de Costas e Biceps na academia')
        print()
        print('''LISTA DE EXERCISIOS SEXTA
        1 - Pulley Frente
        2 - Remada Baixa
        3 - Cruxifixo Invertido
        4 - Rosca Direta
        5- Rosca Martelo
        6- Encolhimento Trapezio.''')
        print('='*30)
        mais = str (input('Deseja continuar no progama?:[S/N]: ')).upper().strip()
        if mais == 'N':
            break

    elif dia == 'SABADO':
        print('Hoje é dia de treino de Perna na academia')
        print()
        print('''LISTA DE EXERCISIOS QUARTA
        1 - Agachamento
        2 - Cadeira Extensora
        3 - Mesa
        4 - Panturrilha
        5- Cadeira Abdutora e Adutora
        6- Abdominal Maquina.''')
        print('='*30)
        mais = str (input('Deseja continuar no progama?:[S/N]: ')).upper().strip()
        if mais == 'N':
            break

    elif dia == 'DOMINGO':
        print('Descanse você merece Campeão. Segunda voltamos a todo vapor!')

    else:
        print('Não reconheci qual dia solicitado tente novamente.')       

print('Obrigando por usar nosso progama de treino volte sempre é bom treino!')
