import React from 'react'

export default function SectionsTable({bodyData, headData, add}) {


    return (
        <table className='table-fixed'> 
            <thead className='bg-zinc-900 text-white'>
                <tr> 
                    <th scope='col' className='w-24'   >
                        #
                    </th>
                    <th scope='col' className='w-96'   >
                        Date
                    </th>
                    <th scope='col' className='w-96'   >
                        Time
                    </th>
                    {!add && <th scope='col' className='w-96' >
                        Action
                    </th>}
                </tr>
            </thead>
            <tbody>
                {bodyData?.map((item,index)=>
                <tr key={index} className={`hover:bg-zinc-100 `}>        
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
