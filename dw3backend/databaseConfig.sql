----- Cria um banco de dados
-- create database dw3;

CREATE TABLE IF NOT EXISTS contas (
    id serial PRIMARY KEY,
    descricao varchar(255),
    data_pagamento date,
    valor numeric(10,2),
	deleted boolean DEFAULT false
);
INSERT INTO contas (descricao, data_pagamento, valor, deleted)
VALUES ('Conta de Energia', '2023-10-04', 150.50, false);

create table IF NOT EXISTS usuarios (
    usuarioid bigserial constraint pk_usuarios PRIMARY KEY,
    username varchar(10) UNIQUE,
    password text,
    deleted boolean DEFAULT false
);

CREATE EXTENSION if NOT EXISTS pgcrypto;

insert into usuarios values 
    (default, 'admin', crypt('admin', gen_salt('bf'))), -- senha criptografada com bcrypt
    (default, 'qwe', crypt('qwe', gen_salt('bf'))) -- senha criptografada com bcrypt
ON CONFLICT DO NOTHING;

select * from contas;

select deleted from contas where deleted= false;

UPDATE contas
SET deleted = 'false'
WHERE id = 1 AND deleted = 'true';

/*
create table IF NOT EXISTS alunos (
    alunoid bigserial constraint pk_alunos PRIMARY KEY,
    prontuario varchar(10) UNIQUE,
    nome varchar(50),
    endereco VARCHAR(60),
    rendafamiliar numeric(8,2),
    datanascimento date,
    cursoid bigint constraint fk_aluno_curso REFERENCES cursos,
    deleted boolean DEFAULT false
);

insert into alunos values 
    (default, 'pront1', 'José das Neves', 'Rua A, Votuporanga', 6891.60, '2000-01-31', 
        (SELECT cursoid from CURSOS where codigo = 'BSI')),
    (default, 'pront2', 'Maria Silveira', 'Rua B, São José do Rio Preto', 7372.41, '2002-03-12', 
        (SELECT cursoid from CURSOS where codigo = 'DIREITO'))
ON CONFLICT DO NOTHING;

create table IF NOT EXISTS usuarios (
    usuarioid bigserial constraint pk_usuarios PRIMARY KEY,
    username varchar(10) UNIQUE,
    password text,
    deleted boolean DEFAULT false
);

CREATE EXTENSION if NOT EXISTS pgcrypto;

insert into usuarios values 
    (default, 'admin', crypt('admin', gen_salt('bf'))), -- senha criptografada com bcrypt
    (default, 'qwe', crypt('qwe', gen_salt('bf'))) -- senha criptografada com bcrypt
ON CONFLICT DO NOTHING;
*/