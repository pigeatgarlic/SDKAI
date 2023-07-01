import { ENV, Env } from "./env/env.ts";
import { Txt2ImgData } from "./models/txt2img.ts";
import { ANON } from "./supabase/supabase.ts";

type ModelData = {
    type : 'txt2img'
    data: Txt2ImgData
} 
type ModelResult = {
} 

class ThinkmAI {
    env : Env = ENV;
    constructor() {
    }

    public async Inference(data: ModelData) : Promise<Error|ModelResult>{
        const insertion = await ANON
            .from("jobs")
            .insert({
                type : data.type,
                data : 
                    data.type == 'txt2img'
                    ? data.data
                    : {}
            })
            .select("id")
        if (insertion.error) 
            return new Error(insertion.error.message)
            
        const start = new Date().getTime()
        while (new Date().getTime() - start < 3 * 60 * 1000) {
            const state = await ANON
                .rpc("job_state",{
                    id: insertion.data.at(0)?.id
                })
            if (state.error) 
                return new Error(state.error.message)
            
            switch (state.data as string) {
                case 'DONE': {
                    const {data,error} = await ANON
                        .from("jobs")
                        .select("result")
                        .eq("id",insertion.data.at(0)?.id)
                    if (error) 
                        return new Error(error.message)
                    else
                        return data.at(0)?.result
                } 
                case 'FAILED': {
                    const {data,error} = await ANON
                        .from("jobs")
                        .select("result")
                        .eq("id",insertion.data.at(0)?.id)
                    if (error) 
                        return new Error(error.message)
                    else
                        return new Error(data.at(0)?.result)
                }
                case 'RUNNING':
                case 'QUEUED':
                    await new Promise(r => setTimeout(r, 1000));    
                    continue
            }
        }

        return new Error(`request timeout`)
    }
}



export const THINKMAI = new ThinkmAI()