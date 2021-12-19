import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('Status from props should be in the state', () => {
        const component = create(<ProfileStatus status='Hello world!'/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('Hello world!')
    })
    test('After creation <span> should be displayed with correct status', () => {
        const component = create(<ProfileStatus status='Hello world!'/>)
        const root = component.root
        const span = root.findByType('span')
        expect(span).not.toBeNull()
    })
    test('After creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus status='Hello world!'/>)
        const root = component.root
        const span = root.findByType('span')
        expect(span.children[0]).toBe('Hello world!')
    })
    test(`After creation <input> shouldn't be displayed`, () => {
        const component = create(<ProfileStatus status='Hello world!'/>)
        const root = component.root
        expect(() => {
            root.findByType('input')
        }).toThrow()
    })
    test(`After creation <input> should be displayed in editMode instead of <span>`, () => {
        const component = create(<ProfileStatus status='Hello world!'/>)
        const root = component.root
        const span = root.findByType('span')
        span.props.onDoubleClick()
        const input = root.findByType('input')
        expect(input.props.value).toBe('Hello world!')
    })
    test(`updateStatus should be called`, () => {
        const mockUpdateStatus = jest.fn()
        const component = create(<ProfileStatus status='Hello world!' updateStatus={mockUpdateStatus}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockUpdateStatus.mock.calls.length).toBe(1)
    })
})
