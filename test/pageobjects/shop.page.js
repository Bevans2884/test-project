import { $ } from '@wdio/globals'
import Page from './page.js';

class ShopPage extends Page {

    //Selectors
    get shopItem () {
        return $('=Lando Gym Jacket');
    }

    get itemSize () {
        return $('[id=option-label-size-143-item-166]');
    }

    get itemColor() {
        return $('[id=option-label-color-93-item-50]');
    }

    get itemQuantity() {
        return $('[id=qty]')
    }

    get addToCartButton() {
        return $('[id=product-addtocart-button]')
    }

    get shoppingCartLink() {
        return $('=shopping cart')
    }
}
export default new ShopPage();