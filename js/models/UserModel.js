class UserModel {
    constructor() {
        this._userName = "";
        this._userLogin = "";
        this._userAvatar = "";
        this._userUrl = "";
        this._reposUrl = "";
    }
    get userName() {
        return this._userName;
    }
    get userLogin() {
        return this._userLogin;
    } 
    get userAvatar() {
        return this._userAvatar;
    }
    get userUrl() {
        return this._userUrl;
    }
    get reposUrl() {
        return this._reposUrl;
    }
    searchInfoUser(user,callback) {
        let request = new XMLHttpRequest();
        request.open("GET", `https://api.github.com/users/${user}`);
        request.addEventListener("load", ()=>{

            try {
            if(request.status==200){
                let response = JSON.parse(request.responseText);
                this._userName = response.name;
                this._userLogin = response.login;
                this._userAvatar = response.avatar_url;
                this._userUrl = response.html_url;
                this._reposUrl = `https://github.com/${user}?tab=repositories`;
                callback();
            } else if(request.status==404){
                throw new Error(`Erro ${request.status} Usuário inválido, tente novamente!`);
            } else {
                throw new Error(`Houve algo inesperado, tente novamente mais tarde! Erro ${request.status}`);
            }
        } catch (error) {
            alert(error);
        }
        })
        request.send();
    }
}