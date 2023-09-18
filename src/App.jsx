import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Reset } from './Reset'
import {Routes,Route} from 'react-router-dom'
import {Create_Acc} from './Create_Acc'
import {Login} from './Login'
import { Top_design } from './Top_design'



function App() {

  return (
  <div>
<Routes>
  <Route path="/" element={<><Top_design/><Login /></>} />
  <Route path="/new" element={<><Top_design/><Create_Acc /></>} />
  <Route path="/reset" element={<Reset />} />
</Routes>
  </div>
  )
}

export default App



