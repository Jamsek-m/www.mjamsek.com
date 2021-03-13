import React from "react";
import { Layout, Seo } from "../components";

const NotFoundPage = () => {
    return (
        <Layout>
            <Seo title={"404: Not found"}/>
            <div>
                <h1>404 Error!</h1>
                <p>Requested page not found!</p>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
