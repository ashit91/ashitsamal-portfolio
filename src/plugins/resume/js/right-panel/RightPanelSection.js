import { useState } from 'react';
import OneProject from './OneProject';
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
            {(sectionInfo.type === "declare" || !isCollapsed) && (
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
                    {sectionInfo.type === "project" && (
                        <div className={styles.rightSectionBody + ' ' + styles.rightPanelGrid + ' ' + styles.projectGrids}>
                            {sectionInfo.list_data.map((list, index) => {
                                return <OneProject projectData={list.project} key={index} />
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
                </>
            )}
        </div>
    );
}

export default RightPanelSection;