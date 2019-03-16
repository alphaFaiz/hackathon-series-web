import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://i.ytimg.com/vi/KPekwF1O4Qs/maxresdefault.jpg',
  },
  {
    src: 'https://i.imgur.com/hjwjfWb.jpg',
  },
  {
    src: 'https://personacentral.com/wp-content/uploads/2018/03/Shin-Megami-Tensei-if...-Original-Sound-Collection.jpg',
  },
  {
    src: 'https://www.legendra.com/media/wallpapers/xbox/shin_megami_tensei_nine/wall_2.jpg',
  },
  {
    src: 'https://i0.wp.com/i.ytimg.com/vi/PZZA-ElsORk/maxresdefault.jpg?w=600',
  },
  {
    src: 'https://i.ytimg.com/vi/wqXlkXeiy5k/maxresdefault.jpg',
  },
  {
    src: 'https://product.hstatic.net/1000190106/product/81rpp0by5fl._ac_sl1471_.jpg',
  },
  {
    src: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_3ds_download_software_7/SI_3DSDS_ShinMegamiTenseiIV_image1600w.jpg',
  },
  {
    src: 'https://www.nintenderos.com/wp-content/uploads/2016/11/Shin-Megami-Tensei-IV-Apocalypse.jpg',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqTpgCjcw_WcSAHlQSZaeKCNhQgXDePIwzOIJ3bd1WbX4u1JQF',
  },
  {
    src: 'https://www.hellocosplay.com/media/product/1eb/revelations-persona-cosplay-yukino-uniform-7cf.jpg',
  },
  {
    src: 'https://images.launchbox-app.com/50b4d351-6cbc-49f9-83b0-fff8ed63ec0e.jpg',
  },
  {
    src: 'https://vignette.wikia.nocookie.net/megamitensei/images/4/4d/Persona_2_characters.png/revision/latest?cb=20161017160710',
  },
  {
    src: 'https://2.bp.blogspot.com/-VlLgI_IqKKw/WcTl9a0773I/AAAAAAAAAOE/rErNwe8I5FwpvzIFvjV-Xma94AsSTrAoACLcBGAs/s640/persona3style%25281%2529.jpg',
  },
  {
    src: 'https://cdn.wccftech.com/wp-content/uploads/2018/05/Persona-4-New-Game.jpg',
  },
  {
    src: 'http://cdn2.game4v.com/2017/04/persona5.jpg',
  },
];

class ImgCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt='' style={{width:'100%', position:'center', height:'100vh' }} className='img-fluid' />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default ImgCarousel;