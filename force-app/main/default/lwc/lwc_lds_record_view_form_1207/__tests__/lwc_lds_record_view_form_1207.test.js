import { createElement } from 'lwc';
import Lwc_lds_record_view_form_1207 from 'c/lwc_lds_record_view_form_1207';

describe('c-lwc-lds-record-view-form-1207', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-lwc-lds-record-view-form-1207', {
            is: Lwc_lds_record_view_form_1207
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});