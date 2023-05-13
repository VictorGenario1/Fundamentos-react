import { Header } from "./components/Header/Header"


import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar/Sidebar"



function App() {
    return (
    <>
      <Header />
    
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quidem exercitationem eligendi fuga in odio, molestiae, laudantium facilis sapiente voluptatibus dolores dolorem. Facere, fugit voluptas nulla tempora inventore debitis commodi.</p>
        </main>



      </div>
      
    </>
  )
}

export default App
