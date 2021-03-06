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


import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../runtime';
import {
    LoginRequest,
    LoginRequestFromJSON,
    LoginRequestToJSON,
    MercuryUserDetails,
    MercuryUserDetailsFromJSON,
    MercuryUserDetailsToJSON,
    UpdateSidRequest,
    UpdateSidRequestFromJSON,
    UpdateSidRequestToJSON,
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface LoginRequest {
    loginRequest: LoginRequest
}

export interface UpdateSidWithCredentialsRequest {
    updateSidRequest: UpdateSidRequest;
}


/**
 * Информация о текущем пользователе
 */
function getUserRaw<T>( requestConfig: runtime.TypedQueryConfig<T, MercuryUserDetails> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/user`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(MercuryUserDetailsFromJSON(body), text);
    }

    return config;
}

/**
* Информация о текущем пользователе
*/
export function getUser<T>( requestConfig?: runtime.TypedQueryConfig<T, MercuryUserDetails>): QueryConfig<T> {
    return getUserRaw( requestConfig);
}

/**
 * Авторизация
 */
function loginRaw<T>(requestParameters: LoginRequest, requestConfig: runtime.TypedQueryConfig<T, User> = {}): QueryConfig<T> {
    if (requestParameters.loginRequest === null || requestParameters.loginRequest === undefined) {
        throw new runtime.RequiredError('loginRequest','Required parameter requestParameters.loginRequest was null or undefined when calling login.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/user/login`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || LoginRequestToJSON(requestParameters.loginRequest),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(UserFromJSON(body), text);
    }

    return config;
}

/**
* Авторизация
*/
export function login<T>(requestParameters: LoginRequest, requestConfig?: runtime.TypedQueryConfig<T, User>): QueryConfig<T> {
    return loginRaw(requestParameters, requestConfig);
}

/**
 */
function updateSidWithCredentialsRaw<T>(requestParameters: UpdateSidWithCredentialsRequest, requestConfig: runtime.TypedQueryConfig<T, object> = {}): QueryConfig<T> {
    if (requestParameters.updateSidRequest === null || requestParameters.updateSidRequest === undefined) {
        throw new runtime.RequiredError('updateSidRequest','Required parameter requestParameters.updateSidRequest was null or undefined when calling updateSidWithCredentials.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/user/updateSid`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || UpdateSidRequestToJSON(requestParameters.updateSidRequest),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
*/
export function updateSidWithCredentials<T>(requestParameters: UpdateSidWithCredentialsRequest, requestConfig?: runtime.TypedQueryConfig<T, object>): QueryConfig<T> {
    return updateSidWithCredentialsRaw(requestParameters, requestConfig);
}

