let instance = null;

var observers = {};

class NotificationServices {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    addObserver = (notifyName, observer, callBack) => {
        let obs = observers[notifyName];
        if (!obs) {
            observers[notifyName] = [];
        }
        let obj = { observer: observer, callBack: callBack };
        observers[notifyName].push(obj);
    }
    removeObserver = (observer, notifyName) => {
        let obs = observers[notifyName];
        if (obs) {
            for (var x = 0; x < obs.length; x++) {
                if (observer === obs[x].observer) {
                    obs.splice(x, 1);
                    observers[notifyName] = obs;
                    break;
                }
            }
        }
    }

}

export default NotificationServices;