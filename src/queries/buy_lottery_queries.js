const showhistory = " SELECT *  FROM LOTTO_TICKETS where TICKET_ID =$1 ";


const insert_data = "insert into LOTTO_TICKET_ITEMS (tickets_id,LOT_ID,MLUCKYNUMBER,MAMOUNT) values ('1','1',$1,$2) "

module.exports = {
    showhistory,
    insert_data,
};