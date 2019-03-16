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
    src: 'http://cdn2.game4v.com/2017/04/persona5.jpg',
  },
  {
    src: 'https://i.ytimg.com/vi/hMphCrAk50U/maxresdefault.jpg',
  },
  {
    src: 'https://i1.wp.com/i.imgur.com/LeyzAxw.jpg?w=1170&ssl=1',
  },
  {
    src: 'https://i.ytimg.com/vi/ZPsLCVh30Ds/maxresdefault.jpg',
  },
  {
    src: 'https://pm1.narvii.com/6637/b446a305e549a898dcd1a088fcde142f09d38205_hq.jpg',
  },
  {
    src: 'https://c-5uwzmx78pmca09x24quoqfx2ezivsmzx2ekwu.g00.ranker.com/g00/3_c-5eee.zivsmz.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2fquoqf.zivsmz.kwux2fcamz_vwlm_quox2f38816x2f9888522014x2fwzqoqvitx2faequuqvo-twoqk-x78pwbw-c9x3fex3d438x26yx3d48x26nux3dx78rx78ox26nqbx3dkzwx78x26kzwx78x3dnikmax22x26q98k.uizsx3dquiom_$/$/$/$/$/$',
  },
  {
    src: 'https://c-5uwzmx78pmca09x24quoqfx2ezivsmzx2ekwu.g00.ranker.com/g00/3_c-5eee.zivsmz.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2fquoqf.zivsmz.kwux2fcamz_vwlm_quox2f38815x2f9888508552x2fwzqoqvitx2fow-ieig-aiv-ivlzmia-x78pwbw-c9x3fex3d438x26yx3d38x26nux3dx78rx78ox26nqbx3dkzwx78x26kzwx78x3dnikmax26q98k.uizsx3dquiom_$/$/$/$/$/$',
  },
  {
    src: 'https://i.imgflip.com/pb6ka.jpg',
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
          <img src={item.src} alt='' style={{width:'100%', position:'center', height:'60vh' }} className='img-fluid' />
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