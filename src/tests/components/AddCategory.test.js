import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe mostrarse correctamente. ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto.', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    test('NO debe postear la información onSubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });


        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola mundo';

        //1. Simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        //2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){}});

        //3. Deben haber llamado setCategories
        expect(setCategories).toHaveBeenCalled();

        //4. El valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    }); 

    

})
