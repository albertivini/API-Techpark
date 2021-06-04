const Database = require('./config')

const initDb = {

    async init() {

        const db = await Database();

        await db.exec(` CREATE TABLE alunos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cpf VARCHAR(14),
            nome TEXT,
            categoria VARCHAR(2)
        )`)

        await db.exec(`CREATE TABLE veiculos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            placa VARCHAR(7) ,
            descricao TEXT,
            categoria CHAR
        )`)

        await db.exec(` CREATE TABLE instrutor(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cpf VARCHAR(14),
            nome TEXT,
            categoria VARCHAR(2)
        )`)

        await db.exec(`CREATE TABLE aulas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            veiculos_id INTEGER,
            instrutores_id INTEGER,
            alunos_id INTEGER,
            data_hora TIMESTAMP,
            presente BOOL,
            CONSTRAINT fk_veiculo FOREIGN KEY (veiculos_id) REFERENCES veiculos (id),
            CONSTRAINT fk_instrutor FOREIGN KEY (instrutores_id) REFERENCES instrutor (id),
            CONSTRAINT FK_aluno FOREIGN KEY (alunos_id) REFERENCES alunos (id)
         )`)

        await db.run(` INSERT INTO alunos (
            cpf,
            nome,
            categoria
            ) VALUES (
                "11111111125",
                "Vinicius",
                "AB"
            )`)

        await db.run(`UPDATE alunos
              SET cpf = SUBSTR(cpf,1,3) || '.' || SUBSTR(cpf,4,3) || '.' || SUBSTR(cpf,7,3) || '-' || SUBSTR(cpf,10,2)` )    
        
        await db.run(` INSERT INTO veiculos (
            placa,
            descricao,
            categoria
        ) VALUES (
            "OMN3060",
            "GOL",
            "B"
        )`)

        await db.run(`INSERT INTO instrutor (
            cpf,
            nome,
            categoria
        ) VALUES (
            "11123547891",
            "Fabricio Correa",
            "AD"
        )`)

        await db.run(`UPDATE instrutor
              SET cpf = SUBSTR(cpf,1,3) || '.' || SUBSTR(cpf,4,3) || '.' || SUBSTR(cpf,7,3) || '-' || SUBSTR(cpf,10,2)` )    
        
        await db.run(` INSERT INTO aulas (
            veiculos_id,
            instrutores_id, 
            alunos_id, 
            data_hora
        ) VALUES (
            1,
            1,
            1,
            "2021-06-03 06:00"
        )`)

        await db.close()
    }
}

initDb.init()