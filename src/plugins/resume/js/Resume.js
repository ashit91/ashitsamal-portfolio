import LeftPanel from './left-panel/LeftPanel';
import RightPanel from './right-panel/RightPanel';
import styles from './Resume.module.scss';
import config from '../conf/msgs_en.json';

const Resume = (props) => {
    const { resume_data } = config;

    return (
        <div className={styles.resumePageContainer}>
            <div className={styles.colorTransition}></div>
            <div className={styles.panelContainer}>
                <LeftPanel textData={resume_data.left_data}></LeftPanel>
                <RightPanel textData={resume_data.right_data}></RightPanel>
            </div>
        </div>
    );
}

export default Resume;