import mongoos from 'mongoos'

const connectWithRetry = async () => {
    try {
        const url = process.env.DB_URL;
        await mongoos.connect(url);
        console.log('Connected to Mongodb...')
    } catch (error) {
        console.log(error);
        setTimeout(connectWithRetry, 5000);
    }
}

connectWithRetry();

export default mongoos;