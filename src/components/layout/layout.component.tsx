import React, { ReactNode } from "react";
import { Footer, Header } from "..";
import favicon from "../../assets/favicon.ico";
import { Helmet } from "react-helmet";

interface LayoutFooterProps {
    show: boolean;
    contact: boolean;
}

interface LayoutProps {
    children: ReactNode;
    header: boolean;
    footer: boolean | LayoutFooterProps;
    slimFooter: boolean;
}

export const Layout = (props: LayoutProps) => {
    const { children, header, footer, slimFooter } = props;
    
    const enabledFooter = (): boolean => {
        if (typeof footer === "boolean") {
            return footer;
        }
        return footer.show;
    };
    
    const enabledContacts = (): boolean => {
        if (typeof footer === "boolean") {
            return footer;
        }
        return footer.contact;
    }
    
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8"/>
                <meta name="description" content="Miha Jamsek's personal website"/>
                <meta name="keywords"
                    content="Miha,Jamsek,Jamšek,spletna,stran,website,student,programmer,študent,programer"/>
                <meta name="author" content="Miha Jamsek"/>
    
                <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
                <link rel="icon" href={favicon} type="image/x-icon"/>
            </Helmet>
            {header && (
                <Header/>
            )}
            <div>
                <main>{children}</main>
                {}
                {enabledFooter() && (
                    <Footer contact={enabledContacts()} paddingBottom={!slimFooter}/>
                )}
            </div>
        </>
    );
};

Layout.defaultProps = {
    header: true,
    footer: true,
    slimFooter: false,
};

