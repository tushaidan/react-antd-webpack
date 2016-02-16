import $ from 'jquery';

export default function(url, type = "GET", params, is_mock = false) {
    if (type == "POST" || type == "PUT")
        params = JSON.stringify(params || {})

    let deferred = $.Deferred()
    let setup = {
        type: type,
        url: url,
        data: params,
        contentType: "application/json; charset=UTF-8",
        dataType: 'json',
        success: deferred.resolve,
        error: deferred.reject
    }

    if (localStorage['yydvy_token']) {
        Object.assign(setup, {
            headers: {
                "Authorization": "Token " + localStorage['yydvy_token']
            }
        })
    }

    $.ajax(setup)
    return deferred.promise()

    // return new Promise((resolve, reject) => {
    //     let setup = {
    //         type: type,
    //         url: parse_url(url, is_mock),
    //         data: params,
    //         contentType: "application/json; charset=UTF-8",
    //         dataType: 'json',
    //         success: resolve,
    //         error: reject
    //     }
    //
    //     if (localStorage['yydvy_token']) {
    //         Object.assign(setup, {
    //             headers: {
    //                 "Authorization": "Token " + localStorage['yydvy_token']
    //             }
    //         })
    //     }
    //
    //     $.ajax(setup)
    // })
}
