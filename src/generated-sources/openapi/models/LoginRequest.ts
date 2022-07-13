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
 * Запрос на авторизацию (логин и пароль)
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest  {
    /**
     * Имя пользователя
     * @type {string}
     * @memberof LoginRequest
     */
    username?: string;
    /**
     * Пароль
     * @type {string}
     * @memberof LoginRequest
     */
    password?: string;
}

export function LoginRequestFromJSON(json: any): LoginRequest {
    return {
        'username': !exists(json, 'username') ? undefined : json['username'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function LoginRequestToJSON(value?: LoginRequest): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'username': value.username,
        'password': value.password,
    };
}

