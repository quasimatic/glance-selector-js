import Extensions from "../utils/extensions";
import Locator from "./locator";
import Filter from "./filter";
import Positional from "./positional";

import {reduce, unique} from "../utils/array-utils";

export default class SearchLineage {
    search(data, callback = (err, result) => result) {
        let {scopes, scopeElement, config = {}} = data;
        config.extensions = config.extensions || [];

        data = {
            ...data,
            extensions: config.extensions
        };

        return SearchLineage.traverseScopes({
            ...data,
            elements: [scopeElement],
            target: scopes[0],
            scopeElements: []
        }, callback);
    }

    static processLevel(data, resultHandler) {
        Extensions.beforeScopeEvent(data);

        return Locator.locate(data, (err, located) => {
            if (data.intersectElements) {
                return browserExecute(function (located, previous, handler) {
                    return handler(null, located.filter(function (e) {
                        return previous.indexOf(e) != -1;
                    }));
                }, located, data.intersectElements, resultHandler);
            }

            return resultHandler(null, located);
        });
    }

    static traverseScopes(data, resultHandler) {
        let {
            elements,
            scopes,
            target,
            log
        } = data;

        let processLevel = (result, scopeElement, reduceeCallback) => {
            return SearchLineage.processLevel({
                ...data,
                scopeElement
            }, (err, foundItems) => {
                if (err) {
                    reduceeCallback(err, []);
                }
                result.push({scopeElement: scopeElement, elements: foundItems});
                return reduceeCallback(err, result);
            });
        };

        return reduce(elements, [], processLevel, (err, locatedTargets) => {
            if (err) {
                return resultHandler(err, []);
            }

            var targetInfo = locatedTargets.reduce((result, info) => {
                result.elements = result.elements.concat(info.elements);
                result.scopeElements.push(info.scopeElement);
                return result;
            }, {elements: [], scopeElements: []});

            return Filter.filter({...data, ...targetInfo}, (err, newTargets) => {
                if (err) {
                    return resultHandler(err, []);
                }

                return unique(newTargets, (err, uniqueTargets) => {
                    let positionalElements = Positional.filter({...data, elements: uniqueTargets});

                    Extensions.afterScopeEvent({...data, elements: positionalElements});

                    if (SearchLineage.isLastLabel(scopes, target)) {
                        return resultHandler(err, positionalElements);
                    }
                    else {
                        if(target.type == "intersect") {
                            return SearchLineage.traverseScopes({
                                ...data,
                                intersectElements: positionalElements,
                                elements: positionalElements,
                                target: scopes[target.scopeIndex + 1]
                            }, resultHandler);
                        }
                        else {
                            return SearchLineage.traverseScopes({
                                ...data,
                                intersectElements: null,
                                scopeElements: positionalElements,
                                elements: positionalElements,
                                target: scopes[target.scopeIndex + 1]
                            }, resultHandler);
                        }
                    }
                });

            });
        });
    }

    static isLastLabel(scopes, {scopeIndex}) {
        return scopeIndex + 1 === scopes.length;
    }
}