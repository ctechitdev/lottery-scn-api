 
// command sql select single user data
const show_bill = "select * from lotto_ticket_items where lot_id = $1";



// command sql update user data

const cancel = "update lotto_ticket_items set active ='2'  where lot_id = $1";


module.exports = {
    show_bill,
    cancel,
};