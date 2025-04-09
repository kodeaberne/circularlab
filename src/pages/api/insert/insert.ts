import { supabase } from "../../../lib/supabase";
import type { APIRoute } from "astro";

export const prerender = false;


export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const title = formData.get('title');
    const eventtype = formData.get('eventtype');
    const eventdate = formData.get('eventdate');
    const eventstart = formData.get('eventstart');
    const eventend = formData.get('eventend');
    const descheader = formData.get('descheader');
    const description = formData.get('description');
    const imglink = formData.get('imglink')
    const ticketlink = formData.get('ticketlink')
    const { error } = await supabase.from('events').insert([
        {
            title: title,
            eventtype: eventtype,
            eventdate: eventdate,
            eventstart: eventstart,
            eventend: eventend,
            descheader: descheader,
            description: description,
            imglink: imglink,
            ticketlink: ticketlink
         },
    ]).select();
    if (error) {
        return new Response(error.message, { status: 500 });
    }
    
    return redirect('/dashboard');
};