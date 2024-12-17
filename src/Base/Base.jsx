import './Base.css'
import Topbar from './Topbar/Topbar'

export default function Base({children}) {
  return (
    <div className=''>
    <div className='topbar' id='topbar'>
    <Topbar/>
    </div>
    <div className='content'>
    {children}
    </div>
    </div>
  )
}
