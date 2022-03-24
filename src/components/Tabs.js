import { useState } from "react"
import { TabContent } from "./TabContent"
import { TabItem } from "./TabItem"

const TABS_DATA = [
    {
        key: "tab1",
        title: "Tab 1",
        isActive: false,
        content: "Content 1"
    },
    {
        key: "tab2",
        title: "Tab 2",
        isActive: false,
        content: "Content 2"
    },
    {
        key: "tab3",
        title: "Tab 3",
        isActive: true,
        content: "Content 3"
    }
]


export const Tabs = () => {

    const [tabs, setTabs] = useState(TABS_DATA)

    const handleTabClick = (key) => {
        const newTabs = tabs.map(
            (t) =>
                t.key === key
                    ? { ...t, isActive: true }
                    : { ...t, isActive: false })

        setTabs(newTabs)
    }

    return (
        <div className="tab-component">
            <ul className="nav nav-pills nav-justified">
                {tabs.map(({ key, title, isActive }) => {
                    return <TabItem isActive={isActive} title={title} tabKey={key} onTabClick={handleTabClick} />
                })}
            </ul>
            <div className="card" >
                <div className="card-body bg-primary text-light  d-flex justify-content-center align-items-center" >
                    {tabs.map(({ content, isActive }) => {
                        return isActive && <TabContent  >{content}</TabContent>
                    })}
                </div>
            </div>
        </div>
    )
}