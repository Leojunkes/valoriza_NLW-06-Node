# migrations

up - criar migrations com o comando ```yarn typeorm migration:run```

down - deletar ultima migration criada ```yarn typeorm migration:revert```

criar na cli uma entity padrão na pasta que queremos => após configurar ormConfig faça o comando ```yarn typeorm entity:create -n User```

# Middleware

sempre que utilizamos por exemplo app.use(...) estamos utilizando conceito de Middleware.


Quando for utilizar Middleware de erro, precisamos passar 4 parâmetros.

relacionamento entre tabelas chamamos de ```foreignKeys```

# JWT - json web token

token que é passado quando precisamos de autenticação

payload - informaçoes que queremos passar para o web token, ex: repassa pro frontend informações dom meu usuário(email, nome, token)

lib para criptografar senha/password será ```bcryptjs```

salt - tipo de criptografia - usamos 8

pra verificar se a senha está correta utilizamos a o ```compare from 'bcrypt'```

pra gerar o token pra gente utilizaremos ```signin from 'jsonwebtoken'```

# Authenticated Middleware

Vamos utilizar o Bearer Token

- Receber o token
- Validar se o token está preenchido
- Validar se o token é válido 
- REcuperar informações do usuário



