import { supabase } from "../../../lib/supabase";
import type { APIRoute } from "astro";

export const prerender = false;


export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const title = formData.get('title');
    const eventdate = formData.get('eventdate');
    const eventstart = formData.get('eventstart');
    const eventend = formData.get('eventend');
    const descheader = formData.get('descheader');
    const description = formData.get('description');
    const { error } = await supabase.from('events').insert([
        {
            title: title,
            eventdate: eventdate,
            eventstart: eventstart,
            eventend: eventend,
            descheader: descheader,
            description: description
         },
    ]).select();
    if (error) {
        return new Response(error.message, { status: 500 });
    }
    
    return redirect('/dashboard');
};