const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/cancel_query');
// call json web token
const jwt = require('jsonwebtoken');

// key use for decript and encrype JWT
const secretkey = "CtectLottery";


//show bill
const show_bill = (request, respond) => {
    jwt.verify(request.token, secretkey, (err, rstoken) => {


        if (err) {
            respond.status(200).json("token expire");
        } else {
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
    });}
    



//cancel bill

const cancel_bill_event = (request, respond) => {
    jwt.verify(request.token, secretkey, (err, rstoken) => {

        if (err) {
            respond.status(200).json("token expire");
        } else {
            const {lot_id} = request.body ;

            connected.query(queries.cancel, [lot_id], (error, results) => {
                if (error) throw error;
                respond.status(200).json("cancel done")
            })

        }
 
    });
         }
    

//respond.status(200).json("API update User single data");

module.exports = {
    cancel_bill_event,
    show_bill,
    
};