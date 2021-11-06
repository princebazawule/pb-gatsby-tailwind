import * as React from "react"
import cx from "classnames"

function SvgDribbbleIcon({ title, titleId, ...props }) {

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
        d="M44.74 11.972a23.312 23.312 0 00-3.766-4.946 23.314 23.314 0 00-4.946-3.766A23.172 23.172 0 0030.267.815 23.853 23.853 0 0024 0c-2.173 0-4.262.272-6.267.815a23.172 23.172 0 00-5.761 2.445 23.316 23.316 0 00-4.946 3.766 23.316 23.316 0 00-3.766 4.946 23.172 23.172 0 00-2.445 5.761A23.853 23.853 0 000 24c0 2.173.272 4.262.815 6.267a23.172 23.172 0 002.445 5.761 23.314 23.314 0 003.766 4.946 23.312 23.312 0 004.946 3.766 23.169 23.169 0 005.761 2.445c2.005.543 4.094.815 6.267.815s4.262-.272 6.267-.815a23.169 23.169 0 005.761-2.445 23.31 23.31 0 004.946-3.766 24.873 24.873 0 003.822-4.946 24.48 24.48 0 002.389-5.761C47.728 28.262 48 26.173 48 24s-.272-4.262-.815-6.267a23.169 23.169 0 00-2.445-5.761zM24 3.99c2.398 0 4.656.384 6.773 1.152 2.117.768 4.112 1.92 5.986 3.457-1.087 1.423-2.455 2.707-4.103 3.85-1.649 1.143-3.56 2.182-5.733 3.12a58.576 58.576 0 00-3.766-5.987 47.626 47.626 0 00-4.047-4.918c.824-.225 1.64-.393 2.445-.506.806-.112 1.62-.168 2.445-.168zM8.43 11.522a19.671 19.671 0 012.98-3.007 21.833 21.833 0 013.54-2.332 43.35 43.35 0 014.188 4.89 56.097 56.097 0 013.794 5.901 46.425 46.425 0 01-7.391 1.658c-2.53.356-5.124.534-7.785.534-.712 0-1.32-.01-1.826-.028a21.582 21.582 0 01-1.321-.084c.375-1.387.88-2.707 1.517-3.963a20.7 20.7 0 012.305-3.569zM3.99 24v-.225c0-.075.02-.168.057-.28v-.226-.224c.3 0 .684.009 1.152.028.468.018 1.021.028 1.658.028 1.574 0 3.129-.056 4.665-.169 1.574-.112 3.1-.28 4.581-.506a54.193 54.193 0 004.356-.843c1.424-.3 2.829-.674 4.215-1.124.225.45.45.927.675 1.433.225.506.468 1.04.73 1.602-1.61.337-3.222.937-4.833 1.799-1.611.862-3.26 1.967-4.946 3.316-1.649 1.349-3.082 2.745-4.3 4.187-1.218 1.443-2.201 2.914-2.95 4.412-1.687-1.91-2.952-3.962-3.795-6.154C4.412 28.862 3.991 26.51 3.991 24zM24 44.01c-2.286 0-4.44-.357-6.464-1.069-2.023-.712-3.953-1.76-5.789-3.147a25.76 25.76 0 012.782-4.187c1.106-1.368 2.408-2.689 3.907-3.963 1.461-1.311 2.941-2.37 4.44-3.176 1.499-.805 2.979-1.377 4.44-1.714a69.503 69.503 0 012.333 7.84 67.744 67.744 0 011.377 8.066c-1.162.45-2.323.787-3.485 1.012A18.586 18.586 0 0124 44.01zm16.974-9.5a19.808 19.808 0 01-6.182 6.296c-.3-2.51-.722-4.984-1.265-7.42a64.195 64.195 0 00-2.052-7.194c1.124-.075 2.183-.131 3.176-.169a75.34 75.34 0 015.845 0c1.068.038 2.183.094 3.345.169a18.577 18.577 0 01-.956 4.328 20.52 20.52 0 01-1.91 3.99zM37.995 22.54c-1.386 0-2.726.028-4.018.084-1.293.056-2.52.14-3.682.253-.3-.787-.59-1.508-.871-2.164l-.759-1.77c2.473-1.087 4.59-2.286 6.351-3.598 1.762-1.311 3.148-2.735 4.16-4.271 1.461 1.686 2.585 3.494 3.372 5.424.787 1.93 1.236 3.98 1.349 6.154a152.471 152.471 0 00-5.902-.112z"
        fill=""
      />
    </svg>
  )
}

export default SvgDribbbleIcon
