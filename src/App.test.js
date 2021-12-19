import MainApp from './App';
import ReactDOM from "react-dom";

it('Should render application component', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MainApp/>, div)
    ReactDOM.unmountComponentAtNode(div)
});
