class UserController {
    searchUser(user) {
        let userModel = new UserModel();
        userModel.searchInfoUser(user, () => new UserView(userModel.userName,userModel.userLogin,userModel.userAvatar,userModel.userUrl,userModel.reposUrl));
    }
    searchRepo(user) {
        let reposModel = new ReposModel();
        reposModel.searchInfoRepo(user, () => new ReposView(reposModel._repoListName,reposModel._repoListLang,reposModel._repoListUrl));
    }
}

let button = document.querySelector('#searchUserButton');
button.addEventListener("click", () => {
    let user = document.querySelector('#searchUser').value;
    let userController = new UserController();
    userController.searchUser(user);
    userController.searchRepo(user);
});