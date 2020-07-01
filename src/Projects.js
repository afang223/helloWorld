import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { DiPython, DiSwift, DiJava, DiHtml5 } from 'react-icons/di';
import styled from 'styled-components';
import AlkesSemiBd from './fonts/AlkesSemiBd.woff';
import NotoSans from './fonts/NotoSans.woff';

const Styles = styled.div`
@font-face {
    font-family: 'Alkes Semibold';
    font-style: normal;
    font-weight: normal;
    src: local('Alkes Semibold'), url(${AlkesSemiBd}) format('woff');
    }

    @font-face {
        font-family: 'NotoSans';
        font-style: normal;
        font-weight: normal;
        src: local('NotoSans'), url(${NotoSans}) format('woff');
        }


.timelineElement {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'NotoSans';
}

.video {
    margin-top: 1vh;
    border-radius: 10px;
    -webkit-box-shadow: 0px 5px 10px 15px rgba(113,143,153,0.6);
        -moz-box-shadow: 0px 5px 10px 15px rgba(113,143,153,0.6);
        box-shadow: 0px 5px 10px 15px rgba(113,143,153,0.6);
}

.vertical-timeline-element-title {
    font-family: 'Alkes Semibold';
}
`;

export const Projects = () => (
<Styles id="body">
    <VerticalTimeline animate='true'>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(34, 115, 115)', color: '#fff', borderRadius:'2vh'}}
        contentArrowStyle={{ borderRight: '15px solid  rgb(34, 115, 115)' }}
        date="June 2020"
        iconStyle={{ background: 'rgb(34, 115, 115)', color: '#fff' }}
        icon={<DiSwift/>}
    >
        <div className="timelineElement">
            <div>
                <h3 className="vertical-timeline-element-title"> Sportable</h3>
            </div>
            <p>
                Portable coaching app designed to help users stay active during quarantine, while improving athletic form and maintaining progress
            </p>
            <video width="320" height="240" className="video" controls >
                <source src={require('./assets/sportableDemo.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(34, 115, 115)', color: '#fff', borderRadius:'2vh'}}
        contentArrowStyle={{ borderRight: '15px solid  rgb(34, 115, 115)' }}
        date="May 2020"
        iconStyle={{ background: 'rgb(34, 115, 115)', color: '#fff' }}
        icon={<DiJava/>}
    >
        <div className="timelineElement">
            <div>
                <h3 className="vertical-timeline-element-title">Gitlet</h3>
            </div>
            <p>
                File version control system modeled after Git
            </p>
            <video width="320" height="240" className="video" controls >
                <source src={require('./assets/gitletDemo.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(34, 115, 115)', color: '#fff', borderRadius:'2vh'}}
        contentArrowStyle={{ borderRight: '15px solid  rgb(34, 115, 115)' }}
        date="January 2020"
        iconStyle={{ background: 'rgb(34, 115, 115)', color: '#fff' }}
        icon={<DiSwift/>}
    >
        <div className="timelineElement">
            <div>
                <h3 className="vertical-timeline-element-title">Stock News</h3>
            </div>
            <p>
            App designed to help those interested in investing in stocks make well-informed decisions by providing real-time stock market data and relevant news articles for the company
            </p>
            <video width="320" height="240" className="video" controls >
                <source src={require('./assets/stockDemo.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(34, 115, 115)', color: '#fff', borderRadius:'2vh'}}
        contentArrowStyle={{ borderRight: '15px solid  rgb(34, 115, 115)' }}
        date="December 2019"
        iconStyle={{ background: 'rgb(34, 115, 115)', color: '#fff' }}
        icon={<DiHtml5/>}
    >
        <div className="timelineElement">
            <div>
                <h3 className="vertical-timeline-element-title">Tranquill</h3>
            </div>
            <p>
                Webpage that provides ambient sounds for users to relax or study to     
            </p>
            <video width="320" height="240" className="video" controls >
                <source src={require('./assets/tranquillDemo.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(34, 115, 115)', color: '#fff', borderRadius:'2vh'}}
        contentArrowStyle={{ borderRight: '15px solid  rgb(34, 115, 115)' }}
        date="November 2019"
        iconStyle={{ background: 'rgb(34, 115, 115)', color: '#fff' }}
        icon={<DiPython/>}
    >
        <div className="timelineElement">
            <div>
                <h3 className="vertical-timeline-element-title">Scheme Interpreter</h3>
            </div>
            <p>
                Scheme interpreter built with Python to run through terminal
            </p>
            <video width="320" height="240" className="video" controls >
                <source src={require('./assets/schemeDemo.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(34, 115, 115)', color: '#fff', borderRadius:'2vh'}}
        contentArrowStyle={{ borderRight: '15px solid  rgb(34, 115, 115)' }}
        date="October 2019"
        iconStyle={{ background: 'rgb(34, 115, 115)', color: '#fff' }}
        icon={<DiSwift/>}
    >
        <div className="timelineElement">
            <div>
                <h3 className="vertical-timeline-element-title">Abcent</h3>
            </div>
            <p>
                App designed to help foreigners reduce their accents in English through the use of popular culture
            </p>
            <video width="320" height="240" className="video" controls >
                <source src={require('./assets/abcentDemo.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    </VerticalTimelineElement>
    </VerticalTimeline>
</Styles>
)
