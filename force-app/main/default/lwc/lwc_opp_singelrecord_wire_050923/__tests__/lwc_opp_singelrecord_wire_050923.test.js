import { createElement } from 'lwc';
import Lwc_opp_singelrecord_wire_050923 from 'c/lwc_opp_singelrecord_wire_050923';

describe('c-lwc-opp-singelrecord-wire-050923', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-lwc-opp-singelrecord-wire-050923', {
            is: Lwc_opp_singelrecord_wire_050923
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});