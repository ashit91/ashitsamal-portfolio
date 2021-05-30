import LeftPanel from './left-panel/LeftPanel';
import RightPanel from './right-panel/RightPanel';
import styles from './Resume.module.scss';

const Resume = () => {
    return (
        <div className={styles.resumePageContainer}>
            <div className={styles.colorTransition}></div>
            <div className={styles.panelContainer}>
                <LeftPanel></LeftPanel>
                <RightPanel></RightPanel>
            </div>
        </div>
    );
}

export default Resume;