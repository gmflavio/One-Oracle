# Análise de Churn de Clientes de Telecomunicações

Este projeto é um estudo de caso focado na análise da rotatividade de clientes (Churn) de uma empresa de telecomunicações. O objetivo principal é carregar e estruturar um conjunto de dados para uma análise exploratória futura, visando identificar padrões e fatores que contribuem para a saída de clientes.

## Sobre o Conjunto de Dados

O conjunto de dados, obtido através de uma API JSON, contém informações detalhadas sobre os clientes, incluindo:
- `customerID`: Identificador único do cliente.
- `Churn`: Indica se o cliente cancelou o serviço (`Yes`) ou não (`No`).
- `customer`: Informações demográficas (gênero, se é idoso, se tem parceiro ou dependentes).
- `phone`: Detalhes do serviço de telefone.
- `internet`: Detalhes do serviço de internet.
- `account`: Informações da conta, como tipo de contrato, método de pagamento e cobranças.

## Estrutura do Projeto

O notebook (`Cópia de Untitled0.ipynb`) realiza as seguintes etapas:

1.  **Carregamento de Dados**: Utiliza a biblioteca `requests` para buscar dados de uma API externa em formato JSON e a biblioteca `pandas` para transformá-los em um DataFrame.
2.  **Visualização Inicial**: Exibe as primeiras linhas e as informações (`df.info()`, `df.dtypes`) do DataFrame para uma compreensão preliminar da sua estrutura e tipos de dados.
3.  **Pré-processamento**: Normaliza a coluna `account`, que contém dados aninhados em formato de dicionário, expandindo-a em novas colunas (`Contract`, `PaperlessBilling`, `PaymentMethod`, `Charges.Monthly`, `Charges.Total`) para facilitar a análise.

## Tecnologias Utilizadas

- **Python**: Linguagem de programação principal.
- **Pandas**: Biblioteca para manipulação e análise de dados.
- **Requests**: Biblioteca para fazer requisições HTTP e obter os dados da API.
