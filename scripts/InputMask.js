const rootSelector = '[data-js-input-mask]';

class InputMask{

    constructor(rootElement){
        this.rootElement = rootElement;
        this.init();
    }
    init(){
        const isLibReady = typeof window.IMask !== 'undefined';
        if(isLibReady){
            window.IMask(this.rootElement, {mask: this.rootElement.dataset.jsInputMask});
        }
        else{
            console.error("cant connect library 'Imask' ")
        }

    }
}

class InputMaskCollection {
    constructor() {
        this.init()
    }
    init() {
        document.querySelectorAll(rootSelector).forEach(rootElement => {
            new InputMask(rootElement)
        });
    }
}

export  default InputMaskCollection