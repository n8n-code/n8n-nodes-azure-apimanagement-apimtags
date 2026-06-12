import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApimanagementApimtags implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Apimanagement Apimtags',
                name: 'N8nDevAzureApimanagementApimtags',
                icon: { light: 'file:./azure-apimanagement-apimtags.png', dark: 'file:./azure-apimanagement-apimtags.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Use REST APIs to manage Tags in Azure API Management. Assign Tags to APIs, Operations, and Products.',
                defaults: { name: 'Azure Apimanagement Apimtags' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApimanagementApimtagsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
