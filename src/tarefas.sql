CREATE TABLE tarefas (
    id SERIAL PRIMARY KEY,             -- auto incremento
    titulo VARCHAR(100) NOT NULL,      -- título curto
    descricao TEXT,                    -- descrição longa
    status VARCHAR(20) DEFAULT 'pendente', -- status inicial pendente
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- data automática
);

NSERT INTO tarefas (titulo, descricao, status)
VALUES ('Estudar Node.js', 'Ler documentação do Express', 'pendente');
