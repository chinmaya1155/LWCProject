import { createElement } from 'lwc';
import Lwc_greater_sum_310823 from 'c/lwc_greater_sum_310823';

describe('c-lwc-greater-sum-310823', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-lwc-greater-sum-310823', {
            is: Lwc_greater_sum_310823
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});