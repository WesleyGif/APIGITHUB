class ReposView {
    constructor(listName,listLang,listUrl) {
        this._listName = listName;
        this._listLang = listLang;
        this._listUrl = listUrl;
        ReposView.colocaNaTela(this._listName,this._listLang,listUrl);        
    }
    static colocaNaTela(listName,listLang,listUrl) {
        let i = 0;
        let $ = document.createElement.bind(document);
        let div = document.querySelector('.container-repo');
        div.innerHTML = "";
        listName.forEach(function(){
            if(listLang[i]==null)listLang[i] = "Não possui";

            let div1 = $('div');
            div1.classList.add('repo-box');
            div.appendChild(div1);

            let a = $('a');
            a.setAttribute('href',listUrl[i]);
            a.setAttribute('target','_blank');
            a.classList.add('repoTextA');

            let p = $('p');
            p.textContent = listName[i];
            p.classList.add('repoText');
            a.appendChild(p);
            div1.appendChild(a);

            let p2 = $('p');
            p2.textContent = listLang[i];
            p2.classList.add('repoText');
            div1.appendChild(p2);
            i++;
        });
    }
}