import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../styles/Carousel.module.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Carousel = ({ galeria }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  // Referência para o carrossel com opções da API
  const [emblaRef, emblaApi] = useEmblaCarousel({
    // habilita looping do carrossel
    loop: true,
    // alinha o primeiro slider ao inicio do viewport
    align: 'start',
  })

  // Acessa a API
  useEffect(() => {
    if (emblaApi) {
      // API habilitada
    }
  }, [emblaApi])

  // Função para habilitar o scroll para o slide selecionado ao clicar no ponto de navegação
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  // Função para habilitar o scroll do slider com botões
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {galeria.map((imagem) => {
          return (
            <div className={styles.embla__slide} key={imagem}>
              <Image src={imagem} alt='imagem' width={762} height={350} />
            </div>
          )
        })}
      </div>

      {/* Pontos de navegação */}
      <div className={styles.navegacao__pontos}>
        {scrollSnaps.map((_, idx) => (
          <button
            style={{
              backgroundColor: `${
                idx === selectedIndex ? '#fff' : 'rgba(255,255,255,.5)'
              }`,
            }}
            className={styles.ponto}
            key={idx}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>

      {/*Botões de navegação */}
      <div className={styles.navegacao__flechas}>
        <button
          className={styles.prevButton}
          type='button'
          onClick={scrollPrev}>
          <MdKeyboardArrowLeft />
        </button>
        <button
          className={styles.nextButton}
          type='button'
          onClick={scrollNext}>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Carousel
