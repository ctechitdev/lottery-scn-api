create table tbl_user_internal (
user_internal_id serial,
full_name varchar(150),
user_name varchar(30),
pass_word varchar(100),
user_status int, 
date_register date
);

create table tbl_user_external (
user_external_id serial,
gender int,
full_name varchar(150),
phone_number varchar(15),
pass_word varchar(100),
user_status int, 
date_register date
);



create table tbl_lottery_recommend_number (
    lrn_id serial,
    user_external_id int,
    lottery_recommend_number varchar(20),
    lrn_register_date date
);

create table tbl_recommend_point_amount(
    rpa_id serial,
    recommender_id int,
    buyer_id int,
    point_recieve int,
    rpa_register_date date
);

create table tbl_recommend_point_used(
    rpu_id serial,
    user_external_id int,
    point_used int,
    used_point_decription text,
    rpu_register_date date
);


create table tbl_cash_back_promotion(
    cbpo_id serial,
    cash_back_name varchar(150),
    cash_back_status int,
    cash_back_condition_value int,
    cash_back_discount_values int,
    cbp_register_by int,
    cbp_register_date date
);


create table tbl_bill_buy_lottery (
    bbl_id serial,
    bill_buy_number varchar(50),
    bill_price int, 
    bill_status int,
    draw_number int,
    buyer_id int,
    bank_id int,
    bank_bill_refferance varchar(50),
    lottery_center_bill_refferance varchar(50),
    bbl_register_date date
);

create table tbl_bill_buy_lottery_detail (
    bbld_id serial,
    bbl_id int,
    draw_number varchar(10),
    lottery_number varchar(10),
    lottery_price int
);

create table tbl_win_lottery_bill(
    wlb_id serial,
    bill_buy_id int,
    draw_number varchar(10),
    win_total_price int,
    wlb_register_date date
);

create table tbl_win_lottery_list(
    wll_id serial,
    wlb_id int,
    lottery_number varchar(10),
    win_price int
);

create table tbl_event_notified(
    en_id serial,
    event_status int,
    event_description text,
    event_by int,
    en_register_date date
);

