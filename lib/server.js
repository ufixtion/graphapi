/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../database/comments/create.ts":
/*!**************************************!*\
  !*** ../database/comments/create.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst faker = __webpack_require__(/*! faker */ \"faker\");\nexports.create = (args) => {\n    const comment = Object.assign({}, args.comment, { parentId: args.parentId });\n    comment.id = faker.random.uuid();\n    return Promise.resolve(comment);\n};\n\n\n//# sourceURL=webpack:///../database/comments/create.ts?");

/***/ }),

/***/ "../database/comments/get_by_parent_id_for_user.ts":
/*!*********************************************************!*\
  !*** ../database/comments/get_by_parent_id_for_user.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst faker = __webpack_require__(/*! faker */ \"faker\");\nconst jsf = __webpack_require__(/*! json-schema-faker */ \"json-schema-faker\");\nconst schemas_1 = __webpack_require__(/*! schemas */ \"../schemas/index.ts\");\nexports.getByParentIdForUser = (args) => {\n    return jsf.resolve({\n        type: 'array',\n        minItems: 0,\n        maxItems: 15,\n        items: schemas_1.schemas.story.schema\n    }).then(comments => comments.map(comment => {\n        if (faker.random.boolean())\n            delete comment.exposed;\n        return comment;\n    })).then(comments => {\n        return {\n            cursor: 'aadfasdfasfa',\n            stories: comments\n        };\n    });\n};\n\n\n//# sourceURL=webpack:///../database/comments/get_by_parent_id_for_user.ts?");

/***/ }),

/***/ "../database/comments/index.ts":
/*!*************************************!*\
  !*** ../database/comments/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./get_by_parent_id_for_user */ \"../database/comments/get_by_parent_id_for_user.ts\"));\n__export(__webpack_require__(/*! ./create */ \"../database/comments/create.ts\"));\n\n\n//# sourceURL=webpack:///../database/comments/index.ts?");

/***/ }),

/***/ "../database/feed/get_for_user.ts":
/*!****************************************!*\
  !*** ../database/feed/get_for_user.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst faker = __webpack_require__(/*! faker */ \"faker\");\nconst jsf = __webpack_require__(/*! json-schema-faker */ \"json-schema-faker\");\nconst schemas_1 = __webpack_require__(/*! schemas */ \"../schemas/index.ts\");\nexports.getByUser = (args) => {\n    return jsf.resolve({\n        type: 'array',\n        minItems: 0,\n        maxItems: 15,\n        items: schemas_1.schemas.story.schema\n    }).then((stories) => stories.map(story => {\n        if (faker.random.boolean())\n            delete story.exposed;\n        if (faker.random.boolean()) {\n            story.photos = [];\n        }\n        else if (story.photos) {\n            story\n                .photos\n                .forEach(pho => pho.url = `${pho.url}?sig=${faker.random.number()}`);\n        }\n        return story;\n    })).then((stories) => {\n        return {\n            cursor: 'some random cursor',\n            stories\n        };\n    });\n};\n\n\n//# sourceURL=webpack:///../database/feed/get_for_user.ts?");

/***/ }),

/***/ "../database/feed/index.ts":
/*!*********************************!*\
  !*** ../database/feed/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./get_for_user */ \"../database/feed/get_for_user.ts\"));\n\n\n//# sourceURL=webpack:///../database/feed/index.ts?");

/***/ }),

/***/ "../database/index.ts":
/*!****************************!*\
  !*** ../database/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst comments = __webpack_require__(/*! ./comments */ \"../database/comments/index.ts\");\nconst feed = __webpack_require__(/*! ./feed */ \"../database/feed/index.ts\");\nconst stories = __webpack_require__(/*! ./stories */ \"../database/stories/index.ts\");\nconst users = __webpack_require__(/*! ./users */ \"../database/users/index.ts\");\nconst notifictions = __webpack_require__(/*! ./notifcations */ \"../database/notifcations/index.ts\");\nconst jsf = __webpack_require__(/*! json-schema-faker */ \"json-schema-faker\");\nconst faker = __webpack_require__(/*! faker */ \"faker\");\njsf.option({\n    alwaysFakeOptionals: true,\n});\njsf.extend('faker', function () {\n    return faker;\n});\njsf.format('uuid', function () {\n    return jsf.random.randexp('^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$');\n});\njsf.format('url', function () {\n    return jsf.random.randexp(`https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)\n  `);\n});\nconst database = {\n    comments,\n    feed,\n    stories,\n    users,\n    notifictions\n};\nexports.database = database;\n\n\n//# sourceURL=webpack:///../database/index.ts?");

/***/ }),

/***/ "../database/notifcations/get_for_user.ts":
/*!************************************************!*\
  !*** ../database/notifcations/get_for_user.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst jsf = __webpack_require__(/*! json-schema-faker */ \"json-schema-faker\");\nconst schemas_1 = __webpack_require__(/*! schemas */ \"../schemas/index.ts\");\nexports.getForUser = (args) => {\n    return jsf.resolve({\n        type: 'array',\n        minItems: 0,\n        maxItems: 15,\n        items: schemas_1.schemas.notification.schema\n    }).then(notifications => ({ notifications }));\n};\n\n\n//# sourceURL=webpack:///../database/notifcations/get_for_user.ts?");

/***/ }),

/***/ "../database/notifcations/index.ts":
/*!*****************************************!*\
  !*** ../database/notifcations/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./get_for_user */ \"../database/notifcations/get_for_user.ts\"));\n\n\n//# sourceURL=webpack:///../database/notifcations/index.ts?");

/***/ }),

/***/ "../database/stories/block.ts":
/*!************************************!*\
  !*** ../database/stories/block.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.block = (args) => {\n    return Promise.resolve(true);\n};\n\n\n//# sourceURL=webpack:///../database/stories/block.ts?");

/***/ }),

/***/ "../database/stories/create.ts":
/*!*************************************!*\
  !*** ../database/stories/create.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst faker = __webpack_require__(/*! faker */ \"faker\");\nexports.create = (args) => {\n    const story = Object.assign({}, args.story);\n    story.id = faker.random.uuid();\n    return Promise.resolve(story);\n};\n\n\n//# sourceURL=webpack:///../database/stories/create.ts?");

/***/ }),

/***/ "../database/stories/get_by_id_for_user.ts":
/*!*************************************************!*\
  !*** ../database/stories/get_by_id_for_user.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst faker = __webpack_require__(/*! faker */ \"faker\");\nconst jsf = __webpack_require__(/*! json-schema-faker */ \"json-schema-faker\");\nconst schemas_1 = __webpack_require__(/*! schemas */ \"../schemas/index.ts\");\nexports.getByIdForUser = (args) => {\n    return jsf.resolve(schemas_1.schemas.story.schema)\n        .then((story) => {\n        if (faker.random.boolean())\n            delete story.exposed;\n        if (faker.random.boolean()) {\n            delete story.photos;\n        }\n        else if (story.photos) {\n            story\n                .photos\n                .forEach(pho => pho.url = `${pho.url}?sig=${faker.random.number()}`);\n        }\n        return story;\n    });\n};\n\n\n//# sourceURL=webpack:///../database/stories/get_by_id_for_user.ts?");

/***/ }),

/***/ "../database/stories/get_user_reaction.ts":
/*!************************************************!*\
  !*** ../database/stories/get_user_reaction.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst faker = __webpack_require__(/*! faker */ \"faker\");\nexports.getUserReaction = (args) => {\n    const reaction = faker.random.arrayElement(['LIKED', 'DISLIKED']);\n    return Promise.resolve(reaction);\n};\n\n\n//# sourceURL=webpack:///../database/stories/get_user_reaction.ts?");

/***/ }),

/***/ "../database/stories/index.ts":
/*!************************************!*\
  !*** ../database/stories/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./get_by_id_for_user */ \"../database/stories/get_by_id_for_user.ts\"));\n__export(__webpack_require__(/*! ./create */ \"../database/stories/create.ts\"));\n__export(__webpack_require__(/*! ./block */ \"../database/stories/block.ts\"));\n__export(__webpack_require__(/*! ./remove */ \"../database/stories/remove.ts\"));\n__export(__webpack_require__(/*! ./react_to */ \"../database/stories/react_to.ts\"));\n__export(__webpack_require__(/*! ./get_user_reaction */ \"../database/stories/get_user_reaction.ts\"));\n\n\n//# sourceURL=webpack:///../database/stories/index.ts?");

/***/ }),

/***/ "../database/stories/react_to.ts":
/*!***************************************!*\
  !*** ../database/stories/react_to.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst faker = __webpack_require__(/*! faker */ \"faker\");\nconst jsf = __webpack_require__(/*! json-schema-faker */ \"json-schema-faker\");\nconst schemas_1 = __webpack_require__(/*! schemas */ \"../schemas/index.ts\");\nexports.reactTo = (args) => {\n    return jsf.resolve(schemas_1.schemas.story.schema)\n        .then((story) => {\n        if (faker.random.boolean())\n            delete story.exposed;\n        if (faker.random.boolean()) {\n            delete story.photos;\n        }\n        else if (story.photos) {\n            story\n                .photos\n                .forEach(pho => pho.url = `${pho.url}?sig=${faker.random.number()}`);\n        }\n        story.id = args.id;\n        return story;\n    });\n};\n\n\n//# sourceURL=webpack:///../database/stories/react_to.ts?");

/***/ }),

/***/ "../database/stories/remove.ts":
/*!*************************************!*\
  !*** ../database/stories/remove.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.remove = (args) => {\n    return Promise.resolve(true);\n};\n\n\n//# sourceURL=webpack:///../database/stories/remove.ts?");

/***/ }),

/***/ "../database/users/get_by_id.ts":
/*!**************************************!*\
  !*** ../database/users/get_by_id.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst jsf = __webpack_require__(/*! json-schema-faker */ \"json-schema-faker\");\nconst schemas_1 = __webpack_require__(/*! schemas */ \"../schemas/index.ts\");\nexports.getById = (args) => {\n    return jsf.resolve(schemas_1.schemas.user.schema);\n};\n\n\n//# sourceURL=webpack:///../database/users/get_by_id.ts?");

/***/ }),

/***/ "../database/users/index.ts":
/*!**********************************!*\
  !*** ../database/users/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./get_by_id */ \"../database/users/get_by_id.ts\"));\n\n\n//# sourceURL=webpack:///../database/users/index.ts?");

/***/ }),

/***/ "../schemas/index.ts":
/*!***************************!*\
  !*** ../schemas/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./src */ \"../schemas/src/index.ts\"));\n\n\n//# sourceURL=webpack:///../schemas/index.ts?");

/***/ }),

/***/ "../schemas/src/exposed/index.ts":
/*!***************************************!*\
  !*** ../schemas/src/exposed/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Ajv = __webpack_require__(/*! ajv */ \"ajv\");\nconst schema = {\n    type: 'object',\n    properties: {\n        avatar: {\n            type: 'string',\n            format: 'url',\n            faker: 'image.avatar'\n        },\n        displayName: {\n            type: 'string',\n            faker: 'name.findName'\n        }\n    },\n    required: ['name', 'avatar']\n};\nexports.schema = schema;\nconst ajv = new Ajv();\nconst validator = ajv.compile(schema);\nexports.validator = validator;\n\n\n//# sourceURL=webpack:///../schemas/src/exposed/index.ts?");

/***/ }),

/***/ "../schemas/src/index.ts":
/*!*******************************!*\
  !*** ../schemas/src/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst story = __webpack_require__(/*! ./story */ \"../schemas/src/story/index.ts\");\nconst user = __webpack_require__(/*! ./user */ \"../schemas/src/user/index.ts\");\nconst notification = __webpack_require__(/*! ./notification */ \"../schemas/src/notification/index.ts\");\nexports.schemas = {\n    story,\n    user,\n    notification\n};\n\n\n//# sourceURL=webpack:///../schemas/src/index.ts?");

/***/ }),

/***/ "../schemas/src/notification/index.ts":
/*!********************************************!*\
  !*** ../schemas/src/notification/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Ajv = __webpack_require__(/*! ajv */ \"ajv\");\nconst schema = {\n    type: 'object',\n    properties: {\n        id: {\n            type: 'string',\n            format: 'uuid',\n            faker: 'random.uuid'\n        },\n        text: {\n            type: 'string',\n            minLength: 0,\n            maxLength: 512,\n            faker: 'lorem.paragraph'\n        },\n        type: {\n            type: 'string',\n            enum: ['LIKED', 'COMMENTED']\n        },\n        read: {\n            type: 'boolean'\n        },\n        url: {\n            type: 'string',\n            format: 'url',\n            faker: {\n                'random.arrayElement': [\n                    [\n                        '/story/5c7c3a42-1481-4ae7-a850-166c50678d17?comment=5c7c3a42-1481-4ae7-a850-166c50678444',\n                        '/story/5c7c3a42-1481-4ae7-a850-166c50678d17'\n                    ]\n                ]\n            }\n        },\n        createdAt: {\n            type: 'string',\n            format: 'date-time',\n        }\n    },\n    required: ['name', 'avatar']\n};\nexports.schema = schema;\nconst ajv = new Ajv();\nconst validator = ajv.compile(schema);\nexports.validator = validator;\n\n\n//# sourceURL=webpack:///../schemas/src/notification/index.ts?");

/***/ }),

/***/ "../schemas/src/photo/index.ts":
/*!*************************************!*\
  !*** ../schemas/src/photo/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Ajv = __webpack_require__(/*! ajv */ \"ajv\");\nconst schema = {\n    type: 'object',\n    properties: {\n        id: {\n            type: 'string',\n            format: 'uuid',\n            faker: 'random.uuid'\n        },\n        url: {\n            type: 'string',\n            format: 'url',\n            faker: {\n                'random.arrayElement': [['https://source.unsplash.com/random']]\n            }\n        },\n        safe: {\n            type: 'boolean'\n        }\n    },\n    required: ['url', 'safe']\n};\nexports.schema = schema;\nconst ajv = new Ajv();\nconst validator = ajv.compile(schema);\nexports.validator = validator;\n\n\n//# sourceURL=webpack:///../schemas/src/photo/index.ts?");

/***/ }),

/***/ "../schemas/src/story/index.ts":
/*!*************************************!*\
  !*** ../schemas/src/story/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Ajv = __webpack_require__(/*! ajv */ \"ajv\");\nconst exposed = __webpack_require__(/*! ../exposed */ \"../schemas/src/exposed/index.ts\");\nconst photo = __webpack_require__(/*! ../photo */ \"../schemas/src/photo/index.ts\");\nconst schema = {\n    type: 'object',\n    properties: {\n        id: {\n            type: 'string',\n            format: 'uuid',\n            faker: 'random.uuid'\n        },\n        parentId: {\n            type: 'string',\n            format: 'uuid',\n            faker: 'random.uuid'\n        },\n        text: {\n            type: 'string',\n            minLength: 0,\n            maxLength: 512,\n            faker: 'lorem.paragraph'\n        },\n        photos: {\n            type: 'array',\n            minItems: 1,\n            items: photo.schema\n        },\n        likes: {\n            type: 'number',\n            default: 0,\n            minimum: 0,\n            faker: 'random.number'\n        },\n        dislikes: {\n            type: 'number',\n            default: 0,\n            minimum: 0,\n            faker: 'random.number'\n        },\n        isOwner: {\n            type: 'boolean',\n            default: false\n        },\n        exposed: exposed.schema,\n        createdAt: {\n            type: 'string',\n            format: 'date-time',\n        }\n    },\n    required: ['id', 'likes', 'dislikes', 'createdAt', 'isOwner']\n};\nexports.schema = schema;\nconst ajv = new Ajv({ useDefaults: true });\nconst validator = ajv.compile(schema);\nexports.validator = validator;\n\n\n//# sourceURL=webpack:///../schemas/src/story/index.ts?");

/***/ }),

/***/ "../schemas/src/user/index.ts":
/*!************************************!*\
  !*** ../schemas/src/user/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Ajv = __webpack_require__(/*! ajv */ \"ajv\");\nconst friendsSchema = {\n    type: 'object',\n    properties: {\n        total: {\n            type: 'number',\n            minimum: 0,\n            default: 0,\n            faker: 'random.number'\n        },\n        synced: {\n            type: 'number',\n            minimum: 0,\n            default: 0,\n            faker: 'random.number'\n        }\n    },\n    required: ['total', 'synced']\n};\nconst schema = {\n    type: 'object',\n    properties: {\n        id: {\n            type: 'string',\n            format: 'uuid',\n            faker: 'random.uuid'\n        },\n        displayName: {\n            type: 'string',\n            minLength: 0,\n            maxLength: 128,\n            faker: 'name.findName'\n        },\n        email: {\n            type: 'string',\n            faker: 'internet.email'\n        },\n        avatar: {\n            type: 'string',\n            format: 'url',\n            faker: 'image.avatar'\n        },\n        friends: friendsSchema,\n        createdAt: {\n            type: 'string',\n            format: 'date-time'\n        }\n    },\n    required: ['id', 'displayName', 'avatar', 'friends', 'createdAt']\n};\nexports.schema = schema;\nconst ajv = new Ajv({ useDefaults: true });\nconst validator = ajv.compile(schema);\nexports.validator = validator;\n\n\n//# sourceURL=webpack:///../schemas/src/user/index.ts?");

/***/ }),

/***/ "./src/graphql/enums/feed-type.gql":
/*!*****************************************!*\
  !*** ./src/graphql/enums/feed-type.gql ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"EnumTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"FeedType\"},\"directives\":[],\"values\":[{\"kind\":\"EnumValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"DEFAULT\"},\"directives\":[]},{\"kind\":\"EnumValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"OWNED\"},\"directives\":[]},{\"kind\":\"EnumValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"LIKED\"},\"directives\":[]},{\"kind\":\"EnumValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"DISLIKED\"},\"directives\":[]},{\"kind\":\"EnumValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"COMMENTED\"},\"directives\":[]}]}],\"loc\":{\"start\":0,\"end\":66}};\n    doc.loc.source = {\"body\":\"enum FeedType {\\n  DEFAULT\\n  OWNED\\n  LIKED\\n  DISLIKED\\n  COMMENTED\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \n\n      module.exports = doc;\n    \n\n\n//# sourceURL=webpack:///./src/graphql/enums/feed-type.gql?");

/***/ }),

/***/ "./src/graphql/enums/notification-type.gql":
/*!*************************************************!*\
  !*** ./src/graphql/enums/notification-type.gql ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"EnumTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"NotificationType\"},\"directives\":[],\"values\":[{\"kind\":\"EnumValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"LIKED\"},\"directives\":[]},{\"kind\":\"EnumValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"COMMENTED\"},\"directives\":[]}]}],\"loc\":{\"start\":0,\"end\":45}};\n    doc.loc.source = {\"body\":\"enum NotificationType {\\n  LIKED\\n  COMMENTED\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \n\n      module.exports = doc;\n    \n\n\n//# sourceURL=webpack:///./src/graphql/enums/notification-type.gql?");

/***/ }),

/***/ "./src/graphql/enums/reaction-type.gql":
/*!*********************************************!*\
  !*** ./src/graphql/enums/reaction-type.gql ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"EnumTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"ReactionType\"},\"directives\":[],\"values\":[{\"kind\":\"EnumValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"LIKED\"},\"directives\":[]},{\"kind\":\"EnumValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"DISLIKED\"},\"directives\":[]}]}],\"loc\":{\"start\":0,\"end\":40}};\n    doc.loc.source = {\"body\":\"enum ReactionType {\\n  LIKED\\n  DISLIKED\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \n\n      module.exports = doc;\n    \n\n\n//# sourceURL=webpack:///./src/graphql/enums/reaction-type.gql?");

/***/ }),

/***/ "./src/graphql/index.ts":
/*!******************************!*\
  !*** ./src/graphql/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeDefs = __webpack_require__(/*! ./schema.gql */ \"./src/graphql/schema.gql\");\nexports.typeDefs = typeDefs;\nconst resolver_1 = __webpack_require__(/*! ./scalars/resolver */ \"./src/graphql/scalars/resolver.ts\");\nconst resolver_2 = __webpack_require__(/*! ./interfaces/list/resolver */ \"./src/graphql/interfaces/list/resolver.ts\");\nconst resolver_3 = __webpack_require__(/*! ./schemas/query/resolver */ \"./src/graphql/schemas/query/resolver.ts\");\nconst resolver_4 = __webpack_require__(/*! ./schemas/story/resolver */ \"./src/graphql/schemas/story/resolver.ts\");\nconst resolver_5 = __webpack_require__(/*! ./schemas/user/resolver */ \"./src/graphql/schemas/user/resolver.ts\");\nconst resolvers = [\n    resolver_3.default,\n    resolver_1.default,\n    resolver_2.default,\n    resolver_4.default,\n    resolver_5.default\n];\nexports.resolvers = resolvers;\n\n\n//# sourceURL=webpack:///./src/graphql/index.ts?");

/***/ }),

/***/ "./src/graphql/inputs/list.gql":
/*!*************************************!*\
  !*** ./src/graphql/inputs/list.gql ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"InputObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"ListInput\"},\"directives\":[],\"fields\":[{\"kind\":\"InputValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"cursor\"},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]},{\"kind\":\"InputValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"limit\"},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\"}},\"directives\":[]}]}],\"loc\":{\"start\":0,\"end\":49}};\n    doc.loc.source = {\"body\":\"input ListInput {\\n  cursor: String\\n  limit: Int\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \n\n      module.exports = doc;\n    \n\n\n//# sourceURL=webpack:///./src/graphql/inputs/list.gql?");

/***/ }),

/***/ "./src/graphql/interfaces/list/list.gql":
/*!**********************************************!*\
  !*** ./src/graphql/interfaces/list/list.gql ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"InterfaceTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"List\"},\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"cursor\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]}]}],\"loc\":{\"start\":0,\"end\":36}};\n    doc.loc.source = {\"body\":\"interface List {\\n  cursor: String!\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \n\n      module.exports = doc;\n    \n\n\n//# sourceURL=webpack:///./src/graphql/interfaces/list/list.gql?");

/***/ }),

/***/ "./src/graphql/interfaces/list/resolver.ts":
/*!*************************************************!*\
  !*** ./src/graphql/interfaces/list/resolver.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    List: {\n        __resolveType: (data) => {\n            if (data.users)\n                return 'UserList';\n            if (data.stories)\n                return 'StoryList';\n            if (data.notifications)\n                return 'NotificationList';\n        }\n    }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/interfaces/list/resolver.ts?");

/***/ }),

/***/ "./src/graphql/scalars/resolver.ts":
/*!*****************************************!*\
  !*** ./src/graphql/scalars/resolver.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst graphql_iso_date_1 = __webpack_require__(/*! graphql-iso-date */ \"graphql-iso-date\");\nexports.default = {\n    Date: graphql_iso_date_1.GraphQLDateTime\n};\n\n\n//# sourceURL=webpack:///./src/graphql/scalars/resolver.ts?");

/***/ }),

/***/ "./src/graphql/scalars/scalars.gql":
/*!*****************************************!*\
  !*** ./src/graphql/scalars/scalars.gql ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"ScalarTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Date\"},\"directives\":[]}],\"loc\":{\"start\":0,\"end\":11}};\n    doc.loc.source = {\"body\":\"scalar Date\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \n\n      module.exports = doc;\n    \n\n\n//# sourceURL=webpack:///./src/graphql/scalars/scalars.gql?");

/***/ }),

/***/ "./src/graphql/schema.gql":
/*!********************************!*\
  !*** ./src/graphql/schema.gql ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"SchemaDefinition\",\"directives\":[],\"operationTypes\":[{\"kind\":\"OperationTypeDefinition\",\"operation\":\"query\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Query\"}}}]}],\"loc\":{\"start\":0,\"end\":436}};\n    doc.loc.source = {\"body\":\"#import \\\"./scalars/scalars.gql\\\"\\n#import \\\"./schemas/story/story.gql\\\"\\n#import \\\"./schemas/exposed.gql\\\"\\n#import \\\"./schemas/notification.gql\\\"\\n#import \\\"./schemas/photo.gql\\\"\\n#import \\\"./schemas/user/user.gql\\\"\\n#import \\\"./interfaces/list/list.gql\\\"\\n#import \\\"./inputs/list.gql\\\"\\n#import \\\"./enums/feed-type.gql\\\"\\n#import \\\"./enums/notification-type.gql\\\"\\n#import \\\"./enums/reaction-type.gql\\\"\\n#import \\\"./schemas/query/query.gql\\\"\\n\\nschema {\\n  query: Query\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  doc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ./scalars/scalars.gql */ \"./src/graphql/scalars/scalars.gql\").definitions));\ndoc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ./schemas/story/story.gql */ \"./src/graphql/schemas/story/story.gql\").definitions));\ndoc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ./schemas/exposed.gql */ \"./src/graphql/schemas/exposed.gql\").definitions));\ndoc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ./schemas/notification.gql */ \"./src/graphql/schemas/notification.gql\").definitions));\ndoc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ./schemas/photo.gql */ \"./src/graphql/schemas/photo.gql\").definitions));\ndoc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ./schemas/user/user.gql */ \"./src/graphql/schemas/user/user.gql\").definitions));\ndoc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ./interfaces/list/list.gql */ \"./src/graphql/interfaces/list/list.gql\").definitions));\ndoc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ./inputs/list.gql */ \"./src/graphql/inputs/list.gql\").definitions));\ndoc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ./enums/feed-type.gql */ \"./src/graphql/enums/feed-type.gql\").definitions));\ndoc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ./enums/notification-type.gql */ \"./src/graphql/enums/notification-type.gql\").definitions));\ndoc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ./enums/reaction-type.gql */ \"./src/graphql/enums/reaction-type.gql\").definitions));\ndoc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ./schemas/query/query.gql */ \"./src/graphql/schemas/query/query.gql\").definitions));\n\n\n      module.exports = doc;\n    \n\n\n//# sourceURL=webpack:///./src/graphql/schema.gql?");

/***/ }),

/***/ "./src/graphql/schemas/exposed.gql":
/*!*****************************************!*\
  !*** ./src/graphql/schemas/exposed.gql ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Exposed\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"avatar\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"displayName\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]}]}],\"loc\":{\"start\":0,\"end\":57}};\n    doc.loc.source = {\"body\":\"type Exposed {\\n  avatar: String!\\n  displayName: String!\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \n\n      module.exports = doc;\n    \n\n\n//# sourceURL=webpack:///./src/graphql/schemas/exposed.gql?");

/***/ }),

/***/ "./src/graphql/schemas/notification.gql":
/*!**********************************************!*\
  !*** ./src/graphql/schemas/notification.gql ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Notification\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ID\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"url\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"read\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Boolean\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"type\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"NotificationType\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"createdAt\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Date\"}}},\"directives\":[]}]},{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"NotificationList\"},\"interfaces\":[{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"List\"}}],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"cursor\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"notifications\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"ListType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Notification\"}}}},\"directives\":[]}]}],\"loc\":{\"start\":0,\"end\":218}};\n    doc.loc.source = {\"body\":\"type Notification {\\n  id: ID!\\n  text: String!\\n  url: String!\\n  read: Boolean!\\n  type: NotificationType!\\n  createdAt: Date!\\n}\\n\\ntype NotificationList implements List {\\n  cursor: String!\\n  notifications: [Notification]!\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \n\n      module.exports = doc;\n    \n\n\n//# sourceURL=webpack:///./src/graphql/schemas/notification.gql?");

/***/ }),

/***/ "./src/graphql/schemas/photo.gql":
/*!***************************************!*\
  !*** ./src/graphql/schemas/photo.gql ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Photo\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ID\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"url\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"safe\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Boolean\"}}},\"directives\":[]}]}],\"loc\":{\"start\":0,\"end\":56}};\n    doc.loc.source = {\"body\":\"type Photo {\\n  id: ID!\\n  url: String!\\n  safe: Boolean!\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \n\n      module.exports = doc;\n    \n\n\n//# sourceURL=webpack:///./src/graphql/schemas/photo.gql?");

/***/ }),

/***/ "./src/graphql/schemas/query/query.gql":
/*!*********************************************!*\
  !*** ./src/graphql/schemas/query/query.gql ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Query\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"me\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"User\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"feed\"},\"arguments\":[{\"kind\":\"InputValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"query\"},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ListInput\"}},\"directives\":[]},{\"kind\":\"InputValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"type\"},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"FeedType\"}},\"directives\":[]}],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"StoryList\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"story\"},\"arguments\":[{\"kind\":\"InputValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]}],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Story\"}},\"directives\":[]}]}],\"loc\":{\"start\":0,\"end\":107}};\n    doc.loc.source = {\"body\":\"type Query {\\n  me: User!\\n  feed(query: ListInput, type: FeedType): StoryList!\\n  story(id: String!): Story\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \n\n      module.exports = doc;\n    \n\n\n//# sourceURL=webpack:///./src/graphql/schemas/query/query.gql?");

/***/ }),

/***/ "./src/graphql/schemas/query/resolver.ts":
/*!***********************************************!*\
  !*** ./src/graphql/schemas/query/resolver.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst database_1 = __webpack_require__(/*! database */ \"../database/index.ts\");\nconst me = (obj, {}, context) => {\n    const { userId: id } = context;\n    return database_1.database.users.getById({ id });\n};\nconst feed = (obj, { query, type }, context) => {\n    const { userId } = context;\n    return database_1.database.feed.getByUser({\n        userId,\n        query: Object.assign({}, query, { type })\n    });\n};\nconst story = (obj, { id }, context) => {\n    const { userId } = context;\n    return database_1.database.stories.getByIdForUser({\n        id,\n        userId\n    });\n};\nexports.default = {\n    Query: {\n        me,\n        feed,\n        story\n    }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/schemas/query/resolver.ts?");

/***/ }),

/***/ "./src/graphql/schemas/story/resolver.ts":
/*!***********************************************!*\
  !*** ./src/graphql/schemas/story/resolver.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst database_1 = __webpack_require__(/*! database */ \"../database/index.ts\");\nconst reaction = (story, args, context) => {\n    const { userId } = context;\n    const { id } = story;\n    return database_1.database.stories.getUserReaction({\n        userId,\n        id\n    });\n};\nconst comments = (parent, { query }, context) => {\n    const { userId } = context;\n    return database_1.database.comments.getByParentIdForUser({\n        parentId: parent.id,\n        userId,\n        query\n    });\n};\nexports.default = {\n    Story: {\n        reaction,\n        comments\n    }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/schemas/story/resolver.ts?");

/***/ }),

/***/ "./src/graphql/schemas/story/story.gql":
/*!*********************************************!*\
  !*** ./src/graphql/schemas/story/story.gql ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"Story\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ID\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"photos\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"ListType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Photo\"}}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"isOwner\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Boolean\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"reaction\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ReactionType\"}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"likes\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"dislikes\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"comments\"},\"arguments\":[{\"kind\":\"InputValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"query\"},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ListInput\"}},\"directives\":[]}],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"StoryList\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"exposed\"},\"arguments\":[],\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Exposed\"}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"createdAt\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Date\"}}},\"directives\":[]}]},{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"StoryList\"},\"interfaces\":[{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"List\"}}],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"cursor\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"stories\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"ListType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Story\"}}}},\"directives\":[]}]}],\"loc\":{\"start\":0,\"end\":309}};\n    doc.loc.source = {\"body\":\"\\ntype Story {\\n  id: ID!\\n  text: String!\\n  photos: [Photo]!\\n  isOwner: Boolean!\\n  reaction: ReactionType # Resolve\\n  likes: Int!\\n  dislikes: Int!\\n  comments(query: ListInput): StoryList! # Resolve\\n  exposed: Exposed\\n  createdAt: Date!\\n}\\n\\ntype StoryList implements List {\\n  cursor: String!\\n  stories: [Story]!\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \n\n      module.exports = doc;\n    \n\n\n//# sourceURL=webpack:///./src/graphql/schemas/story/story.gql?");

/***/ }),

/***/ "./src/graphql/schemas/user/resolver.ts":
/*!**********************************************!*\
  !*** ./src/graphql/schemas/user/resolver.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst database_1 = __webpack_require__(/*! database */ \"../database/index.ts\");\nconst friends = (obj, args, context) => {\n    return {\n        cursor: '',\n        friends: []\n    };\n};\nconst notifications = (obj, args, context) => {\n    const { userId } = context;\n    return database_1.database.notifictions.getForUser({\n        userId\n    });\n};\nexports.default = {\n    User: {\n        friends,\n        notifications\n    }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/schemas/user/resolver.ts?");

/***/ }),

/***/ "./src/graphql/schemas/user/user.gql":
/*!*******************************************!*\
  !*** ./src/graphql/schemas/user/user.gql ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"User\"},\"interfaces\":[],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ID\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"email\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"displayName\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"avatar\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"friends\"},\"arguments\":[{\"kind\":\"InputValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"query\"},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ListInput\"}},\"directives\":[]}],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"UserList\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"notifications\"},\"arguments\":[{\"kind\":\"InputValueDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"query\"},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ListInput\"}},\"directives\":[]}],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"NotificationList\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"createdAt\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Date\"}}},\"directives\":[]}]},{\"kind\":\"ObjectTypeDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"UserList\"},\"interfaces\":[{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"List\"}}],\"directives\":[],\"fields\":[{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"cursor\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}}},\"directives\":[]},{\"kind\":\"FieldDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"users\"},\"arguments\":[],\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"ListType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"User\"}}}},\"directives\":[]}]}],\"loc\":{\"start\":0,\"end\":281}};\n    doc.loc.source = {\"body\":\"type User {\\n  id: ID!\\n  email: String!\\n  displayName: String!\\n  avatar: String!\\n  friends(query: ListInput): UserList! # Resolve\\n  notifications(query: ListInput): NotificationList! #Resolve\\n  createdAt: Date!\\n}\\n\\ntype UserList implements List {\\n  cursor: String!\\n  users: [User]!\\n}\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \n\n      module.exports = doc;\n    \n\n\n//# sourceURL=webpack:///./src/graphql/schemas/user/user.gql?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express = __webpack_require__(/*! express */ \"express\");\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\nconst graphql_1 = __webpack_require__(/*! ./graphql */ \"./src/graphql/index.ts\");\nconst graphql_tools_1 = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\nconst schema = graphql_tools_1.makeExecutableSchema({\n    typeDefs: graphql_1.typeDefs,\n    resolvers: graphql_1.resolvers\n});\nconst app = express();\napp.use('/graphql', bodyParser.json(), apollo_server_express_1.graphqlExpress({ schema }));\napp.use('/graphiql', apollo_server_express_1.graphiqlExpress({ endpointURL: '/graphql' }));\napp.listen(3000, () => {\n    console.log('Go to http://localhost:3000/graphiql to run queries!');\n});\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ }),

/***/ "ajv":
/*!**********************!*\
  !*** external "ajv" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ajv\");\n\n//# sourceURL=webpack:///external_%22ajv%22?");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");\n\n//# sourceURL=webpack:///external_%22apollo-server-express%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"faker\");\n\n//# sourceURL=webpack:///external_%22faker%22?");

/***/ }),

/***/ "graphql-iso-date":
/*!***********************************!*\
  !*** external "graphql-iso-date" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-iso-date\");\n\n//# sourceURL=webpack:///external_%22graphql-iso-date%22?");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");\n\n//# sourceURL=webpack:///external_%22graphql-tools%22?");

/***/ }),

/***/ "json-schema-faker":
/*!************************************!*\
  !*** external "json-schema-faker" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"json-schema-faker\");\n\n//# sourceURL=webpack:///external_%22json-schema-faker%22?");

/***/ })

/******/ });