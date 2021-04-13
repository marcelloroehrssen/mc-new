import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import Link from 'next/link'
import Mark from './Mark'
// import './Item.scss'

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
          <Link href={"ciao"}>
            <a>
              <img src={movie.image} alt="" />
            </a>
          </Link>
          {/*<ShowDetailsButton onClick={() => onSelectSlide(movie)} /> -->*/}
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
