import mainCardImg from '../assets/images/mainSection/mainImg.png'

import weekUniqueArtImg1 from '../assets/images/examplesSection/cardImg1.png'
import weekUniqueArtImg2 from '../assets/images/examplesSection/cardImg2.png'
import weekUniqueArtImg3 from '../assets/images/examplesSection/cardImg3.png'

import popularArtist1 from '../assets/images/popularArtists/img1.png'
import popularArtist2 from '../assets/images/popularArtists/img2.png'
import popularArtist3 from '../assets/images/popularArtists/img3.png'
import popularArtist4 from '../assets/images/popularArtists/img4.png'
import popularArtist5 from '../assets/images/popularArtists/img5.png'

import artistAvatar1 from '../assets/images/popularArtists/avatar1.png'
import artistAvatar2 from '../assets/images/popularArtists/avatar2.png'
import artistAvatar3 from '../assets/images/popularArtists/avatar3.png'
import artistAvatar4 from '../assets/images/popularArtists/avatar4.png'
import artistAvatar5 from '../assets/images/popularArtists/avatar5.png'

export const data = {
    mainCardInfo: {
        linkImg: mainCardImg,
        artTitle: '',
        priceInEth: 0.24,
        endingTime: '11:05:56',
    },

    weekUniqueArt: {
        card1: {
            linkImg: weekUniqueArtImg1,
            artTitle: 'Cyberpunk, Cocomo',
            priceInEth: 3.02,
            endingTime: '03:24:56',
        },

        card2: {
            linkImg: weekUniqueArtImg2,
            artTitle: 'Charge, Qi tiao yu',
            priceInEth: 6.11,
            endingTime: '00:24:56',
        },

        card3: {
            linkImg: weekUniqueArtImg3,
            artTitle: 'Surgeon, Josh Rife',
            priceInEth: 2.45,
            endingTime: '05:24:56',
        },
    },

    popularArtist: {
        artist1: {
            linkImg: popularArtist1,
            artistAvatar: artistAvatar1,
            artistName: 'Osvaldo Percy',
        },
        artist2: {
            linkImg: popularArtist2,
            artistAvatar: artistAvatar2,
            artistName: 'Ranson Sqiure',
        },
        artist3: {
            linkImg: popularArtist3,
            artistAvatar: artistAvatar3,
            artistName: 'Cristio Leo',
        },
        artist4: {
            linkImg: popularArtist4,
            artistAvatar: artistAvatar4,
            artistName: 'Sebastian Waltan',
        },
        artist5: {
            linkImg: popularArtist5,
            artistAvatar: artistAvatar5,
            artistName: 'Abraham Zack',
        },
    },
}
