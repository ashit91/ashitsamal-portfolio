import { useState } from 'react';
import styles from '../Resume.module.scss';

const RightPanelSection = (props) => {
    const { sectionInfo } = props;
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleCollapse = (event) => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className={styles.rightOneSectionContainer}>
            <div className={styles.rightSectionHeader}>
                {sectionInfo.heading}
                {sectionInfo.type !== "declare" && (
                    <>
                        {isCollapsed ? (
                            <i className="fa fa-chevron-down" aria-hidden="true" onClick={handleCollapse}></i>
                        ) : (
                            <i className="fa fa-chevron-up" aria-hidden="true" onClick={handleCollapse}></i>
                        )}
                    </>
                )}
            </div>
            {!isCollapsed && (
                <>
                    {sectionInfo.type === "work" && (
                        <div className={styles.rightSectionBody + ' ' + styles.rightPanelGrid}>
                            {sectionInfo.list_data.map((list, index) => {
                                return (
                                    <>
                                        <div>{list.from} <br /> {list.to}</div>
                                        <div>
                                            <div className={styles.companyName}>{list.label}</div>
                                            <ul>
                                                {list.highlights.map((point, index) => {
                                                    return (
                                                        <li key={index}>{point}</li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    )}
                    {sectionInfo.type === "basic" && (
                        <div className={styles.rightSectionBody + ' ' + styles.rightPanelGrid}>
                            {sectionInfo.list_data.map((list, index) => {
                                return (
                                    <>
                                        <div>{list.label}</div>
                                        <div>{list.value}</div>
                                    </>                           
                                );
                            })}
                        </div>
                    )}
                    {sectionInfo.type === "declare" && (
                        <div className={styles.rightSectionBody}>
                            {sectionInfo.list_data.map((list, index) => {
                                return (
                                    <>
                                        <div>{list.declaration}</div>
                                        <div className={styles.signatureText}>{list.signature}</div>
                                    </>                           
                                );
                            })}
                        </div>
                    )}
                    {sectionInfo.type === "href-list" && (
                        <div className={styles.rightSectionBody + ' ' + styles.rightPanelGrid}>
                            <ul>
                                {sectionInfo.list_data.map((list, index) => {
                                    return (
                                        <li key={index}>
                                            {list.link.text ? (
                                                <>{list.label}<a href={list.link.url}>{list.link.text}</a></>
                                            ) : (
                                                <a href={list.link.url}>{list.label}</a>
                                            )} 
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default RightPanelSection;