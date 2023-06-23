const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/recommend_user_queries');


// call json web token
const jwt = require('jsonwebtoken');

// key use for decript and encrype JWT
const secretkey = "CtectLottery";

//ອໍໂຕລົງທະບຽນເລກແນະນຳ
const register_auto_recommend_number = (request, respond) => {

    jwt.verify(req.token, secretkey, (err, rstoken) => {

        const user_id = rstoken.id;
   
    connected.query(queries.check_phone, [user_id], (error, results) => {
        if (error) throw error;
        if (results) {
            
        const currentYear = date.getFullYear() ;
        const currentMonth = date.getMonth() + 1 ; // 0 - 11
            const phone_number = results.phone_number;

            const recommend_number = currentYear + currentMonth + phone_number;

            connected.query(queries.recommend_number, [user_id, recommend_number], (error, results) => {
                if (error) throw error;
                if (results) {
                    respond.status(200).json("Insert done");
                } else {
                    respond.status(200).json("Insert error");
                }

            })
        }
    });



    

    });

    //respond.status(200).json("API register recommend auto number");


}

//ສະແດງເລກແນະນຳ
const show_recommend_number = (request, respond) => {

      jwt.verify(req.token, secretkey, (err, rstoken) => {

        const user_id = rstoken.id;


    connected.query(queries.show_recommend_number, [user_id], (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            respond.status(200).json(results.rows);
        } else {
            respond.status(200).send("no data");
        }
    })

    // respond.status(200).json("API show single recommend number ");
      });

}

//ຜູກເລກແນະນຳ
const join_recommend_number_sub_user = (request, respond) => {

    const { recommender_id, buyer_id, point_recieve } = request.body;

    jwt.verify(req.token, secretkey, (err, rstoken) => {
        if (err) {
            res.status(200).json("token expire");
        } else {

    connected.query(queries.recommend_number_sub_user, [recommender_id, buyer_id, point_recieve], (error, results) => {
        if (error) throw error;
        if (results) {
            respond.status(200).json("Insert done");
        } else {
            respond.status(200).json("Insert error");
        }
    })
        }
});


    //respond.status(200).json("API join recommend number with sub user ");


}



//ສະແດງຍອດແນະນຳ
const show_recommend_total_point = (request, respond) => {

    const { recommender_id } = request.body;
    jwt.verify(req.token, secretkey, (err, rstoken) => {

        if (err) {
            res.status(200).json("token expire");
        } else {

    connected.query(queries.show_recommend_total_point, [recommender_id], (error, results) => {
        if (error) throw error;
        if (results) {
            respond.status(200).json(results.rows);
        } else {
            respond.status(200).json("error");
        }
    })
        }
});


    //respond.status(200).json("API show total recommend point ");


}


module.exports = {
    register_auto_recommend_number,
    show_recommend_number,
    join_recommend_number_sub_user,
    show_recommend_total_point,
}