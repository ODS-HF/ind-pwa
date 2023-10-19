import React from 'react'

const CircleProgress = (props) => {
  return (
      <svg
        width="98"
        height="98"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="13" y="13" width="40" height="40" rx="20" fill={props.color} />
       
        <circle
          cx="33"
          cy="33"
          r="29"
          transform="rotate(0 33 33)"
          stroke="#000"
          stroke-dasharray="182.2"
          stroke-dashoffset={0}
          stroke-width="2.8"
        />
        <circle
          cx="33"
          cy="33"
          r="29"
          transform="rotate(-90 33 33)"
          stroke={"#fff"}
          stroke-width="2.8"
          stroke-dasharray="182.2"
          stroke-dashoffset={
            props.percent <= 0
              ? 0
              : props.percent >= 1
              ? 182.2
              : 182.2 * props.percent
          }
        />
        <path
          d="M33 5C37.4187 5 41.7747 6.04577 45.7117 8.05182C49.6488 10.0579 53.0552 12.9672 55.6525 16.542C58.2497 20.1168 59.964 24.2555 60.6553 28.6198C61.3465 32.9841 60.995 37.4501 59.6296 41.6525C58.2641 45.8549 55.9235 49.6745 52.799 52.799C49.6745 55.9235 45.8549 58.2641 41.6525 59.6296C37.45 60.995 32.9841 61.3465 28.6198 60.6553C24.2555 59.964 20.1168 58.2497 16.542 55.6525"
          stroke={props.color}
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
       </svg>
  )
}

export default CircleProgress
