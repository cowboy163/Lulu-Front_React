// import {render, screen} from "@testing-library/react";
// import BagItem from "../../../../../src/components/Checkout/OrderSummary/BagItems/BagItem/BagItem";
//
// describe('BagItem', () => {
//     const fakeItem = [
//         {
//             colorId: 12345,
//             productId: 'prod1234567',
//             quantity: 1,
//             size: 1,
//             item_detail: {
//                 color: 'test color',
//                 name: 'test name',
//                 num_price: 123,
//                 pic: 'test pic',
//                 price: 'test price'
//             }
//         }
//     ]
//
//     test('Show bag item correctly', () => {
//         render(
//             <BagItem key={'0'}
//                      className={'test'}
//                      item={fakeItem}
//             />
//         )
//
//         const image = screen.getByAltText(item.item_detail.pic)
//         expect(image).toBeInTheDocument()
//     })
// })