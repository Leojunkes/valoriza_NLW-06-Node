# migrations

up - criar migrations com o comando ```yarn typeorm migration:run```

down - deletar ultima migration criada ```yarn typeorm migration:revert```

criar na cli uma entity padrão na pasta que queremos => após configurar ormConfig faça o comando ```yarn typeorm entity:create -n User```