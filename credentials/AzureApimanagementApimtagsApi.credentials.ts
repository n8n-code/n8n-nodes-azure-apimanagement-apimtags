import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApimanagementApimtagsApi implements ICredentialType {
        name = 'N8nDevAzureApimanagementApimtagsApi';

        displayName = 'Azure Apimanagement Apimtags API';

        icon: Icon = { light: 'file:../nodes/AzureApimanagementApimtags/azure-apimanagement-apimtags.png', dark: 'file:../nodes/AzureApimanagementApimtags/azure-apimanagement-apimtags.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Apimanagement Apimtags API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
