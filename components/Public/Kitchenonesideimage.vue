<template>
  <div class="md:ml-[95px]">
    <div class="slide-image maxcoach-image">
      <svg
        class="image-frame"
        width="470px"
        height="491px"
        viewBox="0 0 470 491"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          stroke="#BAD2DE"
          stroke-width="2"
          fill="none"
          d="M386.030035,488.81143 C373.595816,488.437799 363.766055,487.34952 355.221231,486.40405 C347.412451,485.540022 340.668294,484.796172 333.99778,484.810981 C305.201413,484.874911 278.759269,486.081653 254.985173,487.166863 C231.658467,488.231651 210.90449,489.179931 193.020614,488.811191 C131.114472,487.534776 94.1406728,484.882428 82.115496,480.794963 L1,488.70867 L1,1.97325001 L52.9888668,9.82062614 C78.9518751,6.47880224 120.955768,4.81097882 179,4.81097882 C187.259705,4.81097882 195.43365,4.7949173 203.494372,4.77907764 C258.976038,4.6700538 309.088322,4.56626245 344.855201,9.80043989 C355.108391,11.3009068 367.189568,9.09377152 381.305656,6.48659928 C390.646953,4.76130753 400.889323,2.86849373 412.094354,1.80651754 C423.342547,0.740450573 442.31123,0.731456338 469.000012,1.77241485 L469.005761,488.82159 C428.358877,489.255382 400.700297,489.252251 386.030035,488.81143 Z"
        ></path>
      </svg>

      <svg
        class="image-pattern"
        width="470px"
        height="491px"
        viewBox="0 0 470 491"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <pattern
            id="pattern_b29a159"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image
              xlink:href="/images/ketchen/ketchen-modern-slide-image-1.jpg"
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMinYMin slice"
            ></image>
          </pattern>
        </defs>
        <g stroke-width="0" fill="url(#pattern_b29a159)">
          <path
            d="M0,0.810978821 L53,8.81097882 C79,5.47764549 121,3.81097882 179,3.81097882 C244.169633,3.81097882 304,2.81097882 345,8.81097882 C361.968282,11.2941421 383.984123,3.46623196 412,0.810978821 C423.408973,-0.270326274 442.742306,-0.270326274 470,0.810978821 L470,489.810979 C428.795464,490.255562 400.795464,490.255562 386,489.810979 C362.23049,489.096738 347.953625,485.780001 334,485.810979 C276.934768,485.937668 229.119825,490.555717 193,489.810979 C131.262618,488.538043 94.2626177,485.871376 82,481.810979 L0,489.810979 L0,0.810978821 Z"
          ></path>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.slide-image {
  flex-shrink: 0;
  max-width: 458px;
  position: relative;
  margin: 0 0 20px 20px;
}

.image-frame {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  color: #bad2de;
  transform: translate(-20px, 20px);
}

.image-pattern {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  z-index: 1;
}
</style>