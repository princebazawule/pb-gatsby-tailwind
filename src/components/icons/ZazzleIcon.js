import * as React from "react"
import cx from "classnames"

function SvgZazzleIcon({ title, titleId, ...props }) {

  const colors = Array.from(props.fill.split('.'))
  // console.log(colors)

  return (
    <svg
      width={48}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      className={cx(`${colors[0] === 'green' ? `fill-green hover:fill-blueGray` : `fill-${colors[0]} hover:fill-gray`} dark:fill-${colors[1]} dark:hover:fill-white scale-100 xl:scale-125 hover:scale-125 xl:hover:scale-150 rotate-0 hover:rotate-6 transition duration-300`)}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M0 24C0 10.764 10.764 0 24 0s24 10.764 24 24-10.764 24-24 24S0 37.236 0 24zm11.873 12.358c.266.355.842.31 1.33-.09 1.063-.842 2.083-1.506 4.031-1.506 3.677 0 6.603 2.304 10.99 2.304 3.367.043 5.494-1.241 6.691-2.97.931-1.329 1.373-3.146 1.373-4.564 0-1.994-1.152-3.324-3.146-3.324-1.906 0-2.746.974-2.837 2.393-.043.576-.043 1.685-.399 2.215-.355.576-1.02.754-1.816.754-2.084 0-4.565-1.683-7.31-1.683h-.4l17.857-14.445c.31-.224.444-.754.089-1.02l-2.748-3.236c-.488-.444-.843-.398-1.33 0-.931.754-1.817 1.508-3.722 1.508-3.104 0-6.425-1.95-10.767-1.95-3.1 0-4.831 1.153-6.026 2.394-1.152 1.24-1.949 3.235-1.949 5.14 0 1.95 1.152 3.19 3.058 3.19 1.728 0 2.748-.974 2.748-2.347 0-.797.043-1.507.398-2.038.31-.53 1.109-1.02 2.215-1.02 1.728 0 5.007 1.195 7.047 1.195h.132L9.302 31.615c-.355.267-.355.886-.132 1.195l2.703 3.548z"
        fill=""
      />
    </svg>
  )
}

export default SvgZazzleIcon
