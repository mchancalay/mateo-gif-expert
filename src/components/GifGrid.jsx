import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import GifItem from './GifItem'
import useFetchGifs from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {


    const { gifs, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3> {category} </h3>
            {isLoading ? (
                <h2>Cargando...</h2>
            ): (
                <div className = 'card-grid'>
                {
                    gifs.map((e) => <GifItem key={e.id} {...e} />)
                }
                </div >
            )}
        </>
    )
}

export default GifGrid