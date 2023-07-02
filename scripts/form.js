class Form {
    constructor(el) {       //je vais aller chercher la form
        this._el = el;
        this._elsInput = this._el.querySelectorAll('input');
        this._elsRequired = this._el.querySelectorAll('div[required]')
        this._elsRadios = this._el.querySelectorAll('input[type="radio"]'),
        this._elBtn = this._el.querySelector('[data-js-bouton]'),
        this.validation = this.validation.bind(this);

/*      console.log(this)
        console.log(this._elsInput);
        console.log(this._elsRequired);
        console.log(this._elBtn) */
        this.init();
    }


    /**
     * Initialise les comportements
     */
    init() {
        this._elBtn.addEventListener('click', this.validation);
    }

    /**
     * Validation 
     */
    validation() {
        let estValide = true,
            elRadioWrapper = this._el.querySelector('[data-js-control-wrapper = radio]'),
            estSelectionne = false;
        /**
         * Validation des inputs required
         */
        for (let i = 0, l = this._elsRequired.length; i < l; i++) {
            let elInput = this._elsRequired[i].querySelector('input');
        
            if (elInput.value !== '') {
                if (this._elsRequired[i].classList.contains('error')) {
                    this._elsRequired[i].classList.remove('error')
                } 
            } else {
                this._elsRequired[i].classList.add('error');
                estValide = false;
            }
        }

        /**
         * Validation des radios (required)
         */
        for (let i = 0, l = this._elsRadios.length; i < l; i++) {
            if (this._elsRadios[i].checked) {
                    estSelectionne = true;
                }
            } 
            if (estSelectionne) {
                if (elRadioWrapper.classList.contains('error')) {
                    elRadioWrapper.classList.remove('error');
                }
            } else {
                elRadioWrapper.classList.add('error');
                estValide = false;
            }
            // Reset quand valide
            if (estValide) {
                for (let i = 0, l = this._elsInput.length; i < l; i++) {
                    this._elsInput[i].value = '';
                }
            }

    } // fin validation()





    }


// Gestion du formulaire Au clic du bouton :

// Validation de nom et importance
// (si valide) Récupération des valeurs dans objet littéral tache
// Nettoyer les champs

// Injection des tâches
// tache : nom /importance: /afficher le detail / supprimer

// class tache













