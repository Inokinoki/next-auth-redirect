'use server'

import { auth } from "@/auth";
 

export async function create() {
    // Fake a server action
    const session = await auth();
    console.log("Server action called", session);
}
