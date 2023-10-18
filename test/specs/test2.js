import homePage from "../pageobjects/home.page.js"
import shopPage from "../pageobjects/shop.page.js"
import cartPage from "../pageobjects/cart.page.js"

describe('Test Project Add Items to Cart', () => {
    it('Adds Multiple Items to the Cart', async () => {

        //navigates to webpage
        await browser.url('https://magento.softwaretestingboard.com/')

        //navigates to shop
        await (homePage.navBarMen).click()
        await (homePage.menDropdown).click()

        //sets category filters
        const shoppingOptions = await $$('[data-role=collapsible]')
        for(let i=0;i<shoppingOptions.length;i++)
        {
            const text = await shoppingOptions[i].getText()

            if(text.includes("CLIMATE")){
                await shoppingOptions[i].click()
            }
        }
        
        const categories = await $$('[class=count]')
        for(let i=0;i<categories.length;i++)
        {
            const text = await categories[i].getText()

            if(text.includes("2")){
                await categories[i].click()
                break
            }
        }

        //adds items to cart and navigates to cart
        await (shopPage.shopItem).click()
        await (shopPage.itemSize).click()
        await (shopPage.itemColor).click()
        await (shopPage.itemQuantity).setValue(10)
        await (shopPage.addToCartButton).click()
        await (shopPage.shoppingCartLink).click()

        //completes checkout
        await (cartPage.proceedToCheckoutButton).click()
        await (cartPage.countryDropdown).waitForClickable(10000)
        await (cartPage.emailField).setValue('testemail@test.test')
        await (cartPage.firstNameField).setValue('test') //First Name
        await (cartPage.lastNameField).setValue('test') //Last Name
        await (cartPage.streetAddressFieldOne).setValue('test') //Street Address
        await (cartPage.cityField).setValue('test') //City
        await (cartPage.regionDropdown).selectByAttribute('value', '1')
        await (cartPage.zipCodeField).setValue('12345') //Zip
        await (cartPage.countryDropdown).selectByAttribute('value', 'US')
        await (cartPage.telephoneNumberField).setValue('5555555555') //Phone Number
        await (cartPage.shippingRadioFixed).click()
        await (cartPage.shippingNextButton).click()
        await (cartPage.placeOrderButton).click()

        //verify arrival on success page
        await expect (cartPage.successBanner).toHaveText('Thank you for your purchase!')

    })
})