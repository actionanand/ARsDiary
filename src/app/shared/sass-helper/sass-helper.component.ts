import { Component } from '@angular/core';

export const PREFIX = '--';

@Component({
    selector: 'app-sass-helper',
    template: '<div><p>Hello World!</p></div>'
})
export class SassHelperComponent {

    constructor() { }

    /**
     * Read the custom property of body section with given name.
     * @param name The property name.
     * @returns The property value.
     * https://medium.com/@mariusschroeder/export-scss-variables-435b6e784302
     * https://github.com/schroedermarius/medium/tree/master/export-scss
     */

    readProperty(name: string): string {
        const bodyStyles = window.getComputedStyle(document.body);
        return bodyStyles.getPropertyValue(PREFIX + name);
    }
}
