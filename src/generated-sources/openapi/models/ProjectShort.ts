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
 * Проект анкеты
 * @export
 * @interface ProjectShort
 */
export interface ProjectShort  {
    /**
     * Уникальный идентификатор
     * @type {string}
     * @memberof ProjectShort
     */
    id: string;
    /**
     * Название
     * @type {string}
     * @memberof ProjectShort
     */
    name: string;
    /**
     * Идентификатор папки
     * @type {string}
     * @memberof ProjectShort
     */
    folderId?: string;
    /**
     * Только чтение
     * @type {boolean}
     * @memberof ProjectShort
     */
    readOnly: boolean;
    /**
     * Подтверждено
     * @type {boolean}
     * @memberof ProjectShort
     */
    approved: boolean;
    /**
     * Автор
     * @type {string}
     * @memberof ProjectShort
     */
    author: string;
    /**
     * 
     * @type {Instant}
     * @memberof ProjectShort
     */
    modifiedTime: Instant;
    /**
     * 
     * @type {Instant}
     * @memberof ProjectShort
     */
    createdTime: Instant;
}

export function ProjectShortFromJSON(json: any): ProjectShort {
    return {
        'id': json['id'],
        'name': json['name'],
        'folderId': !exists(json, 'folderId') ? undefined : json['folderId'],
        'readOnly': json['readOnly'],
        'approved': json['approved'],
        'author': json['author'],
        'modifiedTime': InstantFromJSON(json['modifiedTime']),
        'createdTime': InstantFromJSON(json['createdTime']),
    };
}

export function ProjectShortToJSON(value?: ProjectShort): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'id': value.id,
        'name': value.name,
        'folderId': value.folderId,
        'readOnly': value.readOnly,
        'approved': value.approved,
        'author': value.author,
        'modifiedTime': InstantToJSON(value.modifiedTime),
        'createdTime': InstantToJSON(value.createdTime),
    };
}


