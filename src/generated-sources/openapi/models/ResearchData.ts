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
    Department,
    DepartmentFromJSON,
    DepartmentToJSON,
    DictionaryItem,
    DictionaryItemFromJSON,
    DictionaryItemToJSON,
    FileImport,
    FileImportFromJSON,
    FileImportToJSON,
    Instant,
    InstantFromJSON,
    InstantToJSON,
    LocalDate,
    LocalDateFromJSON,
    LocalDateToJSON,
    Question,
    QuestionFromJSON,
    QuestionToJSON,
    Region,
    RegionFromJSON,
    RegionToJSON,
} from './index';

/**
 * Результат исследования
 * @export
 * @interface ResearchData
 */
export interface ResearchData  {
    /**
     * Уникальный идентификатор
     * @type {string}
     * @memberof ResearchData
     */
    id: string;
    /**
     * 
     * @type {Department}
     * @memberof ResearchData
     */
    department?: Department;
    /**
     * Идентификатор анкеты
     * @type {string}
     * @memberof ResearchData
     */
    formId?: string;
    /**
     * 
     * @type {DictionaryItem}
     * @memberof ResearchData
     */
    researchMethod?: DictionaryItem;
    /**
     * 
     * @type {FileImport}
     * @memberof ResearchData
     */
    fileImport?: FileImport;
    /**
     * Регионы
     * @type {Array<Region>}
     * @memberof ResearchData
     */
    regions?: Array<Region>;
    /**
     * Вопросы
     * @type {Array<Question>}
     * @memberof ResearchData
     */
    questions?: Array<Question>;
    /**
     * Количество респондентов
     * @type {number}
     * @memberof ResearchData
     */
    respondentsCount?: number;
    /**
     * Объем выборки
     * @type {number}
     * @memberof ResearchData
     */
    sampleSize?: number;
    /**
     * Количество дней опроса
     * @type {number}
     * @memberof ResearchData
     */
    researchDays?: number;
    /**
     * Количество вопросов
     * @type {number}
     * @memberof ResearchData
     */
    questionsCount?: number;
    /**
     * 
     * @type {LocalDate}
     * @memberof ResearchData
     */
    conductedDate?: LocalDate;
    /**
     * 
     * @type {LocalDate}
     * @memberof ResearchData
     */
    archivedDate?: LocalDate;
    /**
     * 
     * @type {Instant}
     * @memberof ResearchData
     */
    createdTime: Instant;
}

export function ResearchDataFromJSON(json: any): ResearchData {
    return {
        'id': json['id'],
        'department': !exists(json, 'department') ? undefined : DepartmentFromJSON(json['department']),
        'formId': !exists(json, 'formId') ? undefined : json['formId'],
        'researchMethod': !exists(json, 'researchMethod') ? undefined : DictionaryItemFromJSON(json['researchMethod']),
        'fileImport': !exists(json, 'fileImport') ? undefined : FileImportFromJSON(json['fileImport']),
        'regions': !exists(json, 'regions') ? undefined : (json['regions'] as Array<any>).map(RegionFromJSON),
        'questions': !exists(json, 'questions') ? undefined : (json['questions'] as Array<any>).map(QuestionFromJSON),
        'respondentsCount': !exists(json, 'respondentsCount') ? undefined : json['respondentsCount'],
        'sampleSize': !exists(json, 'sampleSize') ? undefined : json['sampleSize'],
        'researchDays': !exists(json, 'researchDays') ? undefined : json['researchDays'],
        'questionsCount': !exists(json, 'questionsCount') ? undefined : json['questionsCount'],
        'conductedDate': !exists(json, 'conductedDate') ? undefined : LocalDateFromJSON(json['conductedDate']),
        'archivedDate': !exists(json, 'archivedDate') ? undefined : LocalDateFromJSON(json['archivedDate']),
        'createdTime': InstantFromJSON(json['createdTime']),
    };
}

export function ResearchDataToJSON(value?: ResearchData): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'id': value.id,
        'department': DepartmentToJSON(value.department),
        'formId': value.formId,
        'researchMethod': DictionaryItemToJSON(value.researchMethod),
        'fileImport': FileImportToJSON(value.fileImport),
        'regions': value.regions === undefined ? undefined : (value.regions as Array<any>).map(RegionToJSON),
        'questions': value.questions === undefined ? undefined : (value.questions as Array<any>).map(QuestionToJSON),
        'respondentsCount': value.respondentsCount,
        'sampleSize': value.sampleSize,
        'researchDays': value.researchDays,
        'questionsCount': value.questionsCount,
        'conductedDate': LocalDateToJSON(value.conductedDate),
        'archivedDate': LocalDateToJSON(value.archivedDate),
        'createdTime': InstantToJSON(value.createdTime),
    };
}

