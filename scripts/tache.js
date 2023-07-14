class Tache {

    constructor(el, tache, importance, description) {
        this._el = el;
        this._tache = tache;
        this._importance = importance;
        this._description = description;
        this._elWrapperDetail = document.querySelector('[data-js-control-wrapper="detail"]');
        this._elBtnWrapper = this._el.querySelector('[data-js-bouton-wrapper]');
        this._elWrapperInjection = document.querySelector('[data-js-control-wrapper="injection"]');

        this.gereBtn = this.gereBtn.bind(this);

        this.init();
    }
    
    /**
     * Initialise les comportements
     */
    init() {
        this._elBtnWrapper.addEventListener('click', this.gereBtn)
    }
    /**
     * Gestion des comportements des boutons détail ou supprimer
     * @param {*} e 
     */
    gereBtn(e) {
        e.preventDefault();   

        if (e.target.dataset.jsBouton == 'detail') {
            this.afficheDetail(e);
        } else {
            this.supprimeTache(e);
        }
    }



    /**
     * Comportement du bouton 'Affiche détail'
     * @param {*} e 
     */
    afficheDetail(e) {
        
        let dom = `<div>
                        <small>Tâche : </small><span>${this._tache}</span></br>
                        <small>Description : </small><span>${this._description}</span></br>
                        <small>Importance : </small><span>${this._importance}</span></br>
                    </div>`
        this._elWrapperDetail.innerHTML = dom;
    }
    /**
     * Comportement du bouton 'supprimer'
     * @param {*} e 
     */
    supprimeTache(e) {
        let indexTache = e.currentTarget.parentNode.dataset.jsTache;
        
        // supprimer les taches afficher dans le Dom
        this._elWrapperInjection.innerHTML = '';
        // supprimer du tableau
        aTaches.splice(indexTache, 1);

        // Supprimer et réinjecter les taches dans le dom
        for (let i = 0, l = aTaches.length; i < l; i++) {
            
            let dom = `  
            <div class="tache" data-js-tache="${[i]}">
                <div>
                    <small>Tâche : </small><span>${aTaches[i].tache}</span><small> - Importance : </small><span>${aTaches[i].importance}</span>  
                </div>
                <div data-js-bouton-wrapper>
                    <button data-js-bouton="detail">Afficher le détail</button>
                    <button data-js-bouton="supprimer">Supprimer</button>
                </div>  
            </div>`;

            this._elWrapperInjection.insertAdjacentHTML('beforeend', dom);

            let elTacheDom = document.querySelector(`[data-js-tache="${i}"]`);

            new Tache(elTacheDom, aTaches[i].tache, aTaches[i].importance, aTaches[i].description);            
        }
    }




































}