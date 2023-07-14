class Form {
    constructor(el) {       //je vais aller chercher la form
        this._el = el;
        this._elForm = this._el.querySelector('form');
        this._elInputDescription = this._elForm.description;
        this._elInputTache = this._elForm.tache;
        this._elWrapperInjection = this._el.querySelector('[data-js-control-wrapper="injection"]')
        this._elBtn = this._el.querySelector('[data-js-bouton]'),

        this.gereForm = this.gereForm.bind(this);

        this.init();
    }


    /**
     * Initialise les comportements
     */
    init() {
        this._elBtn.addEventListener('click', this.gereForm);
    }





    /**
     * Gestion des comportements du formulaire 
     */
    gereForm(e) {
        e.preventDefault();   
        // Appel la validation avant de débuter ses actions
        if (this.valideForm()) {

            let elementRadio = this._el.querySelector('input[name="importance"]:checked'),
                valeurDataJsRadio = elementRadio.dataset.jsRadio,

                tache = {
                tache: this._elInputTache.value,
                description: `${this._elInputDescription.value == '' ? "Aucune description disponible." : this._elInputDescription.value}`,
                importance: valeurDataJsRadio
            } 

            aTaches.push(tache);

            this._elForm.reset();

            this.injecteTache(tache);
        }
    }
    /**
     * Injection de la tache dans la liste
     * @param {Objet littéral} tache 
     */
    injecteTache(tache) {
        let dom = `  
                                <div class="tache" data-js-tache="${aTaches.length - 1}">
                                    <div>
                                        <small>Tâche : </small><span>${tache.tache}</span><small> - Importance : </small><span>${tache.importance}</span>  
                                    </div>
                                    <div data-js-bouton-wrapper>
                                        <button data-js-bouton="detail">Afficher le détail</button>
                                        <button data-js-bouton="supprimer">Supprimer</button>
                                    </div>  
                                </div>`;      
        
        this._elWrapperInjection.insertAdjacentHTML('beforeend', dom);
        
        new Tache(this._elWrapperInjection.lastElementChild, tache.tache, tache.importance, tache.description); 
    }


    /**
     * Validation du formulaire
     * Retourne un Booleen
     */
    valideForm() {
        let estValide = true,
            elRadioWrapper = this._el.querySelector('[data-js-control-wrapper="radio"]'),
            wrapperRequired = this._elInputTache.parentNode;

        /**
         * Validation des inputs required
         */
        if (this._elInputTache.value !== '') {
            if (wrapperRequired.classList.contains('error')) {
                wrapperRequired.classList.remove('error')
            } 
        } else {
            wrapperRequired.classList.add('error');
            estValide = false;
        }
        
        /**
         * Validation des radios 
         */
        let elImportanceChecked = this._el.querySelector('input[name="importance"]:checked');

        if (elImportanceChecked) {
            if (elRadioWrapper.classList.contains('error')) {
                elRadioWrapper.classList.remove('error');
            }
        } else {
            elRadioWrapper.classList.add('error');
            estValide = false;
        }
        return estValide;
    }


}















