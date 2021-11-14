import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem /> ', () => {

    const title = 'Un título';
    const url = 'https://soyunlink.com';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrar el componente correctamente.', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el title', () => {

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        const propSrc = img.prop('src');
        const propAlt = img.prop('alt');

        expect(propSrc).toBe(url);
        expect(propAlt).toBe(title);
    });

    test('Debe tener animate__fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
    })
})
