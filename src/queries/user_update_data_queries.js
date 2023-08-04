// command sql select single user data
const show_user_data = "select id,firstname, lastname, phone, email, dob, gender, image from customer where id = $1";



// command sql update user data

const update_user_data = "update customer set firstname = $2, lastname =$3 , email = $4, dob =$5 , gender =$6, image=$7 where id = $1";


module.exports = {
    show_user_data,
    update_user_data,
};