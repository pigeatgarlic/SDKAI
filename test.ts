import { THINKMAI } from "./class.ts";


const job_count = 3

const start = new Date().getTime()
const multiple : Promise<any>[] = []
for (let index = 0; index < 3; index++) {
    const job = THINKMAI.Inference({
        type: 'txt2img',
        data: {
            prompt:           "how the earth look like from moon",
            steps:            10,
            negative_prompt:  "",
            sampler_name:     "Euler a",
            cfg_scale:        7,
            seed:             index * 10,
            width:            512,
            height:           512
        }
    })

    multiple.push(job)
}

const result = await Promise.all(multiple)
console.log(JSON.stringify(result))
const done = new Date().getTime()

console.log(`query finished in ${(done - start) / 1000} seconds`)
Deno.exit(0)