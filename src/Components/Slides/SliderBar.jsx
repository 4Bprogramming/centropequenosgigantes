import React from 'react'
import Slides from './Slides'

function SliderBar() {
    const images = [
		{
			id: '1',
			title: 'Centro de Terapias Pequeños Gigantes.',
			image:
				'https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Images%2F1668723927468-PNG.jpg?alt=media&token=6c19d09e-7dab-4030-8a8a-9e79d675c1d0',
		},
		{
			id: '2',
			title: 'Con profesionales enfocados en el crecimiento Integral de tu pequeño.',
			image:
				'https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Images%2F1668725293722-servicios_terapias.jpg?alt=media&token=c3343d2b-1135-4395-a6d5-e2e68037660a',
		},
		{
			id: '3',
			title: 'Comprometidos al 100% con cada paciente.',
			image:
				'https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Images%2F1668725614798-contacto_terapias.jpg?alt=media&token=5b76148d-7a67-4d4d-8840-09dfde835a6a',
		}
	]

  return (
    <div >
			<Slides images={images} />
		</div>
  )
}

export default SliderBar 