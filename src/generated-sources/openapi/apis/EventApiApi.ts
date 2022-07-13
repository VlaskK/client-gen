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
    Event,
    EventFromJSON,
    EventToJSON,
} from '../models';

export interface GetEventsRequest {
    start?: number;
    pageSize?: number;
}


/**
 * Получение событий
 */
function getEventsRaw<T>(requestParameters: GetEventsRequest, requestConfig: runtime.TypedQueryConfig<T, Event> = {}): QueryConfig<T> {
    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.start !== undefined) {
        queryParameters['start'] = requestParameters.start;
    }


    if (requestParameters.pageSize !== undefined) {
        queryParameters['pageSize'] = requestParameters.pageSize;
    }

    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/event`,
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(EventFromJSON(body), text);
    }

    return config;
}

/**
* Получение событий
*/
export function getEvents<T>(requestParameters: GetEventsRequest, requestConfig?: runtime.TypedQueryConfig<T, Event>): QueryConfig<T> {
    return getEventsRaw(requestParameters, requestConfig);
}
