
// // Import the Supabase client
import supabase from "../constants/supabaseClient";

export const loginUser = async({email,password}) => {
    try {
        
        const response = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if(response.error) {
            await supabase.auth.signOut();
        }
        // The JWT token is available in the session object
        return response;
    } catch (error) {
        await supabase.auth.signOut();
        return {error:'Please try again later'};
    }
}

export const signUpUser = async({email,password,data}) => {
    const response = await supabase.auth.signUp(
        {
          email:email,
          password:password,
          options: {data}
        }
      );
      console.log(response)
      return response;
}

export const signOut = async() => {
    return await supabase.auth.signOut();
}


// export default {loginUser};