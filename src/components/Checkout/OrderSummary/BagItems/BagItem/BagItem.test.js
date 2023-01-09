import {render, screen} from "@testing-library/react";
import BagItem from "./BagItem";
import '@testing-library/jest-dom'

describe('BagItem', () => {
    const fakeItem = {
        colorId: 12345,
        productId: 'prod1234567',
        quantity: 1,
        size: 1,
        item_detail: {
            color: 'test color',
            name: 'test name',
            num_price: 123,
            pic: 'test pic',
            price: 'test price'
        }
    }

    test('show picture correctly', () => {
        render(
            <BagItem key={'0'}
                     className={'test'}
                     item={fakeItem}
            />
        )

        const picture = screen.getByAltText('test pic', {exact: true})
        expect(picture).toHaveStyle({width: '71px'})
    })

    test('Show item name correctly', () => {
        render(
            <BagItem key={'0'}
                     className={'test'}
                     item={fakeItem}
            />
        )

        const itemName = screen.getByText('test name', {exact: true})
    })

    test('Show item color correctly', () => {
        render(
            <BagItem key={'0'}
                     className={'test'}
                     item={fakeItem}
            />
        )

        const itemColor = screen.getByText('test color', {exact: true})
    })

    test('Show item size correctly', () => {
        render(
            <BagItem key={'0'}
                     className={'test'}
                     item={fakeItem}
            />
        )

        const itemSize = screen.getByText('Size 1', {exact: true})
    })

    test('Show item quantity correctly', () => {
        render(
            <BagItem key={'0'}
                     className={'test'}
                     item={fakeItem}
            />
        )

        const itemQuantity = screen.getByText('Quantity 1', {exact: true})
    })

    test('Show item price correctly', () => {
        render(
            <BagItem key={'0'}
                     className={'test'}
                     item={fakeItem}
            />
        )

        const itemPrice = screen.getByText('$123.00', {exact: true})
    })
})