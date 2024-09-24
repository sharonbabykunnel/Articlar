import { useCallback } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from "firebase/storage";
import app from '../config/firebase';

const useUploadFile = () => {
    const storage = getStorage(app);

    const uploadFile = useCallback((file) => {
        return new Promise((resolve, reject) => {
            const fileName = new Date().getTime()+ 'name' + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    switch (snapshot.state) {
                        case "paused":
                            break;
                        case "running":
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve( [downloadURL,file.type] );
                    });
                }
            );
        });
    }, [storage]);

    const uploadFiles = useCallback(async (files) => {
        try {
            const uploadPromises = files.map(file => uploadFile(file));
            const results = await Promise.all(uploadPromises);
            return results;
        } catch (error) {
            console.error("Error uploading files:", error);
            throw error;
        }
    }, [uploadFile]);

    return { uploadFile, uploadFiles };
};

export default useUploadFile;