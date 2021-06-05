import styles from '../Resume.module.scss';

const OneProject = (props) => {
    return (
        <>
            {props.projectData.map((data, index) => {
                return (
                    <>
                        {index === 0 ? 
                            <div className={styles.projectNum}>{data.label}</div> :
                            <div>{data.label}</div>
                        }
                        {data.type === 'proj_description' ? (
                            <div>
                                {data.value ? <>{data.value}</> : <></>}
                                {data.highlights ? 
                                    <ul>
                                        {data.highlights.map((point, index) => {
                                            return (
                                                <li key={index}>{point}</li>
                                            );
                                        })}
                                    </ul> 
                                : <></>}
                            </div>
                        ) : (
                            <div>{data.value}</div>
                        )}                                            
                    </>                           
                );
            })}
        </>
    );
}

export default OneProject;