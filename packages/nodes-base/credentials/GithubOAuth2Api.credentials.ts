import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';


export class GithubOAuth2Api implements ICredentialType {
	name = 'githubOAuth2Api';
	extends = [
		'oAuth2Api',
	];
	displayName = 'Github OAuth2 API';
	properties = [
		{
			displayName: 'Github Server',
			name: 'server',
			type: 'string' as NodePropertyTypes,
			default: 'https://api.github.com',
			description: 'The server to connect to. Does only have to get changed if Github Enterprise gets used.',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden' as NodePropertyTypes,
			default: 'https://github.com/login/oauth/authorize',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden' as NodePropertyTypes,
			default: 'https://github.com/login/oauth/access_token',
			required: true,
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden' as NodePropertyTypes,
			default: 'repo,admin:repo_hook,admin:org,admin:org_hook,gist,notifications,user,write:packages,read:packages,delete:packages,worfklow',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden' as NodePropertyTypes,
			default: 'header',
		},
	];
}
