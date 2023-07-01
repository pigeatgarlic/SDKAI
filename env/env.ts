export class Env {
    constructor(){
        const url       =	Deno.env.get("SUPABASE_URL")
        const anon_key  =	Deno.env.get("SUPABASE_ANON_KEY")

        if (url == null || anon_key == null) 
            throw new Error("missing environment variable")
        

        this.url = url
        this.anon_key = anon_key
    }

    public url :        string 
    public anon_key  :   string 
}


export const ENV = new Env()