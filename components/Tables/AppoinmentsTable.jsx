import React from 'react'

export default function AppoinmentsTable({bodyData, headData}) {
  return (
    <table className='table-fixed'> 
        <thead className='bg-zinc-900 text-white'>
            <tr > 
                <th scope='col' className='w-16'   >
                    #
                </th>
                <th scope='col' className='w-96'   >
                    Time
                </th>
                <th scope='col' className='w-96'   >
                    Name
                </th>
                <th scope='col' className='w-40'   >
                    Gender
                </th>
                <th scope='col' className='w-96'   >
                    Phone
                </th>
                <th scope='col' className='w-96'   >
                    City
                </th>
            </tr>
        </thead>
        <tbody>
            {bodyData?.map((item,index)=>
            <tr key={index} className={`hover:bg-zinc-700 hover:text-white `}>        
                { Object.keys(item)?.map((keys,idx)=> 
                    <td key={idx}>
                    {item[headData[idx]]}
                    </td> 
                )}       
            </tr>
            )}
        </tbody>
    </table>
  )
}
