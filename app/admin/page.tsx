export const runtime = 'nodejs'; // Add this to the top of your file

import { isAdmin } from "@/lib/admin";

import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const App = dynamic(() => import("./app"), { ssr: false });

const AdminPage = () => {

    if (!isAdmin()) {
        redirect("/");
    };

    return (
        <App />
    );
};

export default AdminPage;