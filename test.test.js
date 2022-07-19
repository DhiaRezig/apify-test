const {getData } = require ('./service');

describe("getting offers" , ()=>{
    test ("getting offers ",async()=>{
        expect(await getData()).toStrictEqual([

            {
                "productId": "B07BQZ8S7V",
                "offerId": "B0811SYNHK",
                "price": "$0.89"
            },
            {
                "productId": "B09CSP81PS",
                "offerId": "B08N8L2G79",
                "price": "$15.76"
            }
        ])
    })
})