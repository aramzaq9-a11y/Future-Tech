class baseComponent {

    constructor(){
        if(this.constructor === baseComponent){
            throw new Error('Can not instantiate abstract class');
        }
    }

    getProxyState(initialState){
        return new Proxy(initialState, {
            get: (target,prop) => {
                return target[prop];
            },
            set: (target,prop,newValue) => {
                const oldValue = target[prop];

                target[prop] = newValue;
                
                if (oldValue !== newValue) {
                    this.updateUI();
                }
                return true
            },
        })
    }

    updateUI(){
        throw new Error('updateUI method must be implemented');
    }
    
} 

export default baseComponent