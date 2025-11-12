import imgBanner from '../../assets/banner.png'


function Banner () {
    const bannerStyle = {
        backgroundColor: '#141F37',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div style={bannerStyle}>
            <img src={imgBanner} alt="banner"></img>
        </div>
    );
}

export default Banner;

