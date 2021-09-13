import React, { useState } from 'react';
import { Input, Button, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import html2canvas from 'html2canvas';
import { ReactComponent as Star } from '../public/image/star.svg';
import { ReactComponent as Arrow } from '../public/image/arrow.svg';
import { ReactComponent as Flower } from '../public/image/flower.svg';
import styles from './index.less';

export default function IndexPage() {
  const [inviter, setInviter] = useState('Curation Map');
  const [invitee, setInvitee] = useState('Josephine');
  const [company, setCompany] = useState('Ownership Labs');
  const [position, setPosition] = useState('CTO');
  const [date, setDate] = useState('9.20');
  const [startTime, setStartTime] = useState('14:00');
  const [endTime, setEndTime] = useState('17:00');

  const dateFormat = 'MM.DD';
  const timeFormat = 'HH:mm';

  function onDateChange(dateValue, dateString) {
    setDate(dateString);
  }
  function onStartTimeChange(timeValue, timeString) {
    setStartTime(timeString);
  }
  function onEndTimeChange(time, timeString) {
    setEndTime(timeString);
  }
  function onCreateClick() {
    html2canvas(document.querySelector('#box')).then((canvas) => {
      document.body.appendChild(canvas);
      // window.open(canvas.toDataURL("image/png"), '_blank');
    });
  }
  // @ts-ignore
  return (
    <div className={styles.container}>
      <div id="box" className={styles.box}>
        <div className={styles.header}>
          <div className={styles.header1}></div>
          <div className={styles.header2}></div>
          <div className={styles.header3}></div>
          <div className={styles.header4}></div>
        </div>
        <div className={styles.title}>
          <div className={styles.title1}>Shanghai Metaverse Week</div>
          <div className={styles.title2}>上海元宇宙文化周</div>
          <div className={styles.title3}>2021.9.9 - 9.15</div>
        </div>
        <div className={styles.content}>
          <div className={styles.content1}>
            <div className={styles.name1}>{inviter}</div>
            <div className={styles.invites}>invites</div>
            <div className={styles.name2}>
              <Star className={styles.star1} />
              {invitee}
              <Star className={styles.star2} />
            </div>
          </div>
          <div className={styles.content2}>
            <div className={styles.name1}>{position}</div>
            <div>@</div>
            <div className={styles.name2}>{company}</div>
          </div>
          <div className={styles.content3}>
            <Arrow className={styles.arrow} />
            <div className={styles.date}>
              {date} {startTime}-{endTime}
            </div>
            <a className={styles.site} href="/">
              m7e.sh
            </a>
            <Flower className={styles.flower} />
            <div className={styles.by}>by</div>
            <img className={styles.logo} src={require('@/public/image/logo.png')} />
            <img className={styles.ball} src={require('@/public/image/ball2.png')} />
          </div>
        </div>
        <div className={styles.sponsors}>
          <div className={styles.title}>SPONSORS</div>
          <div className={styles.first}>
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
          </div>
          <div className={styles.first}>
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
          </div>
        </div>
        <div className={styles.partners}>
          <div className={styles.title}>PARTNERS</div>
          <div className={styles.first}>
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
          </div>
          <div className={styles.first}>
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
          </div>
        </div>
        <div className={styles.press}>
          <div className={styles.title}>PRESS</div>
          <div className={styles.first}>
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
          </div>
          <div className={styles.first}>
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
            <img src={require('@/public/image/logo2.png')} />
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.row}>
          <span className={styles.label}>inviter:</span>
          <Input
            placeholder="input inviter"
            value={inviter}
            onChange={(e) => setInviter(e.target.value)}
          />
          <br />
        </div>
        <div className={styles.row}>
          <span className={styles.label}>invitee</span>
          <Input
            placeholder="input invitee"
            value={invitee}
            onChange={(e) => setInvitee(e.target.value)}
          />
          <br />
        </div>
        <div className={styles.row}>
          <span className={styles.label}>company:</span>
          <Input
            placeholder="input company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <br />
        </div>
        <div className={styles.row}>
          <span className={styles.label}>position:</span>
          <Input
            placeholder="input position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <br />
        </div>
        <div className={styles.row}>
          <span className={styles.label}>date:</span>
          <DatePicker
            onChange={onDateChange}
            defaultValue={moment(date, dateFormat)}
            format={dateFormat}
          />
          <br />
        </div>
        <div className={styles.row}>
          <span className={styles.label}>time start:</span>
          <TimePicker
            onChange={onStartTimeChange}
            value={moment(startTime, timeFormat)}
            format={timeFormat}
          />
          <br />
        </div>
        <div className={styles.row}>
          <span className={styles.label}>time end:</span>
          <TimePicker
            onChange={onEndTimeChange}
            value={moment(endTime, timeFormat)}
            format={timeFormat}
          />
          <br />
        </div>
        <div className={styles.row}>
          <span className={styles.label}></span>
          <Button type="primary" onClick={onCreateClick}>
            create
          </Button>
        </div>
      </div>
    </div>
  );
}
