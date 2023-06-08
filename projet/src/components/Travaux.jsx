import React from 'react'
import HeaderTwo from './HeaderTwo'

export default function Travaux() {
  return (
    <div>
      <HeaderTwo />
      <div className='mx-auto max-w-7xl'>
        <div className='flex justify-start pt-10 lg:mx-10'>
          <img src="./images/rouandi.jpg" alt="" />
          <div>
            <p className='pt-5 pl-5 text-3xl font-bold'>Rouandi</p>
            <p>Travaux de construction du marché de gros de fruits & légumes de Tanger , Lot N°2 (Gros oeuvre , Autoportante)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
