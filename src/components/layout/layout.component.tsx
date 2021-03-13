import React, { ReactNode } from "react";
import { Footer, Header } from "..";

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

