import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import { Link } from "react-router-dom";
import useStyles from "./useStyles";


const ColoborationSection = () => {
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <Container maxWidth={matches ? "xl" : "md"} className={classes.wrapper}>
        <div className={classes.text_block}>
          <Typography variant="h2" className={classes.title}>Start Managing your apps business, more faster</Typography>
          <p className={classes.descr}>
            Objectively deliver professional value with diverse web&#8209;readiness.
            Collaboratively transition wireless customer service without
            goal&#8209;oriented catalysts for change. Collaboratively.
          </p>
          <Link to="/users" className={classes.block_link}>Learn more</Link>
        </div>
        <div className={classes.img_wrapper}>
          <div className={classes.img_block}>
            <div className={classes.img_block_picture} />
            <div className={classes.img_block_bottom} />
            <svg width="686" height="59" viewBox="0 0 686 59" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.img_block_base}>
              <g filter="url(#filter0_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M85.083 0.117065C89.6487 0.117065 604.912 0.117065 608.174 0.117065C611.435 0.117065 613.685 1.33722 615.348 3.37861C617.011 5.41999 684.454 76.3375 688.398 81.6556C692.974 87.8255 687.826 94.0494 681.224 94.0494C455.795 94.0494 231.671 93.3971 6.16289 93.3971C0.733143 93.3971 -1.6639 87.5263 3.55396 81.0033C8.77182 74.4802 72.2593 7.05242 74.6473 4.68322C77.0353 2.31402 80.5174 0.117065 85.083 0.117065Z" fill="#F7F7F7" />
              </g>
              <defs>
                <filter id="filter0_d" x="0.651855" y="0.117065" width="695.49" height="101.932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="4" dy="6" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.33 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
              </defs>
            </svg>
            <svg width="624" height="47" viewBox="0 0 624 47" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.img_block_keyboard}>
              <g filter="url(#filter0_i)">
                <path fillRule="evenodd" clipRule="evenodd" d="M42.6246 0.640015H581.431L623.179 44.997H0.224609L42.6246 0.640015Z" fill="#F5F5F5" />
              </g>
              <g filter="url(#filter1_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M188.09 35.8647H392.914L394.871 44.3447H184.828L188.09 35.8647Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter2_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M396.283 35.8647H445.296L448.361 44.3447H398.133L396.283 35.8647Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter3_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M448.468 35.8647H487.082L490.761 44.3447H451.857L448.468 35.8647Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter4_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M490.216 35.8647H528.177L533.813 44.3447H494.257L490.216 35.8647Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter5_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M531.311 35.8647H569.925L576.213 44.3447H536.657L531.311 35.8647Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter6_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M572.406 35.8647H611.021L618.613 44.3447H579.058L572.406 35.8647Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter7_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M515.548 28.037H603.724L610.785 35.2124H520.031L515.548 28.037Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter8_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M475.105 28.037H512.55L516.853 35.2124H478.313L475.105 28.037Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter9_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M434.662 28.037H472.106L475.105 35.2124H437.218L434.662 28.037Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter10_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M394.219 28.037H431.664L434.01 35.2124H395.47L394.219 28.037Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter11_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M353.776 28.037H390.568L392.262 35.2124H354.375L353.776 28.037Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter12_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M313.333 28.037H350.125L351.167 35.2124H313.279L313.333 28.037Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter13_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M272.238 28.037H309.682L310.071 35.2124H271.532L272.238 28.037Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter14_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M231.794 28.037H269.239L268.976 35.2124H229.784L231.794 28.037Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter15_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M191.351 28.037H228.795L226.576 35.2124H188.688L191.351 28.037Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter16_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M150.908 28.037H187.7L185.48 35.2124H146.941L150.908 28.037Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter17_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M110.465 28.037H147.257L144.385 35.2124H105.846L110.465 28.037Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter18_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.1419 28.037H106.814L102.637 35.2124H12.5653L19.1419 28.037Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter19_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M26.3174 19.557H93.5051L88.0239 27.3847H19.7408L26.3174 19.557Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter20_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M34.1449 11.7293H89.5911L84.1099 18.9047H27.5684L34.1449 11.7293Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter21_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M96.1144 19.557H132.644L128.467 27.3847H90.8424L96.1144 19.557Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter22_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M92.2005 11.7293H127.425L123.249 18.9047H86.9286L92.2005 11.7293Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter23_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M130.034 11.7293H165.911L162.387 18.9047H126.067L130.034 11.7293Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter24_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M169.173 11.7293H204.397L202.178 18.9047H165.858L169.173 11.7293Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter25_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M207.659 11.7293H242.883L241.316 18.9047H204.996L207.659 11.7293Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter26_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M246.145 11.7293H281.369L281.107 18.9047H244.787L246.145 11.7293Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter27_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M283.979 11.7293H320.508L320.246 18.9047H283.926L283.979 11.7293Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter28_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M323.117 11.7293H358.342L359.384 18.9047H323.064L323.117 11.7293Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter29_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M360.951 11.7293H396.828L398.522 18.9047H362.202L360.951 11.7293Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter30_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M400.09 11.7293H435.314L438.313 18.9047H401.993L400.09 11.7293Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter31_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M438.576 11.7293H473.8L478.104 18.9047H441.784L438.576 11.7293Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter32_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M476.41 11.7293H512.287L517.242 18.9047H480.922L476.41 11.7293Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter33_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M515.548 11.7293H551.425L556.381 18.9047H520.061L515.548 11.7293Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter34_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M554.034 11.7293H589.911L596.171 18.9047H558.547L554.034 11.7293Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter35_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M528.594 4.55389H583.388L588.996 11.077H533.813L528.594 4.55389Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter36_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M491.413 4.55389H525.985L530.941 11.077H495.979L491.413 4.55389Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter37_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M454.231 4.55389H488.151L492.455 11.077H457.493L454.231 4.55389Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter38_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M416.397 4.55389H450.317L453.969 11.077H418.354L416.397 4.55389Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter39_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M379.216 4.55389H413.788L415.483 11.077H379.868L379.216 4.55389Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter40_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M341.382 4.55389H375.955L377.649 11.077H341.382V4.55389Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter41_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M303.548 4.55389H338.773L338.51 11.077H303.548V4.55389Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter42_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M265.714 4.55389H300.939V11.077H265.062L265.714 4.55389Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter43_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M228.533 4.55389H263.105L262.453 11.077H226.576L228.533 4.55389Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter44_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M191.351 4.55389H225.271L223.314 11.077H188.09L191.351 4.55389Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter45_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M153.518 4.55389H188.742L185.481 11.077H150.256L153.518 4.55389Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter46_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M116.336 4.55389H150.256L146.994 11.077H111.77L116.336 4.55389Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter47_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M78.5017 4.55389H113.074L108.508 11.077H73.2832L78.5017 4.55389Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter48_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M40.6681 4.55389H75.2405L70.022 11.077H34.7974L40.6681 4.55389Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter49_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M43.9298 1.29236H96.1144L94.1575 3.90159H41.3206L43.9298 1.29236Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter50_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M100.028 1.29236H134.601L132.644 3.90159H98.0714L100.028 1.29236Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter51_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M137.21 1.29236H171.13L169.825 3.90159H135.253L137.21 1.29236Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter52_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M173.739 1.29236H207.659L207.007 3.90159H172.434L173.739 1.29236Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter53_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M210.268 1.29236H244.84V3.90159H209.616L210.268 1.29236Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter54_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M248.102 1.29236H282.674V3.90159H248.102L248.102 1.29236Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter55_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M285.283 1.29236H320.508V3.90159H285.283V1.29236Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter56_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M322.465 1.29236H357.038V3.90159H322.465V1.29236Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter57_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M358.994 1.29236H393.566L394.219 3.90159H358.994V1.29236Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter58_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M396.828 1.29236H431.4L432.705 3.90159H397.48L396.828 1.29236Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter59_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M434.01 1.29236H468.582L469.887 3.90159H435.315L434.01 1.29236Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter60_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M470.539 1.29236H505.111L507.068 3.90159H471.844L470.539 1.29236Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter61_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M507.72 1.29236H542.293L544.25 3.90159H509.677L507.72 1.29236Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter62_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M545.554 1.29236H580.779L582.736 3.90159H547.511L545.554 1.29236Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter63_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M135.905 19.557H172.434L168.258 27.3847H130.633L135.905 19.557Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter64_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M175.043 19.557H211.573L209.353 27.3847H171.728L175.043 19.557Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter65_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M214.182 19.557H250.711L249.796 27.3847H212.172L214.182 19.557Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter66_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M253.321 19.557H290.502L290.239 27.3847H252.615L253.321 19.557Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter67_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M293.111 19.557H330.293L330.682 27.3847H293.057L293.111 19.557Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter68_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M332.902 19.557H369.431L370.473 27.3847H333.501L332.902 19.557Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter69_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M372.693 19.557H409.222L411.569 27.3847H373.944L372.693 19.557Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter70_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M411.831 19.557H448.361L452.664 27.3847H414.387L411.831 19.557Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter71_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M451.622 19.557H487.499L492.455 27.3847H454.83L451.622 19.557Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter72_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M490.76 19.557H526.637L532.898 27.3847H495.273L490.76 19.557Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter73_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M530.552 19.557H596.435L603.61 27.3847H535.716L530.552 19.557Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter74_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.857 35.8647H92.1354L85.6772 44.3447H4.13867L11.857 35.8647Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter75_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M94.9811 35.8647H133.296L128.467 44.3447H89.5913L94.9811 35.8647Z" fill="#F0F0F0" />
              </g>
              <g filter="url(#filter76_d)">
                <path fillRule="evenodd" clipRule="evenodd" d="M136.728 35.8647H184.828L181.955 44.3447H131.991L136.728 35.8647Z" fill="#F0F0F0" />
              </g>
              <defs>
                <filter id="filter0_i" x="0.224609" y="0.640015" width="622.954" height="45.3569" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0983639 0" />
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                </filter>
                <filter id="filter1_d" x="183.828" y="35.8647" width="212.043" height="10.48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter2_d" x="395.283" y="35.8647" width="54.0773" height="10.48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter3_d" x="447.468" y="35.8647" width="44.2927" height="10.48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter4_d" x="489.216" y="35.8647" width="45.5973" height="10.48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter5_d" x="530.311" y="35.8647" width="46.9019" height="10.48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter6_d" x="571.406" y="35.8647" width="48.2065" height="10.48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter7_d" x="514.548" y="28.037" width="97.237" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter8_d" x="474.105" y="28.037" width="43.7477" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter9_d" x="433.662" y="28.037" width="42.4431" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter10_d" x="393.219" y="28.037" width="41.7908" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter11_d" x="352.776" y="28.037" width="40.4862" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter12_d" x="312.279" y="28.037" width="39.8873" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter13_d" x="270.532" y="28.037" width="40.5396" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter14_d" x="228.784" y="28.037" width="41.4547" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter15_d" x="187.688" y="28.037" width="42.107" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter16_d" x="145.941" y="28.037" width="42.7593" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter17_d" x="104.846" y="28.037" width="43.4116" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter18_d" x="11.5653" y="28.037" width="96.2486" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter19_d" x="18.7408" y="19.557" width="75.7643" height="9.82769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter20_d" x="26.5684" y="11.7293" width="64.0227" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter21_d" x="89.8424" y="19.557" width="43.8012" height="9.82769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter22_d" x="85.9286" y="11.7293" width="42.4966" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter23_d" x="125.067" y="11.7293" width="41.8443" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter24_d" x="164.858" y="11.7293" width="40.5396" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter25_d" x="203.996" y="11.7293" width="39.8873" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter26_d" x="243.787" y="11.7293" width="38.5827" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter27_d" x="282.926" y="11.7293" width="38.5827" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter28_d" x="322.064" y="11.7293" width="38.32" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter29_d" x="359.951" y="11.7293" width="39.5711" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter30_d" x="399.09" y="11.7293" width="40.2234" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter31_d" x="437.576" y="11.7293" width="41.5281" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter32_d" x="475.41" y="11.7293" width="42.8327" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter33_d" x="514.548" y="11.7293" width="42.8327" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter34_d" x="553.034" y="11.7293" width="44.1373" height="9.17539" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter35_d" x="527.594" y="4.55389" width="62.4019" height="8.52308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter36_d" x="490.413" y="4.55389" width="41.5281" height="8.52308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter37_d" x="453.231" y="4.55389" width="40.2234" height="8.52308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter38_d" x="415.397" y="4.55389" width="39.5711" height="8.52308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter39_d" x="378.216" y="4.55389" width="38.2665" height="8.52308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter40_d" x="340.382" y="4.55389" width="38.2665" height="8.52308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter41_d" x="302.548" y="4.55389" width="37.2246" height="8.52308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter42_d" x="264.062" y="4.55389" width="37.8769" height="8.52308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter43_d" x="225.576" y="4.55389" width="38.5292" height="8.52308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter44_d" x="187.09" y="4.55389" width="39.1816" height="8.52308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter45_d" x="149.256" y="4.55389" width="40.4862" height="8.52308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter46_d" x="110.77" y="4.55389" width="40.4862" height="8.52308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter47_d" x="72.2832" y="4.55389" width="41.7908" height="8.52308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter48_d" x="33.7974" y="4.55389" width="42.4431" height="8.52308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter49_d" x="40.3206" y="1.29236" width="56.7939" height="4.60923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter50_d" x="97.0714" y="1.29236" width="38.5292" height="4.60923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter51_d" x="134.253" y="1.29236" width="37.8769" height="4.60923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter52_d" x="171.434" y="1.29236" width="37.2246" height="4.60923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter53_d" x="208.616" y="1.29236" width="37.2246" height="4.60923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter54_d" x="247.102" y="1.29236" width="36.5723" height="4.60923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter55_d" x="284.283" y="1.29236" width="37.2246" height="4.60923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter56_d" x="321.465" y="1.29236" width="36.5723" height="4.60923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter57_d" x="357.994" y="1.29236" width="37.2246" height="4.60923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter58_d" x="395.828" y="1.29236" width="37.8769" height="4.60923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter59_d" x="433.01" y="1.29236" width="37.8769" height="4.60923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter60_d" x="469.539" y="1.29236" width="38.5292" height="4.60923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter61_d" x="506.72" y="1.29236" width="38.5292" height="4.60923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter62_d" x="544.554" y="1.29236" width="39.1816" height="4.60923" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter63_d" x="129.633" y="19.557" width="43.8012" height="9.82769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter64_d" x="170.728" y="19.557" width="41.8443" height="9.82769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter65_d" x="211.172" y="19.557" width="40.5396" height="9.82769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter66_d" x="251.615" y="19.557" width="39.8873" height="9.82769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter67_d" x="292.057" y="19.557" width="39.6246" height="9.82769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter68_d" x="331.902" y="19.557" width="39.5711" height="9.82769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter69_d" x="371.693" y="19.557" width="40.8758" height="9.82769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter70_d" x="410.831" y="19.557" width="42.8327" height="9.82769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter71_d" x="450.622" y="19.557" width="42.8327" height="9.82769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter72_d" x="489.76" y="19.557" width="44.1373" height="9.82769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter73_d" x="529.552" y="19.557" width="75.0585" height="9.82769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter74_d" x="3.13867" y="35.8647" width="89.9967" height="10.48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter75_d" x="88.5913" y="35.8647" width="45.7046" height="10.48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter id="filter76_d" x="130.991" y="35.8647" width="54.8369" height="10.48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
              </defs>
            </svg>
            <svg width="284" height="7" viewBox="0 0 284 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.img_block_trackpad}>
              <g filter="url(#filter0_i)">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.1755 0.301636H269.576L283.274 38.7878H0.824707L15.1755 0.301636Z" fill="#F2F2F2" />
              </g>
              <defs>
                <filter id="filter0_i" x="0.824707" y="0.301636" width="282.449" height="39.4862" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.108441 0" />
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </Container>
    </section>

  );
};


export default ColoborationSection;
