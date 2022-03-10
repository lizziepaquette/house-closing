import React from 'react'
import styled from 'styled-components'
import Countdown from 'react-countdown'
import temeculaMainPhoto from '../photos/300-buchanan-bw.jpg'
import funnyBwBackground from '../photos/temecula-main-view-bw.svg'
import scriptLoader from "react-async-script-loader";

const CountdownHeader = styled.h1`
  font-size: 14vmin;
  text-shadow: -1px 0 SkyBlue, 0 1px DarkGreen, 1px 0 LightSalmon, 0 -1px DarkGreen;
  margin: 0px;
  font-weight: 550;
  text-transform: uppercase;
  // letter-spacing: 3px;
  font-family: 'Montserrat', sans-serif;
`

const CountdownClockWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  background-image: url("${props => props.bgImg}");
  background-size: cover;
  box-sizing: border-box;
  background-position: 30% 50%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20vh;
`

const SlideshowWrapper = styled.div`
`

const CountdownClock = ({ days, hours, minutes, seconds, completed }) => {

  const now = new Date()
  const tripOver = new Date("2022-03-19T23:00:00Z")
  const tripIsOver = now.getTime() > tripOver.getTime()

  if (completed && ! tripIsOver) {
    return (
    <SlideshowWrapper className ="pa-carousel-widget"
      style={{ width: '100%', height: '100vh', marginRight: '10px'}}
      data-link="https://photos.app.goo.gl/D98H1yWFNchVD2Z77"
      data-title="Last Chill On Mint Hill Album"
      data-description="86 new items added to shared album"
      data-delay="3">
      <object data="https://lh3.googleusercontent.com/vci0P9NioeDezquuJ2bBQKxxRIyy4z5buION8LYQCtmpnpAOaHWPmDuwHbKNOVlzTMnxxMPelKzMPlW6UzzzP6N2hzTr7BbgdmM5c50RNoKR1Gx7kosbyl2qxmg1M7SM0oTyy7AiIEc=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/gFq700EkM9lK3LKhMcfCSUXdn6SWJ6CG7eRbiEOYIz0fXSb4hfGEfdxprysHcz5ZMZtCkXhh1NmNeXOuax889Z63OumSBAlZ58XThUU9G5RJTtrV2UyKKjpxyBJPqO-SqsmSR85GV7I=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/9smB0LbOHKoWvhwpgkvxzJXZ98aLB4bpsZHIDQERSISzPdQ36inh-33QrVjsGSkHVBtI_997dQX09qW_anJKDyIr3ETMMxuxAMKHJMUdSj-30zhMXsD4U3NOW-MOhAmwPdnT45TqoGY=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/eYoXms5MfE8kVNmRTOuxqJwwcWBqGxRy0riL2P3Q8M1FomNgDHebA_e3LdME8ZjKQAhM63GfMfk9n-orrcYdHONRoMRJQEWtQtL4eAPygdQVniYKN6PC1Ku5G9y345XSQcnt8h5ajQ=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/MxwAtxpQ9WUlG55Ub_vXK3ks6bKy4CYZnCJ2zPb8EOI4weCdCuIqPs7DQ8zb-Me1xyXnVicfSr-4ZSvucJy8BLFud38oy1H1eHgx7FA1eEZ8aavQpAcWWiBlKEsFg1tJ33JcUJONhTM=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/ER9HH-I9dXtDOCK3pDM9xDJX9FGyAc0iZqJQ-C-FUryWjSpwOmFdqZwnpmiECErfZzwS5EhtUKlZy13To9xdTPBFyTntoMG0yr8limxZt6lmIweAlQE7zSQqQFpQNPmC39wg0jm_aTs=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/IPJ5nO0tccaf0nXQqNqBTHft6YZhLBm2_LeG-vzhDkYRrzu7hzzKCnob5XMPCRiq9-2SVsPJ1aJt0Sp6F9QZ3NYJXV05Rj2TTX5gcdpnHMP_coE8GlXjMDLTAllMXcDJVnW3zUsfYFw=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/w1mNjTTsUMMlLhptIdTpMWrsmqtxm_AmP7DJTrxCzvqiGpWw9NF8SGv24c3lF4UPNArG_qfdF1_740ONOph8wdW2VPWq-zGfbdjKTvIAmxIBtRlWTjwgXOiG3NNd1yFLHW5joMRR_UY=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/a_pXv68Il2-Z79mGOjZheDNcQR0fZEC3G_eYL0N74EoZnTtwZKvWG4XiyDnddmeH2dDKqbS6Hcnd4T9Fp8ZRqMeAmzAJkKD3NFMC68Jqmm7icXU-fgo6lFu86sWjN-5uS4jPh6ZLig=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/eCBiV61zbQk7sHDw7PE7T6kJf0q1qJ1ci4qnKsXAODj68tM40mUns2hPA4uWElnhbfPv4A4vey6o_VzDJL5u0G6cIDHQpTSlJh0EOGYhhcIBJTe3IGNwixGJQB2GtfLBO1qfHsBOZ1A=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/f25f9bK0b5d4ZtoFyEggy5tm8MTeBNVdqO3YTsszkmCllksg3rR5ivzU3SlevQpwERTT8JSz0ERWleaQkWbbl9SzaLYav7FkQtXINCAlokH_EoHmv75U0s47u6XGCMwGM_JhGBn_h2E=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/cFUy3VLPcwPBOP-UFYwc2l5dSsQqDdY9W974lJWCfvYD3vxmijZHzHXRsqKiN8-orvcY6AdfjYsa9Ns69nJy4kIMS56G0q3_8J0Gg6_dzc59oVGnVo85VGMJSmC5S0Nw2Sk3BrHYNA=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/R12Le0NGP5ha6fAndmwA-b5RbXVvaOQqWU4RNAew52zP1lRq8NjgjyHsk9MDH-AHRkio_ekNeM6aFSbes-uRm2wgdf0CHGzA58mUWHuzqQWzmfSTqErHp0RFK7lw4pYaVp4EeOR__s0=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/sV-I9VXiuluhvlRTF-PzgAtQlosVrBohFV3zXX_22kdDsIW2btLxHXICcLi7j0tjQWStAzLTwHsVgSPszXfFqCYHexJbvrxDkc_2vfATroivo5QpdI0aqZtTFV7S0xr0xeQ5hADJtoE=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/uYTemfHDqEt_i9tEAE8JfSkcNz-G_4Ezlp3XO5GkPh-WOgOMsor7N3GCVk_4zLK5B2zeB56MRy-D--fP7lABeHosp0C4HA-6wuM1uQ04XKTMWkV57jDkiq95FCS_z21mPIMD7kvx5b0=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/fKb6YWwGjgNnOJ8dtntgRVKoxmwVSjN2jcrhVJs_Hk2hRnvtUrBsyoY2qlgtUcO8uAzK30hACuZ7nLQXkOpGePTFzlnxGQ9t3ciCHqFfKSQDYMUrePP5CCHArXv8HGCBpm1Ug9txtZA=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/PC3XjZSyaVDPFknoOdAydqg0RNln2j62vH1ZGSnfko-4bQj2NuVzHTh4V90axkTTslZ2rwAdEQMGjbPP9sVaER0EDMITij-I1kh2lGNtkea_Z1Qtq-yNG5dJapWYcm5bgq3u4jRpAQ=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/FNS52jt4yeHLgEJRRf_BNEqvsxCkU3IQuc4EXBx9H2q-Rz50jsJWEh-mm3Nm5ZI5gRzvU64_QPt1HsEMvAa_2EcgODrsegFmxj8DHZKrNRZ2BBU6adgPa9q3yJc-J3FNn-5ROFHT1WU=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/tPdU4Y7pkv7DIQWbk3BL4uARLM-G13fEQatMZUudlOZXO6y1g20LVnKizt1PN5Tw3Z4sKK2LLtVDzVBPaFeQYwjC16ccQoMS67APMRBnzp8060cJ2qxPGxlMz9CEjMH-b3IzgBgUHh0=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/FBUMTJ457GklgQQBySPK901FoIIutuAOpy7uShHl8xHeWtxFT8PL17COvqF8xGBMeBvWCmxs07bOoGVAF6fcj2G54c6j2pAjsQBkU8JFIy08EqIUwX1j3vYvBw9QczUV2l82LKjzwhs=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/D5biTsZXQzhtCk6Qv_dmtZxOvkqHo6LJwFiKJza8Xz8rOWaOnc2fk5Xu1nZRHY5ITasZv4aHSFF72FYS68V57GF6uSyAl-Hn0auEDv1j2h58L5335qpEx-gL8ulJUFR-rVybFFh5eQ=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/EB6-goPWeZ2CuFP7ka3JRizua-w_6voaGSDc2QQ9Q_DesnH559I_OreoT9hwlt-jOK8RrErLKq9BMhKYJxkvDslToarobrpZbyqrWsEMYm9h148tJpPHDKTEOrvNGvM21DIamiEVMBE=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/kSJIpKu_0C3dX8B266lkIt-dwOn3vVB2UwFTylQvTILuGSVCghp2ylEwjr_3KhZpSeZ64hWSTX9-rEiSLV-IfQk46pnMiKo8wsIU913U5wSdL3YMe9WtVVftMpQHG42SGqFETTDeZ6M=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/Tt7FBaseAh2jpoaXVD_xeh_OF4zomGd8Omgr9chIZOFT-lk3VN07XwHlAANUeFPNoHqvtPT1IjhLp4Jt1f63sUvCEvDn2iCb_S7ugpuV9Azs7Kyd3G5eseFpqyrgTsoCfraqHAAP7yI=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/W2IEuGQFdupuFPqGRwP4W90RL6Eg6tDukU759h31GRonKhj0NzxsMsg_TDX8E_d12g3Xbs8B26fkjzL-y8J2YgkuoIk6D51rCdksHEoD0gDrj9dBUQQ12813rhq-9pfdTa5Dt6sAVQw=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/0Vj3dcK5eBQn_Bb4A8dcIY4xCd1zTLiZUce36UBvrT5Ac5jWJ-YohFRMkpLcMbJvzXPr1b22dh9CP34dEJVTdKWsvlSKJHIu32xIiPYd-Tgob8PClJDx2NeytOTsC-ejQ0iaZ6TJ-Vc=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/0SwA3iEZxJW_CLz1oTet-AUr8NRzKfZI4W7M55udzD8tjQVy8Xsf0RKaKt4qaqJBnUBeZRs-pF3nS2PLKPpLvWgmT4Iy8CA51lFAXnBaDRor6oqTMk7qdFlZuLsK9NclHE6zbjO1a2o=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/ApcuL5MXiL47-5BrnOMG_xOQgm8OUoudOb1bMWTAYyVEvfAyaMP04cDGPfsa5G0d6zHTZGH3zvr1dDrbM1BVDMIY09bIuGRKPozsl5YH4tDwUFO2fPMU1wEgwX9PTk7SQZp3DYo6ktk=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/3KeFe1iY-Hwh_Jp0ov1OtPDBQwmJRWkvoYv0NnwSc9W8uFt4bQ9ycoolAPPZWQA6eFdyTpjGSMXHKVRy8DGe3__F7HHaICY5H88b_mk3CRx2fm-5zQ_xPllhLf13qNYVy_E77zbF4vk=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/xJL19jlR4MrAw8A-SiZ-5Y27BTk3XqalYK_fQFD723YMGTmy3ZxXyK8Z9T_6aDyk_7_fkTc1ayUMhvRVfefoU4HBrzbSTHL73_S93A263xKbLC1GHJpL85EP1zW5YTQYx8LaXOs0WQ=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/2nrUQEZbCYGa_44A0oKsxU8lQSRiaLlWeX4e0RA9a9mAL1_PHbfFvXUC8l3fQuczxx_ZJubh8eq4GtongAZe7a09cZstZweDuNvA-kKfXA8nBZWAQ0znPRk3gdXlDoAlnfU8eoQHevs=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/jJDKdq6jhBy5xG13I8aK0wHcBQ02he982CSWydCRrMRgON82Db6jHd-P7FRf13XVhUXcFaM1GI2s9xHc1m6INEApSoHfouzVgfLNmdOTuTdJYYoTsbEfW2asdTHjLLh9JsTnQeUoowk=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/4IQPyh7jWpPCip9i6YeUXWebMi25crm0O_MJYR2jkHZTOtU7OKgQZR8nKGJvO4iOb8Kq5oOGmo968AMeVMYRwb_fhXtHBbsEpCwN96pCov45FF5g8ogMNQX9G7WiDcwaLwtu6ozr2zw=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/TOY5HHJU5ko3NFO0zzFKF6I00V1ZTh45wXpw1ISPGnRSSCXtKsmb1-uHzv7WU7qynFzBnk1_b8TkNVob-9bxtHmPb69B3baP4NFoOQQHjIUIygqiaORCgyLITbpFLkfmDGmUHv6e7SE=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/EuX7lMEcTws_yBcv77Q3bPedd0Dtl8082dhMfJGv4ckXHDJhnrgmxIFaTVDKJEhGy-rxI_NcJzUy57JXXM3cD-CCHnlivJrNWn23Y_yPfqbEeXYFIiUNVJ93AHIABj3DEoU9VosX3Q=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/HidWLfM9s-mweKD0bOpNgNJP6H_0Vlouvf6pKwVF8R2z8yJdAJ9t8ExIfJ6R9Nozdef2CGn88mSnV7Yu2z3nNOdgo7JLZF4o6nbLR3W7CgADpfdHgt-UNMqDc7h6MX_SxYMaqmhlbw=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/isvNc3b_Uz5gAPtJzB5dYGAarDIoJDGHENN5Tsi67KK3bzPoXuDMcNEbDMmiWL9kg4kQSCFgt3CcFo7enGrM7YtcOG6z9zh5Xc8tgDYI6fiDGQKJ4J7ZUGJW0vBhEfoC0Dl4psl8wjg=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/dw9Hly_JIw1hUuMfAlxNgd5qBE6_LlzwwTaaAFAf8eR4e2hoKHy5QZU9DFoKWw5tLueKE6p3Ut5YEbhDTshfSBk6CF6104veItZXUv5G9W4t14Ce5tPdaRQtBArN5Wlz-puDW6k7g_c=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/keDz1xxKS2PjKqrXKn2wAhbaYfxqlEQNDvrkepoY2dS7QcKGYQyN7_7RH3XJLgTOufwPt7izB9Zg4goqu-mLfZnWbNyjnkT66RSwh7jxMKZuFAfxbFKya-I7Xzgaj7qFI5th-qNnykc=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/7pO8xR3IHAUmo5IAqhtcvbHZUT_lxLvEIs6ymGxZOe1ww2MANgaattuoJ1k53bwncanfJ1nVEDlaCdwBqKO_MGNA4BkOK6xsgwPEofgPkGZh1-SLSj7sjNH6Gzlzedp4TsDoovhQUtU=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/2znUYGZTrAHBj6Z6xXmHfa3yWVaN19X5_9i2V-IXYhQCX5NDdsCnAxcrfoacKcispZTVRE-okyhHIKjA1GD-aDQ4u9YimyM5pgi4KJ-75GnB8cyXOae6h9AMy4_loYPz1K9Iapv97l4=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/hIohH9K1kmAjEqRwI-lkljh4h0xPUHkhoKy1lJ3VPcnopU-Uyqz5k2SQUz6zTqW8iK-DOisZj3By4144nq6nhGA3kmaASPxVXDJEGoJGlro4B8Nxgx66sYHNaG-BfpZes3VdXuWatS4=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/7JM0ukmfN820ClTck4bI8g8OnIS8fr3zh-sEitxSF38FA4v_jylg5itu_jFQbA7AxHKhzOOkS7yjNj4mxuENu_Y_jkdsqTeMTRhCsMQ0mHvrdI6DoIjUHrR1UJutbisX-1kMwUnqviI=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/7Vul7ZWXSVxRMuYIK_cnw9lHabbzkXWgQt_SS3o-mN9A2-xja45lXRwvlf9egt5fw98gaQ-ri8e05DrDT8bs6VCt6p-IcSu7Y3PZmFpwq2Yrni_S5iM9LJ1vVJ1n9KGHp4GL-GlllME=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/9fr8tunAH0fhKktMAZmZAB8ijoyueytVQNsPeOiuYDNHx-OrMCVH2HmQcUC65Qrb9pcEMNuwQ_uZUo-JuqnLdEMAIlITLP7d7hwNhAIQtjValKuX_ikQF85T9vRxh6kXYGTEMnKNKOQ=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/gCF6CZqcWB5SwMaUhrgwRBYVUdahjuACnRptiu0caN6qa9zU6cS7zAm53LhLVWlCAVpHCKX3dzpcrG6IR97kGs3N82rNo2UHBYt6w5o6w77-_RuWelavLqwj1BixHXbaOJSMY7oIKCQ=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/r2QOt1t63z8QPj6Hj2QXFpGK3V7CaqNf-RgRcoNll9VQWbj1vZT4XdyDK4COeyFIDM6DCskU4npZtn7zYe_rCg-Tg8uGak8BpsI3HfmS9e2g_N5uTXqi8dMDnV8DiYH3dj5-JAcnrGs=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/vwt0gbA1trxIQNoT9RqxcPIa6riDL-msCijYGTF-EAyL1NERvZcCRRN0CUlgHW19usHU1wPb5_TMmdqaEA6F3IMexCLDsuF6YmWT9YRbXuPff87SUTJ50NLWZogQfUPcxcJvGV05BXU=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/880ifvXwfI3sNQf4Qf4DTyBwocygOrs8FZRx3K7Y4SD4qEvvrp5Dq3TUCvSfzqvz1aEJsSGj1g42bmIB_7dl2XTnKf1VykGjh6EF306kl9vhEqW7xnclwynoHh-57Y197QGmub-o9wE=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/ud24RufpMQI8ae9t7y1j96u4KM8t91G5r7rPSC2WCsBZcwz3Kwk39c7KGgzRRKwv3VZtE1SbXTLbMk0_CnN2PjYbRUC5NASQoUrVv4rrLAIZIqFLEwsEoPy_vXjhhoRMbzWpSp2kY3o=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/pD9JtXU6HYpLqHhVne7H9xiMIvy11oUWrU_kFONkDFO52KeUzRLtVhIdXgOgXBwE7G1IEhvkkO1pY68vJE59D2jS_rH8at0XK5c4vPTG6FVAgWe-gkhDzB-ZQXWm9JjuWHZB9ck76kg=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/c7b0XOplHMUAhaUR1aTv1V7qHF-vdkvF-wfUSglPGAEQ4Qu_YIOeGdQj3gNJIBVH9T6TDUUAY9C4FXf_lg3ZwAB0Drmdl--I5Pn4kUXHqFnE4VW3U8_xCME_KxGxgnYkIyFDspMU4OM=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/OUifr6ZWD9o_qPFMYHddM8kGMHXNIRR4N_5COWY34eaOB7EeXBZ_wth15YiHYFDdnZ6K_FxWRz_n7c7r4XxR_ZJV2Ginv3-F9cl5b4Zez_qGpfqbDr65XBsH2vxvBQBiPmK-VDNWA8w=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/J6Y-bpci4iyOzwS5B7XDRpjZIlHxTVxkUoAO4hPt0F1XAzJokwGz5A7ncTazQ5HF10qZTEBzfag2NDOYjJUuhc7XTRs5GbMyUc2xY1NQpwky5q2aHxjKJxcUVZBuby9ZKja3HKx7ZPg=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/lel84P83ZI_ilhEkNM7BpraaDFqRk4Zhv9LEXEjDue_LcgTtt54tQIlkqjlZBXPhttBW_gfBZRiZFwWNJnBCHoAFmYZCv6gcC5f1_SnbH1oLOzben5miBYaXCAjRGoIpJLW7qvKY5DQ=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/SDbGlY_kyF83oSXVBVh13GHUrBxwzx108QAE78_zf0iPw6h1UZa_XcNo3gwbcydkOJNhCJEsQaWL0_vE6psAvc5OhNUtYDytbKGvyYZkX-Qsu_W-1ZHIIjAnKjlLplyC9N46vOOKpBQ=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/A8vVebnhB3NULTeYEDPfginwh9Ik-L8G2I6Fln0kfGVmdwA6LeO8U_nJVRL1VKAeU1StUraC6RherxZZnTQDS-pKU25XLS3E7IBplIyChCt4UKHzzwvlBxmMHDos5dC1ZyBRLuZx2IE=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/T2KZenFKLbAZxKjdSgnHPXn-FX1-n_F9tVkMwv3XPXuw8z6hXWC5VJFUiI3NciLwo8AFNq2KSDbksEgvm-3W2x-hmUw-5zfiItmrROzok0NenUeR7JbMtc5dgj7kjQK8zGf2zsjaErI=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/f-Z0Z8wff7ibz2uyfT0B-Sh5ozmGEl71F9XvXUwDa7GE-0zXsCsMzpCfVJdbjwKJ8gOKd4Ii6EkKXe9aIwd_PtXmlFYdGwqc5OMXtehB69JHVZcDPwB5NAAoZq5ft0Hl32omx0GPw1g=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/4orUaY-s29X3482HTWn5BhmwBWzdeb-J-UjiIosSgNWSztzp8zBr3RtAr6rfJ0GVqK0smsMOO2oqjEses5J6N1vPXS-R9EXknuYf-ctx8EpVO0RUa_5S1kGCz3J1LWWyccSuqL8JjJs=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/r0-yeDnsf4yR9pYuakGyt7hy9o2ZwVbF-e9K_7z_H1THmUwlsbgSLWl01VjrdWJxpsI8xWOy0QZ7IPB9jsB5c2nq2YLLt2kmV9skM750wl0MyDVPmCmAqMiBrxkmgb7ReTjEhewWmus=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/sdUymuXAomn3bTDKY10STezg2ESSLoo85VlmpUREgBv2_lcvELm2A2mb_Hzjo8OQsRFIR2e7qFNAzc7l5him0Q5Vg53lcuOInFkk00cQmMlEwgdPpCZ8-7z3V37VG4rp-swsChS4Zy0=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/zENJMsoxxoMKU-tiGfh8Qdox3RRMFlbHkg554f_EGhOx6gTdBgtXs9rA3HJIKdo_ymWX4PlnsbNVYeaLe9358t6Awa8lG5c9ylM-0AI32wBSSVuyfSO5EiENOQ0WKZ70pnRoqCyrXaM=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/PtsP0_puSwy987qPaP92BXxRFh8qw1XgA3IxurpMgmfmQKXUVwLJce6UDPjm9BwLPYJy9KWnW8-6G69S2XCjR6RaxcT-zcutt6bjztV7QGdFrtQDWYZKvnKi8nKY2Qnl6eRknuadGqI=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/JJDnwlS6tJ9z_jKnbDGdif2w32-GvGvP7gMn2Ou10pll1Sac1JCrFpPRMQ4RQLoLV73SZqOUGz9JYlgkyWkosiVZh3tyMBToC7I68AjuLzo4KPEhiWmvuQwZfiKbfPQhMfY7FHoBxXw=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/IWWBc5Pf_LoqIvUBIuKYujyTnmwV60lCQlKCr73CoZlyMCcQQIS0jWfH8FGdA5HfYQFd9E9Dis1_YrQYWlbf3RbqQxJnl7sKj1BSZ5yJKju5BhLFjPk5CsUvvyhFx8C6l6irqyxn7g=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/iQp0v5kJi30OYwELlK9oANfA5Pcm9N028VCA8oJ1ohn-C050kDBfqSGrO_Bs_oEvCKPAoRDzzlfflESeC9hxzLkEGMTmEQfv80gMBf5XIX26jM_iX4_Cvf-EicAf9NJCZTvJs4ADjYU=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/hKiU57_gLd9Io-h3-1hlclnls9BjZ0Flq2BGVJM5RD9Cr6COrFBOVHmQfJdT9dQtluzIe7mAitlHmkYp4kVlFY6FarVJzE-GfDHlodQUkIfjVv3N8wBjJv5WkzydDE0JXU1DGH3Km84=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/Tv84mJZbYqdDEKDBm3V2nr_N_Rz2R5ho3AOlh-rgwdD3vcvi8H0eSkg8C_XL7rKiqzTJVFE7hpxlZbr5mC1cYD6QMZ6_mGvjf5PR9ya6NA6J3rMb2WE4c72Ag7O3-1_RQ3hci8ZGDGE=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/1FG5wIDxb_uaeNjLTdJTSsCulI_6tfweCMD5R4vecBmsuW14DteOxkVWutOcT9ZzTtUBfGqgnriIe0nZ6ulok9eesbIi9DwlFtmPf3j_kuy_TilsNGoHzI9N0hszoLj68Eb0VGkDfQs=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/lsL0qv_5_fOpbB-cCVOl3EDRufn6G3KRMO-2T_XCd9bcVZNhDe6Jm_XwThLfWMy3XFgzjyKvA6sIGt9hkVEwZIAGfAjCYr-OTTnygRCFeTZ331E2FtD0HEyJVkwY0oybbhGXuP_VSF0=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/m6TIurW8oDI8EdF-NIGJtJyrrKyozwAHL0EMmnrqjxgUxjJf3CZI38Y8w-T_-WdAA47YQHP0iKnGhiM1MopiAKa4O_Rocxy9S4VowiMCvqYS2tAP7gqN2ds4YqzGfwAARmWS7x0PvPY=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/lNoxW902LzjNDgoOjb1voVcKnAT-P6sSvGSWn19NO4QmGylX4AIX_MGjN85BohX3pnXiXp68HiYaFeIQE40m9JZyQwPZlsL4qiCKGV8knX4z4L5JOfG1ZcMbnMruhEytw9kzzfH1hTg=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/2GOo7552EWXCIPvaqE1GlkXyaOl7kFcX1mroDcbh_L2KPJy1b9jWfuaLVuc9eTjD-wS8v0BwidZ9x_mKy-VepxskADUiPatxpkspYkgyjYXFvY0V1Zs7SluREQnG-2nsS3ZW9ySijUI=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/URxQEKBfTbv9JEHkKImJJ-a4t1pQmRczxPpkFhdqMLD_c6xv_meW8kMCLHgTJqF96ClTFsxgMeVyL06-wP3mo1tm1kyB10hu82dc4SVSPsu0Wl5YsUqJ2P0SWuBCyIfupPrjSgG1cbU=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/GAbWBQZlPHRqgmiBoi047Cq_n2eb4RFgsFQdsK-ABQa2LjlkEB8mj3Q2GmGZSNjz7ZRogmZ-2Gv9VFcBfcm3_XsoriNWQOAt4FZAZ_ANl5Cbn6Po-PWAw6-ai1Ji-ggA1tjSoGtB_Hc=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/J6zA5x8ef11ySDzT9KoXiR29_FppoaSSCVhCWAOar9Fhe920Z5FjcCVG4ffGVA7zuTc794A7hjNKwqQ-ZmdgceMi0AovLssd4zZTy2fWgphKXBwkKQSq8RLKlvHhmLefSEnruHrO2AE=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/DJ_fsoJdUPJ8UOete1nuevi7XFz4sBYnGZ9L7i1Gvp6Tn6feXQ_zOKMKy9umqr-R2kbYQSOugNRoL_-buANQLTQttneq8uAJ2TSBftp2DOfFJeSI6cTQ5a0BxdZjTXPhdaUXaZbazOc=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/lMkVsePJ6nAhlMrGCARMVdhp1FTDNZpTWffMFVfofGR-gGBI4RzNZCpcLLV3X0jsAOmWIkhW1eaId26vCfh3n1SgZiIY4g5ItB_QJvr374E8htltaxkNgnELY-1Jy7cFy5MitoQifkg=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/m4Rrrywu8nsPN6-nm-92GK3KPtGM8--6iaO7JH1WOuQSclQwXkDCr87idr2gvzj2GkCUtZTrp5kKpmGe_I-P6ZoM5QDq9nSL4g97BYapj03jrd4SsXTYL9aJJ5X3efCwSAef-HdhHy0=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/UzKx5hbFkbfU5bsubpqQjk7VJqG4U64mTvJ8Yiinn48x-Pk1mjbM6UZ06BjUQ2tuY8nSnN024j3dxVnu7HKJPdOhmSCxU0yXDx6SQbsidabHSyxKPvDUTlnylCOixcsNnq73qnp8ww=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/EUiesr2PCrMGiRhux6w8OVrbQ8RlmSWcWCrNogLn58SSOF_-gbwAcg_eVNL9pIX3AwhPSGVhayeAM7BrRWAh2nCp10a_9tEArbBSas-93t6qW0DIXDgL2rNOBml-D9m8uZ3ER1CD9aE=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/RX5dmioYRBLQ7PVP59NM-95DKMbCshdzbLP65wL7w7HpARcRhz2el_lVUYykij2QVT6YIz6JIgQuBlAiUfatQHpwVHXrYa869nqchZqhg6nROUgbiZ_KQUFRsDxXQmOJtUbsdSRfVw=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/fj-go7UYiau2_68jLno_r1NEMIqQdIttR2kdXeqWP8aX35LuJdiwGWaIsicAA2tCZEfu-zd4tVj9mQVNH-K42G1DjxkXIuAVUf8Ac_fF28ljHOFIjD2qyM-MJnJU78QbKHAwUkoiTU8=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/s5UIYFAkxNRPbbb6VA-gCGgvLJb0Mh5y1gVjovdvElAoWdENyyxy7jwUgEbWwkQ_qon41-5R2PQgne_CmviiGe-7e6jspFwtxswGpPZehryU2jP6gHfrPi3QqEOFgkXAh7XbJgJHylQ=w1920-h1080"></object>
      <object data="https://lh3.googleusercontent.com/TKSMZhcBeHcP4k4cGltQSzLQOnGwiRegIBjbHVKJj0NT6L879lfhy7l5cB9EvKigavfIzI1BRcdaR0-8wjAHAtVXMOB23VUNmHdCbyDG6l1wMKeFFZ4B_TWWw2_6Bfmo02sQ94-Bao4=w1920-h1080"></object>
    </SlideshowWrapper>
    )
  }
  else if (tripIsOver){
    return (
      <CountdownClockWrapper bgImg={ funnyBwBackground } >
        <CountdownHeader>I really hope it was fun.</CountdownHeader>
      </CountdownClockWrapper>
    )
  }

  return (
    <div>
    <CountdownClockWrapper bgImg={ temeculaMainPhoto } >
      <div>
      <CountdownHeader>
        {days} Days <br/>
        {hours} Hours <br/>
        {minutes} Minutes <br />
        {seconds} Seconds
      </CountdownHeader>
      </div>
    </CountdownClockWrapper>
    </div>
  )
}

const PageWrapper = styled.div`
  @media screen and (max-width: 768px) {}
`

const MyCountdown = () => {
  const temeculaTripStart = new Date('2022-03-12T14:00:00')

  return <PageWrapper className="App">
      <Countdown
          date={ temeculaTripStart }
          renderer={ CountdownClock } />
    </PageWrapper>
}

export default scriptLoader(["https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js"]) (MyCountdown);