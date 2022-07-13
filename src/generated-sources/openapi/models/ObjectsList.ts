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
import {
    Meta,
    MetaFromJSON,
    MetaToJSON,
} from './index';

/**
 * Список
 * @export
 * @interface ObjectsList
 */
export interface ObjectsList  {
    /**
     * 
     * @type {Meta}
     * @memberof ObjectsList
     */
    meta?: Meta;
    /**
     * Результат
     * @type {Array<object>}
     * @memberof ObjectsList
     */
    data?: Array<object>;
}

export function ObjectsListFromJSON(json: any): ObjectsList {
    return {
        'meta': !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function ObjectsListToJSON(value?: ObjectsList): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'meta': MetaToJSON(value.meta),
        'data': value.data,
    };
}

