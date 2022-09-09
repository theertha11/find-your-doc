import DoctorSearchBox from '../../components/Form/DoctorSearchBox'
import UserHeader from '../../components/Navigation/UserHeader'

export default function Dashboard() {

  return (
    <div className='relative flex flex-col justify-center items-center'>
      <UserHeader authenticated={true}/>
      <DoctorSearchBox/>
      
    </div>
  )
}
