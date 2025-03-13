import React from "react";
import styles from './videoImported.module.css'

const VideoAmbed = ({src, title}) => {
    return (
        <div className={styles.wrapper}>
            <iframe
            className={styles.iframe}
                src={src}
                title={title}
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                    objectFit: "cover",
                }}
            >
            </iframe>
        </div>
    );
}

export default VideoAmbed;



