import { supabase } from "../../../lib/supabase";
import type { APIRoute } from "astro";

export const prerender = false;



export const POST: APIRoute = async ({ cookies, request, redirect }) => {
    const formData = await request.formData();
    const title = formData.get('title')?.toString();
    console.log(title)
    const { error } = await supabase.from('events').insert([
        { title: title },
    ]).select();
    if (error) {
        return new Response(error.message, { status: 500 });
    }
    
    return redirect('/dashboard');
};