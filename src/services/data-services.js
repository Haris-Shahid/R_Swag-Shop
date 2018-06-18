let instance = null;

var wishList = [];

class DataServices {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    addWishListItem = item => {
        wishList.push(item);
    }

    removeWishListItem = item => {
        for (var x = 0; x < wishList.length; x++) {
            if (wishList[x]._id === item._id) {
                wishList.splice(x, 1);
                break;
            }
        }
    }
}

export default DataServices;