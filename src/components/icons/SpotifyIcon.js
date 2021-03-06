import * as React from "react"
import cx from "classnames"

function SvgSpotifyIcon({ title, titleId, ...props }) {

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
        d="M40.969 7.031C36.28 2.344 30.625 0 24 0 17.375 0 11.719 2.344 7.031 7.031 2.344 11.72 0 17.375 0 24c0 6.625 2.344 12.281 7.031 16.969C11.72 45.656 17.375 48 24 48c6.625 0 12.281-2.344 16.969-7.031C45.656 36.28 48 30.625 48 24c0-6.625-2.344-12.281-7.031-16.969zm-5.907 31.032c-.312.562-.78.843-1.406.843a1.86 1.86 0 01-.843-.187c-3.876-2.188-8.063-3.282-12.563-3.282-2.688 0-5.281.407-7.781 1.22a1.63 1.63 0 01-1.266-.141 1.567 1.567 0 01-.797-.985c-.125-.437-.078-1 .14-1.687.22-.688.548-1.125.985-1.313a29.176 29.176 0 018.719-1.312c5.063 0 9.781 1.218 14.156 3.656.438.25.719.75.844 1.5s.063 1.313-.188 1.688zm3.094-9c-.625 1.125-1.187 1.687-1.687 1.687-.375 0-.688-.063-.938-.188-4.75-2.5-9.843-3.75-15.281-3.75-3 0-5.938.407-8.813 1.22-.5.124-.984.046-1.453-.235-.468-.281-.765-.672-.89-1.172-.125-.563-.047-1.172.234-1.828.281-.656.64-1.047 1.078-1.172a37.708 37.708 0 019.844-1.313c6.063 0 11.75 1.375 17.063 4.125.5.25.828.625.984 1.125.156.5.11 1-.14 1.5zm3.188-8.72c-.438.938-1.094 1.407-1.969 1.407-.313 0-.625-.063-.938-.188-5.687-2.875-11.75-4.312-18.187-4.312a39.69 39.69 0 00-9.844 1.219c-.625.187-1.187.125-1.687-.188-.5-.312-.828-.765-.985-1.36-.156-.593-.078-1.187.235-1.78.312-.594.75-.985 1.312-1.172a45.812 45.812 0 0110.969-1.313c7.125 0 13.844 1.594 20.156 4.781.563.25.938.657 1.125 1.22.188.562.125 1.124-.187 1.687z"
        fill=""
      />
    </svg>
  )
}

export default SvgSpotifyIcon
