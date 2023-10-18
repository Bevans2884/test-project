import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {
    
    //Selectors
    get navBarMen () {
        return $('[id=ui-id-5]');
    }

    get menDropdown () {
        return $('=Tops');
    }
}

export default new HomePage();