import defaultGuide from "./guides/search-lineage"
import defaultLocator from "./locators/default"
import Parser from "./parser";
import log from "./logger";
import mergeObjects from "./utils/merge-objects";

function GlanceSelector(options) {
    let _selector = {};
    _selector.extensions = [];
    _selector.customLabels = options.customLabels || {};
    _selector.modifiers = options.modifiers || {};
    _selector.hooks = options.hooks || {}

    _selector.guideFactory = options.guideFactory;

    let selector = function(reference) {
        if(!reference) throw new Error("Selector required")

        _selector.extensions.filter(e => e.beforeAll).forEach(e => e.beforeAll(reference));

        let data = Parser.parse(reference);

        var allCustomLabels = mergeObjects(_selector.extensions.reduce((r, e) => mergeObjects(r, e.labels), {}), _selector.customLabels)

        let resolvedLabels = resolveCustomLabels(data, allCustomLabels, _selector);

        let elements = _selector.guideFactory({
            extensions: _selector.extensions,
            locator: defaultLocator
        }).search(data, document, 0, resolvedLabels);

        _selector.extensions.filter(e => e.afterAll).forEach(e => e.afterAll());

        if (elements.length === 1)
            return elements[0];
        else
            return elements;
    };

    selector.addCustomLabels = function(customLabels) {
        _selector.customLabels = mergeObjects(_selector.customLabels, customLabels);
    };

    selector.addExtension = function(extension) {
        _selector.extensions.push(extension);
    };

    selector.setLogLevel = function(level) {
        log.setLogLevel(level)
    };

    return selector;
}

function resolveCustomLabels(data, customLabels, selector) {
    let newCustomLabels = {};
    data.forEach(function(reference) {
        let customLabel = customLabels[reference.label];
        if (typeof(customLabel) == 'function') {
            newCustomLabels[reference.label] = customLabel(GlanceSelector({
                guideFactory: selector.guideFactory,
                customLabels: mergeObjects(customLabels, newCustomLabels)
            }), reference);
        }
        else {
            newCustomLabels[reference.label] = customLabels[reference.label]
        }
    });

    return newCustomLabels;
}

export {Parser};
export default GlanceSelector({guideFactory: (config) => new defaultGuide(config)});