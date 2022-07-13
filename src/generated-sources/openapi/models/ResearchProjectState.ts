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
    Instant,
    InstantFromJSON,
    InstantToJSON,
} from './index';

/**
 * Этап исследовательского проекта
 * @export
 * @interface ResearchProjectState
 */
export interface ResearchProjectState  {
    /**
     * Идентификатор
     * @type {number}
     * @memberof ResearchProjectState
     */
    id?: number;
    /**
     * Название
     * @type {string}
     * @memberof ResearchProjectState
     */
    name?: string;
    /**
     * Идентификатор этапа в системе \"1Форма\"
     * @type {string}
     * @memberof ResearchProjectState
     */
    externalId?: string;
    /**
     * Порядковый номер
     * @type {number}
     * @memberof ResearchProjectState
     */
    order?: number;
    /**
     * 
     * @type {Instant}
     * @memberof ResearchProjectState
     */
    createdTime?: Instant;
}

export function ResearchProjectStateFromJSON(json: any): ResearchProjectState {
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'externalId': !exists(json, 'externalId') ? undefined : json['externalId'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'createdTime': !exists(json, 'createdTime') ? undefined : InstantFromJSON(json['createdTime']),
    };
}

export function ResearchProjectStateToJSON(value?: ResearchProjectState): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'id': value.id,
        'name': value.name,
        'externalId': value.externalId,
        'order': value.order,
        'createdTime': InstantToJSON(value.createdTime),
    };
}


