import {toast, Bounce} from 'react-toastify'

const Success = (message) => {
    toast.success(message,{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    })
}

export default Success
