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
    CHRegion,
    CHRegionFromJSON,
    CHRegionToJSON,
    ModelApiResponse,
    ModelApiResponseFromJSON,
    ModelApiResponseToJSON,
} from '../models';

export interface CreateRegionRequest {
    cHRegion: CHRegion;
}

export interface DeleteRegionRequest {
    id: string;
}

export interface GetAllRegionsRequest {
    page?: number;
}

export interface GetRegionRequest {
    id: string;
}

export interface UpdateRegionRequest {
    cHRegion: CHRegion;
}


/**
 */
function createRegionRaw<T>(requestParameters: CreateRegionRequest, requestConfig: runtime.TypedQueryConfig<T, ModelApiResponse> = {}): QueryConfig<T> {
    if (requestParameters.cHRegion === null || requestParameters.cHRegion === undefined) {
        throw new runtime.RequiredError('cHRegion','Required parameter requestParameters.cHRegion was null or undefined when calling createRegion.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/region/regions`,
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
        body: queryParameters || CHRegionToJSON(requestParameters.cHRegion),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ModelApiResponseFromJSON(body), text);
    }

    return config;
}

/**
*/
export function createRegion<T>(requestParameters: CreateRegionRequest, requestConfig?: runtime.TypedQueryConfig<T, ModelApiResponse>): QueryConfig<T> {
    return createRegionRaw(requestParameters, requestConfig);
}

/**
 */
function deleteRegionRaw<T>(requestParameters: DeleteRegionRequest, requestConfig: runtime.TypedQueryConfig<T, ModelApiResponse> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteRegion.');
    }

    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.id !== undefined) {
        queryParameters['id'] = requestParameters.id;
    }

    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/region`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'DELETE',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ModelApiResponseFromJSON(body), text);
    }

    return config;
}

/**
*/
export function deleteRegion<T>(requestParameters: DeleteRegionRequest, requestConfig?: runtime.TypedQueryConfig<T, ModelApiResponse>): QueryConfig<T> {
    return deleteRegionRaw(requestParameters, requestConfig);
}

/**
 */
function getAllRegionsRaw<T>(requestParameters: GetAllRegionsRequest, requestConfig: runtime.TypedQueryConfig<T, ModelApiResponse> = {}): QueryConfig<T> {
    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.page !== undefined) {
        queryParameters['page'] = requestParameters.page;
    }

    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/region`,
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ModelApiResponseFromJSON(body), text);
    }

    return config;
}

/**
*/
export function getAllRegions<T>(requestParameters: GetAllRegionsRequest, requestConfig?: runtime.TypedQueryConfig<T, ModelApiResponse>): QueryConfig<T> {
    return getAllRegionsRaw(requestParameters, requestConfig);
}

/**
 */
function getRegionRaw<T>(requestParameters: GetRegionRequest, requestConfig: runtime.TypedQueryConfig<T, ModelApiResponse> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getRegion.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/region/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ModelApiResponseFromJSON(body), text);
    }

    return config;
}

/**
*/
export function getRegion<T>(requestParameters: GetRegionRequest, requestConfig?: runtime.TypedQueryConfig<T, ModelApiResponse>): QueryConfig<T> {
    return getRegionRaw(requestParameters, requestConfig);
}

/**
 */
function getRegionMetaRaw<T>( requestConfig: runtime.TypedQueryConfig<T, ModelApiResponse> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/region/meta`,
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ModelApiResponseFromJSON(body), text);
    }

    return config;
}

/**
*/
export function getRegionMeta<T>( requestConfig?: runtime.TypedQueryConfig<T, ModelApiResponse>): QueryConfig<T> {
    return getRegionMetaRaw( requestConfig);
}

/**
 */
function getRegionMeta2Raw<T>( requestConfig: runtime.TypedQueryConfig<T, ModelApiResponse> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/region/meta2`,
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ModelApiResponseFromJSON(body), text);
    }

    return config;
}

/**
*/
export function getRegionMeta2<T>( requestConfig?: runtime.TypedQueryConfig<T, ModelApiResponse>): QueryConfig<T> {
    return getRegionMeta2Raw( requestConfig);
}

/**
 */
function updateRegionRaw<T>(requestParameters: UpdateRegionRequest, requestConfig: runtime.TypedQueryConfig<T, ModelApiResponse> = {}): QueryConfig<T> {
    if (requestParameters.cHRegion === null || requestParameters.cHRegion === undefined) {
        throw new runtime.RequiredError('cHRegion','Required parameter requestParameters.cHRegion was null or undefined when calling updateRegion.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/region/regions`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'PUT',
            headers: headerParameters,
        },
        body: queryParameters || CHRegionToJSON(requestParameters.cHRegion),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ModelApiResponseFromJSON(body), text);
    }

    return config;
}

/**
*/
export function updateRegion<T>(requestParameters: UpdateRegionRequest, requestConfig?: runtime.TypedQueryConfig<T, ModelApiResponse>): QueryConfig<T> {
    return updateRegionRaw(requestParameters, requestConfig);
}

