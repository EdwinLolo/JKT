import {
  require_react
} from "./chunk-D2KY6O3O.js";
import {
  __commonJS
} from "./chunk-V4OQ3NZ2.js";

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-easy-swipe/lib/react-swipe.js
var require_react_swipe = __commonJS({
  "node_modules/react-easy-swipe/lib/react-swipe.js"(exports) {
    (function(global, factory) {
      if (typeof define === "function" && define.amd) {
        define(["exports", "react", "prop-types"], factory);
      } else if (typeof exports !== "undefined") {
        factory(exports, require_react(), require_prop_types());
      } else {
        var mod = {
          exports: {}
        };
        factory(mod.exports, global.react, global.propTypes);
        global.reactSwipe = mod.exports;
      }
    })(exports, function(exports2, _react, _propTypes) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      exports2.setHasSupportToCaptureOption = setHasSupportToCaptureOption;
      var _react2 = _interopRequireDefault(_react);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0) continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
          target[i] = obj[i];
        }
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var _createClass = /* @__PURE__ */ function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var supportsCaptureOption = false;
      function setHasSupportToCaptureOption(hasSupport) {
        supportsCaptureOption = hasSupport;
      }
      try {
        addEventListener("test", null, Object.defineProperty({}, "capture", { get: function get() {
          setHasSupportToCaptureOption(true);
        } }));
      } catch (e) {
      }
      function getSafeEventHandlerOpts() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { capture: true };
        return supportsCaptureOption ? options : options.capture;
      }
      function getPosition(event) {
        if ("touches" in event) {
          var _event$touches$ = event.touches[0], pageX = _event$touches$.pageX, pageY = _event$touches$.pageY;
          return { x: pageX, y: pageY };
        }
        var screenX = event.screenX, screenY = event.screenY;
        return { x: screenX, y: screenY };
      }
      var ReactSwipe = function(_Component) {
        _inherits(ReactSwipe2, _Component);
        function ReactSwipe2() {
          var _ref;
          _classCallCheck(this, ReactSwipe2);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = ReactSwipe2.__proto__ || Object.getPrototypeOf(ReactSwipe2)).call.apply(_ref, [this].concat(args)));
          _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
          _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
          _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);
          _this._onMouseDown = _this._onMouseDown.bind(_this);
          _this._onMouseMove = _this._onMouseMove.bind(_this);
          _this._onMouseUp = _this._onMouseUp.bind(_this);
          _this._setSwiperRef = _this._setSwiperRef.bind(_this);
          return _this;
        }
        _createClass(ReactSwipe2, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            if (this.swiper) {
              this.swiper.addEventListener("touchmove", this._handleSwipeMove, getSafeEventHandlerOpts({
                capture: true,
                passive: false
              }));
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            if (this.swiper) {
              this.swiper.removeEventListener("touchmove", this._handleSwipeMove, getSafeEventHandlerOpts({
                capture: true,
                passive: false
              }));
            }
          }
        }, {
          key: "_onMouseDown",
          value: function _onMouseDown(event) {
            if (!this.props.allowMouseEvents) {
              return;
            }
            this.mouseDown = true;
            document.addEventListener("mouseup", this._onMouseUp);
            document.addEventListener("mousemove", this._onMouseMove);
            this._handleSwipeStart(event);
          }
        }, {
          key: "_onMouseMove",
          value: function _onMouseMove(event) {
            if (!this.mouseDown) {
              return;
            }
            this._handleSwipeMove(event);
          }
        }, {
          key: "_onMouseUp",
          value: function _onMouseUp(event) {
            this.mouseDown = false;
            document.removeEventListener("mouseup", this._onMouseUp);
            document.removeEventListener("mousemove", this._onMouseMove);
            this._handleSwipeEnd(event);
          }
        }, {
          key: "_handleSwipeStart",
          value: function _handleSwipeStart(event) {
            var _getPosition = getPosition(event), x = _getPosition.x, y = _getPosition.y;
            this.moveStart = { x, y };
            this.props.onSwipeStart(event);
          }
        }, {
          key: "_handleSwipeMove",
          value: function _handleSwipeMove(event) {
            if (!this.moveStart) {
              return;
            }
            var _getPosition2 = getPosition(event), x = _getPosition2.x, y = _getPosition2.y;
            var deltaX = x - this.moveStart.x;
            var deltaY = y - this.moveStart.y;
            this.moving = true;
            var shouldPreventDefault = this.props.onSwipeMove({
              x: deltaX,
              y: deltaY
            }, event);
            if (shouldPreventDefault && event.cancelable) {
              event.preventDefault();
            }
            this.movePosition = { deltaX, deltaY };
          }
        }, {
          key: "_handleSwipeEnd",
          value: function _handleSwipeEnd(event) {
            this.props.onSwipeEnd(event);
            var tolerance = this.props.tolerance;
            if (this.moving && this.movePosition) {
              if (this.movePosition.deltaX < -tolerance) {
                this.props.onSwipeLeft(1, event);
              } else if (this.movePosition.deltaX > tolerance) {
                this.props.onSwipeRight(1, event);
              }
              if (this.movePosition.deltaY < -tolerance) {
                this.props.onSwipeUp(1, event);
              } else if (this.movePosition.deltaY > tolerance) {
                this.props.onSwipeDown(1, event);
              }
            }
            this.moveStart = null;
            this.moving = false;
            this.movePosition = null;
          }
        }, {
          key: "_setSwiperRef",
          value: function _setSwiperRef(node) {
            this.swiper = node;
            this.props.innerRef(node);
          }
        }, {
          key: "render",
          value: function render() {
            var _props = this.props, tagName = _props.tagName, className = _props.className, style = _props.style, children = _props.children, allowMouseEvents = _props.allowMouseEvents, onSwipeUp = _props.onSwipeUp, onSwipeDown = _props.onSwipeDown, onSwipeLeft = _props.onSwipeLeft, onSwipeRight = _props.onSwipeRight, onSwipeStart = _props.onSwipeStart, onSwipeMove = _props.onSwipeMove, onSwipeEnd = _props.onSwipeEnd, innerRef = _props.innerRef, tolerance = _props.tolerance, props = _objectWithoutProperties(_props, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]);
            return _react2.default.createElement(
              this.props.tagName,
              _extends({
                ref: this._setSwiperRef,
                onMouseDown: this._onMouseDown,
                onTouchStart: this._handleSwipeStart,
                onTouchEnd: this._handleSwipeEnd,
                className,
                style
              }, props),
              children
            );
          }
        }]);
        return ReactSwipe2;
      }(_react.Component);
      ReactSwipe.displayName = "ReactSwipe";
      ReactSwipe.propTypes = {
        tagName: _propTypes2.default.string,
        className: _propTypes2.default.string,
        style: _propTypes2.default.object,
        children: _propTypes2.default.node,
        allowMouseEvents: _propTypes2.default.bool,
        onSwipeUp: _propTypes2.default.func,
        onSwipeDown: _propTypes2.default.func,
        onSwipeLeft: _propTypes2.default.func,
        onSwipeRight: _propTypes2.default.func,
        onSwipeStart: _propTypes2.default.func,
        onSwipeMove: _propTypes2.default.func,
        onSwipeEnd: _propTypes2.default.func,
        innerRef: _propTypes2.default.func,
        tolerance: _propTypes2.default.number.isRequired
      };
      ReactSwipe.defaultProps = {
        tagName: "div",
        allowMouseEvents: false,
        onSwipeUp: function onSwipeUp() {
        },
        onSwipeDown: function onSwipeDown() {
        },
        onSwipeLeft: function onSwipeLeft() {
        },
        onSwipeRight: function onSwipeRight() {
        },
        onSwipeStart: function onSwipeStart() {
        },
        onSwipeMove: function onSwipeMove() {
        },
        onSwipeEnd: function onSwipeEnd() {
        },
        innerRef: function innerRef() {
        },
        tolerance: 0
      };
      exports2.default = ReactSwipe;
    });
  }
});

// node_modules/react-easy-swipe/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-easy-swipe/lib/index.js"(exports) {
    (function(global, factory) {
      if (typeof define === "function" && define.amd) {
        define(["exports", "./react-swipe"], factory);
      } else if (typeof exports !== "undefined") {
        factory(exports, require_react_swipe());
      } else {
        var mod = {
          exports: {}
        };
        factory(mod.exports, global.reactSwipe);
        global.index = mod.exports;
      }
    })(exports, function(exports2, _reactSwipe) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      var _reactSwipe2 = _interopRequireDefault(_reactSwipe);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports2.default = _reactSwipe2.default;
    });
  }
});

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/react-responsive-carousel/lib/js/cssClasses.js
var require_cssClasses = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/cssClasses.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _classnames = _interopRequireDefault(require_classnames());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var _default = {
      ROOT: function ROOT(customClassName) {
        return (0, _classnames.default)(_defineProperty({
          "carousel-root": true
        }, customClassName || "", !!customClassName));
      },
      CAROUSEL: function CAROUSEL(isSlider) {
        return (0, _classnames.default)({
          carousel: true,
          "carousel-slider": isSlider
        });
      },
      WRAPPER: function WRAPPER(isSlider, axis) {
        return (0, _classnames.default)({
          "thumbs-wrapper": !isSlider,
          "slider-wrapper": isSlider,
          "axis-horizontal": axis === "horizontal",
          "axis-vertical": axis !== "horizontal"
        });
      },
      SLIDER: function SLIDER(isSlider, isSwiping) {
        return (0, _classnames.default)({
          thumbs: !isSlider,
          slider: isSlider,
          animated: !isSwiping
        });
      },
      ITEM: function ITEM(isSlider, selected, previous) {
        return (0, _classnames.default)({
          thumb: !isSlider,
          slide: isSlider,
          selected,
          previous
        });
      },
      ARROW_PREV: function ARROW_PREV(disabled) {
        return (0, _classnames.default)({
          "control-arrow control-prev": true,
          "control-disabled": disabled
        });
      },
      ARROW_NEXT: function ARROW_NEXT(disabled) {
        return (0, _classnames.default)({
          "control-arrow control-next": true,
          "control-disabled": disabled
        });
      },
      DOT: function DOT(selected) {
        return (0, _classnames.default)({
          dot: true,
          selected
        });
      }
    };
    exports.default = _default;
  }
});

// node_modules/react-responsive-carousel/lib/js/dimensions.js
var require_dimensions = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/dimensions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.outerWidth = void 0;
    var outerWidth = function outerWidth2(el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width += parseInt(style.marginLeft) + parseInt(style.marginRight);
      return width;
    };
    exports.outerWidth = outerWidth;
  }
});

// node_modules/react-responsive-carousel/lib/js/CSSTranslate.js
var require_CSSTranslate = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/CSSTranslate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = function _default2(position, metric, axis) {
      var positionPercent = position === 0 ? position : position + metric;
      var positionCss = axis === "horizontal" ? [positionPercent, 0, 0] : [0, positionPercent, 0];
      var transitionProp = "translate3d";
      var translatedPosition = "(" + positionCss.join(",") + ")";
      return transitionProp + translatedPosition;
    };
    exports.default = _default;
  }
});

// node_modules/react-responsive-carousel/lib/js/shims/window.js
var require_window = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/shims/window.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = function _default2() {
      return window;
    };
    exports.default = _default;
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Thumbs.js
var require_Thumbs = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Thumbs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _cssClasses = _interopRequireDefault(require_cssClasses());
    var _dimensions = require_dimensions();
    var _CSSTranslate = _interopRequireDefault(require_CSSTranslate());
    var _reactEasySwipe = _interopRequireDefault(require_lib());
    var _window = _interopRequireDefault(require_window());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var isKeyboardEvent = function isKeyboardEvent2(e) {
      return e.hasOwnProperty("key");
    };
    var Thumbs = function(_Component) {
      _inherits(Thumbs2, _Component);
      var _super = _createSuper(Thumbs2);
      function Thumbs2(_props) {
        var _this;
        _classCallCheck(this, Thumbs2);
        _this = _super.call(this, _props);
        _defineProperty(_assertThisInitialized(_this), "itemsWrapperRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "itemsListRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "setItemsWrapperRef", function(node) {
          _this.itemsWrapperRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setItemsListRef", function(node) {
          _this.itemsListRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function(node, index) {
          if (!_this.thumbsRef) {
            _this.thumbsRef = [];
          }
          _this.thumbsRef[index] = node;
        });
        _defineProperty(_assertThisInitialized(_this), "updateSizes", function() {
          if (!_this.props.children || !_this.itemsWrapperRef || !_this.thumbsRef) {
            return;
          }
          var total = _react.Children.count(_this.props.children);
          var wrapperSize = _this.itemsWrapperRef.clientWidth;
          var itemSize = _this.props.thumbWidth ? _this.props.thumbWidth : (0, _dimensions.outerWidth)(_this.thumbsRef[0]);
          var visibleItems = Math.floor(wrapperSize / itemSize);
          var showArrows = visibleItems < total;
          var lastPosition = showArrows ? total - visibleItems : 0;
          _this.setState(function(_state, props) {
            return {
              itemSize,
              visibleItems,
              firstItem: showArrows ? _this.getFirstItem(props.selectedItem) : 0,
              lastPosition,
              showArrows
            };
          });
        });
        _defineProperty(_assertThisInitialized(_this), "handleClickItem", function(index, item, e) {
          if (!isKeyboardEvent(e) || e.key === "Enter") {
            var handler = _this.props.onSelectItem;
            if (typeof handler === "function") {
              handler(index, item);
            }
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function() {
          _this.setState({
            swiping: true
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function() {
          _this.setState({
            swiping: false
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function(delta) {
          var deltaX = delta.x;
          if (!_this.state.itemSize || !_this.itemsWrapperRef || !_this.state.visibleItems) {
            return false;
          }
          var leftBoundary = 0;
          var childrenLength = _react.Children.count(_this.props.children);
          var currentPosition = -(_this.state.firstItem * 100) / _this.state.visibleItems;
          var lastLeftItem = Math.max(childrenLength - _this.state.visibleItems, 0);
          var lastLeftBoundary = -lastLeftItem * 100 / _this.state.visibleItems;
          if (currentPosition === leftBoundary && deltaX > 0) {
            deltaX = 0;
          }
          if (currentPosition === lastLeftBoundary && deltaX < 0) {
            deltaX = 0;
          }
          var wrapperSize = _this.itemsWrapperRef.clientWidth;
          var position = currentPosition + 100 / (wrapperSize / deltaX);
          if (_this.itemsListRef) {
            ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(prop) {
              _this.itemsListRef.style[prop] = (0, _CSSTranslate.default)(position, "%", _this.props.axis);
            });
          }
          return true;
        });
        _defineProperty(_assertThisInitialized(_this), "slideRight", function(positions) {
          _this.moveTo(_this.state.firstItem - (typeof positions === "number" ? positions : 1));
        });
        _defineProperty(_assertThisInitialized(_this), "slideLeft", function(positions) {
          _this.moveTo(_this.state.firstItem + (typeof positions === "number" ? positions : 1));
        });
        _defineProperty(_assertThisInitialized(_this), "moveTo", function(position) {
          position = position < 0 ? 0 : position;
          position = position >= _this.state.lastPosition ? _this.state.lastPosition : position;
          _this.setState({
            firstItem: position
          });
        });
        _this.state = {
          selectedItem: _props.selectedItem,
          swiping: false,
          showArrows: false,
          firstItem: 0,
          visibleItems: 0,
          lastPosition: 0
        };
        return _this;
      }
      _createClass(Thumbs2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.setupThumbs();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (this.props.selectedItem !== this.state.selectedItem) {
            this.setState({
              selectedItem: this.props.selectedItem,
              firstItem: this.getFirstItem(this.props.selectedItem)
            });
          }
          if (this.props.children === prevProps.children) {
            return;
          }
          this.updateSizes();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.destroyThumbs();
        }
      }, {
        key: "setupThumbs",
        value: function setupThumbs() {
          (0, _window.default)().addEventListener("resize", this.updateSizes);
          (0, _window.default)().addEventListener("DOMContentLoaded", this.updateSizes);
          this.updateSizes();
        }
      }, {
        key: "destroyThumbs",
        value: function destroyThumbs() {
          (0, _window.default)().removeEventListener("resize", this.updateSizes);
          (0, _window.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
        }
      }, {
        key: "getFirstItem",
        value: function getFirstItem(selectedItem) {
          var firstItem = selectedItem;
          if (selectedItem >= this.state.lastPosition) {
            firstItem = this.state.lastPosition;
          }
          if (selectedItem < this.state.firstItem + this.state.visibleItems) {
            firstItem = this.state.firstItem;
          }
          if (selectedItem < this.state.firstItem) {
            firstItem = selectedItem;
          }
          return firstItem;
        }
      }, {
        key: "renderItems",
        value: function renderItems() {
          var _this2 = this;
          return this.props.children.map(function(img, index) {
            var itemClass = _cssClasses.default.ITEM(false, index === _this2.state.selectedItem);
            var thumbProps = {
              key: index,
              ref: function ref(e) {
                return _this2.setThumbsRef(e, index);
              },
              className: itemClass,
              onClick: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
              onKeyDown: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
              "aria-label": "".concat(_this2.props.labels.item, " ").concat(index + 1),
              style: {
                width: _this2.props.thumbWidth
              }
            };
            return _react.default.createElement("li", _extends({}, thumbProps, {
              role: "button",
              tabIndex: 0
            }), img);
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;
          if (!this.props.children) {
            return null;
          }
          var isSwipeable = _react.Children.count(this.props.children) > 1;
          var hasPrev = this.state.showArrows && this.state.firstItem > 0;
          var hasNext = this.state.showArrows && this.state.firstItem < this.state.lastPosition;
          var itemListStyles = {};
          var currentPosition = -this.state.firstItem * (this.state.itemSize || 0);
          var transformProp = (0, _CSSTranslate.default)(currentPosition, "px", this.props.axis);
          var transitionTime = this.props.transitionTime + "ms";
          itemListStyles = {
            WebkitTransform: transformProp,
            MozTransform: transformProp,
            MsTransform: transformProp,
            OTransform: transformProp,
            transform: transformProp,
            msTransform: transformProp,
            WebkitTransitionDuration: transitionTime,
            MozTransitionDuration: transitionTime,
            MsTransitionDuration: transitionTime,
            OTransitionDuration: transitionTime,
            transitionDuration: transitionTime,
            msTransitionDuration: transitionTime
          };
          return _react.default.createElement("div", {
            className: _cssClasses.default.CAROUSEL(false)
          }, _react.default.createElement("div", {
            className: _cssClasses.default.WRAPPER(false),
            ref: this.setItemsWrapperRef
          }, _react.default.createElement("button", {
            type: "button",
            className: _cssClasses.default.ARROW_PREV(!hasPrev),
            onClick: function onClick() {
              return _this3.slideRight();
            },
            "aria-label": this.props.labels.leftArrow
          }), isSwipeable ? _react.default.createElement(_reactEasySwipe.default, {
            tagName: "ul",
            className: _cssClasses.default.SLIDER(false, this.state.swiping),
            onSwipeLeft: this.slideLeft,
            onSwipeRight: this.slideRight,
            onSwipeMove: this.onSwipeMove,
            onSwipeStart: this.onSwipeStart,
            onSwipeEnd: this.onSwipeEnd,
            style: itemListStyles,
            innerRef: this.setItemsListRef,
            allowMouseEvents: this.props.emulateTouch
          }, this.renderItems()) : _react.default.createElement("ul", {
            className: _cssClasses.default.SLIDER(false, this.state.swiping),
            ref: function ref(node) {
              return _this3.setItemsListRef(node);
            },
            style: itemListStyles
          }, this.renderItems()), _react.default.createElement("button", {
            type: "button",
            className: _cssClasses.default.ARROW_NEXT(!hasNext),
            onClick: function onClick() {
              return _this3.slideLeft();
            },
            "aria-label": this.props.labels.rightArrow
          })));
        }
      }]);
      return Thumbs2;
    }(_react.Component);
    exports.default = Thumbs;
    _defineProperty(Thumbs, "displayName", "Thumbs");
    _defineProperty(Thumbs, "defaultProps", {
      axis: "horizontal",
      labels: {
        leftArrow: "previous slide / item",
        rightArrow: "next slide / item",
        item: "slide item"
      },
      selectedItem: 0,
      thumbWidth: 80,
      transitionTime: 350
    });
  }
});

// node_modules/react-responsive-carousel/lib/js/shims/document.js
var require_document = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/shims/document.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = function _default2() {
      return document;
    };
    exports.default = _default;
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Carousel/utils.js
var require_utils = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Carousel/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.setPosition = exports.getPosition = exports.isKeyboardEvent = exports.defaultStatusFormatter = exports.noop = void 0;
    var _react = require_react();
    var _CSSTranslate = _interopRequireDefault(require_CSSTranslate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var noop = function noop2() {
    };
    exports.noop = noop;
    var defaultStatusFormatter = function defaultStatusFormatter2(current, total) {
      return "".concat(current, " of ").concat(total);
    };
    exports.defaultStatusFormatter = defaultStatusFormatter;
    var isKeyboardEvent = function isKeyboardEvent2(e) {
      return e ? e.hasOwnProperty("key") : false;
    };
    exports.isKeyboardEvent = isKeyboardEvent;
    var getPosition = function getPosition2(index, props) {
      if (props.infiniteLoop) {
        ++index;
      }
      if (index === 0) {
        return 0;
      }
      var childrenLength = _react.Children.count(props.children);
      if (props.centerMode && props.axis === "horizontal") {
        var currentPosition = -index * props.centerSlidePercentage;
        var lastPosition = childrenLength - 1;
        if (index && (index !== lastPosition || props.infiniteLoop)) {
          currentPosition += (100 - props.centerSlidePercentage) / 2;
        } else if (index === lastPosition) {
          currentPosition += 100 - props.centerSlidePercentage;
        }
        return currentPosition;
      }
      return -index * 100;
    };
    exports.getPosition = getPosition;
    var setPosition = function setPosition2(position, axis) {
      var style = {};
      ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(prop) {
        style[prop] = (0, _CSSTranslate.default)(position, "%", axis);
      });
      return style;
    };
    exports.setPosition = setPosition;
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Carousel/animations.js
var require_animations = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Carousel/animations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fadeAnimationHandler = exports.slideStopSwipingHandler = exports.slideSwipeAnimationHandler = exports.slideAnimationHandler = void 0;
    var _react = require_react();
    var _CSSTranslate = _interopRequireDefault(require_CSSTranslate());
    var _utils = require_utils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var slideAnimationHandler = function slideAnimationHandler2(props, state) {
      var returnStyles = {};
      var selectedItem = state.selectedItem;
      var previousItem = selectedItem;
      var lastPosition = _react.Children.count(props.children) - 1;
      var needClonedSlide = props.infiniteLoop && (selectedItem < 0 || selectedItem > lastPosition);
      if (needClonedSlide) {
        if (previousItem < 0) {
          if (props.centerMode && props.centerSlidePercentage && props.axis === "horizontal") {
            returnStyles.itemListStyle = (0, _utils.setPosition)(-(lastPosition + 2) * props.centerSlidePercentage - (100 - props.centerSlidePercentage) / 2, props.axis);
          } else {
            returnStyles.itemListStyle = (0, _utils.setPosition)(-(lastPosition + 2) * 100, props.axis);
          }
        } else if (previousItem > lastPosition) {
          returnStyles.itemListStyle = (0, _utils.setPosition)(0, props.axis);
        }
        return returnStyles;
      }
      var currentPosition = (0, _utils.getPosition)(selectedItem, props);
      var transformProp = (0, _CSSTranslate.default)(currentPosition, "%", props.axis);
      var transitionTime = props.transitionTime + "ms";
      returnStyles.itemListStyle = {
        WebkitTransform: transformProp,
        msTransform: transformProp,
        OTransform: transformProp,
        transform: transformProp
      };
      if (!state.swiping) {
        returnStyles.itemListStyle = _objectSpread(_objectSpread({}, returnStyles.itemListStyle), {}, {
          WebkitTransitionDuration: transitionTime,
          MozTransitionDuration: transitionTime,
          OTransitionDuration: transitionTime,
          transitionDuration: transitionTime,
          msTransitionDuration: transitionTime
        });
      }
      return returnStyles;
    };
    exports.slideAnimationHandler = slideAnimationHandler;
    var slideSwipeAnimationHandler = function slideSwipeAnimationHandler2(delta, props, state, setState) {
      var returnStyles = {};
      var isHorizontal = props.axis === "horizontal";
      var childrenLength = _react.Children.count(props.children);
      var initialBoundry = 0;
      var currentPosition = (0, _utils.getPosition)(state.selectedItem, props);
      var finalBoundry = props.infiniteLoop ? (0, _utils.getPosition)(childrenLength - 1, props) - 100 : (0, _utils.getPosition)(childrenLength - 1, props);
      var axisDelta = isHorizontal ? delta.x : delta.y;
      var handledDelta = axisDelta;
      if (currentPosition === initialBoundry && axisDelta > 0) {
        handledDelta = 0;
      }
      if (currentPosition === finalBoundry && axisDelta < 0) {
        handledDelta = 0;
      }
      var position = currentPosition + 100 / (state.itemSize / handledDelta);
      var hasMoved = Math.abs(axisDelta) > props.swipeScrollTolerance;
      if (props.infiniteLoop && hasMoved) {
        if (state.selectedItem === 0 && position > -100) {
          position -= childrenLength * 100;
        } else if (state.selectedItem === childrenLength - 1 && position < -childrenLength * 100) {
          position += childrenLength * 100;
        }
      }
      if (!props.preventMovementUntilSwipeScrollTolerance || hasMoved || state.swipeMovementStarted) {
        if (!state.swipeMovementStarted) {
          setState({
            swipeMovementStarted: true
          });
        }
        returnStyles.itemListStyle = (0, _utils.setPosition)(position, props.axis);
      }
      if (hasMoved && !state.cancelClick) {
        setState({
          cancelClick: true
        });
      }
      return returnStyles;
    };
    exports.slideSwipeAnimationHandler = slideSwipeAnimationHandler;
    var slideStopSwipingHandler = function slideStopSwipingHandler2(props, state) {
      var currentPosition = (0, _utils.getPosition)(state.selectedItem, props);
      var itemListStyle = (0, _utils.setPosition)(currentPosition, props.axis);
      return {
        itemListStyle
      };
    };
    exports.slideStopSwipingHandler = slideStopSwipingHandler;
    var fadeAnimationHandler = function fadeAnimationHandler2(props, state) {
      var transitionTime = props.transitionTime + "ms";
      var transitionTimingFunction = "ease-in-out";
      var slideStyle = {
        position: "absolute",
        display: "block",
        zIndex: -2,
        minHeight: "100%",
        opacity: 0,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        transitionTimingFunction,
        msTransitionTimingFunction: transitionTimingFunction,
        MozTransitionTimingFunction: transitionTimingFunction,
        WebkitTransitionTimingFunction: transitionTimingFunction,
        OTransitionTimingFunction: transitionTimingFunction
      };
      if (!state.swiping) {
        slideStyle = _objectSpread(_objectSpread({}, slideStyle), {}, {
          WebkitTransitionDuration: transitionTime,
          MozTransitionDuration: transitionTime,
          OTransitionDuration: transitionTime,
          transitionDuration: transitionTime,
          msTransitionDuration: transitionTime
        });
      }
      return {
        slideStyle,
        selectedStyle: _objectSpread(_objectSpread({}, slideStyle), {}, {
          opacity: 1,
          position: "relative"
        }),
        prevStyle: _objectSpread({}, slideStyle)
      };
    };
    exports.fadeAnimationHandler = fadeAnimationHandler;
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Carousel/index.js
var require_Carousel = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Carousel/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _reactEasySwipe = _interopRequireDefault(require_lib());
    var _cssClasses = _interopRequireDefault(require_cssClasses());
    var _Thumbs = _interopRequireDefault(require_Thumbs());
    var _document = _interopRequireDefault(require_document());
    var _window = _interopRequireDefault(require_window());
    var _utils = require_utils();
    var _animations = require_animations();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var Carousel = function(_React$Component) {
      _inherits(Carousel2, _React$Component);
      var _super = _createSuper(Carousel2);
      function Carousel2(props) {
        var _this;
        _classCallCheck(this, Carousel2);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "carouselWrapperRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "listRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "itemsRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "timer", void 0);
        _defineProperty(_assertThisInitialized(_this), "animationHandler", void 0);
        _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function(node) {
          _this.thumbsRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setCarouselWrapperRef", function(node) {
          _this.carouselWrapperRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setListRef", function(node) {
          _this.listRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setItemsRef", function(node, index) {
          if (!_this.itemsRef) {
            _this.itemsRef = [];
          }
          _this.itemsRef[index] = node;
        });
        _defineProperty(_assertThisInitialized(_this), "autoPlay", function() {
          if (_react.Children.count(_this.props.children) <= 1) {
            return;
          }
          _this.clearAutoPlay();
          if (!_this.props.autoPlay) {
            return;
          }
          _this.timer = setTimeout(function() {
            _this.increment();
          }, _this.props.interval);
        });
        _defineProperty(_assertThisInitialized(_this), "clearAutoPlay", function() {
          if (_this.timer) clearTimeout(_this.timer);
        });
        _defineProperty(_assertThisInitialized(_this), "resetAutoPlay", function() {
          _this.clearAutoPlay();
          _this.autoPlay();
        });
        _defineProperty(_assertThisInitialized(_this), "stopOnHover", function() {
          _this.setState({
            isMouseEntered: true
          }, _this.clearAutoPlay);
        });
        _defineProperty(_assertThisInitialized(_this), "startOnLeave", function() {
          _this.setState({
            isMouseEntered: false
          }, _this.autoPlay);
        });
        _defineProperty(_assertThisInitialized(_this), "isFocusWithinTheCarousel", function() {
          if (!_this.carouselWrapperRef) {
            return false;
          }
          if ((0, _document.default)().activeElement === _this.carouselWrapperRef || _this.carouselWrapperRef.contains((0, _document.default)().activeElement)) {
            return true;
          }
          return false;
        });
        _defineProperty(_assertThisInitialized(_this), "navigateWithKeyboard", function(e) {
          if (!_this.isFocusWithinTheCarousel()) {
            return;
          }
          var axis = _this.props.axis;
          var isHorizontal = axis === "horizontal";
          var keyNames = {
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            ArrowLeft: 37
          };
          var nextKey = isHorizontal ? keyNames.ArrowRight : keyNames.ArrowDown;
          var prevKey = isHorizontal ? keyNames.ArrowLeft : keyNames.ArrowUp;
          if (nextKey === e.keyCode) {
            _this.increment();
          } else if (prevKey === e.keyCode) {
            _this.decrement();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "updateSizes", function() {
          if (!_this.state.initialized || !_this.itemsRef || _this.itemsRef.length === 0) {
            return;
          }
          var isHorizontal = _this.props.axis === "horizontal";
          var firstItem = _this.itemsRef[0];
          if (!firstItem) {
            return;
          }
          var itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;
          _this.setState({
            itemSize
          });
          if (_this.thumbsRef) {
            _this.thumbsRef.updateSizes();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "setMountState", function() {
          _this.setState({
            hasMount: true
          });
          _this.updateSizes();
        });
        _defineProperty(_assertThisInitialized(_this), "handleClickItem", function(index, item) {
          if (_react.Children.count(_this.props.children) === 0) {
            return;
          }
          if (_this.state.cancelClick) {
            _this.setState({
              cancelClick: false
            });
            return;
          }
          _this.props.onClickItem(index, item);
          if (index !== _this.state.selectedItem) {
            _this.setState({
              selectedItem: index
            });
          }
        });
        _defineProperty(_assertThisInitialized(_this), "handleOnChange", function(index, item) {
          if (_react.Children.count(_this.props.children) <= 1) {
            return;
          }
          _this.props.onChange(index, item);
        });
        _defineProperty(_assertThisInitialized(_this), "handleClickThumb", function(index, item) {
          _this.props.onClickThumb(index, item);
          _this.moveTo(index);
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function(event) {
          _this.setState({
            swiping: true
          });
          _this.props.onSwipeStart(event);
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function(event) {
          _this.setState({
            swiping: false,
            cancelClick: false,
            swipeMovementStarted: false
          });
          _this.props.onSwipeEnd(event);
          _this.clearAutoPlay();
          if (_this.state.autoPlay) {
            _this.autoPlay();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function(delta, event) {
          _this.props.onSwipeMove(event);
          var animationHandlerResponse = _this.props.swipeAnimationHandler(delta, _this.props, _this.state, _this.setState.bind(_assertThisInitialized(_this)));
          _this.setState(_objectSpread({}, animationHandlerResponse));
          return !!Object.keys(animationHandlerResponse).length;
        });
        _defineProperty(_assertThisInitialized(_this), "decrement", function() {
          var positions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
          _this.moveTo(_this.state.selectedItem - (typeof positions === "number" ? positions : 1));
        });
        _defineProperty(_assertThisInitialized(_this), "increment", function() {
          var positions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
          _this.moveTo(_this.state.selectedItem + (typeof positions === "number" ? positions : 1));
        });
        _defineProperty(_assertThisInitialized(_this), "moveTo", function(position) {
          if (typeof position !== "number") {
            return;
          }
          var lastPosition = _react.Children.count(_this.props.children) - 1;
          if (position < 0) {
            position = _this.props.infiniteLoop ? lastPosition : 0;
          }
          if (position > lastPosition) {
            position = _this.props.infiniteLoop ? 0 : lastPosition;
          }
          _this.selectItem({
            // if it's not a slider, we don't need to set position here
            selectedItem: position
          });
          if (_this.state.autoPlay && _this.state.isMouseEntered === false) {
            _this.resetAutoPlay();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onClickNext", function() {
          _this.increment(1);
        });
        _defineProperty(_assertThisInitialized(_this), "onClickPrev", function() {
          _this.decrement(1);
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeForward", function() {
          _this.increment(1);
          if (_this.props.emulateTouch) {
            _this.setState({
              cancelClick: true
            });
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeBackwards", function() {
          _this.decrement(1);
          if (_this.props.emulateTouch) {
            _this.setState({
              cancelClick: true
            });
          }
        });
        _defineProperty(_assertThisInitialized(_this), "changeItem", function(newIndex) {
          return function(e) {
            if (!(0, _utils.isKeyboardEvent)(e) || e.key === "Enter") {
              _this.moveTo(newIndex);
            }
          };
        });
        _defineProperty(_assertThisInitialized(_this), "selectItem", function(state) {
          _this.setState(_objectSpread({
            previousItem: _this.state.selectedItem
          }, state), function() {
            _this.setState(_this.animationHandler(_this.props, _this.state));
          });
          _this.handleOnChange(state.selectedItem, _react.Children.toArray(_this.props.children)[state.selectedItem]);
        });
        _defineProperty(_assertThisInitialized(_this), "getInitialImage", function() {
          var selectedItem = _this.props.selectedItem;
          var item = _this.itemsRef && _this.itemsRef[selectedItem];
          var images = item && item.getElementsByTagName("img") || [];
          return images[0];
        });
        _defineProperty(_assertThisInitialized(_this), "getVariableItemHeight", function(position) {
          var item = _this.itemsRef && _this.itemsRef[position];
          if (_this.state.hasMount && item && item.children.length) {
            var slideImages = item.children[0].getElementsByTagName("img") || [];
            if (slideImages.length > 0) {
              var image = slideImages[0];
              if (!image.complete) {
                var onImageLoad = function onImageLoad2() {
                  _this.forceUpdate();
                  image.removeEventListener("load", onImageLoad2);
                };
                image.addEventListener("load", onImageLoad);
              }
            }
            var displayItem = slideImages[0] || item.children[0];
            var height = displayItem.clientHeight;
            return height > 0 ? height : null;
          }
          return null;
        });
        var initState = {
          initialized: false,
          previousItem: props.selectedItem,
          selectedItem: props.selectedItem,
          hasMount: false,
          isMouseEntered: false,
          autoPlay: props.autoPlay,
          swiping: false,
          swipeMovementStarted: false,
          cancelClick: false,
          itemSize: 1,
          itemListStyle: {},
          slideStyle: {},
          selectedStyle: {},
          prevStyle: {}
        };
        _this.animationHandler = typeof props.animationHandler === "function" && props.animationHandler || props.animationHandler === "fade" && _animations.fadeAnimationHandler || _animations.slideAnimationHandler;
        _this.state = _objectSpread(_objectSpread({}, initState), _this.animationHandler(props, initState));
        return _this;
      }
      _createClass(Carousel2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (!this.props.children) {
            return;
          }
          this.setupCarousel();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          if (!prevProps.children && this.props.children && !this.state.initialized) {
            this.setupCarousel();
          }
          if (!prevProps.autoFocus && this.props.autoFocus) {
            this.forceFocus();
          }
          if (prevState.swiping && !this.state.swiping) {
            this.setState(_objectSpread({}, this.props.stopSwipingHandler(this.props, this.state)));
          }
          if (prevProps.selectedItem !== this.props.selectedItem || prevProps.centerMode !== this.props.centerMode) {
            this.updateSizes();
            this.moveTo(this.props.selectedItem);
          }
          if (prevProps.autoPlay !== this.props.autoPlay) {
            if (this.props.autoPlay) {
              this.setupAutoPlay();
            } else {
              this.destroyAutoPlay();
            }
            this.setState({
              autoPlay: this.props.autoPlay
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.destroyCarousel();
        }
      }, {
        key: "setupCarousel",
        value: function setupCarousel() {
          var _this2 = this;
          this.bindEvents();
          if (this.state.autoPlay && _react.Children.count(this.props.children) > 1) {
            this.setupAutoPlay();
          }
          if (this.props.autoFocus) {
            this.forceFocus();
          }
          this.setState({
            initialized: true
          }, function() {
            var initialImage = _this2.getInitialImage();
            if (initialImage && !initialImage.complete) {
              initialImage.addEventListener("load", _this2.setMountState);
            } else {
              _this2.setMountState();
            }
          });
        }
      }, {
        key: "destroyCarousel",
        value: function destroyCarousel() {
          if (this.state.initialized) {
            this.unbindEvents();
            this.destroyAutoPlay();
          }
        }
      }, {
        key: "setupAutoPlay",
        value: function setupAutoPlay() {
          this.autoPlay();
          var carouselWrapper = this.carouselWrapperRef;
          if (this.props.stopOnHover && carouselWrapper) {
            carouselWrapper.addEventListener("mouseenter", this.stopOnHover);
            carouselWrapper.addEventListener("mouseleave", this.startOnLeave);
          }
        }
      }, {
        key: "destroyAutoPlay",
        value: function destroyAutoPlay() {
          this.clearAutoPlay();
          var carouselWrapper = this.carouselWrapperRef;
          if (this.props.stopOnHover && carouselWrapper) {
            carouselWrapper.removeEventListener("mouseenter", this.stopOnHover);
            carouselWrapper.removeEventListener("mouseleave", this.startOnLeave);
          }
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          (0, _window.default)().addEventListener("resize", this.updateSizes);
          (0, _window.default)().addEventListener("DOMContentLoaded", this.updateSizes);
          if (this.props.useKeyboardArrows) {
            (0, _document.default)().addEventListener("keydown", this.navigateWithKeyboard);
          }
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          (0, _window.default)().removeEventListener("resize", this.updateSizes);
          (0, _window.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
          var initialImage = this.getInitialImage();
          if (initialImage) {
            initialImage.removeEventListener("load", this.setMountState);
          }
          if (this.props.useKeyboardArrows) {
            (0, _document.default)().removeEventListener("keydown", this.navigateWithKeyboard);
          }
        }
      }, {
        key: "forceFocus",
        value: function forceFocus() {
          var _this$carouselWrapper;
          (_this$carouselWrapper = this.carouselWrapperRef) === null || _this$carouselWrapper === void 0 ? void 0 : _this$carouselWrapper.focus();
        }
      }, {
        key: "renderItems",
        value: function renderItems(isClone) {
          var _this3 = this;
          if (!this.props.children) {
            return [];
          }
          return _react.Children.map(this.props.children, function(item, index) {
            var isSelected = index === _this3.state.selectedItem;
            var isPrevious = index === _this3.state.previousItem;
            var style = isSelected && _this3.state.selectedStyle || isPrevious && _this3.state.prevStyle || _this3.state.slideStyle || {};
            if (_this3.props.centerMode && _this3.props.axis === "horizontal") {
              style = _objectSpread(_objectSpread({}, style), {}, {
                minWidth: _this3.props.centerSlidePercentage + "%"
              });
            }
            if (_this3.state.swiping && _this3.state.swipeMovementStarted) {
              style = _objectSpread(_objectSpread({}, style), {}, {
                pointerEvents: "none"
              });
            }
            var slideProps = {
              ref: function ref(e) {
                return _this3.setItemsRef(e, index);
              },
              key: "itemKey" + index + (isClone ? "clone" : ""),
              className: _cssClasses.default.ITEM(true, index === _this3.state.selectedItem, index === _this3.state.previousItem),
              onClick: _this3.handleClickItem.bind(_this3, index, item),
              style
            };
            return _react.default.createElement("li", slideProps, _this3.props.renderItem(item, {
              isSelected: index === _this3.state.selectedItem,
              isPrevious: index === _this3.state.previousItem
            }));
          });
        }
      }, {
        key: "renderControls",
        value: function renderControls() {
          var _this4 = this;
          var _this$props = this.props, showIndicators = _this$props.showIndicators, labels = _this$props.labels, renderIndicator = _this$props.renderIndicator, children = _this$props.children;
          if (!showIndicators) {
            return null;
          }
          return _react.default.createElement("ul", {
            className: "control-dots"
          }, _react.Children.map(children, function(_, index) {
            return renderIndicator && renderIndicator(_this4.changeItem(index), index === _this4.state.selectedItem, index, labels.item);
          }));
        }
      }, {
        key: "renderStatus",
        value: function renderStatus() {
          if (!this.props.showStatus) {
            return null;
          }
          return _react.default.createElement("p", {
            className: "carousel-status"
          }, this.props.statusFormatter(this.state.selectedItem + 1, _react.Children.count(this.props.children)));
        }
      }, {
        key: "renderThumbs",
        value: function renderThumbs() {
          if (!this.props.showThumbs || !this.props.children || _react.Children.count(this.props.children) === 0) {
            return null;
          }
          return _react.default.createElement(_Thumbs.default, {
            ref: this.setThumbsRef,
            onSelectItem: this.handleClickThumb,
            selectedItem: this.state.selectedItem,
            transitionTime: this.props.transitionTime,
            thumbWidth: this.props.thumbWidth,
            labels: this.props.labels,
            emulateTouch: this.props.emulateTouch
          }, this.props.renderThumbs(this.props.children));
        }
      }, {
        key: "render",
        value: function render() {
          var _this5 = this;
          if (!this.props.children || _react.Children.count(this.props.children) === 0) {
            return null;
          }
          var isSwipeable = this.props.swipeable && _react.Children.count(this.props.children) > 1;
          var isHorizontal = this.props.axis === "horizontal";
          var canShowArrows = this.props.showArrows && _react.Children.count(this.props.children) > 1;
          var hasPrev = canShowArrows && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false;
          var hasNext = canShowArrows && (this.state.selectedItem < _react.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false;
          var itemsClone = this.renderItems(true);
          var firstClone = itemsClone.shift();
          var lastClone = itemsClone.pop();
          var swiperProps = {
            className: _cssClasses.default.SLIDER(true, this.state.swiping),
            onSwipeMove: this.onSwipeMove,
            onSwipeStart: this.onSwipeStart,
            onSwipeEnd: this.onSwipeEnd,
            style: this.state.itemListStyle,
            tolerance: this.props.swipeScrollTolerance
          };
          var containerStyles = {};
          if (isHorizontal) {
            swiperProps.onSwipeLeft = this.onSwipeForward;
            swiperProps.onSwipeRight = this.onSwipeBackwards;
            if (this.props.dynamicHeight) {
              var itemHeight = this.getVariableItemHeight(this.state.selectedItem);
              containerStyles.height = itemHeight || "auto";
            }
          } else {
            swiperProps.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward;
            swiperProps.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards;
            swiperProps.style = _objectSpread(_objectSpread({}, swiperProps.style), {}, {
              height: this.state.itemSize
            });
            containerStyles.height = this.state.itemSize;
          }
          return _react.default.createElement("div", {
            "aria-label": this.props.ariaLabel,
            className: _cssClasses.default.ROOT(this.props.className),
            ref: this.setCarouselWrapperRef,
            tabIndex: this.props.useKeyboardArrows ? 0 : void 0
          }, _react.default.createElement("div", {
            className: _cssClasses.default.CAROUSEL(true),
            style: {
              width: this.props.width
            }
          }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, hasPrev, this.props.labels.leftArrow), _react.default.createElement("div", {
            className: _cssClasses.default.WRAPPER(true, this.props.axis),
            style: containerStyles
          }, isSwipeable ? _react.default.createElement(_reactEasySwipe.default, _extends({
            tagName: "ul",
            innerRef: this.setListRef
          }, swiperProps, {
            allowMouseEvents: this.props.emulateTouch
          }), this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone) : _react.default.createElement("ul", {
            className: _cssClasses.default.SLIDER(true, this.state.swiping),
            ref: function ref(node) {
              return _this5.setListRef(node);
            },
            style: this.state.itemListStyle || {}
          }, this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone)), this.props.renderArrowNext(this.onClickNext, hasNext, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
        }
      }]);
      return Carousel2;
    }(_react.default.Component);
    exports.default = Carousel;
    _defineProperty(Carousel, "displayName", "Carousel");
    _defineProperty(Carousel, "defaultProps", {
      ariaLabel: void 0,
      axis: "horizontal",
      centerSlidePercentage: 80,
      interval: 3e3,
      labels: {
        leftArrow: "previous slide / item",
        rightArrow: "next slide / item",
        item: "slide item"
      },
      onClickItem: _utils.noop,
      onClickThumb: _utils.noop,
      onChange: _utils.noop,
      onSwipeStart: function onSwipeStart() {
      },
      onSwipeEnd: function onSwipeEnd() {
      },
      onSwipeMove: function onSwipeMove() {
        return false;
      },
      preventMovementUntilSwipeScrollTolerance: false,
      renderArrowPrev: function renderArrowPrev(onClickHandler, hasPrev, label) {
        return _react.default.createElement("button", {
          type: "button",
          "aria-label": label,
          className: _cssClasses.default.ARROW_PREV(!hasPrev),
          onClick: onClickHandler
        });
      },
      renderArrowNext: function renderArrowNext(onClickHandler, hasNext, label) {
        return _react.default.createElement("button", {
          type: "button",
          "aria-label": label,
          className: _cssClasses.default.ARROW_NEXT(!hasNext),
          onClick: onClickHandler
        });
      },
      renderIndicator: function renderIndicator(onClickHandler, isSelected, index, label) {
        return _react.default.createElement("li", {
          className: _cssClasses.default.DOT(isSelected),
          onClick: onClickHandler,
          onKeyDown: onClickHandler,
          value: index,
          key: index,
          role: "button",
          tabIndex: 0,
          "aria-label": "".concat(label, " ").concat(index + 1)
        });
      },
      renderItem: function renderItem(item) {
        return item;
      },
      renderThumbs: function renderThumbs(children) {
        var images = _react.Children.map(children, function(item) {
          var img = item;
          if (item.type !== "img") {
            img = _react.Children.toArray(item.props.children).find(function(children2) {
              return children2.type === "img";
            });
          }
          if (!img) {
            return void 0;
          }
          return img;
        });
        if (images.filter(function(image) {
          return image;
        }).length === 0) {
          console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md");
          return [];
        }
        return images;
      },
      statusFormatter: _utils.defaultStatusFormatter,
      selectedItem: 0,
      showArrows: true,
      showIndicators: true,
      showStatus: true,
      showThumbs: true,
      stopOnHover: true,
      swipeScrollTolerance: 5,
      swipeable: true,
      transitionTime: 350,
      verticalSwipe: "standard",
      width: "100%",
      animationHandler: "slide",
      swipeAnimationHandler: _animations.slideSwipeAnimationHandler,
      stopSwipingHandler: _animations.slideStopSwipingHandler
    });
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Carousel/types.js
var require_types = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Carousel/types.js"() {
    "use strict";
  }
});

// node_modules/react-responsive-carousel/lib/js/index.js
var require_js = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Carousel", {
      enumerable: true,
      get: function get() {
        return _Carousel.default;
      }
    });
    Object.defineProperty(exports, "CarouselProps", {
      enumerable: true,
      get: function get() {
        return _types.CarouselProps;
      }
    });
    Object.defineProperty(exports, "Thumbs", {
      enumerable: true,
      get: function get() {
        return _Thumbs.default;
      }
    });
    var _Carousel = _interopRequireDefault(require_Carousel());
    var _types = require_types();
    var _Thumbs = _interopRequireDefault(require_Thumbs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});
export default require_js();
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=react-responsive-carousel.js.map
