import * as React from "react"

function SvgUparrowIcon({ title, titleId, ...props }) {
  return (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      aria-labelledby={titleId}
      className='{fill} dark:fill-white hover:fill-green dark:hover:fill-green scale-100 xl:scale-125 hover:scale-125 xl:hover:scale-150 rotate-0 hover:rotate-6 transition duration-300'
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M11 2.206L4.765 9.734 4 9.089l7.521-9 7.479 9-.764.646L12 2.205v21.884h-1V2.206z" fill="" />
    </svg>
  )
}

export default SvgUparrowIcon
