create sequence account_seq
    increment by 50;

alter sequence account_seq owner to atm;

create sequence atm_seq
    increment by 50;

alter sequence atm_seq owner to atm;

create sequence bank_seq
    increment by 50;

alter sequence bank_seq owner to atm;

create sequence transaction_seq
    increment by 50;

alter sequence transaction_seq owner to atm;

create sequence usr_seq
    increment by 50;

alter sequence usr_seq owner to atm;

create table if not exists flyway_schema_history
(
    installed_rank integer                 not null
        constraint flyway_schema_history_pk
            primary key,
    version        varchar(50),
    description    varchar(200)            not null,
    type           varchar(20)             not null,
    script         varchar(1000)           not null,
    checksum       integer,
    installed_by   varchar(100)            not null,
    installed_on   timestamp default now() not null,
    execution_time integer                 not null,
    success        boolean                 not null
);

alter table flyway_schema_history
    owner to atm;

create index if not exists flyway_schema_history_s_idx
    on flyway_schema_history (success);

create table if not exists user_role
(
    user_id bigint not null,
    roles   integer
);

alter table user_role
    owner to atm;

create table if not exists atm
(
    id         bigint not null
        primary key,
    address    varchar(255),
    atm_status varchar(255)
);

alter table atm
    owner to atm;

create table if not exists bank
(
    id   bigint not null
        primary key,
    name varchar(255)
);

alter table bank
    owner to atm;

create table if not exists bank_atms
(
    bank_id bigint not null
        constraint fkqv3vsff7qc6wf950vlr423xqr
            references bank,
    atms_id bigint not null
        constraint fk8e5uskqste406wq31o4ney5ws
            references atm,
    primary key (bank_id, atms_id)
);

alter table bank_atms
    owner to atm;

create table if not exists usr
(
    id            bigint not null
        primary key,
    birthday_date date,
    first_name    varchar(255),
    last_name     varchar(255),
    middle_name   varchar(255),
    user_status   varchar(255)
);

alter table usr
    owner to atm;

create table if not exists card
(
    number      varchar(255) not null
        primary key,
    card_status varchar(255),
    cvv         varchar(255),
    expiry_date date,
    pin         varchar(255),
    bank_id     bigint       not null
        constraint fk73u1abbacqsc1lcrl3ut1e2kp
            references bank,
    user_id     bigint       not null
        constraint fkfklks4pup2r1ni8v0g5in9ee8
            references usr
);

alter table card
    owner to atm;

create table if not exists account
(
    id             bigint         not null
        primary key,
    account_name   varchar(64)    not null,
    account_status varchar(255),
    account_type   varchar(255),
    balance        numeric(19, 2) not null,
    currency       varchar(255)   not null,
    card_number    varchar(255)   not null
        constraint fkminmh80h8xd65wj05caj9lfqw
            references card,
    user_id        bigint         not null
        constraint fk28fcmglr2tde6x16oxmjor8ux
            references usr
);

alter table account
    owner to atm;

create table if not exists saving_account
(
    interest_rate numeric(5, 2),
    id            bigint not null
        primary key
        constraint fkiur0263vv3myj6kwk0fa2j3fp
            references account
);

alter table saving_account
    owner to atm;

create table if not exists transaction
(
    id                 bigint         not null
        primary key,
    amount             numeric(19, 2) not null,
    currency           varchar(255)   not null,
    modify_time        timestamp,
    start_time         timestamp,
    transaction_status varchar(255),
    transaction_type   varchar(255),
    from_account_id    bigint         not null
        constraint uk_o2eocs3v56knjlxe9vecfp1aw
            unique
        constraint fkrff4jlxetafju1e5cks5mfcnk
            references account
);

alter table transaction
    owner to atm;

create table if not exists regular_transaction
(
    period        varchar(255),
    id            bigint not null
        primary key
        constraint fk97a5yv5xbw7mvbw3lh3toatbo
            references transaction,
    to_account_id bigint
        constraint fkqki8moy5jrqiv3x6w7yu78irb
            references account
);

alter table regular_transaction
    owner to atm;

create table if not exists transactional_account
(
    credit_money_amount  numeric(19, 2),
    is_lending_available boolean not null,
    landing_rate         numeric(5, 2),
    id                   bigint  not null
        primary key
        constraint fkaljlp6e8c6nxq6vddiwwbwid4
            references account
);

alter table transactional_account
    owner to atm;

create table if not exists transfer_transaction
(
    id            bigint not null
        primary key
        constraint fk58n8tmwrk7vxiqt5idki0lus8
            references transaction,
    to_account_id bigint
        constraint fk1g2036v1nlepqu448oi4ej50h
            references account
);

alter table transfer_transaction
    owner to atm;

create table if not exists usr_role
(
    owner_id bigint not null
        constraint fk9520qsyv5f7aul5yfdktobh4b
            references usr,
    role     integer
);

alter table usr_role
    owner to atm;

