const accountResolver = {
    Query: {
        // traer nombre de la consulta definida en typedef
        accountByUsername: (_, {username}, {dataSource}) => {
            // esta función se comunica con el ms, para ello el datasource
            
        }
    }
}