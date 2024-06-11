import { AppState, Auth0Provider, User, useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
}

export default function Auth0ProviderWithNavigate({ children }: Props){
    const { getAccessTokenSilently } = useAuth0();
    const navigate = useNavigate();
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URI;

    if (!domain || !clientId || !redirectUri) {
        throw new Error("unable to initialize auth");
    };

    const onRedirectCallback = async (appState?: AppState, user?: User) => {
        const token = await getAccessTokenSilently();
        navigate("/auth-callback");
        console.log("token", token);
        
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}