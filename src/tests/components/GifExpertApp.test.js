import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../../components/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    test('Debe mostrarse correctamente ', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorías.', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });


});
