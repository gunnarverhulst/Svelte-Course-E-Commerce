import axios from "axios";
import url from './URL';
import setupUser from "./setupUser";

async function loginUser({email, password}){
    let em='verhulstg@gmail.com';
    let username = 'Gunz';
    let pw = 'Nuke2k'
    const response = await axios.post(`${url}/api/auth/local`, {
        identifier: username,
        password: pw}
    ).catch(error => console.log(error));

    if(response) {
        setupUser(response);
    }

    return response;
}

export default loginUser;