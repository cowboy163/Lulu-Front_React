const MAIN_URL = 'http://api-lulu.hibitbyte.com'
const SELF_URL = 'http://localhost:3001'

// the key to fetch data
const MY_KEY = 'mykey=bqsKmS7A9d9MiP7GHk2DAGHkxZpPqY/MaOsTKqHTg848Yq%2BwGzkEcBzIGP1RLpZ7wF7ftO6rPjEmqb4RzzC88g=='

const LOGIN_URL = `${MAIN_URL}/auth/login?${MY_KEY}`
const PLACE_ORDER = `${MAIN_URL}/order?${MY_KEY}`
const ORDER_POST = `${SELF_URL}/order`
const PAYMENT_POST = `${SELF_URL}/payment`
const GET_ORDERS = `${SELF_URL}/order/orderPeriod`
const TAX_RATE = 1.30
export {
    LOGIN_URL,
    MAIN_URL,
    MY_KEY,
    PLACE_ORDER,
    TAX_RATE,
    SELF_URL,
    ORDER_POST,
    PAYMENT_POST,
    GET_ORDERS,
}