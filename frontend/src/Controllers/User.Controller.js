
// import Axios 
import Axios from "axios";

// import config
import Config from "./Config.Controller";

class User {
    constructor() {
        // user related apis
        this.api = {
            addUser: "/api/User/add",
            getAllUser: "/api/user/get",
            updateUser: "/api/user/update",
            deleteUser: "/user/delete",
            getUser: "/api/user/getOne",
        };
    }

    addUser = async (data) => {
        console.log(data);



        var resp = 600;
        var userData = {}
        await Axios.post(
            `${Config.host}${Config.port}${this.api.addUser}`,
            data
        )
            .then(Response => {
                console.log(Response);

                resp = Response.status;
                userData = Response.data.userData
            })
            .catch(err => {
                console.log(err);
                try {
                    console.error(err);
                    resp = err.response.status;
                } catch (error) {
                    console.log(error);
                    resp = 600;
                }
            });

        if (resp === 200) {
            return resp;
        }
        return resp;
    }



    getAllUser = () => {
 
        return Axios.get(
            `${Config.host}${Config.port}${this.api.getAllUser}`,
        )
        .then(Response => {
            console.log(Response);
            if(Response.status == 200 )
                return Response.data;
            else
                return []
        })
        .catch(err => {
            console.error(err);
            return [];    
        });

    }

    getOne = async (id) => {
        console.log(id);
        var resp = 600;
        var userData = {}
        const data = await Axios.get(
            `${Config.host}${Config.port}${this.api.getUser}/${id}`,)
            // .then(response => {
            //     console.log(response);
            // }).catch(err => {
            //     console.log(err);
            // })
        
            .then(Response => {
                console.log(Response);

                resp = Response.status;
                userData = Response.data
            })
            .catch(err => {
                console.error(err);
                try {
                    console.error(err);
                    resp = err.response.status;
                } catch (error) {
                    console.log(error);
                    resp = 600;
                }
            });

        if (resp === 200) {
            return userData;
        }
        return resp;
    }


    editUser = async (data) => {
        console.log(data);



        var resp = 600;
        var userData = {}
        await Axios.put(
            `${Config.host}${Config.port}${this.api.updateUser}/${data.id}`,
            data
        )
            .then(Response => {
                console.log(Response);

                resp = Response.status;
                userData = Response.data.userData
            })
            .catch(err => {
                console.error(err);
                try {
                    console.error(err);
                    resp = err.response.status;
                } catch (error) {
                    console.log(error);
                    resp = 600;
                }
            });

        if (resp === 200) {
            return resp;
        }
        return resp;
    }

    deleteUser = async (data) => {
        console.log(data);



        var resp = 600;
        var userData = {}
        await Axios.delete(
            `${Config.host}${Config.port}${this.api.deleteUser}/${data.id}`,
        )
            .then(Response => {
                console.log(Response);

                resp = Response.status;
                userData = Response.data.userData
            })
            .catch(err => {
                console.error(err);
                try {
                    console.error(err);
                    resp = err.response.status;
                } catch (error) {
                    console.log(error);
                    resp = 600;
                }
            });

        if (resp === 200) {
            return resp;
        }
        return resp;
    }
}
var UserObject = new User();
export default UserObject;

