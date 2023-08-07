const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/cancel_query');


//show bill
const show_bill = (request, respond) => {

 const {lot_id} = request.body ;
            connected.query(queries.show_bill, [lot_id], (error, results) => {
                if (error) throw error;
                if (results.rows.length) {
                    respond.status(200).json(results.rows);
                } else {
                    respond.status(200).send("No bill");
                }
            });
        }
    



//cancel bill

const cancel_bill_event = (request, respond) => {
    const {lot_id} = request.body ;
           
            connected.query(queries.cancel, [lot_id], (error, results) => {
                if (error) throw error;
                respond.status(200).json("update done")
            })
         }
    

//respond.status(200).json("API update User single data");

module.exports = {
    cancel_bill_event,
    show_bill,
    
};