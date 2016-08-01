import findByCSS from "./css"

export default {
    properties: {
        classname: {
            locate: function ({label, scopeElement}, resultHandler = (err, result) => result) {
                try {
                    return browserExecute(findByCSS, `.${label}`, scopeElement, resultHandler);
                }
                catch (e) {
                    return resultHandler(null, []);
                }
            }
        }
    }
}