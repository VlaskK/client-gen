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
    ProjectChoice,
    ProjectChoiceFromJSON,
    ProjectChoiceToJSON,
    ProjectTableRow,
    ProjectTableRowFromJSON,
    ProjectTableRowToJSON,
} from './index';

/**
 * Вопрос проекта анкеты
 * @export
 * @interface ProjectQuestion
 */
export interface ProjectQuestion  {
    /**
     * Уникальный идентификатор
     * @type {string}
     * @memberof ProjectQuestion
     */
    id?: string;
    /**
     * Название вопроса проекта анкеты
     * @type {string}
     * @memberof ProjectQuestion
     */
    name?: string;
    /**
     * Комментарий
     * @type {string}
     * @memberof ProjectQuestion
     */
    comment?: string;
    /**
     * tableRows
     * @type {Array<ProjectTableRow>}
     * @memberof ProjectQuestion
     */
    tableRows?: Array<ProjectTableRow>;
    /**
     * Варианты ответа
     * @type {Array<ProjectChoice>}
     * @memberof ProjectQuestion
     */
    choices?: Array<ProjectChoice>;
    /**
     * Spss-префикс
     * @type {string}
     * @memberof ProjectQuestion
     */
    spssPrefix?: string;
    /**
     * Название приложенного файла
     * @type {string}
     * @memberof ProjectQuestion
     */
    media?: string;
    /**
     * Тип вопроса проекта анкеты
     * @type {string}
     * @memberof ProjectQuestion
     */
    type?: ProjectQuestionTypeEnum;
    /**
     * Максимальное количество вариантов ответов
     * @type {number}
     * @memberof ProjectQuestion
     */
    maxChoiceCount?: number;
    /**
     * Формат открытого вопроса
     * @type {string}
     * @memberof ProjectQuestion
     */
    openAnswerFormat?: string;
    /**
     * Минимальное значение
     * @type {string}
     * @memberof ProjectQuestion
     */
    minValue?: string;
    /**
     * Максимальное значение
     * @type {string}
     * @memberof ProjectQuestion
     */
    maxValue?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectQuestion
     */
    maxSumValue?: string;
    /**
     * Инструкция для интервьюера
     * @type {string}
     * @memberof ProjectQuestion
     */
    hide?: string;
    /**
     * Следующий вопрос
     * @type {string}
     * @memberof ProjectQuestion
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectQuestion
     */
    mapping?: string;
    /**
     * 
     * @type {number}
     * @memberof ProjectQuestion
     */
    rotateChoicesFrom?: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectQuestion
     */
    rotateChoicesTo?: number;
    /**
     * Флаги проекта вопроса
     * @type {Array<string>}
     * @memberof ProjectQuestion
     */
    flags?: Array<ProjectQuestionFlagsEnum>;
}

export function ProjectQuestionFromJSON(json: any): ProjectQuestion {
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'tableRows': !exists(json, 'tableRows') ? undefined : (json['tableRows'] as Array<any>).map(ProjectTableRowFromJSON),
        'choices': !exists(json, 'choices') ? undefined : (json['choices'] as Array<any>).map(ProjectChoiceFromJSON),
        'spssPrefix': !exists(json, 'spssPrefix') ? undefined : json['spssPrefix'],
        'media': !exists(json, 'media') ? undefined : json['media'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'maxChoiceCount': !exists(json, 'maxChoiceCount') ? undefined : json['maxChoiceCount'],
        'openAnswerFormat': !exists(json, 'openAnswerFormat') ? undefined : json['openAnswerFormat'],
        'minValue': !exists(json, 'minValue') ? undefined : json['minValue'],
        'maxValue': !exists(json, 'maxValue') ? undefined : json['maxValue'],
        'maxSumValue': !exists(json, 'maxSumValue') ? undefined : json['maxSumValue'],
        'hide': !exists(json, 'hide') ? undefined : json['hide'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'mapping': !exists(json, 'mapping') ? undefined : json['mapping'],
        'rotateChoicesFrom': !exists(json, 'rotateChoicesFrom') ? undefined : json['rotateChoicesFrom'],
        'rotateChoicesTo': !exists(json, 'rotateChoicesTo') ? undefined : json['rotateChoicesTo'],
        'flags': !exists(json, 'flags') ? undefined : json['flags'],
    };
}

export function ProjectQuestionToJSON(value?: ProjectQuestion): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'id': value.id,
        'name': value.name,
        'comment': value.comment,
        'tableRows': value.tableRows === undefined ? undefined : (value.tableRows as Array<any>).map(ProjectTableRowToJSON),
        'choices': value.choices === undefined ? undefined : (value.choices as Array<any>).map(ProjectChoiceToJSON),
        'spssPrefix': value.spssPrefix,
        'media': value.media,
        'type': value.type,
        'maxChoiceCount': value.maxChoiceCount,
        'openAnswerFormat': value.openAnswerFormat,
        'minValue': value.minValue,
        'maxValue': value.maxValue,
        'maxSumValue': value.maxSumValue,
        'hide': value.hide,
        'next': value.next,
        'mapping': value.mapping,
        'rotateChoicesFrom': value.rotateChoicesFrom,
        'rotateChoicesTo': value.rotateChoicesTo,
        'flags': value.flags,
    };
}

/**
* @export
* @enum {string}
*/
export enum ProjectQuestionTypeEnum {
    Info = 'INFO',
    Open = 'OPEN',
    Closed = 'CLOSED'
}
/**
* @export
* @enum {string}
*/
export enum ProjectQuestionFlagsEnum {
    Skippable = 'SKIPPABLE',
    RotateChoices = 'ROTATE_CHOICES',
    RotateTableRows = 'ROTATE_TABLE_ROWS',
    Scale = 'SCALE',
    AbTesting = 'AB_TESTING',
    Rank = 'RANK',
    NotReadable = 'NOT_READABLE'
}


