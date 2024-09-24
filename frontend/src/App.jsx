import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Modal from 'react-modal'

Modal.setAppElement('#root');

function App() {

  return (
    <div>
      <ToastContainer/>
      <Outlet/>
    </div>
  )
}

export default App
