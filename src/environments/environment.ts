// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false, 
  // usersApiUrl: 'http://0.0.0.0:8882/api/Users'
  
  usersApiUrl: 'http://192.241.227.72:8882/api/Users',
  authApiUrl: 'http://192.241.227.72:8882/api/Authentication',
  messageboardApiUrl: 'http://0.0.0.0:8883/messageboard'
};
