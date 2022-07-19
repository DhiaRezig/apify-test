const { default: axios } = require("axios");

const filterData = (offers)=>{
    offers.sort((a, b) => parseFloat( a.price.substring(1)) - parseFloat(b.price.substring(1))   ); 
    let newOffers = offers.reduce((acc,cur)=>{
        if(acc[cur.productId]){
            return acc
        }else{
            acc[cur.productId]=cur
        }
        return acc
    },{})

    newOffers = Object.values(newOffers);
    return newOffers
}

const getData =async()=>{
    let res = await axios.get('https://api.apify.com/v2/datasets/VuFwckCdhVhoLJJ08/items?clean=true&format=json')
    res = filterData(res.data)
    return res;
}

const postData =async()=>{
    const res = getData()
    await axios.post('https://api.apify.com/v2/datasets/VuFwckCdhVhoLJJ08/items?clean=true&format=json',res)

}

module.exports = {getData, postData}