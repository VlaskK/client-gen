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
 * 
 * @export
 * @interface CHRegion
 */
export interface CHRegion  {
    /**
     * 
     * @type {string}
     * @memberof CHRegion
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CHRegion
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CHRegion
     */
    abbr?: string;
    /**
     * 
     * @type {string}
     * @memberof CHRegion
     */
    parent?: string;
}

export function CHRegionFromJSON(json: any): CHRegion {
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'abbr': !exists(json, 'abbr') ? undefined : json['abbr'],
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
    };
}

export function CHRegionToJSON(value?: CHRegion): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'id': value.id,
        'name': value.name,
        'abbr': value.abbr,
        'parent': value.parent,
    };
}

