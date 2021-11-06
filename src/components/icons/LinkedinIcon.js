import * as React from "react"
import cx from "classnames"

function SvgLinkedinIcon({ title, titleId, ...props }) {

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
        d="M44.571 0c.929 0 1.733.34 2.411 1.018C47.661 1.696 48 2.5 48 3.428v41.143c0 .929-.34 1.733-1.018 2.411-.678.679-1.482 1.018-2.41 1.018H3.428c-.929 0-1.733-.34-2.411-1.018C.339 46.304 0 45.5 0 44.572V3.428C0 2.5.34 1.696 1.018 1.018 1.696.339 2.5 0 3.428 0h41.143zM14.464 41.143h.107V18.214H7.393v22.929h7.071zM8.036 13.929c.785.785 1.75 1.178 2.893 1.178 1.142 0 2.125-.41 2.946-1.232.821-.821 1.232-1.786 1.232-2.893 0-1.107-.41-2.071-1.232-2.893-.821-.821-1.804-1.232-2.946-1.232-1.143 0-2.108.41-2.893 1.232-.786.822-1.179 1.786-1.179 2.893 0 1.107.393 2.09 1.179 2.947zm33.107 27.214V28.607c0-1.714-.107-3.178-.322-4.393a10.83 10.83 0 00-1.178-3.375c-.572-1.035-1.447-1.821-2.625-2.357-1.179-.536-2.625-.803-4.34-.803-1.642 0-3.053.357-4.232 1.071-1.178.714-2.017 1.571-2.517 2.571h-.108v-3.107h-6.857v22.929h7.179V29.786c0-1.786.286-3.215.857-4.286.571-1.071 1.679-1.607 3.321-1.607.858 0 1.572.178 2.143.536.572.357.947.892 1.125 1.607.179.714.304 1.339.375 1.875.072.535.107 1.232.107 2.089v11.143h7.072z"
        fill=""
      />
    </svg>
  )
}

export default SvgLinkedinIcon
