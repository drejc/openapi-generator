/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenApiPetstore) {
      root.OpenApiPetstore = {};
    }
    root.OpenApiPetstore.XmlItem = factory(root.OpenApiPetstore.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The XmlItem model module.
   * @module model/XmlItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>XmlItem</code>.
   * @alias module:model/XmlItem
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>XmlItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XmlItem} obj Optional instance to populate.
   * @return {module:model/XmlItem} The populated <code>XmlItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('attribute_string')) {
        obj['attribute_string'] = ApiClient.convertToType(data['attribute_string'], 'String');
      }
      if (data.hasOwnProperty('attribute_number')) {
        obj['attribute_number'] = ApiClient.convertToType(data['attribute_number'], 'Number');
      }
      if (data.hasOwnProperty('attribute_integer')) {
        obj['attribute_integer'] = ApiClient.convertToType(data['attribute_integer'], 'Number');
      }
      if (data.hasOwnProperty('attribute_boolean')) {
        obj['attribute_boolean'] = ApiClient.convertToType(data['attribute_boolean'], 'Boolean');
      }
      if (data.hasOwnProperty('wrapped_array')) {
        obj['wrapped_array'] = ApiClient.convertToType(data['wrapped_array'], ['Number']);
      }
      if (data.hasOwnProperty('name_string')) {
        obj['name_string'] = ApiClient.convertToType(data['name_string'], 'String');
      }
      if (data.hasOwnProperty('name_number')) {
        obj['name_number'] = ApiClient.convertToType(data['name_number'], 'Number');
      }
      if (data.hasOwnProperty('name_integer')) {
        obj['name_integer'] = ApiClient.convertToType(data['name_integer'], 'Number');
      }
      if (data.hasOwnProperty('name_boolean')) {
        obj['name_boolean'] = ApiClient.convertToType(data['name_boolean'], 'Boolean');
      }
      if (data.hasOwnProperty('name_array')) {
        obj['name_array'] = ApiClient.convertToType(data['name_array'], ['Number']);
      }
      if (data.hasOwnProperty('name_wrapped_array')) {
        obj['name_wrapped_array'] = ApiClient.convertToType(data['name_wrapped_array'], ['Number']);
      }
      if (data.hasOwnProperty('prefix_string')) {
        obj['prefix_string'] = ApiClient.convertToType(data['prefix_string'], 'String');
      }
      if (data.hasOwnProperty('prefix_number')) {
        obj['prefix_number'] = ApiClient.convertToType(data['prefix_number'], 'Number');
      }
      if (data.hasOwnProperty('prefix_integer')) {
        obj['prefix_integer'] = ApiClient.convertToType(data['prefix_integer'], 'Number');
      }
      if (data.hasOwnProperty('prefix_boolean')) {
        obj['prefix_boolean'] = ApiClient.convertToType(data['prefix_boolean'], 'Boolean');
      }
      if (data.hasOwnProperty('prefix_array')) {
        obj['prefix_array'] = ApiClient.convertToType(data['prefix_array'], ['Number']);
      }
      if (data.hasOwnProperty('prefix_wrapped_array')) {
        obj['prefix_wrapped_array'] = ApiClient.convertToType(data['prefix_wrapped_array'], ['Number']);
      }
      if (data.hasOwnProperty('namespace_string')) {
        obj['namespace_string'] = ApiClient.convertToType(data['namespace_string'], 'String');
      }
      if (data.hasOwnProperty('namespace_number')) {
        obj['namespace_number'] = ApiClient.convertToType(data['namespace_number'], 'Number');
      }
      if (data.hasOwnProperty('namespace_integer')) {
        obj['namespace_integer'] = ApiClient.convertToType(data['namespace_integer'], 'Number');
      }
      if (data.hasOwnProperty('namespace_boolean')) {
        obj['namespace_boolean'] = ApiClient.convertToType(data['namespace_boolean'], 'Boolean');
      }
      if (data.hasOwnProperty('namespace_array')) {
        obj['namespace_array'] = ApiClient.convertToType(data['namespace_array'], ['Number']);
      }
      if (data.hasOwnProperty('namespace_wrapped_array')) {
        obj['namespace_wrapped_array'] = ApiClient.convertToType(data['namespace_wrapped_array'], ['Number']);
      }
      if (data.hasOwnProperty('prefix_ns_string')) {
        obj['prefix_ns_string'] = ApiClient.convertToType(data['prefix_ns_string'], 'String');
      }
      if (data.hasOwnProperty('prefix_ns_number')) {
        obj['prefix_ns_number'] = ApiClient.convertToType(data['prefix_ns_number'], 'Number');
      }
      if (data.hasOwnProperty('prefix_ns_integer')) {
        obj['prefix_ns_integer'] = ApiClient.convertToType(data['prefix_ns_integer'], 'Number');
      }
      if (data.hasOwnProperty('prefix_ns_boolean')) {
        obj['prefix_ns_boolean'] = ApiClient.convertToType(data['prefix_ns_boolean'], 'Boolean');
      }
      if (data.hasOwnProperty('prefix_ns_array')) {
        obj['prefix_ns_array'] = ApiClient.convertToType(data['prefix_ns_array'], ['Number']);
      }
      if (data.hasOwnProperty('prefix_ns_wrapped_array')) {
        obj['prefix_ns_wrapped_array'] = ApiClient.convertToType(data['prefix_ns_wrapped_array'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {String} attribute_string
   */
  exports.prototype['attribute_string'] = undefined;
  /**
   * @member {Number} attribute_number
   */
  exports.prototype['attribute_number'] = undefined;
  /**
   * @member {Number} attribute_integer
   */
  exports.prototype['attribute_integer'] = undefined;
  /**
   * @member {Boolean} attribute_boolean
   */
  exports.prototype['attribute_boolean'] = undefined;
  /**
   * @member {Array.<Number>} wrapped_array
   */
  exports.prototype['wrapped_array'] = undefined;
  /**
   * @member {String} name_string
   */
  exports.prototype['name_string'] = undefined;
  /**
   * @member {Number} name_number
   */
  exports.prototype['name_number'] = undefined;
  /**
   * @member {Number} name_integer
   */
  exports.prototype['name_integer'] = undefined;
  /**
   * @member {Boolean} name_boolean
   */
  exports.prototype['name_boolean'] = undefined;
  /**
   * @member {Array.<Number>} name_array
   */
  exports.prototype['name_array'] = undefined;
  /**
   * @member {Array.<Number>} name_wrapped_array
   */
  exports.prototype['name_wrapped_array'] = undefined;
  /**
   * @member {String} prefix_string
   */
  exports.prototype['prefix_string'] = undefined;
  /**
   * @member {Number} prefix_number
   */
  exports.prototype['prefix_number'] = undefined;
  /**
   * @member {Number} prefix_integer
   */
  exports.prototype['prefix_integer'] = undefined;
  /**
   * @member {Boolean} prefix_boolean
   */
  exports.prototype['prefix_boolean'] = undefined;
  /**
   * @member {Array.<Number>} prefix_array
   */
  exports.prototype['prefix_array'] = undefined;
  /**
   * @member {Array.<Number>} prefix_wrapped_array
   */
  exports.prototype['prefix_wrapped_array'] = undefined;
  /**
   * @member {String} namespace_string
   */
  exports.prototype['namespace_string'] = undefined;
  /**
   * @member {Number} namespace_number
   */
  exports.prototype['namespace_number'] = undefined;
  /**
   * @member {Number} namespace_integer
   */
  exports.prototype['namespace_integer'] = undefined;
  /**
   * @member {Boolean} namespace_boolean
   */
  exports.prototype['namespace_boolean'] = undefined;
  /**
   * @member {Array.<Number>} namespace_array
   */
  exports.prototype['namespace_array'] = undefined;
  /**
   * @member {Array.<Number>} namespace_wrapped_array
   */
  exports.prototype['namespace_wrapped_array'] = undefined;
  /**
   * @member {String} prefix_ns_string
   */
  exports.prototype['prefix_ns_string'] = undefined;
  /**
   * @member {Number} prefix_ns_number
   */
  exports.prototype['prefix_ns_number'] = undefined;
  /**
   * @member {Number} prefix_ns_integer
   */
  exports.prototype['prefix_ns_integer'] = undefined;
  /**
   * @member {Boolean} prefix_ns_boolean
   */
  exports.prototype['prefix_ns_boolean'] = undefined;
  /**
   * @member {Array.<Number>} prefix_ns_array
   */
  exports.prototype['prefix_ns_array'] = undefined;
  /**
   * @member {Array.<Number>} prefix_ns_wrapped_array
   */
  exports.prototype['prefix_ns_wrapped_array'] = undefined;



  return exports;
}));


