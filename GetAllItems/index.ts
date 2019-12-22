import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, inputTable: any): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    var items: any = [];

    for( var i=0; i<inputTable.length; ++i) {
        var item: any = {};

        item.city = inputTable[i].City;
        item.country = inputTable[i].Country;
        item.image = inputTable[i].Image;

        items.push(item);

    }

    context.res = {
        status: 200,
        body: items
    }
    
};

export default httpTrigger;

// const name = (req.query.name || (req.body && req.body.name));

//     if (name) {
//         context.res = {
//             // status: 200, /* Defaults to 200 */
//             body: "Hello " + (req.query.name || req.body.name)
//         };
//     }
//     else {
//         context.res = {
//             status: 400,
//             body: "Please pass a name on the query string or in the request body"
//         };
//     }