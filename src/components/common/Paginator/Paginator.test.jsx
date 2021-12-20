import {create} from "react-test-renderer";
import Paginator from "./Paginator";

describe('Paginator component', () => {
    test('Pages count is 11 but should be showed only 10', () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>)
        const root = component.root
        const spans = root.findAllByType('span')
        expect(spans.length).toBe(10)
    })
    test(`If pages count is more than 10 button 'NEXT' should be present`, () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>)
        const root = component.root
        const buttons = root.findAllByType('button')
        expect(buttons.length).toBe(1)
        expect(buttons[0].props.children).toBe('NEXT')
    })
})
