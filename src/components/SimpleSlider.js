import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import '.././scss/style.scss'
import Video from "./Video";

function SampleNextArrow(props)
{
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", background: "red" }} onClick={onClick} />;
}

function SamplePrevArrow(props)
{
  const { className, style, onClick } = props;

  return <div className={className} style={{ ...style, display: "block", background: "red" }} onClick={onClick} />;
}

export default function SimpleSlider(){
  useEffect(() =>
  {
    let items = document.querySelectorAll('.slick-slide.slick-active');
    items.forEach(item =>
    {
      item.addEventListener('click', () =>
      {
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active')
      })
    })
  })

  const CustomTab = ({ onClick, children }) =>
  {
    return <div onClick={onClick}>{children}</div>
  };
  CustomTab.tabsRole = 'Tab';

  const [tabIndex, setTabIndex] = useState(0);

  const tabs = [
    {
      index: 0,
      title: 'all',
      content: "text 1"
    },
    {
      index: 1,
      title: 'Mixes',
      content: "text 2"
    },
    {
      index: 2,
      title: 'Music',
      content: "text 2"
    },
    {
      index: 3,
      title: 'Dramas',
      content: "text 2"
    },
    {
      index: 4,
      title: 'Cartoon',
      content: "text 2"
    },
    {
      index: 5,
      title: 'Films',
      content: "text 2"
    },
    {
      index: 6,
      title: 'Coding',
      content: "text 2"
    },
    {
      index: 7,
      title: 'Development',
      content: "text 2"
    },
    {
      index: 8,
      title: 'code',
      content: "text 2"
    },
    {
      index: 9,
      title: 'sleep',
      content: "text 2"
    },
    {
      index: 10,
      title: 'eat',
      content: "text 2"
    },
    {
      index: 11,
      title: 'Food',
      content: "text 2"
    },
    {
      index: 12,
      title: 'happy',
      content: "text 2"
    }
  ]

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: '10',
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={index => setTabIndex(index)}
    >
      <TabList>
        <Slider {...settings}>
          {tabs.map((item, i) => (<CustomTab key={i} onClick={() => setTabIndex(item.index)}>{item.title}</CustomTab>))}
        </Slider>
      </TabList>
      {/* {tabs.map((item, i) => (<TabPanel key={i}>{item.content}</TabPanel>))} */}
      {tabs.map((item, i) => (<TabPanel key={i}>
        <Video />
      </TabPanel>))}
    </Tabs>
  );
}
