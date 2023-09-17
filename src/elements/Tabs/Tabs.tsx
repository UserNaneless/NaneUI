import { useState, useEffect } from "react";
import Children from 'react-children-utilities';

import styles from "./tabs.module.sass"
import TabHeader from "./TabHeader";

type TabsProps = {
    children?: React.ReactNode
}

export default function Tabs({ children }: TabsProps) {

    const [tabs, setTabs] = useState(Children.toArray(children));
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        setTabs(Children.toArray(children));
    }, [children])

    return (
        <div className={styles.tabs_wrapper}>
            <div className={styles.tabs_headers}>
                {
                    tabs.map((item, i) => {
                        return <TabHeader key={i} onClick={() => {
                            setActiveTab(i);
                        }} active={i === activeTab}>
                            {Children.onlyText((item as React.ReactElement).props.children[0])}
                        </TabHeader>
                    })
                }
            </div>
            <div className={styles.tabs_content}>
                {(tabs[activeTab] as React.ReactElement).props.children[1]}
            </div>
        </div>
    )
}
