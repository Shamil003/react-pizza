import {CartItem} from "../redux/slises/cartSlise";

export const calcTotalPrice = (items: CartItem) => {
        return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
}