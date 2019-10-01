/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const DUDE_WHERES_MY_FORM = 'dude-where-is-my-form';

interface FormDataEvent extends Event {
    formData?: FormData;
}

interface CustomElement extends HTMLElement {
    connectedCallback(): void;
    disconnectedCallback(): void;
}

type CustomElementContructor = new (...args: any[]) => CustomElement;

export const parentForm = Symbol('ParentForm');
export const appendFormData = Symbol('AppendFormData');

export function DudeWheresMyForm<T extends CustomElementContructor>(
    constructor: T
): T {
    return class FormDataAppendingElement extends constructor {
        private [parentForm]: HTMLFormElement = undefined;
        public constructor() {
            super();
            this[appendFormData] = this[appendFormData].bind(this);
            this.addEventListener(
                DUDE_WHERES_MY_FORM,
                (event: Event) => {
                    const path = event.composedPath();
                    const form = path.find(
                        (el: EventTarget) => el instanceof HTMLFormElement
                    ) as HTMLFormElement;
                    this[parentForm] = form;
                    if (this[parentForm]) {
                        this[parentForm]!.addEventListener(
                            'formdata',
                            this[appendFormData]
                        );
                    }
                },
                true
            );
        }
        public connectedCallback(): void {
            if (super.connectedCallback) {
                super.connectedCallback();
            }
            const formFindingEvent = new CustomEvent(DUDE_WHERES_MY_FORM, {
                composed: true,
            });
            this.dispatchEvent(formFindingEvent);
        }
        public disconnectedCallback(): void {
            if (this[parentForm]) {
                this[parentForm]!.removeEventListener(
                    'formdata',
                    this[appendFormData]
                );
            }
            if (super.disconnectedCallback) {
                super.disconnectedCallback();
            }
        }
        protected [appendFormData]({ formData }: FormDataEvent): void {
            console.warn(
                'Abstract `appendFormData` method must be overridden with alterations your element should make it the `formData` of the form element to which it is related.'
            );
        }
    };
}
