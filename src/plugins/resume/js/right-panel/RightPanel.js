import styles from '../Resume.module.scss';
import RightPanelSection from './RightPanelSection';

const RightPanel = (props) => {
    const { textData: rightData } = props;

    return (
        <div className={styles.rightPanelContainer}>
            <div className={styles.headline}> 
                {rightData.summary_text}
            </div>
            <div className={styles.rightSectionsContainer}>
                {rightData.section_data.map((sectionInfo, index) => {
                    return (
                        <RightPanelSection key={index} sectionInfo={sectionInfo} />
                    );
                })}
            </div>
        </div>
    );
}

export default RightPanel;