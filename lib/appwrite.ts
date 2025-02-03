
// import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";
// import * as Linking from "expo-linking";


// export const config = {
//     platform: "com.abhidiva.reState",
//     endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
//     projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID
// } 

// export const client = new Client();

//  client
//      .setEndpoint(config.endpoint!)
//      .setProject(config.projectId!)
//      .setPlatform(config.platform!)

    
// export const avatar = new Avatars(client);
// export const account = new Account(client);

// // export async function login(){
// //     try{
// //          const redirectUri = Linking.createURL('/');
// //          const response = account.createOAuth2Token(OAuthProvider.Google, redirectUri);

// //          if(!response) throw new Error("Login Failed");
        
// //          const browerResult = await openAuthSessionAsync(response.toString(), redirectUri);

// //          if(browerResult.type !== "success") throw new Error("Login Failed");

// //         const url = new URL(browerResult.url);
// //         const secret = url.searchParams.get("secret")?.toString();
// //         const userId = url.searchParams.get("userId")?.toString();

// //         if(!secret || !userId) throw new Error("Login Failed");

// //         const session = await account.createSession(userId, secret);

// //         if(!session) throw new Error("Login Failed");
     
// //         return session;

// //     }catch(error){
// //         console.error(error);
// //         return false;
// //     }
// // }


// export async function logout(){
     
// }


// // function openAuthSessionAsync(arg0: string, redirectUri: string) {
// //     throw new Error("Function not implemented.");
// // }
