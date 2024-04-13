import React, { useEffect } from 'react';
import InputMask, {validate} from 'react-input-mask';
import styled from 'styled-components';

const StyledLoginContainer = styled.div`
font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
max-width:640px;
min-height:600px;
justify-content: center;
align-items: center;
display: flex; flex-direction: column;
`
const StyledLoginTitle = styled.p`
    font-size: 36px;
    color:#333333;
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    transition: 0.1s;
    &:hover {
        transform:scale(1.2);
    }
`
const StyledInput = styled.input`
margin-top: 24px;
text-align: center;
font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
margin-top:36x;
color:#333333;
border: 0px solid black;
font-size: 24px;
font-weight:400;
height: 56px;
transition: 0.1s;
&:hover {
    transform:scale(1.1);
}
border-radius: 16px;
padding: 8px 16px;
-webkit-box-shadow: 0px 4px 91px -17px rgba(0,0,0,0.26);
-moz-box-shadow: 0px 4px 91px -17px rgba(0,0,0,0.26);
box-shadow: 0px 4px 91px -17px rgba(0,0,0,0.26);
`

const StyledInputMask = styled(InputMask)`
    text-align: center;
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    margin-top:36x;
    color:#333333;
    border: 0px solid black;
    font-size: 24px;
    font-weight:400;
    height: 56px;
    transition: 0.1s;
    &:hover {
        transform:scale(1.1);
    }
    border-radius: 16px;
    padding: 8px 16px;
    -webkit-box-shadow: 0px 4px 91px -17px rgba(0,0,0,0.26);
-moz-box-shadow: 0px 4px 91px -17px rgba(0,0,0,0.26);
box-shadow: 0px 4px 91px -17px rgba(0,0,0,0.26);
`

const StyledButton = styled.button`
margin-top:36px;
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    border: 0px solid black;
    font-size:22px;
    width:280px;
    height:56px;
    background-color: #527cfb;
    border-radius:16px;
    color:white;
    transition: 0.2s;
    box-sizing: content-box;
    padding: 8px 16px;
    &:hover {
        transform:scale(1.2);
    }
    
`
const StyledSVG = styled.svg`
margin-top: 56px;
transition: 0.2s;

    &:hover {
        transform:scale(1.2);
    }
`

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const IntervalComponent = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      // Генерируем три уникальных случайных числа от 1 до 14 (идентификаторы path)
      const randomIdsFill = [];
      while (randomIdsFill.length < 3) {
        const randomId = getRandomInt(1, 14);
        if (!randomIdsFill.includes(randomId)) {
          randomIdsFill.push(randomId);
        }
      }

      const randomIdsColor = [];
      while (randomIdsColor.length < 3) {
        const randomId = getRandomInt(1, 14);
        if (!randomIdsColor.includes(randomId) && !randomIdsFill.includes(randomId)) {
          randomIdsColor.push(randomId);
        }
      }

      // Применяем изменения к SVG
      randomIdsFill.forEach(id => {
        const path = document.getElementById(id.toString());
        if (path) {
          path.setAttribute('fill', 'rgb(82,124,251)');
        }
      });

      randomIdsColor.forEach(id => {
        const path = document.getElementById(id.toString());
        if (path) {
          path.setAttribute('fill', 'black');
        }
      });
    }, 150); // Интервал в 5 секунд

    return () => clearInterval(interval);
  }, []);

  return <StyledSVG xmlns="http://www.w3.org/2000/svg" width="266" height="114" viewBox="0 0 434 229" fill="none"> 
  <path id="1" d="M313.854 24.4978H299.941V29.7359H307.15V60.3376H299.941V65.5557H321.082V60.3376H313.854V24.4978Z" fill="rgb(82,124,251)"></path> 
  <path id="2" d="M308.503 5.33716C305.636 5.33716 303.718 7.28667 303.718 9.92541C303.718 12.5642 305.636 14.5137 308.503 14.5137C311.451 14.5137 313.451 12.5642 313.451 9.92541C313.471 7.28667 311.472 5.33716 308.503 5.33716Z" fill="black"></path> 
  <path id="3" d="M236.64 24.4978H222.728V29.7359H229.936V60.3375H222.728V65.5561H243.849V60.3375H236.64V24.4978Z" fill="black"></path> 
  <path id="4" d="M231.29 5.33716C228.423 5.33716 226.504 7.28667 226.504 9.92541C226.504 12.5642 228.423 14.5137 231.29 14.5137C234.238 14.5137 236.237 12.5642 236.237 9.92541C236.257 7.28667 234.258 5.33716 231.29 5.33716Z" fill="black"></path> 
  <path id="5" d="M187.533 60.1013H178.326V17.4088H187.452C195.045 17.4088 204.151 19.7522 204.151 38.4401C204.131 56.2219 195.428 60.1013 187.533 60.1013ZM185.777 11.895H171.379V65.5757H186.665C198.094 65.5757 211.582 60.9876 211.582 38.4597C211.562 16.1682 198.699 11.895 185.777 11.895Z" fill="black"></path> 
  <path id="6" d="M134.286 50.6873C134.286 40.4868 126.774 36.9816 118.152 34.5594C107.693 31.6056 104.341 29.2623 104.341 24.674C104.341 19.298 109.288 16.7183 115.366 16.7183C119.99 16.7183 124.634 18.1953 128.551 21.5429L132.711 17.191C128.087 13.2919 122.655 11.0273 115.144 11.0273C104.603 11.0273 97.3346 16.7971 97.3346 24.8906C97.3346 33.3779 104.119 37.277 115.063 40.3883C124.493 43.0271 127.037 45.6068 127.037 50.8252C127.037 57.5995 120.959 60.7893 114.255 60.7893C107.551 60.7893 102.826 58.5246 98.99 55.0193L94.8306 59.6079C99.4544 63.9795 106.098 66.382 114.154 66.382C126.936 66.4213 134.286 59.9428 134.286 50.6873Z" fill="black"></path> 
  <path id="7" d="M70.7825 17.7239H87.401L88.1276 11.895H46.6733V17.7239H63.8367V65.5562H70.7825V17.7239Z" fill="black"></path> 
  <path id="8" d="M19.2718 59.9441H7.49979V40.3108H19.5141C25.9756 40.3108 31.3467 42.3391 31.3467 50.5113C31.3265 58.4671 24.6227 59.9441 19.2718 59.9441ZM7.49979 17.4088H18.3834C25.0064 17.4088 29.1659 19.6734 29.1659 25.8174C29.1659 32.0401 25.4909 34.6986 19.0295 34.6986H7.49979V17.4088ZM25.9756 37.1207C31.2457 35.9588 36.2736 32.3749 36.2736 25.4432C36.2736 14.9276 26.44 11.895 16.7882 11.895H0.553711V65.5757H18.0805C28.1362 65.5757 38.6966 61.9918 38.6966 50.3144C38.6764 41.1772 32.1342 38.1447 25.9756 37.1207Z" fill="black"></path> 
  <path id="9" d="M257.782 37.9083C257.782 32.3749 260.811 28.4758 267.616 28.4758C273.835 28.4758 276.965 31.6659 276.965 37.8296C276.965 43.9145 273.774 47.4984 267.777 47.4984C260.912 47.4787 257.782 43.5206 257.782 37.9083ZM272.805 58.4667H265.213C260.892 58.4667 259.62 56.9111 259.62 54.9619C259.62 53.4848 260.569 51.9291 261.78 50.9839C263.618 51.6141 265.294 51.8503 268.1 51.8503C278.075 51.8503 283.911 46.0018 283.911 37.9083C283.911 34.9348 283.083 32.2961 281.609 30.1102C282.033 29.9527 282.719 29.7952 283.79 29.7952H286.98V24.5965H283.79C280.902 24.5965 278.964 25.3645 277.732 26.3688C275.087 24.6752 271.695 23.6709 267.676 23.6709C257.762 23.6709 250.897 29.5983 250.897 37.928C250.897 43.2252 253.138 46.8092 257.924 49.2313C254.895 51.1808 253.299 53.8196 253.299 56.3991C253.299 60.5348 256.571 64.1973 263.921 64.1973H271.432C276.783 64.1973 280.862 66.147 280.862 70.0458C280.862 74.4767 276.783 76.82 267.596 76.82V82.1171C280.377 82.1171 287.646 77.6863 287.646 69.6522C287.667 63.2324 281.266 58.4667 272.805 58.4667Z" fill="black"></path> 
  <path id="10" d="M307.554 24.5173H299.941V29.6767H307.554V24.5173Z" fill="black"></path> 
  <path id="11" d="M357.975 59.0181C355.733 60.1796 353.027 60.9673 349.897 60.9673C344.143 60.9673 341.82 58.5454 341.82 54.036V29.657H358.217L359.085 24.5173H341.8V14.4744L335.097 15.2621V24.537H327.484V29.6964H335.097V54.1539C335.097 61.3221 340.205 66.4616 349.231 66.4616C353.229 66.4616 357.611 65.3788 360.579 63.5077L357.975 59.0181Z" fill="black"></path> 
  <path id="12" d="M396.258 55.6308C393.774 59.2933 389.796 61.4793 385.637 61.4793C380.125 61.4793 377.56 58.8404 377.56 53.6812C377.56 48.384 380.912 45.1152 390.18 45.1152H396.258V55.6308ZM403.063 56.5563V36.8444C403.063 28.751 397.793 23.6113 387.333 23.6113C383.174 23.6113 378.711 24.399 373.522 26.191L375.359 31.1731C379.68 29.6962 383.497 29.0661 386.303 29.0661C392.522 29.0661 396.278 31.2519 396.278 37.2383V40.586H390.039C377.338 40.586 370.392 45.3318 370.392 53.76C370.392 61.4007 375.5 66.3829 383.961 66.3829C389.393 66.3829 394.097 64.4332 397.146 60.6129C398.257 64.3546 401.225 65.9887 404.82 66.4615L406.496 61.7943C404.093 61.0857 403.063 59.8252 403.063 56.5563Z" fill="black"></path> 
  <path id="13" d="M406.496 7.99536V13.2138H419.439V65.5553H425.941H426.143H433.553V60.3372H426.143V7.99536H406.496Z" fill="black"></path> 
  <path id="14" d="M157.89 40.8426C157.89 43.5995 155.527 45.8247 152.6 45.8247C149.672 45.8247 147.31 43.5798 147.31 40.8426C147.31 38.0857 149.672 35.8605 152.6 35.8605C155.527 35.8408 157.89 38.0857 157.89 40.8426Z" fill="black"></path> 
 </StyledSVG>;
};



const LoginPage: React.FC = () => {
    const [phone, setPhone] = React.useState(() => {
        return localStorage.getItem('phone') || '';
    });
    const [isReady, setReady] = React.useState(false)
    
    useEffect(()=> {
        if(isFinite(+phone[phone.length-1])) {
            setReady(true)
        } else setReady(false)
    })

    const handleLogin = () => {
        localStorage.setItem('phone', phone);
    };

    return (
        <StyledLoginContainer>
            <IntervalComponent/>
            <StyledInputMask
                mask="+7 (799) 999-99-99" 
                maskChar="_"
                value={phone}
                onChange={(e: any) => setPhone(e.target.value)}
                placeholder="+7 (000) 000-00-00"
            >
                {(inputProps: any) => <input {...inputProps} placeholder="Enter phone number" />}
            </StyledInputMask>
            <StyledInput placeholder='Enter name'/>

            <StyledButton onClick={handleLogin}>Continue</StyledButton>
        </StyledLoginContainer>
    );
};

export default LoginPage;
