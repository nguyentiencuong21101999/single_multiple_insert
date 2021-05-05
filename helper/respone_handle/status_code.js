const statusError = {
    Oke: {
        code: 200,
        message: "oke"
    },
    BadRequest: {
        code: 400,
        message: "Bad Request"
    },
    Unauthorized: {
        code: 401,
        message: "Unauthorized"
    },
    Payment: {
        code: 401,
        message: "Payment Required"
    },
    Forbidden: {
        code: 403,
        message: "Forbidden "
    },
    NotFound: {
        code: 404,
        message: "Not Found "
    }

}


const statusUser = {
    //error
    IdIsNotValid:{
        code:403,
        message:"Id is not valid!"
    },
    DeleteSuccess:{
        code:200,
        message:"Delete Success ..."
    },
    InsertSuccess:{
        code:200,
        message:"Insert Success ..."
    },
    UpdateSuccess:{
        code:200,
        message:"Update Success ..."
    }


}


module.exports = {
    statusError,
    statusUser,
};