import { $ } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {
    
    //Selectors
    get proceedToCheckoutButton () {
        return $('button=Proceed to Checkout');
    }

    get emailField () {
        return $('[id=customer-email]')
    }

    get firstNameField () {
        return $('[name=firstname]')
    }

    get lastNameField () {
        return $('[name=lastname]')
    }

    get streetAddressFieldOne () {
        return $('/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/fieldset/div/div[1]/div/input')
    }
    
    get cityField () {
        return $('[name=city]')
    }

    get regionDropdown () {
        return $('[name=region_id]')
    }

    get zipCodeField () {
        return $('[name=postcode]')
    }

    get countryDropdown () {
        return $('[name=country_id]');
    }

    get telephoneNumberField () {
        return $('[name=telephone]')
    }

    get shippingRadioFixed () {
        return $('[name=ko_unique_1]')
    }

    get shippingNextButton () {
        return $('button=Next')
    }

    get placeOrderButton () {
        return $('button=Place Order')
    }

    get successBanner () {
        return $('[data-ui-id=page-title-wrapper]')
    }
}

export default new CartPage();