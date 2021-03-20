import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'
import {Button} from '@material-ui/core'
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays * 26 august to 30 august * 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More filters</Button>
                

            </div>
            <SearchResult
                img="https://ds2.cityrealty.com/img/6595e69e7030ad0b47d3c1a22dd6620a4da61004+736++0+60/25-park-row-1.jpg"
                location="NYC"
                title="Penthouse in the Big Apple"
                description="62 stays * 26 august to 30 august * 2 guest"
                star={4.73}
                price="$2000 / night"
            />
             <SearchResult
                img="https://ds2.cityrealty.com/img/6595e69e7030ad0b47d3c1a22dd6620a4da61004+736++0+60/25-park-row-1.jpg"
                location="NYC"
                title="Penthouse in the Big Apple"
                description="62 stays * 26 august to 30 august * 2 guest"
                star={4.73}
                price="$2000 / night"
            />
             <SearchResult
                img="https://ds2.cityrealty.com/img/6595e69e7030ad0b47d3c1a22dd6620a4da61004+736++0+60/25-park-row-1.jpg"
                location="NYC"
                title="Penthouse in the Big Apple"
                description="62 stays * 26 august to 30 august * 2 guest"
                star={4.73}
                price="$2000 / night"
            />
             <SearchResult
                img="https://ds2.cityrealty.com/img/6595e69e7030ad0b47d3c1a22dd6620a4da61004+736++0+60/25-park-row-1.jpg"
                location="NYC"
                title="Penthouse in the Big Apple"
                description="62 stays * 26 august to 30 august * 2 guest"
                star={4.73}
                price="$2000 / night"
            />
        </div>
    )
}

export default SearchPage