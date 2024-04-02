const {
        domain,
        clientId,
        apiUrl,
        clientURL
} = {
        domain: 'dev-p7ozenas0bdmur5e.us.auth0.com',
        clientId: 'RgFyjxxch7hLNl7G0ecWAqjcCl2udQ33',
        apiUrl: 'https://csp-dotnet-be.promactinfo.xyz',
        clientURL: 'https://csp-angular-fe.promactinfo.xyz'

};

export const environment = {
        apiUrl,
        auth: {
                domain,
                clientId,
                authorizationParams: {
                        audience: 'https://dev-p7ozenas0bdmur5e.us.auth0.com/api/v2/',
                        redirect_uri: 'https://csp-angular-fe.promactinfo.xyz/dashboard',
                },
                httpInterceptor: {
                        allowedList: [`${apiUrl}/*`],
                },
        },
        clientURL

};
