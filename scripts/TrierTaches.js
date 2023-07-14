class TrierTaches {

    constructor(el) {
        this._el = el;
        this._elBtnWrapper = this._el.querySelector('[data-js-bouton="trier"]');
        this._elWrapperTache = this._el.querySelector('[data-js-control-wrapper="injection"]');

        this.gereBtn = this.gereBtn.bind(this);
        
        this.init();
    }

    /**
     * Initialisation des comportements
     */
    init() {
        this._elBtnWrapper.addEventListener('click', this.gereBtn) 
    }

    /**
     * Gestion des comportement du tri
     * @param {*} e 
     */
    gereBtn(e) {
        e.preventDefault();

        if (e.target.dataset.jsBouton == 'tri-alphabetique') {
            this.triAlphabetique(e);
        } else {
            this.triImportance(e);
        }
    }

    /**
     * Comportement pour le tri alphabétique
     * @param {*} e 
     */
    triAlphabetique(e) {
        
        // Trier par ordre Alphabétique        
        aTaches.sort((a, b) => a.tache.localeCompare(b.tache));

        // Supprimer les taches
        this._elWrapperTache.innerHTML = '';
        
        // Réinjecter les taches dans le dom
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

            this._elWrapperTache.insertAdjacentHTML('beforeend', dom);

            let elTacheDom = document.querySelector(`[data-js-tache="${i}"]`);

            new Tache(elTacheDom, aTaches[i].tache, aTaches[i].importance, aTaches[i].description);    
        }
    }

    /**
     * Comportement pour le tri alphabétique
     * @param {*} e 
     */
    triImportance(e) {

        // Je crée une nouvelles variable numérique pour le 'tri'
        for (let i = 0, l = aTaches.length; i < l; i++) {
            if (aTaches[i].importance == 'haute' ) {
                aTaches[i].tri = '1'
            } else if (aTaches[i].importance == 'moyenne') {
                aTaches[i].tri = '2'
            } else {
                aTaches[i].tri = '3'
            }
        }
        // Je peux maintenant sort selon la valeur numérique
        aTaches.sort((a, b) => parseInt(a.tri) - parseInt(b.tri));

        // Supprimer les taches
        this._elWrapperTache.innerHTML = '';
        
        // Réinjecter les taches dans le dom
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

            this._elWrapperTache.insertAdjacentHTML('beforeend', dom);

            let elTacheDom = document.querySelector(`[data-js-tache="${i}"]`);

            new Tache(elTacheDom, aTaches[i].tache, aTaches[i].importance, aTaches[i].description);    
        }
    }














}