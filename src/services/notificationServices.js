let instance = null;

class NotificationServices {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }


}

export default NotificationServices;