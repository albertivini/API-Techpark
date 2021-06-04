const Database = require('./config')

const initDb = {

    async init() {

        const db = await Database()
        
        // await db.exec(`CREATE TABLE aulas (
        //     veiculos_id INTEGER,
        //     instrutores_id INTEGER,
        //     alunos_id INTEGER,
        //     data_hora TIMESTAMP,
        //     presente BOOL,
        //     CONSTRAINT fk_veiculo FOREIGN KEY (veiculos_id) REFERENCES veiculos (id),
        //     CONSTRAINT fk_instrutor FOREIGN KEY (instrutores_id) REFERENCES instrutor (id),
        //     CONSTRAINT FK_aluno FOREIGN KEY (alunos_id) REFERENCES alunos (id)
        // )`)


        // await db.run(`UPDATE alunos
        // SET cpf = SUBSTR(cpf,1,3) || '.' || SUBSTR(cpf,4,3) || '.' || SUBSTR(cpf,7,3) || '-' || SUBSTR(cpf,10,2) WHERE cpf = "95018840749"`)

        // const teste = await db.get(` SELECT *, SUBSTR(cpf,1,3) || '' || SUBSTR(cpf,4,3) || '' || SUBSTR(cpf,7,3) || '' || SUBSTR(cpf,10,2) AS cpf_unmask FROM alunos WHERE cpf = '950.188.407-49'`)
        
        await db.run(`INSERT INTO instrutor (
            cpf,
            nome,
            categoria
        ) VALUES (
            "11123547891",
            "Fabricio Correa",
            "AD"
        )`)

        // const teste = await db.get(` SELECT *, REPLACE(REPLACE(REPLACE(cpf,'.', ''),'-', ''),'/', '') AS cpf_unmask FROM alunos WHERE cpf = '950.188.407-49'`)
        
        // console.log(teste)

        // await db.run(` INSERT INTO aulas (
        //     veiculos_id,
        //     instrutores_id,
        //     alunos_id,
        //     data_hora
        // ) VALUES (
        //     1,
        //     1,
        //     1,
        //     "2021-06-02 06:00"
        // )`)

        await db.close()
    }
}

initDb.init()