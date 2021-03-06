import * as React from "react"
import cx from "classnames"

function SvgTwitterIcon({ title, titleId, ...props }) {

  const colors = Array.from(props.fill.split('.'))
  // console.log(colors)

  return (
    <svg
      width={48}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      className={cx(`${colors[0] === 'green' ? `fill-green hover:fill-blueGray` : `fill-${colors[0]} hover:fill-gray`}  dark:fill-${colors[1]} dark:hover:fill-white scale-100 xl:scale-125 hover:scale-125 xl:hover:scale-150 rotate-0 hover:rotate-6 transition duration-300`)}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M48 9.772a20.614 20.614 0 01-4.934 5.087c.02.284.03.71.03 1.279 0 2.64-.385 5.274-1.157 7.903-.772 2.63-1.944 5.153-3.518 7.569a29.754 29.754 0 01-5.619 6.411c-2.173 1.858-4.792 3.34-7.858 4.447-3.066 1.106-6.345 1.66-9.837 1.66-5.503 0-10.538-1.472-15.107-4.417.71.082 1.503.122 2.376.122 4.568 0 8.64-1.4 12.213-4.203-2.132-.04-4.04-.695-5.726-1.964-1.685-1.27-2.843-2.889-3.472-4.858.67.101 1.29.152 1.858.152.873 0 1.736-.111 2.589-.335-2.275-.467-4.158-1.599-5.65-3.396-1.493-1.797-2.239-3.883-2.239-6.259v-.121a9.76 9.76 0 004.447 1.248 9.826 9.826 0 01-3.198-3.502 9.586 9.586 0 01-1.188-4.69c0-1.787.447-3.442 1.34-4.965 2.457 3.025 5.447 5.446 8.97 7.264 3.523 1.817 7.294 2.827 11.314 3.03a10.93 10.93 0 01-.243-2.254c0-2.72.96-5.04 2.878-6.959 1.919-1.919 4.239-2.878 6.96-2.878 2.842 0 5.238 1.035 7.187 3.106a19.29 19.29 0 006.244-2.375c-.751 2.335-2.193 4.142-4.325 5.421 1.888-.203 3.777-.71 5.665-1.523z"
        fill=""
      />
    </svg>
  )
}

export default SvgTwitterIcon
