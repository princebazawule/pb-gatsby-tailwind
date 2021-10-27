import * as React from "react"

function SvgMixcloudIcon({ title, titleId, ...props }) {
  return (
    <svg
      width={48}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      className='{fill} hover:fill-gray dark:hover:fill-white scale-100 xl:scale-125 hover:scale-125 xl:hover:scale-150 rotate-0 hover:rotate-6 transition duration-300'
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.53 26.1L48 30.79v-2.88L42.514 24 48 20.09v-2.879l-6.47 4.708h-.696l-6.451-4.708v2.88L39.849 24l-5.466 3.91v2.88l6.451-4.69h.696zm-22.921-.852H32.26v-2.496H18.61v2.496zm-5.125 5.61h2.49V17.142h-4.925L8.306 30.218h-.638L4.924 17.143H0v13.714h2.49v-11.44l-.444-1.635h.784l2.878 13.075h4.576l2.86-13.075h.803l-.463 1.635v11.44z"
        fill=""
      />
    </svg>
  )
}

export default SvgMixcloudIcon
