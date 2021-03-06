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
    FolderPermission,
    FolderPermissionFromJSON,
    FolderPermissionToJSON,
    Instant,
    InstantFromJSON,
    InstantToJSON,
    ProjectShort,
    ProjectShortFromJSON,
    ProjectShortToJSON,
} from './index';

/**
 * Папка
 * @export
 * @interface Folder
 */
export interface Folder  {
    /**
     * Уникальный идентификатор
     * @type {string}
     * @memberof Folder
     */
    id: string;
    /**
     * Название
     * @type {string}
     * @memberof Folder
     */
    name: string;
    /**
     * Дочерние папки
     * @type {Array<Folder>}
     * @memberof Folder
     */
    folders?: Array<Folder>;
    /**
     * Доступ к папке
     * @type {Array<FolderPermission>}
     * @memberof Folder
     */
    acl?: Array<FolderPermission>;
    /**
     * Общая папка
     * @type {boolean}
     * @memberof Folder
     */
    shared: boolean;
    /**
     * Проекты анкет
     * @type {Array<ProjectShort>}
     * @memberof Folder
     */
    projects?: Array<ProjectShort>;
    /**
     * Идентификатор родительской папки
     * @type {string}
     * @memberof Folder
     */
    parent?: string;
    /**
     * 
     * @type {Instant}
     * @memberof Folder
     */
    createdTime: Instant;
}

export function FolderFromJSON(json: any): Folder {
    return {
        'id': json['id'],
        'name': json['name'],
        'folders': !exists(json, 'folders') ? undefined : (json['folders'] as Array<any>).map(FolderFromJSON),
        'acl': !exists(json, 'acl') ? undefined : (json['acl'] as Array<any>).map(FolderPermissionFromJSON),
        'shared': json['shared'],
        'projects': !exists(json, 'projects') ? undefined : (json['projects'] as Array<any>).map(ProjectShortFromJSON),
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'createdTime': InstantFromJSON(json['createdTime']),
    };
}

export function FolderToJSON(value?: Folder): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'id': value.id,
        'name': value.name,
        'folders': value.folders === undefined ? undefined : (value.folders as Array<any>).map(FolderToJSON),
        'acl': value.acl === undefined ? undefined : (value.acl as Array<any>).map(FolderPermissionToJSON),
        'shared': value.shared,
        'projects': value.projects === undefined ? undefined : (value.projects as Array<any>).map(ProjectShortToJSON),
        'parent': value.parent,
        'createdTime': InstantToJSON(value.createdTime),
    };
}


