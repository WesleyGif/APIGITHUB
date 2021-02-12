class ReposModel {
    constructor() {
        this._repoListName = [];
        this._repoListLang = [];
        this._repoListUrl = [];
    }
    searchInfoRepo(user,callback) {
        let request = new XMLHttpRequest();
        request.open('GET', `https://api.github.com/users/${user}/repos`);
        request.addEventListener("load", () => {
            if (request.status == 200) {
                let response = JSON.parse(request.responseText);
                this._repoListName = response.map((repos) => repos.name);
                this._repoListLang = response.map((repos) => repos.language);
                this._repoListUrl = response.map((repos) => repos.html_url);
                callback();
            }
            else{
                console.log(request.status);
            }
        })
        request.send();
    }
}