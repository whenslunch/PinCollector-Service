import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function GetThumbnail request.');

    const returnFile: any = context.bindings.inputBlob;

    if (returnFile != null){
        context.res = {
            status: 200,
            body: returnFile
        }
    } else {
        context.res = {
            status: 400,
            body: "Filename: " + context.req.params.filename + " not found."
        }
    }
};

export default httpTrigger;