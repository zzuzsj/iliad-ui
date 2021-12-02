/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

export default function (options) {
    options = options || {};
    const { remove } = options;

    return (css) => {
        css.walkRules((rule) => {
            let toRemove = remove[removeLineBreaks(rule.selector)];
            if (toRemove || rule.selector === '*') {
                if (typeof toRemove === 'string') {
                    if (toRemove === '*') {
                        rule.remove();
                        return;
                    } else {
                        toRemove = [toRemove];
                    }
                }

                if (Array.isArray(toRemove)) {
                    rule.walkDecls((decl) => {
                        if (toRemove.includes(decl.prop)) {
                            decl.remove();
                        }
                    });
                } else if (typeof toRemove === 'object') {
                    rule.walkDecls((decl) => {
                        if (
                            (toRemove['*'] && toRemove['*'] === decl.value) ||
                            (!toRemove['*'] &&
                                decl.prop in toRemove &&
                                toRemove[decl.prop] === decl.value)
                        ) {
                            decl.remove();
                        }
                    });
                }
            }
        });
    };
}

function removeLineBreaks(string) {
    return string.replace(/(\r\n|\n|\r)/gm, '');
}
