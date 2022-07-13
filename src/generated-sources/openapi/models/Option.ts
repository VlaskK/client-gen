// tslint:disable
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Клиент (заказчик проекта)
 * @export
 * @interface Option
 */
export interface Option  {
    /**
     * 
     * @type {string}
     * @memberof Option
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Option
     */
    name?: string;
}

export function OptionFromJSON(json: any): Option {
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function OptionToJSON(value?: Option): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'id': value.id,
        'name': value.name,
    };
}

