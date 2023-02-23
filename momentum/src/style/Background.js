import styled from 'styled-components';
import img1 from '../images/0.jpg';
import img2 from '../images/1.jpg';
import img3 from '../images/2.jpg';
import img4 from '../images/3.jpg';
import img5 from '../images/4.jpg';
import img6 from '../images/5.jpg';
import img7 from '../images/6.jpg';
import img8 from '../images/7.jpg';
import img9 from '../images/8.jpg';
import img10 from '../images/9.jpg';

const imageArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const randomIndex = Math.floor(Math.random() * imageArr.length);
const randomBackground = imageArr[randomIndex];

export const Container = styled.div`
  background-image: url(${randomBackground});
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`;
