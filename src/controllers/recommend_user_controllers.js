const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/recommend_user_queries');


// call json web token
const jwt = require('jsonwebtoken');

// key use for decript and encrype JWT
const secretkey = "CtectLottery";

//ອໍໂຕລົງທະບຽນເລກແນະນຳ
const register_auto_recommend_number = async(request, respond) => {

    // ກວດສອບ jwt
    jwt.verify(request.token, secretkey, (err, rstoken) => {
        if (err) {
            // ຖ້າໝົດອາຍຸສະແດງ
            respond.status(200).json("token expire");
        } else {

            // ເກັບຂໍ້ມູນທີ່ແກະອອກມາຈາກ jwt
            const user_id = rstoken.id;
            const token_phone = rstoken.phone;

            //ວາງໂຕແປຮັບມື້ປະຈຸບັນ
            let date_ob = new Date();

            //ຮັບ ວັນ ໂຕແປ date_ob
            let date = ("0" + date_ob.getDate()).slice(-2);

            //ຮັບ ເດືອນ ໂຕແປ date_ob
            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

            //ຮັບ ປີ ໂຕແປ date_ob
            let year = date_ob.getFullYear();

            // ລວມ ວັນເດືອນປີເປັນຮູບແບບ string 20230803 + ເລກໂທລະສັບ
            const generade_recommend_number = (year + month + date + token_phone)

            connected.query(queries.check_recommend_number_by_user, [user_id], (error, results) => {
                if (error) throw error;
                if (results.rows.length) {
                    respond.status(200).send("ມີການລົງທະບຽນແລ້ວ");
                } else {

                    connected.query(queries.recommend_number_by_user, [user_id, generade_recommend_number], (error, results) => {

                        if (error) {
                            respond.status(200).json("Insert error");
                        } else {
                            respond.status(200).json("Insert done");
                        }

                    })

                }
            });
        }





    });



}

//ສະແດງເລກແນະນຳ
const show_recommend_number = async(request, respond) => {

    jwt.verify(request.token, secretkey, (err, rstoken) => {

        if (err) {
            respond.status(200).json("token expire");
        } else {
            const user_id = rstoken.id;

            connected.query(queries.show_recommend_number, [user_id], (error, results) => {
                if (error) throw error;
                if (results.rows.length) {
                    respond.status(200).json(results.rows);
                } else {
                    respond.status(200).send("no data");
                }
            })

        }





        // respond.status(200).json("API show single recommend number ");
    });

}

//ຜູກເລກແນະນຳ 
const join_recommend_number_sub_user = (request, respond) => {

    const { recommend_number } = request.body;

    jwt.verify(request.token, secretkey, (err, rstoken) => {
        if (err) {
            respond.status(200).json("token expire");
        } else {

            const buyer_id = rstoken.id;

            connected.query(queries.check_recommend_number_code, [recommend_number], (error, results) => {
                if (error) throw error;
                if (results.rows.length) {

                    const user_recommend_id = results.rows[0].user_external_id;

                    if (user_recommend_id === buyer_id) {
                        respond.status(200).send("ບໍ່ສາມາດຜູກເລກຕົວເອງໄດ້");
                    } else {

                        connected.query(queries.check_join_recommender_buyer, [user_recommend_id, buyer_id], (error, results) => {
                            if (error) throw error;
                            if (results.rows.length) {
                                respond.status(200).send("ມີການຜູກແລ້ວ");
                            } else {
                                connected.query(queries.join_recommender_with_buyer_by_recommend_code, [user_recommend_id, buyer_id], (error, results) => {
                                    if (error) {
                                        respond.status(200).json("Insert error");
                                    } else {
                                        respond.status(200).json("ຜູກສຳເລັດ");
                                    }
                                })
                            }
                        })

                    }
                } else {
                    respond.status(200).send("no data");
                }
            })
        }
    });
}



//ສະແດງຍອດແນະນຳ
const show_recommend_total_point = (request, respond) => {

    jwt.verify(request.token, secretkey, (err, rstoken) => {


        if (err) {
            respond.status(200).json("token expire");
        } else {
            const user_id = rstoken.id;
            connected.query(queries.show_recommend_total_point, [user_id], (error, results) => {
                if (error) throw error;
                if (results.rows.length) {

                    respond.status(200).send(results.rows);
                } else {
                    respond.status(200).send("no data");
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