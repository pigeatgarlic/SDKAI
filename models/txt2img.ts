export type Txt2ImgData = {
    denoising_strength     ?: number
    firstphase_width       ?: number
    firstphase_height      ?: number
    hr_scale               ?: number
    hr_second_pass_steps   ?: number
    hr_resize_x            ?: number
    hr_resize_y            ?: number
    subseed                ?: number
    subseed_strength       ?: number
    seed_resize_from_h     ?: number
    seed_resize_from_w     ?: number
    batch_size             ?: number
    n_iter                 ?: number
    eta                    ?: number
    s_min_uncond           ?: number
    s_churn                ?: number
    s_tmax                 ?: number
    s_tmin                 ?: number
    s_noise                ?: number

    seed                    : number
    steps                   : number
    cfg_scale               : number
    width                   : number
    height                  : number

    override_settings      ?: any,
    styles                 ?: string[],

    restore_faces                        ?: boolean,
    tiling                               ?: boolean,
    do_not_save_samples                  ?: boolean,
    do_not_save_grid                     ?: boolean,
    override_settings_restore_afterwards ?: boolean,
    send_images                          ?: boolean,
    save_images                          ?: boolean,
    enable_hr                            ?: boolean,

    alwayson_scripts        ?: any
    script_args             ?: string[],

    sampler_index            ?: string
    script_name              ?: string
    hr_upscaler              ?: string
    hr_sampler_name          ?: string
    hr_prompt                ?: string
    hr_negative_prompt       ?: string

    negative_prompt           : string
    sampler_name              : string
    prompt                    : string
}
