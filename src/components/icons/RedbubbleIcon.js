import * as React from "react"
import cx from "classnames"

function SvgRedbubbleIcon({ title, titleId, ...props }) {

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
      <g clipPath="url(#redbubble-icon_svg__clip0_2:2)">
        <path
          d="M24 0c-3.305 0-6.422.62-9.352 1.86-2.93 1.276-5.474 2.994-7.634 5.154-2.16 2.16-3.878 4.704-5.155 7.634C.62 17.578 0 20.695 0 24c0 3.305.62 6.422 1.86 9.352 1.276 2.93 2.994 5.474 5.154 7.634 2.16 2.16 4.704 3.878 7.634 5.155 2.93 1.277 6.047 1.915 9.352 1.915 3.305 0 6.422-.638 9.352-1.915 2.93-1.24 5.474-2.948 7.634-5.127 2.16-2.178 3.878-4.732 5.155-7.662C47.38 30.422 48 27.305 48 24c0-3.305-.62-6.422-1.86-9.352-1.276-2.93-2.995-5.474-5.154-7.634-2.16-2.16-4.704-3.878-7.634-5.155C30.422.62 27.305 0 24 0zm.394 32.507c-.075.038-.14.075-.197.113a.347.347 0 01-.197.056H10.648c-.15 0-.291-.066-.423-.197a.652.652 0 01-.197-.479V15.944c0-.188.066-.348.197-.48.132-.13.273-.196.423-.196H16.9c1.916 0 3.428.497 4.536 1.493 1.108.995 1.662 2.375 1.662 4.14 0 1.165-.273 2.179-.817 3.043a4.584 4.584 0 01-2.226 1.859l4.395 5.803a.609.609 0 01.169.45.535.535 0 01-.226.451zm8.902.17h-6.423a.564.564 0 01-.45-.198.711.711 0 01-.17-.479V15.944a.61.61 0 01.17-.451.61.61 0 01.45-.17h5.916c2.253 0 3.718.527 4.394 1.578.676 1.052 1.014 2.122 1.014 3.212a5.42 5.42 0 01-.253 1.718c-.17.507-.423.948-.76 1.324a3.748 3.748 0 011.886 1.634c.432.75.648 1.671.648 2.76 0 1.578-.573 2.827-1.718 3.747-1.145.92-2.714 1.38-4.704 1.38z"
          fill=""
        />
      </g>
      <defs>
        <clipPath id="redbubble-icon_svg__clip0_2:2">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgRedbubbleIcon
