import './Empresas.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Empresas = () => {

    const images = [
        { src: '/img/empresas/1.png', alt: 'Imagen 1' },
        { src: '/img/empresas/2.png', alt: 'Imagen 1' },
        { src: '/img/empresas/3.png', alt: 'Imagen 1' },
        { src: '/img/empresas/4.png', alt: 'Imagen 1' },
        { src: '/img/empresas/5.png', alt: 'Imagen 1' },
        { src: '/img/empresas/6.png', alt: 'Imagen 1' },
        { src: '/img/empresas/7.png', alt: 'Imagen 1' },
        { src: '/img/empresas/8.png', alt: 'Imagen 1' },
        { src: '/img/empresas/9.png', alt: 'Imagen 1' },
        { src: '/img/empresas/10.png', alt: 'Imagen 1' },
        { src: '/img/empresas/11.png', alt: 'Imagen 1' },
        { src: '/img/empresas/12.png', alt: 'Imagen 1' },
        { src: '/img/empresas/13.png', alt: 'Imagen 1' },
        { src: '/img/empresas/14.png', alt: 'Imagen 1' },
        { src: '/img/empresas/15.png', alt: 'Imagen 1' },
        { src: '/img/empresas/16.png', alt: 'Imagen 1' },
        { src: '/img/empresas/17.png', alt: 'Imagen 1' },
        { src: '/img/empresas/18.png', alt: 'Imagen 1' },
        { src: '/img/empresas/19.png', alt: 'Imagen 1' },
        { src: '/img/empresas/20.png', alt: 'Imagen 1' },
        { src: '/img/empresas/21.png', alt: 'Imagen 1' },
        { src: '/img/empresas/22.png', alt: 'Imagen 1' },
        { src: '/img/empresas/23.png', alt: 'Imagen 1' },
        { src: '/img/empresas/24.png', alt: 'Imagen 1' },
        { src: '/img/empresas/25.png', alt: 'Imagen 1' },
        { src: '/img/empresas/26.png', alt: 'Imagen 1' },
        { src: '/img/empresas/27.png', alt: 'Imagen 1' },
        { src: '/img/empresas/28.png', alt: 'Imagen 1' },
        { src: '/img/empresas/29.png', alt: 'Imagen 1' },
        { src: '/img/empresas/30.png', alt: 'Imagen 1' },
        { src: '/img/empresas/31.png', alt: 'Imagen 1' },
        { src: '/img/empresas/32.png', alt: 'Imagen 1' },
        { src: '/img/empresas/33.png', alt: 'Imagen 1' },
        { src: '/img/empresas/34.png', alt: 'Imagen 1' },
        { src: '/img/empresas/35.png', alt: 'Imagen 1' },
    ];

    const initialSlideIndex = Math.floor(images.length / 2);

    return (
        <div className="carousel-container">
            <Carousel 
                showThumbs={false} // Oculta las miniaturas debajo del carrusel
                showStatus={false} // Oculta el estado del carrusel (índice de la diapositiva actual)
                infiniteLoop={true} //esto hace que el carousel sea infinito
                autoPlay={true} // esto ajusta que se mueva solo el carousel
                interval={2000} // esto es la demora que tarda en pasar las fotos
                showArrows={false} // Muestra las flechas de navegación
                centerMode={true} // Activa el modo centrado para mostrar varias diapositivas al mismo tiempo
                centerSlidePercentage={20}  // Ajusta el porcentaje según el número de imágenes que quieras mostrar al mismo tiempo
                selectedItem={initialSlideIndex} // ajusta en donde quiero que inicie el carousel
                showIndicators={false}  // Ocultar los puntos de navegación
            >
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image.src} alt={image.alt} className="carousel-image"/>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Empresas;
