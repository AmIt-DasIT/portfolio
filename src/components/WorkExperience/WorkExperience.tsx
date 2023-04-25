import React from 'react'
import { we1 } from '../../assets'
import SaveButton from '../SaveButton'

export default function WorkExperience() {

  const workEx = [
    { id: '1', name: 'Ecommerse Website', details1: 'A fully functional ecommerce website', details2: 'using React js and Redux-toolkit.', image: we1, background: 'linear-gradient(317deg, rgba(111,56,162,1) 14%, rgba(54,18,103,1) 34%, rgba(19,4,40,1) 72%)' },
    { id: '2', name: 'Ecommerse Website', details1: 'A fully functional ecommerce website', details2: 'using React js and Redux-toolkit.', image: we1, background: 'linear-gradient(57deg, rgba(111,56,162,1) 4%, rgba(54,18,103,1) 25%, rgba(19,4,40,1) 65%)' },
    { id: '3', name: 'Ecommerse Website', details1: 'A fully functional ecommerce website', details2: 'using React js and Redux-toolkit.', image: we1, background: 'linear-gradient(210deg, rgba(111,56,162,1) 4%, rgba(54,18,103,1) 35%, rgba(19,4,40,1) 65%)' },
    { id: '4', name: 'Ecommerse Website', details1: 'A fully functional ecommerce website', details2: 'using React js and Redux-toolkit.', image: we1, background: 'linear-gradient(146deg, rgba(111,56,162,1) 4%, rgba(54,18,103,1) 30%, rgba(19,4,40,1) 55%)' }
  ]
  return (
    <div className='grid sm:grid-cols-2 gap-x-10 gap-6 relative pt-12 px-4 sm:px-0 text-xl font-[Raleway]'>
      {workEx.map((data, key) => {
        console.log(Number(data.id)%2)
        return (
          <div className={`filter backdrop-blur-md backdrop-saturate-100 rounded-xl overflow-hidden ${Number(data.id)%2 !== 0 ? 'reveal_left' : 'reveal_right'}`} style={{ background: data.background }} key={data.id}>
            <div className='bg-[#6c38a0] w-full h-[0.2rem]'></div>
            <div className='px-5 py-8 flex gap-3'>
              <img src={data.image} alt='' />
              <div>
                <span className='text-2xl'>{data.name}</span><br />
                <div className='text-[0.75rem] pb-2'>{data.details1}<br />
                  {data.details2}
                </div>
                <SaveButton props={{
                  path: '',
                  name: 'Learn More',
                }} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
